import React from 'react';
import ResponsiveColumns from './ResponsiveColumns';
import { SimpleGrid, Center } from '@chakra-ui/react';
import { ScaleFade } from '@chakra-ui/react';

const v = ResponsiveColumns();
export const numberOfRows = v.numberOfRows;
export const numberOfColumns = v.numberOfColumns;

export default function FullPageGrid({ children }) {
  return (
    <ScaleFade in={true} initialScale={0.9}>
      <Center
        height={{
          base: v.sm.totalHeightAsString,
          md: v.md.totalHeightAsString,
          xl: v.xl.totalHeightAsString,
        }}
      >
        <SimpleGrid
          fontFamily={'outfit'}
          templateColumns={{
            base: 'repeat(' + v.sm.numberOfColumns + ',1fr)',
            md: 'repeat(' + v.md.numberOfColumns + ',1fr)',
            xl: 'repeat(' + v.xl.numberOfColumns + ',1fr)',
          }}
          templateRows={{
            base: 'repeat(' + v.sm.numberOfRows + ',1fr)',
            md: 'repeat(' + v.md.numberOfRows + ',1fr)',
            xl: 'repeat(' + v.xl.numberOfRows + ',1fr)',
          }}
          width={{
            base: v.sm.totalWidthAsString,
            md: v.md.totalWidthAsString,
            xl: v.xl.totalWidthAsString,
          }}
          height={'100%'}
          spacing={{
            base: v.sm.marginGapsAsString,
            md: v.md.marginGapsAsString,
            xl: v.xl.marginGapsAsString,
          }}
          marginLeft={{
            base: '0px',
            sm: v.sm.marginGapsAsString,
            md: v.md.marginGapsAsString,
            xl: v.xl.marginGapsAsString,
          }} // (base: "0px") This helps prevent the cols from getting mushed
          marginRight={{
            base: '0px',
            sm: v.sm.marginGapsAsString,
            md: v.md.marginGapsAsString,
            xl: v.xl.marginGapsAsString,
          }}
          minChildWidth={v.minChildTotalWidthAsString}
        >
          {children}
        </SimpleGrid>
      </Center>
    </ScaleFade>
  );
}
