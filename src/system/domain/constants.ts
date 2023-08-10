import { BoxItem } from './ui-models/combobox.model';

export const EMPTY_ARRAY = [];
export const EMPTY_OBJECT = {};

export const EMPTY_BOX: BoxItem = {
  text: '',
  value: '',
  imageUrl: '',
  name: ''
};

export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;
