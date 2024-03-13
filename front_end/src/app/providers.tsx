// app/providers.tsx
'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ResponsiveColumns from '@/components/FullPageGrid/ResponsiveColumns';

export function Providers({ children }: { children: React.ReactNode }) {
  const x = ResponsiveColumns();

  const breakpoints = {
    base: '0px',
    small: x.sm.widthAndMarginAsString,
    //small: "380px", //Min width for 4 cols
    md: x.md.widthAndMarginAsString,
    //md: "816px", //Max width for 8 cols
    lg: '960px',
    //xl: "1212px", //Max width for 12 cols
    xl: x.xl.widthAndMarginAsString,
    '2xl': '1536px',
  };

  const theme = extendTheme({ breakpoints });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
