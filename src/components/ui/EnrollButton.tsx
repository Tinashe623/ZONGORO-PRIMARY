import { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  VStack,
} from '@chakra-ui/react';
import type { ButtonProps } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { MANAGEMENT_ENROLL_URL } from '../../config';

interface EnrollButtonProps extends ButtonProps {
  modalTitle?: string;
  modalBody?: React.ReactNode;
}

const EnrollButton = ({
  modalTitle,
  modalBody,
  children,
  ...buttonProps
}: EnrollButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} {...buttonProps}>
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <ModalContent borderRadius="3xl" overflow="hidden" mx={4}>
          <ModalCloseButton color="onAccent" _hover={{ bg: 'whiteAlpha.300' }} />
          <ModalHeader bg="maroon.500" color="onAccent" fontWeight="700" pr={12} pb={4}>
            {modalTitle ?? 'Apply for Admission'}
          </ModalHeader>
          <ModalBody pt={6}>
            <VStack align="start" spacing={4}>
              <Text color="gray.700" lineHeight="1.8" fontSize={{ base: 'sm', md: 'md' }}>
                {modalBody ??
                  "You're about to leave this website to open the school's secure application portal. You can complete the form there in a few minutes."}
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter pt={4}>
            <Button variant="ghost" color="gray.600" mr={3} onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              as="a"
              href={MANAGEMENT_ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              bgGradient="linear(to-r, maroon.500, maroon.600)"
              color="onAccent"
              fontWeight="600"
              rightIcon={<ExternalLinkIcon />}
              onClick={() => setIsOpen(false)}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(130, 0, 0, 0.3)',
              }}
              transition="all 0.2s ease"
            >
              Continue to Application
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EnrollButton;