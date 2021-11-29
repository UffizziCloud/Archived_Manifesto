import { createContext, FunctionComponent } from 'react';

import { useLayout } from 'hooks/useLayout';

export const LayoutContext = createContext(null);

const LayoutProvider: FunctionComponent = ({ children }) => {
  const layoutState = useLayout();

  return <LayoutContext.Provider value={layoutState}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
