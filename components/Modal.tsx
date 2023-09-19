import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  hamburguerName: string;
  hamburguerDescription: string;
}

export default function ModalComponent({
  isOpen,
  onClose,
  hamburguerName,
  hamburguerDescription,
}: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Your personalized hamburguer is...</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{hamburguerName}</ModalBody>
        <ModalBody>{hamburguerDescription}</ModalBody>
        <ModalFooter>
          <Button colorScheme="orange" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
