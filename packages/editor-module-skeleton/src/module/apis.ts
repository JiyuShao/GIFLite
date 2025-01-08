/*
 * 骨架模块 apis
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2024-12-23 19:08:43
 */

import { Module } from '@giflite/editor-core';

import { SkeletonModule } from './skeleton';

export interface SkeletonModuleApis extends Module.EditorBaseModuleApis {}

export function createApis(
  _skeletonModule: SkeletonModule
): SkeletonModuleApis {
  return {};
}
