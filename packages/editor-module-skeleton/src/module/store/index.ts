/*
 * 骨架模块 store
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2025-01-10 18:05:32
 */
import { Store } from '@giflite/editor-core';

export interface SkeletonModuleStore {
  /** 颜色模式 */
  colorScheme: 'light' | 'dark';
}

export function createStore(): SkeletonModuleStore {
  const state = Store.proxy<SkeletonModuleStore>({
    colorScheme: 'light',
  });

  // Consider combining all store to devtools
  if (process.env.NODE_ENV === 'development') {
    Store.devtools(state, {
      name: 'EditorModuleSkeleton',
    });
  }

  return state;
}
