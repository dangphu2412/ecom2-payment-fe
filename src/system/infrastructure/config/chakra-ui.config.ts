import { extendTheme } from '@chakra-ui/react';

export const SYSTEM_COLORS = {
  bg: '#f8f9fa',
  success: '#1bc5bd',
  successLight: '#1bc5bd8a',
  primary: '#3699ff',
  primaryLight: '#3699ff8a',
  info: '#8950fc',
  white: '#ffffff',
  black: '#000000'
};

export const chakraTheme = extendTheme({
  styles: {
    global: () => ({
      body: SYSTEM_COLORS
    })
  }
});
