/*
 * 编辑器业务模块
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-11-25 11:25:31
 * @LastEditTime: 2024-12-23 18:56:12
 */

import { Logger } from './logger';

const logger = Logger.get('EditorModule');

export interface EditorBaseModuleOptions {}

export interface EditorBaseModuleHooks {}

export interface EditorBaseModuleStore {}

export interface EditorBaseModuleApis {}

export abstract class EditorBaseModule<
  O extends EditorBaseModuleOptions = EditorBaseModuleOptions,
  H extends EditorBaseModuleHooks = EditorBaseModuleHooks,
  S extends EditorBaseModuleStore = EditorBaseModuleStore,
  A extends EditorBaseModuleApis = EditorBaseModuleApis,
> {
  protected options!: O;

  /**
   * 模块 key，用于数据合并
   */
  public abstract key: string;

  public abstract hooks: H;

  public abstract store: S;

  public abstract apis: A;

  constructor(options: O) {
    this.options = options;
    setTimeout(() => {
      logger.debug(`EditorModule ${this.key} inited`);
    }, 0);
  }

  /**
   * 外部调用销毁逻辑
   */
  public destroy(): void {
    logger.debug(`EditorModule ${this.key} destroyed`);
  }
}
