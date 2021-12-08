import { Link, Typography } from '@material-ui/core';
import { FC, useEffect } from 'react';

import externalLinks from 'routes/externalLinks';

import { useLayoutContext } from 'hooks/useLayoutContext';

import Section from 'components/Section';

import useStyles from './useStyles';

const LessonsLearned: FC = () => {
  const classes = useStyles();
  const { setPageMenuItems, resetPageMenuItems } = useLayoutContext();

  useEffect(() => {
    setPageMenuItems([
      { name: 'Lessons Learned', path: 'header' },
      { name: 'Share your lessons learned', path: 'how-to-add' },
      // { name: 'TITLE', path: 'UNIQUE_PATH' }, // copy and past this example below, uncomment, replace UNIQUE_PATH and TITLE
    ]);
    return resetPageMenuItems;
  }, []);

  return (
    <>
      <Section path="header" title="Lessons Learned">
        <Typography>
          Learn from our community about best practice and lessons learned while implementing continuous previews
          methodology into their organizations.
        </Typography>
      </Section>

      <Section path="how-to-add" title="Share your lessons learned">
        <Typography>
          Submisisons are welcome! Share your lessons learned to help others implement continuous previews.
        </Typography>
        <Link
          className={classes.link}
          href={externalLinks.uffizziGitHubManifesto}
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit your lessons learned
        </Link>
      </Section>

      {/* <Section path="UNIQUE_PATH" title="TITLE">
        copy and past this examaple below, replace UNIQUE_PATH , TITLE, add your content into the Section tag
      </Section> */}
    </>
  );
};

export default LessonsLearned;
