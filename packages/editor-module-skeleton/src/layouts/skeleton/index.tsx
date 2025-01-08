/*
 * 编辑器整体布局框架
 *
 * @Author: wangxuejin
 * @Date: 2024-10-21 14:38:51
 * @LastEditTime: 2025-01-08 17:44:26
 */

import 'normalize.css';

import { defaultTheme, Grid, Provider, View } from '@adobe/react-spectrum';
import React from 'react';
import { I18nProvider } from 'react-aria-components';

// import ContextMemu from '../context-menu';
import { useSkeletonStore } from '@/hooks/context';

import Canvas from '../canvas';
import Header from './header';
import styles from './index.less';

export default function Layout() {
  const { colorScheme } = useSkeletonStore();
  return (
    <I18nProvider locale="zh-CN">
      <Provider theme={defaultTheme} colorScheme={colorScheme}>
        {/* <ContextMemu> */}
        <View
          colorVersion={6}
          backgroundColor="gray-200"
          UNSAFE_className={styles.skeleton}
        >
          <Grid
            areas={[
              'header  header  header',
              'toolBar content taskBar',
              'toolBar  footer  taskBar',
            ]}
            columns={['size-500', 'auto', 'size-500']}
            rows={['size-500', 'auto', 'size-3000']}
            gap="size-10"
            height="100%"
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
