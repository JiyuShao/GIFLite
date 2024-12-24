/*
 * React Context Hooks
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-10-14 14:16:27
 * @LastEditTime: 2024-12-23 18:55:15
 */

import { useContext } from 'react';
import {
  SkeletonModuleContext,
  CanvasModuleContext,
  SkeletonModuleStoreContext,
  CanvasModuleStoreContext,
} from '../utils/context';

export const useSkeleton = () => useContext(SkeletonModuleContext);
export const useSkeletonStore = () => useContext(SkeletonModuleStoreContext);
export const useCanvas = () => useContext(CanvasModuleContext);
export const useCanvasStore = () => useContext(CanvasModuleStoreContext);
