/*
 * Layout 入口模块
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:45:07
 * @LastEditTime: 2025-01-03 15:12:06
 */
import { Store } from '@giflite/editor-core';
import { CanvasModule } from '@giflite/editor-module-canvas';
import React from 'react';

import { SkeletonModule } from '../module/skeleton';
import {
  CanvasModuleContext,
  CanvasModuleStoreContext,
  SkeletonModuleContext,
  SkeletonModuleStoreContext,
} from '../utils/context';
import Skeleton from './skeleton';

const { useSnapshot } = Store;

export interface LayoutProps {
  skeleton: SkeletonModule;
  canvas: CanvasModule;
}

export default function Layout(props: LayoutProps) {
  const skeletonStoreSnap = useSnapshot(props.skeleton.store);
  const canvasStoreSnap = useSnapshot(props.canvas.store);

  return (
    <SkeletonModuleContext.Provider value={props.skeleton}>
      <SkeletonModuleStoreContext.Provider value={skeletonStoreSnap}>
        <CanvasModuleContext.Provider value={props.canvas}>
          <CanvasModuleStoreContext.Provider value={canvasStoreSnap}>
            <Skeleton />
          </CanvasModuleStoreContext.Provider>
        </CanvasModuleContext.Provider>
      </SkeletonModuleStoreContext.Provider>
    </SkeletonModuleContext.Provider>
  );
}
