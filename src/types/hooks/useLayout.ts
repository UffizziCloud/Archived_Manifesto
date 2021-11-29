import { Dispatch, SetStateAction } from 'react';

import { PageSideMenuItem } from 'types/resources/PageSideMenu';

export type UseLayoutState = {
  pageMenuItems: PageSideMenuItem[];
  resetPageMenuItems: () => void;
  setPageMenuItems: Dispatch<SetStateAction<PageSideMenuItem[]>>;
};
