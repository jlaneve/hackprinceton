import React, { useState, useEffect } from 'react';

import { Box, Text, Center, HStack, Flex, Spacer } from '@chakra-ui/react';

import { Link, useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const AppContainer: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(location && location.pathname !== '/');

  useEffect(() => {
    if (location.pathname !== '/') {
      setShowNav(true);
    } else {
      setShowNav(false);
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100 || location.pathname !== '/') {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      });
    }
  }, [location]);

  return (
    <Box>
      {showNav && (
        <HStack
          w="100vw"
          bgColor="white"
          borderBottom="1px solid gray"
          px={3}
          py={1}
          top={0}
          left={0}
          position="fixed"
          zIndex={1}
        >
          <Box w={200} />

          <Spacer />

          <Link to="/">
            <Text>
              Right with <i>Sway</i>
            </Text>
          </Link>

          <Spacer />

          <Box float="right" w={200} textAlign="right">
            <Link to="/editor">
              <Text>Check out our Editor!</Text>
            </Link>
          </Box>
        </HStack>
      )}

      <Box py={10}>{children}</Box>

      <Box position="fixed" bottom={2} left={0} right={0}>
        <Center>
          <Flex justify="center" align="center" direction="column">
            <Text fontSize="sm">
              Made with ❤ by Julian LaNeve, Alex Preston, Isaac Rose, and Josh Hascall
            </Text>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
};

export default AppContainer;
