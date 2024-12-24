import type { EditorApp } from './index';

declare global {
  interface Window extends Window {
    // 当前的编辑器实例
    __RP_EDITOR__: EditorApp;
  }
}
