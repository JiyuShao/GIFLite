import { createContext } from 'react';
import { CanvasModule } from '../module/canvas';
import { CanvasModuleStore } from '../module/store';
import { DeepReadonly } from './types';

export const CanvasModuleContext = createContext<Omit<CanvasModule, 'store'>>(
  {} as Omit<CanvasModule, 'store'>
);

export const CanvasModuleStoreContext = createContext<
  DeepReadonly<CanvasModuleStore>
>({} as DeepReadonly<CanvasModuleStore>);
