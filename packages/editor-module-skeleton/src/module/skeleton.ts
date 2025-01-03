/*
 * 骨架模块
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-07 17:32:36
 * @LastEditTime: 2024-12-24 10:21:55
 */
import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Logger, Module } from '@giflite/editor-core';
import Layout, { LayoutProps } from '../layouts';
import { SkeletonModuleHooks, createHooks } from './hooks';
import { SkeletonModuleStore, createStore } from './store';
import { SkeletonModuleApis, createApis } from './apis';
import { CanvasModule } from '@giflite/editor-module-canvas';

const logger = Logger.get('SkeletonModule');

export interface SkeletonModuleOptions extends Module.EditorBaseModuleOptions {
  canvas: CanvasModule;
}

/**
 * 骨架模块
 */
export class SkeletonModule extends Module.EditorBaseModule<
  SkeletonModuleOptions,
  SkeletonModuleHooks,
  SkeletonModuleStore,
  SkeletonModuleApis
> {
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
