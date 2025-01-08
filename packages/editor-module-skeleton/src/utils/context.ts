import {
  CanvasModule,
  CanvasModuleStore,
  CanvasType,
} from '@giflite/editor-module-canvas';
import { createContext } from 'react';

import { SkeletonModule } from '../module/skeleton';
import { SkeletonModuleStore } from '../module/store';

export const SkeletonModuleContext = createContext<
  Omit<SkeletonModule, 'store'>
>({} as Omit<SkeletonModule, 'store'>);

export const SkeletonModuleStoreContext = createContext<
  CanvasType.Utility.DeepReadonly<SkeletonModuleStore>
>({} as CanvasType.Utility.DeepReadonly<SkeletonModuleStore>);

export const CanvasModuleContext = createContext<Omit<CanvasModule, 'store'>>(
  {} as Omit<CanvasModule, 'store'>
);
export const CanvasModuleStoreContext = createContext<
  CanvasType.Utility.DeepReadonly<CanvasModuleStore>
>({} as CanvasModuleStore);
