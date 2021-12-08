import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { FC, useEffect } from 'react';

import cpImage from 'assets/cpInfographic.svg';

import { useLayoutContext } from 'hooks/useLayoutContext';

import Section from 'components/Section';

import useStyles from './useStyles';

const CPManifesto: FC = () => {
  const classes = useStyles();
  const { setPageMenuItems, resetPageMenuItems } = useLayoutContext();

  useEffect(() => {
    setPageMenuItems([
      { name: 'Overview', path: 'overview' },
      { name: 'The 11 Principles of CP', path: 'principles' },
      { name: 'Traditional QA vs. Continuous Previews', path: 'qa-vs-cp' },
      { name: 'Definition', path: 'definition' },
      { name: 'CP In Practice', path: 'practice' },
      { name: 'Software Delivery Pls improved by CP', path: 'software-delivery' },
      { name: 'Background', path: 'background' },
      { name: 'Who should read this', path: 'who-should-read' },
    ]);
    return resetPageMenuItems;
  }, []);

  return (
    <>
      <Section path="overview" title="Overview">
        <Typography>
          Over the past two decades since the Agile Manifesto was published, the concepts and technologies that support
          Continuous Integration, Continuous Delivery, Cloud Native development, Containerization, Microservices, and
          Container Orchestration have greatly improved the Agility with which software can be built, tested, and
          delivered These concepts and technologies have ushered in the now ubiquitous concept of DevOps and have helped
          break down the silos within the multi-disciplinary teams that must continuously collaborate to build great
          software.
          <br />
          <br />
          Despite these advances, twenty years after the advent of Agile our community still lacks a common lexicon,
          understanding, and capability for efficiently previewing in-progress development for full-stack applications.
          <br />
          <br />
          Over the past 2+ years we have listened to the challenges of team software development through interviews with
          over 150 Developers, DevOps, and Cross-functional team members across a variety of industries and at various
          levels of business maturity.
          <br />
          <br />
          These are our observations:
          <br />
          <br />
          -The benefits of Previewing are primarily confined to software teams that have the time, resources, and
          expertise to build and maintain their own internal preview capability - often referred to as an internal
          Platform as a Service.
          <br />
          -It&apos;s universally beneficial to bring QA/testing into the Development process, to catch issues early,
          iterate quickly, and to merge clean code into Develop or Main.
          <br />
          -Virtually all teams from can benefit from a Full-Stack Preview capability and industry defined best practices
          for Previewing i.e. Continuous Previews.
          <br />
          -For most teams a Preview Tool is on their wish list but there&apos;s no clear choices or guidelines provided
          by either the Open Source Community, the CNCF, or the industry as a whole.
          <br />
          -As a community we are not actively collaborating or innovating towards a well-defined Preview process and
          technical capability.
          <br />
          -The market is awash in open source and commercially available Continuous Integration, Continuous Delivery,
          and Deployment tools, but these tools, while useful, are fundamentally lacking for the task of Previewing and
          facilitating the requisite collaborative teamwork across cross-functional teams to produce quality working
          software
        </Typography>
      </Section>

      <Section path="principles" title="The 11 Principles of CP">
        <ol className={classes.list}>
          <li>Significantly Easier to Fix issues Pre-merge vice Post-merge</li>
          <li>Bring QA into the Develpment Process (CP = Continuous Collaboration between Devolopment and Product)</li>
          <li>Confirm Functionality Prior to Integration</li>
          <li>Isolated Feature Testing (Separation of Concerns) over batch testing</li>
          <li>Tight integration between Ticketing, Repositories, Infrastructure</li>
          <li>No additional burdens on the Development Team</li>
          <li>Limit Context Switching</li>
          <li>Reliance on Automation</li>
          <li>Reduce reliance on Critical Sinale Points of Failure (i.e. persistent QA environment)</li>
          <li>Empower Developers with Feature-level Test Environments</li>
          <li>Support for Full-stack (Front ends, Back Ends, Microservices, APls, backing services . . .)</li>
        </ol>
      </Section>

      <Section path="qa-vs-cp" title="Traditional QA vs. Continuous Previews">
        <TableContainer component={Paper}>
          <Table>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell align="center">
                  <b>Traditional QA</b>
                </TableCell>
                <TableCell align="center">
                  <b>Continuous Previews</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Testing begins post-integration</TableCell>
                <TableCell>Testing begins pre-integration</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Delayed feedback loop</TableCell>
                <TableCell>Continuous feedback loop</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Feature and integration testing are batched/coupled</TableCell>
                <TableCell>Feature and integration testing are isolated/decoupled</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Persistent QA/Test environment = single point of failure</TableCell>
                <TableCell>On-demand test environments (as many as needed)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Higher risk of “bricking QA”</TableCell>
                <TableCell>Lower risk of “bricking QA”</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>More context switching</TableCell>
                <TableCell>Limited context switching</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Section>

      <Section path="definition" title="Definition">
        <Typography>
          Continuous Preview(s) are an automation-enabled method by which in-progress development branches -known as
          topic branches -are continuously deployed in a dynamic production-like environment and are available for
          collaborative review and testing at a secure URL. By this method iterative feedback is accelerated and testing
          is conducted in a logical sequence where topic branch functionality testing is completed prior to integration
          testing and delivery (CP, then Cl / CD).
        </Typography>
      </Section>

      <Section path="practice" title="CP In Practice">
        <img className={classes.image} src={cpImage} alt="CP Infographic" />
      </Section>

      <Section path="software-delivery" title="Software Delivery Pls improved by CP">
        <Typography>
          <b>Leac/flime</b> - the time between when a task is created and the solution is delvered
          <br />
          <br />
          <b>Cycle Time</b> - how quickly an issue can be reviewed, feedback provided, and adjustments made.
          <br />
          <br />
          <b>Team Velocity</b> - the number of tasks completed over a given period of time
          <br />
          <br />
          <b>Code Stability</b> - how often topic branch integrations create unintended breakage
        </Typography>
      </Section>

      <Section path="background" title="Background">
        <Typography>
          The initial contributors to the CP Manifesto come from diverse backgrounds including being directly or
          indirectly involved in the design, development, deployment, and scaling of applications from Startups to the
          Fortune 500; leading Machine Learning Research Teams; and leading high performance Navy SEAL teams into
          combat.
          <br />
          <br />
          We seek to pioneer and promote better ways of developing software by leveraging technology and automation to
          push the bounds of Agile Software Development.
          <br />
          <br />
          We are advocating for organizations to adopt Continuous Previews as an Agile-supporting method to improve and
          expedite how they build and test software.
        </Typography>
      </Section>

      <Section path="who-should-read" title="Who should read this?">
        <Typography>
          The initial contributors to the CP Manifesto come from diverse backgrounds including being directly or
          indirectly involved in the design, development, deployment, and scaling of applications from Startups to the
          Fortune 500; leading Machine I earning Research Teams: and leading high nerformance Naw SEAl teams into
          comhat.
        </Typography>
      </Section>
    </>
  );
};

export default CPManifesto;
