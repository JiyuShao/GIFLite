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

export type AnyObject = Record<string, any>;

export type NonUndefined<T> = T extends undefined ? never : T;
