/*
 * 编辑器整体布局框架
 *
 * @Author: wangxuejin
 * @Date: 2024-10-21 14:38:51
 * @LastEditTime: 2025-01-08 15:30:46
 */

import React from 'react';
import {
  // defaultTheme,
  // lightTheme,
  darkTheme,
  Grid,
  Provider,
  View,
} from '@adobe/react-spectrum';
import { I18nProvider } from 'react-aria-components';
// import ContextMemu from '../context-menu';
import Canvas from '../canvas';
import Header from './header';

import 'normalize.css';

export default function Editor() {
  return (
    <I18nProvider locale="zh-CN">
      <Provider theme={darkTheme}>
        {/* <ContextMemu> */}
        <View colorVersion={6} backgroundColor="gray-50" height="100vh">
          <Grid
            areas={[
              'header  header  header',
              'toolBar content taskBar',
              'toolBar  footer  taskBar',
            ]}
            columns={['size-500', 'auto', 'size-500']}
            rows={['size-500', 'auto', 'size-3000']}
            height="100vh"
            gap="size-10"
          >
            <View gridArea="header" colorVersion={6} backgroundColor="gray-100">
              <Header />
            </View>
            <View
              gridArea="toolBar"
              colorVersion={6}
              backgroundColor="gray-100"
            />
            <View
              gridArea="content"
              colorVersion={6}
              backgroundColor="gray-100"
            >
              <Canvas />
            </View>
            <View
              gridArea="taskBar"
              colorVersion={6}
              backgroundColor="gray-100"
            />
            <View
              gridArea="footer"
              colorVersion={6}
              backgroundColor="gray-100"
            />
          </Grid>
        </View>
        {/* </ContextMemu> */}
      </Provider>
    </I18nProvider>
  );
}
