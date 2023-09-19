import { useState } from 'react';
import Form from './Form';
import ModalComponent from './Modal';
import { useDisclosure } from '@chakra-ui/react';

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hamburguerName, setHamburguerName] = useState<string>('');
  const [hamburguerDescription, setHamburguerDescription] = useState<string>('');

  return (
    <>
      <div id="form">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-1xl font-bold uppercase text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
                Create unique hamburguers!!
              </p>
            </div>
            <div>
              <div className="mt-10">
                <Form
                  onOpen={onOpen}
                  setHamburguerName={setHamburguerName}
                  setHamburguerDescription={setHamburguerDescription}
                />
                <ModalComponent
                  isOpen={isOpen}
                  onClose={onClose}
                  hamburguerName={hamburguerName}
                  hamburguerDescription={hamburguerDescription}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
