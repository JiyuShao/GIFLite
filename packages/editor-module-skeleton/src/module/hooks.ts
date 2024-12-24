/*
 * 骨架模块 hooks
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2024-12-24 10:21:51
 */
import { Hook, Module } from '@giflite/editor-core';

const { AsyncHook } = Hook;

export interface SkeletonModuleHooks extends Module.EditorBaseModuleHooks {
  editorScale: Hook.AsyncHook<object, object>;
}

export function createHooks(): SkeletonModuleHooks {
  return {
    editorScale: new AsyncHook(['arg1']),
  };
}
