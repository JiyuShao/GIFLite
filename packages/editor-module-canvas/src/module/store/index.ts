/*
 * 画布模块 store
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2024-12-23 19:05:18
 */
import { Module, Store } from '@giflite/editor-core';

export interface CanvasModuleStore extends Module.EditorBaseModuleStore {}

export function createStore(): CanvasModuleStore {
  const state = Store.proxy<CanvasModuleStore>({});

  // Consider combining all store to devtools
  if (process.env.NODE_ENV === 'development') {
    Store.devtools(state, {
      name: 'EditorModuleCanvas',
    });
  }

  return state;
}
