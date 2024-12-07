/*
 * 画布模块 apis
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2024-12-07 17:42:30
 */

import { CORE } from '@giflite/editor-core';
import { CanvasModule } from './canvas';

export interface CanvasModuleApis extends CORE.Module.EditorBaseModuleApis {}

export function createApis(_canvasModule: CanvasModule): CanvasModuleApis {
  return {};
}
