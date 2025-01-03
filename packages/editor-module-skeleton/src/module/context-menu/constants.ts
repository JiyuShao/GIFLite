/*
 * 骨架模块 Context Menu 常量
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2025-01-03 15:53:01
 * @LastEditTime: 2025-01-03 16:55:09
 */

import { ContextMenu } from './types';

// 菜单距离可视区域边缘最小距离
export const VIEW_OFFSET_MIN = 10;

/** 画布右键菜单的 CSS 类名 */
export const CLASSNAME_ALLOW_CONTEXT_MENU_CANVAS = 'allow-context-menu-canvas';

/** 图层右键菜单的 CSS 类名 */
export const CLASSNAME_ALLOW_CONTEXT_MENU_LAYER = 'allow-context-menu-layer';

export const CONTEXT_MENU_REGISTER_LIST: ContextMenu[] = [];
