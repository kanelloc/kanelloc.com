import React from 'react';
import { Flex, Heading, IconButton, useColorMode } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { AiOutlineCode } from 'react-icons/all';

const Header = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" justifyContent="space-between">
        <AiOutlineCode fontSize="20px" />
        <Heading as="h6" size="sm" paddingLeft="12px">
          kanelloc
        </Heading>
      </Flex>
      <IconButton aria-label="Search database" icon={<SettingsIcon />} onClick={toggleColorMode} />
    </Flex>
  );
};

export default Header;
