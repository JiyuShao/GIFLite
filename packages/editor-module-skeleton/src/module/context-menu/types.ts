/*
 * Context Menu 类型
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2025-01-03 15:53:01
 * @LastEditTime: 2025-01-03 16:22:32
 */

import { CanvasModule, CanvasType } from '@giflite/editor-module-canvas';

import { SkeletonModule } from '../skeleton';

export interface ContextMenuContext {
  skeleton: Omit<SkeletonModule, 'store'> & {
    store: CanvasType.Utility.DeepReadonly<SkeletonModule['store']>;
  };
  canvas: Omit<CanvasModule, 'store'> & {
    store: CanvasType.Utility.DeepReadonly<CanvasModule['store']>;
  };
}

export interface ContextMenuItem {
  /** 菜单类型 */
  type: 'item';
  /** 菜单名称 */
  label: string;
  /** 快捷键 */
  shortcut?: string;
  /** 是否禁用 */
  shouldDisabled?: (editor: ContextMenuContext) => boolean;
  /** 是否显示 */
  shouldShow?: (
    editor: ContextMenuContext,
    contextMenuType: CONTEXT_MENU_TYPE
  ) => boolean;
  /** 点击事件 */
  onClick?: (
    editor: ContextMenuContext,
    contextMenuType: CONTEXT_MENU_TYPE
  ) => void;
}

export interface ContextMenuDivider {
  type: 'divider';
}

export type ContextMenu = ContextMenuItem | ContextMenuDivider;

export enum CONTEXT_MENU_TYPE {
  CANVAS = 'CANVAS',
  LAYER = 'LAYER',
}
