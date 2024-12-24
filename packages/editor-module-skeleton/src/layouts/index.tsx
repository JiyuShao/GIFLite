/*
 * Layout 入口模块
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:45:07
 * @LastEditTime: 2024-12-24 10:23:44
 */
import React from 'react';
import { Store } from '@giflite/editor-core';
import { CanvasModule } from '@giflite/editor-module-canvas';
import { SkeletonModule } from '../module/skeleton';
import {
  SkeletonModuleContext,
  SkeletonModuleStoreContext,
  CanvasModuleContext,
  CanvasModuleStoreContext,
} from '../utils/context';
import Canvas from './canvas';
// import App from './app';

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
            {/* <App /> */}
            skeleton
            <Canvas />
          </CanvasModuleStoreContext.Provider>
        </CanvasModuleContext.Provider>
      </SkeletonModuleStoreContext.Provider>
    </SkeletonModuleContext.Provider>
  );
}