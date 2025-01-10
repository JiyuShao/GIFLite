/*
 * 画布模块
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2025-01-10 18:04:48
 */
import { Logger, Module } from '@giflite/editor-core';
import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';

import Layout, { LayoutProps } from '../layouts';
import { createApis } from './apis';
import { createHooks } from './hooks';
import { createStore } from './store';

export * as CanvasType from './types';

const logger = Logger.get('CanvasModule');

export interface CanvasModuleOptions extends Module.EditorBaseModuleOptions {}
/**
 * 画布模块
 */
export class CanvasModule extends Module.EditorBaseModule<CanvasModuleOptions> {
  private root?: Root;

  key = 'canvas';

  hooks = createHooks();

  store = createStore();

  apis = createApis(this);

  constructor(options: CanvasModuleOptions) {
    super(options);
  }

  public render(container: HTMLDivElement): void {
    if (this.root) {
      logger.warn('CanvasModule already rendered!');
      return;
    }
    this.root = createRoot(container);
    this.root.render(
      createElement<LayoutProps>(Layout, {
        canvas: this,
      })
    );
  }

  public destroy(): void {
    this.root?.unmount();
    delete this.root;
    super.destroy();
  }
}
