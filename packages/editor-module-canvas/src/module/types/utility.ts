/*
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2025-01-03 16:05:08
 * @LastEditTime: 2025-01-03 16:05:21
 */
/** 深度只读属性 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

/** 深度 Partial 属性 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/** 除指定属性外, 其他属性都可选 */
export type DeepPartialExclude<T, K extends keyof T & string> = DeepPartial<
  Omit<T, K>
> &
  Pick<T, K>;

type NotUndefined<T> = T extends undefined ? never : T;
type NotNull<T> = T extends null ? never : T;

/** 非空类型 */
export type NotEmpty<T> = NotNull<NotUndefined<T>>;
