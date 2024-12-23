'use client';
// Chakra Imports
import {
  Button,
  Flex,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import avatar4 from '/public/img/avatars/avatar4.png';
import { FiLogOut } from 'react-icons/fi';
import { NextAvatar } from '@/components/image/Avatar';


export default function HeaderLinks() {
  const { colorMode, toggleColorMode } = useColorMode();
  // Chakra Color Mode
  const navbarIcon = useColorModeValue('gray.500', 'white');
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
  const shadowPillBar = useColorModeValue(
    '4px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'none',
  );

  const handleNavigate = (newPath: string) => {
    const { protocol, hostname, port } = window.location; // Get current URL parts
    const domain = `${protocol}//${hostname}${port ? `:${port}` : ''}`; // Reconstruct domain
    window.location.href = `${domain}/${newPath}`; // Navigate to the new path
};

  return (
    <Flex
      mt="8px"
      justifyContent="center"
      alignItems="center"
      boxShadow={shadowPillBar}
      borderRadius="30px"
      p="14px"
    >
      <NextAvatar h="34px" w="34px" src={avatar4} me="10px" />
      <Text color={textColor} fontSize="xs" fontWeight="600" me="10px">
        Adela Parkson
      </Text>
      <Button
        variant="no-hover"
        bg="transparent"
        p="0px"
        minW="unset"
        minH="unset"
        h="18px"
        w="max-content"
        onClick={toggleColorMode}
      >
        <Icon
          me="10px"
          h="18px"
          w="18px"
          color={navbarIcon}
          as={colorMode === 'light' ? IoMdMoon : IoMdSunny}
        />
      </Button>
      <Button
        variant="transparent"
        border="1px solid"
        borderColor={borderColor}
        borderRadius="full"
        w="34px"
        h="34px"
        px="0px"
        minW="34px"
        justifyContent={'center'}
        alignItems="center"
        onClick={()=>handleNavigate("logout")}
      >
        <Icon as={FiLogOut} width="16px" height="16px" color="inherit" />
      </Button>
    </Flex>
  );
}
