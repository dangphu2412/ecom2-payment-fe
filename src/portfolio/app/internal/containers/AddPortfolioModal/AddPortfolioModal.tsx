import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure
} from '@chakra-ui/react';
import { FC, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddPortfolioModalModel } from '../../app-models/portfolio.model';
import { object, string } from 'yup';
import { useCreatePortfolioMutation } from '../../useCreatePortfolioMutation';
import { useNotify } from '../../../../../system/app/internal/useNotify';
import { useQueryClient } from 'react-query';
import { QUERY_MY_PORTFOLIOS_KEY } from '../../useQueryMyPortfolios';

type ModalProps = {
  triggerButton?: FC<{
    onClick?: () => void;
  }>;
};

const validateSchema = object().shape({
  name: string().required('Please input name of portfolio'),
  description: string().optional()
});

export function AddPortfolioModal({
  triggerButton: TriggerButton
}: ModalProps): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const notify = useNotify();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AddPortfolioModalModel>({
    resolver: yupResolver(validateSchema)
  });
  const { mutateCreatePortfolio } = useCreatePortfolioMutation();
  const queryClient = useQueryClient();

  function resolveSubmitResult(data: AddPortfolioModalModel) {
    mutateCreatePortfolio(data, {
      onSuccess: () => {
        notify({
          title: 'Create portfolio success'
        });
        onClose();
        queryClient.invalidateQueries(QUERY_MY_PORTFOLIOS_KEY);
      }
    });
  }

  return (
    <>
      {TriggerButton ? (
        <TriggerButton onClick={onOpen} />
      ) : (
        <div onClick={onOpen}>
          <FontAwesomeIcon icon={faPlus} />
          <span className="ml-2">Add Portfolio</span>
        </div>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Portfolio</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="space-y-4">
            <FormControl isRequired isInvalid={!!errors.name}>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder={'Start create new portfolio ...'}
                {...register('name')}
              />

              {errors.name && (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.description}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder={'Start create new portfolio ...'}
                {...register('description')}
              />

              {errors.description && (
                <FormErrorMessage>
                  {errors.description.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="ghost" onClick={handleSubmit(resolveSubmitResult)}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
