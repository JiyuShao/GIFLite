/*
 * 骨架模块
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2025-01-10 18:01:51
 */
import { Logger, Module } from '@giflite/editor-core';
import { CanvasModule } from '@giflite/editor-module-canvas';
import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';

import Layout, { LayoutProps } from '../layouts';
import { createApis } from './apis';
import { createHooks } from './hooks';
import { createStore } from './store';

const logger = Logger.get('SkeletonModule');

export interface SkeletonModuleOptions extends Module.EditorBaseModuleOptions {
  canvas: CanvasModule;
}

/**
 * 骨架模块
 */
export class SkeletonModule extends Module.EditorBaseModule<SkeletonModuleOptions> {
  private root?: Root;

  private canvas: CanvasModule;

  key = 'skeleton';

  hooks = createHooks();

  store = createStore();

  apis = createApis(this);

  constructor(options: SkeletonModuleOptions) {
    super(options);
    this.canvas = options.canvas;
  }

  public render(container: HTMLDivElement): void {
    if (this.root) {
      logger.error('SkeletonModule already rendered!');
      return;
    }
    this.root = createRoot(container);
    this.root.render(
      createElement<LayoutProps>(Layout, {
        skeleton: this,
        canvas: this.canvas,
      })
    );
  }

  public destroy(): void {
    this.root?.unmount();
    delete this.root;
    super.destroy();
  }
}
