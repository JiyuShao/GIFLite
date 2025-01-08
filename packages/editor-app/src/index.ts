/*
 * 编辑器应用入口文件，加载并注册主要的模块
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-12-23 17:25:23
 * @LastEditTime: 2025-01-08 17:35:50
 */
import { Editor, Logger } from '@giflite/editor-core';
import { CanvasModule } from '@giflite/editor-module-canvas';
import { SkeletonModule } from '@giflite/editor-module-skeleton';

const logger = Logger.get('EditorApp');

export interface EditorAppOptions extends Editor.EditorBaseOptions {}

export class EditorApp extends Editor.EditorBase<EditorAppOptions> {
  canvas: CanvasModule;
  skeleton: SkeletonModule;

  constructor(options: EditorAppOptions) {
    super(options);

    // 注册画布模块
    this.canvas = this.registerModule<
      CanvasModule,
      ConstructorParameters<typeof CanvasModule>
    >(CanvasModule, [{}]);

    // 注册骨架模块
    this.skeleton = this.registerModule<
      SkeletonModule,
      ConstructorParameters<typeof SkeletonModule>
    >(SkeletonModule, [
      { canvas: this.getRegisteredModule<CanvasModule>(CanvasModule) },
    ]);

    // 渲染骨架屏模块，会自动触发 canvas 渲染
    this.skeleton.render(options.container);
  }
}

window.__RP_EDITOR__ = new EditorApp({
  container: document.getElementById('root') as HTMLDivElement,
});

logger.debug('__RP_EDITOR__', window.__RP_EDITOR__);
