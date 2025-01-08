/*
 * Canvas 渲染
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2024-10-14 14:39:02
 * @LastEditTime: 2025-01-03 15:49:44
 */

import React, { useEffect, useRef } from 'react';

import { useCanvas } from '../../hooks/context';

export default function Canvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const canvas = useCanvas();

  useEffect(() => {
    if (canvasRef.current) {
      canvas.render(canvasRef.current);
    }
  }, [canvas]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      ref={canvasRef}
    />
  );
}
