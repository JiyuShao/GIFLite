/*
 * 画布模块 hooks
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2025-01-10 18:04:07
 */
import { Hook } from '@giflite/editor-core';

const { AsyncHook } = Hook;

export function createHooks() {
  return {
    editorScale: new AsyncHook(['arg1']),
  };
}
