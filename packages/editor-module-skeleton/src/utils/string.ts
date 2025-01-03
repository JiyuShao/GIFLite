/**
 * 判断字符串是否为 JSON 格式
 * @param data 字符串数据
 * @returns 是否为 JSON 格式
 */
export const isJSON = (data: string) => {
  try {
    JSON.parse(data);
    return true;
  } catch (_error: any) {
    return false;
  }
};

export enum STRING_TYPE {
  JSON = 'JSON',
  PLAIN = 'PLAIN',
  URL = 'URL',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN',
}

/**
 * 获取字符串数据类型
 * @param data 字符串数据
 * @returns 字符串数据类型
 */
export function getStringData(data: string): StringData {
  if (isJSON(data)) {
    return {
      type: STRING_TYPE.JSON,
      data: JSON.parse(data),
    } as JSONStringData;
  }
  if (data.startsWith('http://') || data.startsWith('https://')) {
    return {
      type: STRING_TYPE.URL,
      data,
    } as UrlStringData;
  }
  if (data.startsWith('<') && data.endsWith('>')) {
    return {
      type: STRING_TYPE.HTML,
      data,
    } as HtmlStringData;
  }
  if (data.startsWith('#') || data.includes('**') || data.includes('*')) {
    return {
      type: STRING_TYPE.MARKDOWN,
      data,
    } as MarkdownStringData;
  }
  return {
    type: STRING_TYPE.PLAIN,
    data,
  } as PlainStringData;
}

interface JSONStringData {
  type: STRING_TYPE.JSON;
  data: Record<string, any>;
}

interface PlainStringData {
  type: STRING_TYPE.PLAIN;
  data: string;
}

interface UrlStringData {
  type: STRING_TYPE.URL;
  data: string;
}

interface HtmlStringData {
  type: STRING_TYPE.HTML;
  data: string;
}

interface MarkdownStringData {
  type: STRING_TYPE.MARKDOWN;
  data: string;
}

export type StringData =
  | JSONStringData
  | PlainStringData
  | UrlStringData
  | HtmlStringData
  | MarkdownStringData;
