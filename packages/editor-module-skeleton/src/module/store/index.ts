/*
 * 骨架模块 store
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2024-12-24 10:22:07
 */
import { Module, Store } from '@giflite/editor-core';

export interface SkeletonModuleStore extends Module.EditorBaseModuleStore {}

export function createStore(): SkeletonModuleStore {
  const state = Store.proxy<SkeletonModuleStore>({});

  // Consider combining all store to devtools
  if (process.env.NODE_ENV === 'development') {
    Store.devtools(state, {
      name: 'EditorModuleSkeleton',
    });
  }

  return state;
}
