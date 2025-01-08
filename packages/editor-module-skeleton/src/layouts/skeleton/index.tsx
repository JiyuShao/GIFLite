/*
 * 编辑器整体布局框架
 *
 * @Author: wangxuejin
 * @Date: 2024-10-21 14:38:51
 * @LastEditTime: 2025-01-07 18:04:12
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
        <View backgroundColor="gray-50" height="100vh">
          <Grid
            areas={[
              'header  header  header',
              'leftArea content rightArea',
              'leftArea  footer  rightArea',
            ]}
            columns={['size-500', 'auto', 'size-500']}
            rows={['size-500', 'auto', 'size-3000']}
            height="100vh"
            gap="size-50"
          >
            <View
              backgroundColor="gray-100"
              paddingX="size-75"
              gridArea="header"
            >
              <Header />
            </View>
            <View backgroundColor="gray-100" gridArea="leftArea" />
            <View backgroundColor="gray-50" gridArea="content">
              <Canvas />
            </View>
            <View backgroundColor="gray-100" gridArea="rightArea" />
            <View backgroundColor="gray-100" gridArea="footer" />
          </Grid>
        </View>
        {/* </ContextMemu> */}
      </Provider>
    </I18nProvider>
  );
}
