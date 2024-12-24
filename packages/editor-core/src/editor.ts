/*
 * 编辑器核心模块
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-11-25 11:25:31
 * @LastEditTime: 2024-12-23 19:00:31
 */
import { Logger } from './logger';
import { EditorBaseModule } from './module';

const logger = Logger.get('EditorBase');

export interface EditorBaseOptions {
  container: HTMLDivElement;
  // skeleton?: SkeletonConfig;
  // theme?: ThemeConfig;
  // plugins?: PluginsConfig;
  // hooks?: EditorBaseHookConfig[];
  // lifecycles?: EditorBaseLifecyclesConfig;
  // shortCuts?: ShortCutsConfig;
  // utils?: UtilsConfig;
  // constants?: ConstantsConfig;
  // i18n?: I18nConfig;
}

// export interface EditorBaseLifecyclesConfig {
//   init?: (editor: EditorBase) => any;
//   destroy?: (editor: EditorBase) => any;
// }

export abstract class EditorBase<O extends EditorBaseOptions> {
  public options: O;

  private modules: Map<object, EditorBaseModule> = new Map();

  constructor(options: O) {
    this.options = options;
    logger.debug('EditorBaseOptions', this.options);
  }

  /**
   * 执行销毁方法
   */
  public destroy(): void {
    this.modules.forEach((currentModule, key) => {
      currentModule.destroy();
      this.modules.delete(key);
    });
  }

  /**
   * 注册模块，需要在调用 init 之前
   * @param ModuleConstructor
   * @param T
   * @returns {void}
   */
  public registerModule<T extends EditorBaseModule, P extends any[]>(
    ModuleConstructor: new (...args: P) => T,
    args: P
  ): T {
    if (this.modules.get(ModuleConstructor)) {
      logger.debug(`module ${ModuleConstructor} already exists`);
      return this.modules.get(ModuleConstructor) as T;
    }
    const currentModule = new ModuleConstructor(...args);
    this.modules.set(ModuleConstructor, currentModule);
    return currentModule;
  }

  /**
   * 获取已注册的模块
   * @param ModuleConstructor
   * @returns {void}
   */
  public getRegisteredModule<T extends EditorBaseModule>(
    ModuleConstructor: object
  ): T {
    const currentModule = this.modules.get(ModuleConstructor);
    if (!currentModule) {
      logger.debug(`module ${ModuleConstructor} doesn't exists`);
      throw new Error(`module ${ModuleConstructor} doesn't exists`);
    }
    return currentModule as T;
  }
}
