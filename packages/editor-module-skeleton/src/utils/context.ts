import { createContext } from 'react';
import { CanvasModule, CanvasModuleStore } from '@giflite/editor-module-canvas';
import { SkeletonModule } from '../module/skeleton';
import { SkeletonModuleStore } from '../module/store';
import { DeepReadonly } from './types';

export const SkeletonModuleContext = createContext<
  Omit<SkeletonModule, 'store'>
>({} as Omit<SkeletonModule, 'store'>);

export const SkeletonModuleStoreContext = createContext<
  DeepReadonly<SkeletonModuleStore>
>({} as DeepReadonly<SkeletonModuleStore>);

export const CanvasModuleContext = createContext<Omit<CanvasModule, 'store'>>(
  {} as Omit<CanvasModule, 'store'>
);
export const CanvasModuleStoreContext = createContext<
  DeepReadonly<CanvasModuleStore>
>({} as CanvasModuleStore);
