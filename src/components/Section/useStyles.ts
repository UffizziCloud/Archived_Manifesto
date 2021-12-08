import { makeStyles } from '@material-ui/core';

import { layoutTopOffset } from 'helpers/layoutTopOffset';

const lastSectionBottomMargin = 100;

const useStyles = makeStyles(() => ({
  section: {
    paddingTop: layoutTopOffset,
    '&:last-child': {
      marginBottom: lastSectionBottomMargin,
      minHeight: `calc(100vh - ${lastSectionBottomMargin}px - ${layoutTopOffset}px)`,
    },
  },
  title: {
    paddingBottom: 20,
  },
}));

export default useStyles;
