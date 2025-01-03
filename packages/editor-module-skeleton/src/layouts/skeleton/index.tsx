/*
 * 编辑器整体布局框架
 *
 * @Author: wangxuejin
 * @Date: 2024-10-21 14:38:51
 * @LastEditTime: 2025-01-03 15:40:16
 */

import React from 'react';
import { defaultTheme, Grid, Provider, View } from '@adobe/react-spectrum';
// import ContextMemu from '../context-menu';
import Canvas from '../canvas';

import 'normalize.css';

export default function Editor() {
  return (
    <Provider theme={defaultTheme}>
      {/* <ContextMemu> */}
      <Grid
        areas={[
          'header  header  header',
          'sidebar-left content sidebar-right',
          'sidebar-left  footer  sidebar-right',
        ]}
        columns={['size-600', 'auto', 'size-600']}
        rows={['size-700', 'auto', 'size-3000']}
        height="100vh"
        gap="size-100"
      >
        <View backgroundColor="celery-600" gridArea="header" />
        <View backgroundColor="blue-600" gridArea="sidebar-left" />
        <View backgroundColor="purple-600" gridArea="content">
          <Canvas />
        </View>
        <View backgroundColor="blue-600" gridArea="sidebar-right" />
        <View backgroundColor="magenta-600" gridArea="footer" />
      </Grid>
      {/* </ContextMemu> */}
    </Provider>
  );
}
