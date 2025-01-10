/*
 * 画布模块 store
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2025-01-10 18:04:40
 */
import { Store } from '@giflite/editor-core';

export interface CanvasModuleStore {}

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
