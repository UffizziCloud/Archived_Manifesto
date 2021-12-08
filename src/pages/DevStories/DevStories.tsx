import { Link, Typography } from '@material-ui/core';
import { FC, useEffect } from 'react';

import externalLinks from 'routes/externalLinks';

import { useLayoutContext } from 'hooks/useLayoutContext';

import Section from 'components/Section';

import useStyles from './useStyles';

const DevStories: FC = () => {
  const classes = useStyles();
  const { setPageMenuItems, resetPageMenuItems } = useLayoutContext();

  useEffect(() => {
    setPageMenuItems([
      { name: 'Developer Stories', path: 'header' },
      { name: 'Submit your story', path: 'how-to-add' },
      // { name: 'TITLE', path: 'UNIQUE_PATH' }, // copy and past this example below, uncomment, replace UNIQUE_PATH and TITLE
    ]);
    return resetPageMenuItems;
  }, []);

  return (
    <>
      <Section path="header" title="Developer Stories">
        <Typography>See how teams in our community are implementing continuous previews.</Typography>
      </Section>

      <Section path="how-to-add" title="Submit your story">
        <Typography>Submisisons are welcome! Share your continuous previews story. </Typography>
        <Link
          className={classes.link}
          href={externalLinks.uffizziGitHubManifesto}
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit your story
        </Link>
      </Section>

      {/* <Section path="UNIQUE_PATH" title="TITLE">
        copy and past this examaple below, replace UNIQUE_PATH , TITLE, add your content into the Section tag
      </Section> */}
    </>
  );
};

export default DevStories;
