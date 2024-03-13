export default function ResponsiveColumns() {
  const numberOfColumns = [4, 8, 12];
  const numberOfRows = [16, 9, 11];
  const squareBlockHeight = 75;
  const gapBetweenBlocks = [8, 12, 12];

  function calculateWidthPlusMargin(i: number) {
    return (
      numberOfColumns[i] * squareBlockHeight +
      (numberOfColumns[i] + 1) * gapBetweenBlocks[i]
    );
  }

  function calculateWidth(i: number) {
    return (
      numberOfColumns[i] * squareBlockHeight +
      (numberOfColumns[i] - 1) * gapBetweenBlocks[2]
    );
  }

  function calculateTotalHeight(i: number) {
    const heightOfBlocks = numberOfRows[i] * squareBlockHeight;
    const gapHeight = numberOfRows[i] * gapBetweenBlocks[i];
    return heightOfBlocks + gapHeight;
  }
  /**
   * For each size we need to return
   * width
   * widthAndMargin //used for determining breakpoints at the app level
   * number of columns
   * minChildWidth
   */

  return {
    sm: {
      numberOfRows: numberOfRows[0],
      numberOfColumns: numberOfColumns[0],
      marginGapsAsString: gapBetweenBlocks[0] + 'px',
      widthAndMarginAsString: calculateWidthPlusMargin(0) + 'px',
      totalWidthAsString: calculateWidth(0) + 'px',
      totalHeightAsString: calculateTotalHeight(0) + 'px',
    },
    md: {
      numberOfRows: numberOfRows[1],
      numberOfColumns: numberOfColumns[1],
      marginGapsAsString: gapBetweenBlocks[1] + 'px',
      widthAndMarginAsString: calculateWidthPlusMargin(1) + 'px',
      totalWidthAsString: calculateWidth(1) + 'px',
      totalHeightAsString: calculateTotalHeight(1) + 'px',
    },
    xl: {
      numberOfRows: numberOfRows[2],
      numberOfColumns: numberOfColumns[2],
      marginGapsAsString: gapBetweenBlocks[2] + 'px',
      widthAndMarginAsString: calculateWidthPlusMargin(2) + 'px',
      totalWidthAsString: calculateWidth(2) + 'px',
      totalHeightAsString: calculateTotalHeight(2) + 'px',
    },
    minChildTotalWidthAsString: squareBlockHeight + 'px',
    numberOfColumns: numberOfColumns, //These are arrays!
    numberOfRows: numberOfRows, // {sm/base: numCol[0], md:numCol[1], xl:numCol[2] }
  };
}
