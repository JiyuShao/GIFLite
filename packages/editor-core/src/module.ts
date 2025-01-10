/*
 * 编辑器业务模块
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-11-25 11:25:31
 * @LastEditTime: 2025-01-10 18:02:14
 */

import { Logger } from './logger';

const logger = Logger.get('EditorModule');

export interface EditorBaseModuleOptions {}

export abstract class EditorBaseModule<
  O extends EditorBaseModuleOptions = EditorBaseModuleOptions,
> {
  protected options!: O;

  /**
   * 模块 key，用于数据合并
   */
  public abstract key: string;

  public abstract hooks;

  public abstract store;

  public abstract apis;

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
