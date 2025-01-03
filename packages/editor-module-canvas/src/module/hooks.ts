/*
 * 画布模块 hooks
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2024-12-23 19:05:02
 */
import { Hook, Module } from '@giflite/editor-core';

const { AsyncHook } = Hook;

export interface CanvasModuleHooks extends Module.EditorBaseModuleHooks {
  editorScale: Hook.AsyncHook<object, object>;
}

export function createHooks(): CanvasModuleHooks {
  return {
    editorScale: new AsyncHook(['arg1']),
  };
}
