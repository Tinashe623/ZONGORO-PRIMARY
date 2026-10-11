import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { Box, VStack, Heading, Text, Button, HStack } from '@chakra-ui/react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Uncaught render error:', error, info.componentStack);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
        bg="cream.50"
      >
        <VStack spacing={6} textAlign="center" maxW="lg">
          <Box
            fontSize="5xl"
            fontWeight="800"
            bgGradient="linear(to-r, maroon.500, forest.500)"
            bgClip="text"
          >
            Oops
          </Box>
          <Heading size="lg" color="brand">
            Something went wrong
          </Heading>
          <Text color="gray.600" lineHeight="1.8">
            We hit an unexpected error while loading this page. Please try again,
            or head back to the home page.
          </Text>
          <HStack spacing={3} flexWrap="wrap" justify="center">
            <Button bg="maroon.500" color="onAccent" size="lg" px={8} onClick={this.handleReload} _hover={{ bg: 'maroon.600' }}>
              Reload Page
            </Button>
            <Button as="a" href="/" variant="outline" borderColor="maroon.300" color="brandStrong" size="lg" px={8}>
              Go Home
            </Button>
          </HStack>
        </VStack>
      </Box>
    );
  }
}

export default ErrorBoundary;
