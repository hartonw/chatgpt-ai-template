'use client';
// chakra imports
import {
  Flex,
} from '@chakra-ui/react';
//   Custom components

import Brand from '@/components/sidebar/components/Brand';
import { PropsWithChildren } from 'react';
import { IRoute } from '@/types/navigation';


// FUNCTIONS

interface SidebarContent extends PropsWithChildren {
  routes: IRoute[];
  [x: string]: any;
}

function SidebarContent(props: SidebarContent) {
  return (
    <Flex
      direction="column"
      height="100%"
      pt="20px"
      pb="26px"
      borderRadius="30px"
      maxW="285px"
      px="20px"
    >
      <Brand />
    </Flex>
  );
}

export default SidebarContent;
