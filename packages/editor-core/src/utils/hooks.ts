/*
 * 事件驱动的插件化工具
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-11-25 11:25:31
 */

import { ArgumentNames, AsArray, AsyncSeriesWaterfallHook } from 'tapable';

export class AsyncHook<T extends object, R> {
  private hook: AsyncSeriesWaterfallHook<T>;

  constructor(args?: ArgumentNames<AsArray<T>>, name?: string) {
    this.hook = new AsyncSeriesWaterfallHook(args, name);
  }

  tapPromise(options: string, fn: (...args: AsArray<T>) => Promise<R>): void {
    // TODO: bind async-context
    return this.hook.tapPromise(options, fn);
  }

  callPromise(...args: AsArray<T>): Promise<R> {
    return this.hook.promise(...args);
  }
}
