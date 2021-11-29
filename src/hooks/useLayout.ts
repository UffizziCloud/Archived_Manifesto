import { useState } from 'react';

import { UseLayoutState } from 'types/hooks/useLayout';
import { PageSideMenuItem } from 'types/resources/PageSideMenu';

export const useLayout = (): UseLayoutState => {
  const [pageMenuItems, setPageMenuItems] = useState<PageSideMenuItem[]>([]);

  const resetPageMenuItems = () => {
    setPageMenuItems([]);
  };

  return {
    pageMenuItems,
    setPageMenuItems,
    resetPageMenuItems,
  };
};
