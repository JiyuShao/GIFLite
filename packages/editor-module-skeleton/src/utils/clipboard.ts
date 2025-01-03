/*
 * Clipboard Utils
 *
 * @Author: Jiyu Shao <jiyu.shao@gmail.com>
 * @Date: 2025-01-03 16:23:31
 * @LastEditTime: 2025-01-03 16:25:47
 */
import { Logger } from '@giflite/editor-core';
import { MIME_TYPES } from './mime-types';

const logger = Logger.get('Clipboard');

export enum CLIPBOARD_DATA_TYPE {
  TEXT = 'text',
  IMAGE = 'image',
}

/**
 * 保存数据到剪切板
 * @param data 要复制的数据，可以是文本或 Blob
 * @returns Promise<void>
 */
export const setToClipboard = async (data: ClipboardData): Promise<void> => {
  try {
    let clipboardItem;
    if (data.type === CLIPBOARD_DATA_TYPE.TEXT) {
      const textData = new Blob([data.data], { type: MIME_TYPES.txt });
      clipboardItem = new ClipboardItem({ [MIME_TYPES.txt]: textData });
    } else if (data.type === CLIPBOARD_DATA_TYPE.IMAGE) {
      clipboardItem = new ClipboardItem({
        [data.data.type || MIME_TYPES.png]: data.data,
      });
    }
    await navigator.clipboard.write([clipboardItem]);
    logger.debug('复制到剪切板成功', { data });
  } catch (error) {
    logger.error('复制到剪切板失败:', error);
    throw error;
  }
};

function getClipboardItemType(type: string) {
  return type.split('/')[0];
}

function getOneClipboardItem(clipboardDatas: ClipboardData[]) {
  const finalDataMap: Record<CLIPBOARD_DATA_TYPE, ClipboardData | undefined> = {
    [CLIPBOARD_DATA_TYPE.TEXT]: undefined,
    [CLIPBOARD_DATA_TYPE.IMAGE]: undefined,
  };
  clipboardDatas.forEach(clipboardData => {
    finalDataMap[clipboardData.type] = clipboardData;
  });
  return finalDataMap.image || finalDataMap.text || null;
}

/**
 * 从剪切板获取数据
 * @returns Promise<ClipboardData | null> 剪切板中的数据和类型
 */
export async function getFromClipboard(
  silent = false
): Promise<ClipboardData | null> {
  try {
    const clipboardItems = await navigator.clipboard.read();
    const clipboardItem: ClipboardItem = clipboardItems[0];
    if (!clipboardItem) {
      return null;
    }
    const clipboardData: ClipboardData[] = [];
    for (const type of clipboardItem.types) {
      const blob = await clipboardItem.getType(type);
      if (getClipboardItemType(type) === CLIPBOARD_DATA_TYPE.TEXT) {
        clipboardData.push({
          type: CLIPBOARD_DATA_TYPE.TEXT,
          data: await blob.text(),
        });
      } else if (getClipboardItemType(type) === CLIPBOARD_DATA_TYPE.IMAGE) {
        clipboardData.push({ type: CLIPBOARD_DATA_TYPE.IMAGE, data: blob });
      } else {
        if (!silent) {
          logger.error('不支持的类型，如有需要请添加:', type);
        }
      }
    }
    if (!silent) {
      logger.debug('从剪切板获取数据成功:', clipboardData);
    }
    return getOneClipboardItem(clipboardData);
  } catch (error) {
    if (!silent) {
      logger.error('从剪切板获取数据失败:', error);
    }
    return null;
  }
}

/** 文本组件数据 */
export interface ClipboardTextCmpData {
  type: CLIPBOARD_DATA_TYPE.TEXT;
  data: string;
}

/** Blob 图片数据 */
export interface ClipboardBlobImageData {
  type: CLIPBOARD_DATA_TYPE.IMAGE;
  data: Blob;
}

export type ClipboardData = ClipboardTextCmpData | ClipboardBlobImageData;
