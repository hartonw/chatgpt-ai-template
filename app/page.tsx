'use client';
/*eslint-disable*/
import AnswerBox, {AnswerBoxProps} from '@/components/AnswerBox';
import {
  Button,
  Flex,
  Img,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Bg from '../public/img/chat/bg-image.png';

export default function Chat() {
  // Input States
  const [inputCode, setInputCode] = useState<string>('');
  // Response message
  // Loading state
  const [loading, setLoading] = useState<boolean>(false);
  // All the answer box state
  const [answerBoxes, setAnswerBoxes] = useState<AnswerBoxProps[]>([]);

  // API Key
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const inputColor = useColorModeValue('navy.700', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const gray = useColorModeValue('gray.500', 'white');
  const textColor = useColorModeValue('navy.700', 'white');
  const placeholderColor = useColorModeValue(
    { color: 'gray.500' },
    { color: 'whiteAlpha.600' },
  );

  // Handle when user hit enter
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleTranslate();
    }
  };

  const handleTranslate = async () => {
    setLoading(true);
    const controller = new AbortController();

    // -------------- Fetch --------------
    const response = await fetch('./api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      signal: controller.signal,
      body: inputCode,
    });

    if (!response.ok) {
      setLoading(false);
      if (response) {
        alert(
          'Something went wrong went fetching from the API. Make sure to use a valid API key.',
        );
      }
      return;
    }

    const responseBody = await response.json();
    const answer = responseBody.answer;
    const sources = responseBody.sources;

    if (!answer) {
      setLoading(false);
      alert('Something went wrong');
      return;
    }
    setAnswerBoxes((prevBoxes) => [
      ...prevBoxes,
      {
        output: answer,
        sources: sources,
        input: inputCode,
        brandColor: brandColor,
        borderColor: borderColor,
        textColor: textColor,
        gray: gray,
      },
    ]);
    
    setLoading(false);
    setInputCode('');
  };
  const handleChange = (Event: any) => {
    setInputCode(Event.target.value);
  };

  return (
    <Flex
      w="100%"
      pt={{ base: '70px', md: '0px' }}
      direction="column"
      position="relative"
    >
      <Img
        src={Bg.src}
        style={{ filter: 'hue-rotate(-30deg)' }}
        position={'absolute'}
        w="350px"
        left="50%"
        top="50%"
        transform={'translate(-50%, -50%)'}
      />
      <Flex
        direction="column"
        mx="auto"
        w={{ base: '100%', md: '100%', xl: '100%' }}
        minH={{ base: '75vh', '2xl': '85vh' }}
        maxW="1000px"
      >
        {/* Nav Box */}
        {answerBoxes.map((box: AnswerBoxProps, index:number) => (
          <AnswerBox
            key={index}
            output={box.output}
            sources={box.sources}
            input={box.input}
            borderColor={box.borderColor}
            brandColor={box.brandColor}
            textColor={box.textColor}
            gray={box.gray}
          />
        ))}
        {/* Chat Input */}
        <Flex
          ms={{ base: '0px', xl: '60px' }}
          mt="20px"
          justifySelf={'flex-end'}
        >
          <Textarea
            value={inputCode} // Bind the input value to the state
            onChange={handleChange}
            onKeyDown={handleKeyDown} // Listen for Enter key press
            minH="10vh"
            h="100%"
            border="1px solid"
            borderColor={borderColor}
            borderRadius="45px"
            me="10px"
            fontSize="sm"
            fontWeight="500"
            _focus={{ borderColor: 'none' }}
            color={inputColor}
            _placeholder={placeholderColor}
            placeholder="Type your message here..."
          />
          <Button
            variant="primary"
            py="20px"
            px="16px"
            fontSize="sm"
            borderRadius="45px"
            ms="auto"
            w={{ base: '160px', md: '210px' }}
            h="54px"
            onClick={handleTranslate}
            isLoading={loading ? true : false}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
