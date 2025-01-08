import { createContext } from 'react';

import { CanvasModule, CanvasType } from '../module/canvas';
import { CanvasModuleStore } from '../module/store';

export const CanvasModuleContext = createContext<Omit<CanvasModule, 'store'>>(
  {} as Omit<CanvasModule, 'store'>
);

export const CanvasModuleStoreContext = createContext<
  CanvasType.Utility.DeepReadonly<CanvasModuleStore>
>({} as CanvasType.Utility.DeepReadonly<CanvasModuleStore>);
