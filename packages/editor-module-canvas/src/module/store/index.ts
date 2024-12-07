/*
 * 画布模块 store
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2024-12-07 17:49:11
 */
import { CORE, UTILS } from '@giflite/editor-core';

export interface CanvasModuleStore extends CORE.Module.EditorBaseModuleStore {}

export function createStore(): CanvasModuleStore {
  const state = UTILS.Store.proxy<CanvasModuleStore>({});

  // Consider combining all store to devtools
  if (process.env.NODE_ENV === 'development') {
    UTILS.Store.devtools(state, {
      name: 'EditorModuleCanvas',
    });
  }

  return state;
}
