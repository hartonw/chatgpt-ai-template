import MessageBoxChat from '@/components/MessageBox';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { MdAutoAwesome, MdEdit, MdPerson } from 'react-icons/md';

export interface AnswerBoxProps {
  output: string;
  sources: string[];
  input: string;
  borderColor: any;
  brandColor: any;
  textColor: any;
  gray: any;
}

export default function AnswerBox(props: AnswerBoxProps) {
  const { output, sources, input, borderColor, brandColor, textColor, gray } = props;
  return (
    <Flex
      direction="column"
      w="100%"
      mx="auto"
      display={output ? 'flex' : 'none'}
      mb={'auto'}
    >
      <Flex w="100%" align={'center'} mb="10px">
        <Flex
          borderRadius="full"
          justify="center"
          align="center"
          bg={'transparent'}
          border="1px solid"
          borderColor={borderColor}
          me="20px"
          h="40px"
          minH="40px"
          minW="40px"
        >
          <Icon as={MdPerson} width="20px" height="20px" color={brandColor} />
        </Flex>
        <Flex
          p="22px"
          border="1px solid"
          borderColor={borderColor}
          borderRadius="14px"
          w="100%"
          zIndex={'2'}
        >
          <Text
            color={textColor}
            fontWeight="600"
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight={{ base: '24px', md: '26px' }}
            wordBreak="break-word" // Ensures long words break and wrap to the next line
            overflowWrap="break-word" // Allows words to wrap within the container
            whiteSpace="normal" // Ensures the text is not restricted to a single line
          >
            {input}
          </Text>
          <Icon
            cursor="pointer"
            as={MdEdit}
            ms="auto"
            width="20px"
            height="20px"
            color={gray}
          />
        </Flex>
      </Flex>
      <Flex w="100%">
        <Flex
          borderRadius="full"
          justify="center"
          align="center"
          bg={'linear-gradient(15.46deg, #63b3ed 26.3%, #2b6cb0 86.4%)'}
          me="20px"
          h="40px"
          minH="40px"
          minW="40px"
        >
          <Icon as={MdAutoAwesome} width="20px" height="20px" color="white" />
        </Flex>
        <MessageBoxChat output={output} sources={sources} />
      </Flex>
    </Flex>
  );
}
