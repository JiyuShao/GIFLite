/*
 * Layout 入口模块
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:45:07
 * @LastEditTime: 2024-12-23 19:04:41
 */
import { Store } from '@giflite/editor-core';
import React from 'react';

import { CanvasModule } from '../module/canvas';
import {
  CanvasModuleContext,
  CanvasModuleStoreContext,
} from '../utils/context';
// import App from './app';

const { useSnapshot } = Store;

export interface LayoutProps {
  canvas: CanvasModule;
}

export default function Layout(props: LayoutProps) {
  const canvasStoreSnap = useSnapshot(props.canvas.store);
  return (
    <CanvasModuleContext.Provider value={props.canvas}>
      <CanvasModuleStoreContext.Provider value={canvasStoreSnap}>
        {/* <App /> */}
        canvas
      </CanvasModuleStoreContext.Provider>
    </CanvasModuleContext.Provider>
  );
}
