import { useContext } from 'react';

import { UseLayoutState } from 'types/hooks/useLayout';

import { LayoutContext } from 'providers/LayoutProvider/LayoutProvider';

export const useLayoutContext = (): UseLayoutState => useContext<UseLayoutState>(LayoutContext);
