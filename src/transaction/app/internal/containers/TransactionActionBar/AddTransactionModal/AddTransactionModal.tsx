import { ReactElement, useMemo } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useController, useForm } from 'react-hook-form';
import { AddTransactionModalModel } from '../../../app-models/transaction.model';
import { useCreateTransactionMutation } from '../../../useCreateTransactionMutation';
import { FullLoader } from '../../../../../../system/app/internal/ui/Loader/Full/FullLoader';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { Combobox } from '../../../../../../system/app/internal/ui/Combobox/Combobox';
import { CreateTransactionPayload } from '../../../../../domain/transaction.usecase';
import { useSearchAsset } from '../../../../../../assets/app/internal/useSearchAsset';
import { BoxItem } from '../../../../../../system/domain/ui-models/combobox.model';
import { useDebounce } from '../../../../../../system/app/internal/useDebounce';
import { EMPTY_BOX } from '../../../../../../system/domain/constants';
import { TransactionTypes } from '../../../../../domain/constant';
import { useSelector } from 'react-redux';
import { selectedPortfolioSelector } from '../../../../../../system/app/internal/system.store';

const validateSchema = object().shape({
  ticket: object({
    text: string().required(),
    value: string().required()
  }),
  operation: string().oneOf(
    Object.values(TransactionTypes),
    `Values must be selected one of ${Object.values(TransactionTypes)}`
  ),
  date: string().required('Please select date'),
  amount: string().required('Please input amount'),
  price: string().required('Please input price'),
  fee: string().optional().required('Please input fee')
});

const initValues: Partial<AddTransactionModalModel> = {
  ticket: EMPTY_BOX
};

export function AddTransactionModal(): ReactElement {
  const selectedPortfolio = useSelector(selectedPortfolioSelector);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AddTransactionModalModel>({
    resolver: yupResolver(validateSchema),
    defaultValues: initValues
  });
  const { field } = useController({
    name: 'ticket',
    control
  });

  const { mutateCreateTransaction, isLoading } = useCreateTransactionMutation();

  const debounced = useDebounce(field.value);
  const { assets } = useSearchAsset(debounced.text);
  const ticketItems: BoxItem[] = useMemo(() => {
    return assets.map(asset => ({
      text: asset.symbol,
      value: asset.symbol,
      name: asset.name,
      imageUrl: asset.image_url
    }));
  }, [assets]);

  function resolveSubmitResult(data: AddTransactionModalModel) {
    if (!selectedPortfolio?.id) {
      throw new Error('Missing selected portfolio');
    }

    const payload: CreateTransactionPayload = {
      asset: data.ticket.value,
      transaction_type: data.operation,
      quantity: parseFloat(data.amount),
      price: parseFloat(data.price),
      fee: parseFloat(data.fee),
      transaction_date: data.date,
      portfolio_id: selectedPortfolio.id
    };

    mutateCreateTransaction(payload, {
      onSuccess: onClose
    });
  }

  return (
    <>
      <FullLoader isLoading={isLoading} />

      <Button
        colorScheme="blue"
        variant="outline"
        className="space-x-2"
        onClick={onOpen}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add transaction</span>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="space-y-4">
            <FormControl isRequired isInvalid={!!errors.ticket}>
              <FormLabel>Ticker/Company</FormLabel>
              <Combobox
                placeholder="Start entering in the ticket or company name ..."
                items={ticketItems}
                {...field}
              />

              {errors.ticket && (
                <FormErrorMessage>{errors.ticket.message}</FormErrorMessage>
              )}
            </FormControl>

            <Grid templateColumns="repeat(2,1fr)" className="space-x-2">
              <GridItem>
                <FormControl isRequired isInvalid={!!errors.operation}>
                  <FormLabel>Operation</FormLabel>
                  <Select
                    {...register('operation')}
                    placeholder="Select option"
                  >
                    {Object.keys(TransactionTypes).map(key => {
                      const value =
                        TransactionTypes[key as keyof typeof TransactionTypes];

                      return (
                        <option key={key} value={value}>
                          {value}
                        </option>
                      );
                    })}
                  </Select>

                  {errors.operation && (
                    <FormErrorMessage>
                      {errors.operation.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isRequired isInvalid={!!errors.date}>
                  <FormLabel>Date</FormLabel>
                  <Input {...register('date')} type="date" />

                  {errors.date && (
                    <FormErrorMessage>{errors.date.message}</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(2,1fr)" className="space-x-2">
              <GridItem>
                <FormControl isRequired isInvalid={!!errors.amount}>
                  <FormLabel>Amount</FormLabel>
                  <Input {...register('amount')} type="number" />

                  {errors.amount && (
                    <FormErrorMessage>{errors.amount.message}</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isRequired isInvalid={!!errors.price}>
                  <FormLabel>Price</FormLabel>
                  <Input {...register('price')} type="number" />

                  {errors.price && (
                    <FormErrorMessage>{errors.price.message}</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>
            </Grid>

            <FormControl isInvalid={!!errors.fee}>
              <FormLabel>Fee</FormLabel>
              <Input {...register('fee')} type="number" />

              {errors.fee && (
                <FormErrorMessage>{errors.fee.message}</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
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
