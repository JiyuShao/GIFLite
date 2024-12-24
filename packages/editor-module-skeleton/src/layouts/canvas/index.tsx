/*
 * Canvas 渲染
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-10-14 14:39:02
 * @LastEditTime: 2024-12-24 10:39:08
 */

import React, { useEffect, useRef } from 'react';
import { useCanvas } from '../../hooks/context';
import cx from 'classnames';

import styles from './index.less';

export default function Canvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const canvas = useCanvas();

  useEffect(() => {
    if (canvasRef.current) {
      canvas.render(canvasRef.current);
    }
  }, [canvas]);

  return <div className={cx(styles.canvas)} ref={canvasRef} />;
}
