import { ReactElement } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { AddFeeModalModel } from '../../../app-models/transaction.model';
import { useCreateFeeMutation } from '../../../useCreateFeeMutation';
import { FullLoader } from '../../../../../../system/app/internal/ui/Loader/Full/FullLoader';

export function AddFeeModal(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm<AddFeeModalModel>();
  const { mutateCreateFee, isLoading } = useCreateFeeMutation();

  function resolveSubmitResult(data: AddFeeModalModel) {
    mutateCreateFee(data, {
      onSuccess: onClose
    });
  }

  return (
    <>
      {isLoading && <FullLoader />}
      <Button
        colorScheme="purple"
        variant="outline"
        className="space-x-2"
        onClick={onOpen}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add fee</span>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Broker’s fee</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="space-y-4">
            <FormControl isRequired>
              <FormLabel>Date</FormLabel>
              <Input
                placeholder="Start entering in the ticker or company name.."
                {...register('date')}
                type="date"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Fee</FormLabel>
              <Input {...register('fee')} type="number" />
            </FormControl>

            <FormControl>
              <FormLabel>Note</FormLabel>
              <Textarea {...register('note')} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleSubmit(resolveSubmitResult)}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
