/*
 * 骨架模块 apis
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2025-01-10 17:59:33
 */

import { SkeletonModule } from './skeleton';

export function createApis(skeletonModule: SkeletonModule) {
  return {
    toggleColorScheme() {
      const { colorScheme } = skeletonModule.store;
      skeletonModule.store.colorScheme =
        colorScheme === 'light' ? 'dark' : 'light';
    },
  };
}
