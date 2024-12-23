'use client';
// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';

import { HorizonLogo } from '@/components/icons/Icons';
import { HSeparator } from '@/components/separator/Separator';
import { Image } from '@/components/image/Image'
import logo from '/public/img/chat/horizontal-logo.png';

export function SidebarBrand() {
  //   Chakra color mode
  return (
    <Flex alignItems="center" flexDirection="column">
      <Image
            h="70px" 
            w="100%"
            src={logo}
            mb="20px"
        />
      <HSeparator mb="20px" w="284px" />
    </Flex>
  );
}

export default SidebarBrand;
