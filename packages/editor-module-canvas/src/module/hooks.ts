/*
 * 画布模块 hooks
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2024-12-07 17:41:04
 */
import { CORE, UTILS } from '@giflite/editor-core';

const { AsyncHook } = UTILS.Hook;

export interface CanvasModuleHooks extends CORE.Module.EditorBaseModuleHooks {
  editorScale: UTILS.Hook.AsyncHook<object, object>;
}

export function createHooks(): CanvasModuleHooks {
  return {
    editorScale: new AsyncHook(['arg1']),
  };
}
