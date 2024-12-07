/*
 * 日志模块
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-11-25 11:25:31
 */
import logger from 'loglevel';

const { getLogger, ...rest } = logger;

export const Logger = {
  get: getLogger,
  ...rest,
};
