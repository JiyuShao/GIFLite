/*
 * Layout 入口模块
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:45:07
 * @LastEditTime: 2024-12-07 17:48:14
 */
import React from 'react';
import { UTILS } from '@giflite/editor-core';
import { CanvasModule } from '../module/canvas';
import {
  CanvasModuleContext,
  CanvasModuleStoreContext,
} from '../utils/context';
// import App from './app';

const {
  Store: { useSnapshot },
} = UTILS;

export interface LayoutProps {
  canvas: CanvasModule;
}

export default function Layout(props: LayoutProps) {
  const canvasStoreSnap = useSnapshot(props.canvas.store);
  return (
    <CanvasModuleContext.Provider value={props.canvas}>
      <CanvasModuleStoreContext.Provider value={canvasStoreSnap}>
        {/* <App /> */}
      </CanvasModuleStoreContext.Provider>
    </CanvasModuleContext.Provider>
  );
}
