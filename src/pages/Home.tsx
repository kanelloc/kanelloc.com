import React from 'react';
import { Button, Container, Flex, Heading, Link } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/all';

const Home = () => {
  const onPress = (): void => {
    window.location.href = 'mailto:babis.kane@gmail.com';
  };

  return (
    <Container maxWidth="1024px">
      <Flex alignItems="flex-start" justifyContent="center" flexDirection="column">
        <Heading>Hi ! 👋</Heading>
        <Flex flexDirection="row" alignItems="center">
          <Button marginY="24px" colorScheme="teal" onClick={onPress}>
            Say hello!
          </Button>
          <Link href="https://github.com/kanelloc" isExternal marginX="16px">
            <AiFillGithub size="32px" />
          </Link>
          <Link href="https://www.linkedin.com/in/charkanellopoulos/" isExternal>
            <AiFillLinkedin size="32px" />
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
