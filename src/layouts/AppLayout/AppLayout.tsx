import { FC, ReactNode } from 'react';

import LayoutProvider from 'providers/LayoutProvider';

import Layout from './components/Layout';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <LayoutProvider>
    <Layout>{children}</Layout>
  </LayoutProvider>
);

export default AppLayout;
