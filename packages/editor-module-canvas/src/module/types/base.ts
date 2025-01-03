// import { BaseFilter, FilterType } from 'leafer-react';

/** 组件类型 */
export enum CMP_TYPE {
  /** 文本 */
  Text = 'Text',
  /** 图片 */
  Image = 'Image',
  /** 组合 */
  Group = 'Group',

  /** 路径 */
  Path = 'Path',
}

/** 路径元素类型 */
export enum PATH_TYPE {
  /** 矩形 */
  Rectangle = 'Rectangle',
  /** 椭圆 */
  Ellipse = 'Ellipse',
  /** 多边形 */
  Polygon = 'Polygon',
  /** 星星 */
  Star = 'Star',
  /** 心形 */
  Heart = 'Heart',
  /** 线 */
  Line = 'Line',
}

/**
 * ######################## 通用设置类型
 */
type Color = string | RGBA;

interface RGBA {
  r: number;
  g: number;
  b: number;
  a?: number;
}

export interface Shadow {
  /** x 轴的阴影偏移量 */
  x: number;
  /** y 轴的阴影偏移量 */
  y: number;
  /** 阴影的模糊半径 */
  blur: number;
  /** 扩展或收缩阴影的距离 */
  spread?: number;
  /** 阴影颜色 */
  color: Color;
  /** 混合模式 */
  blendMode?: BlendMode;
  /** 是否可见, 默认为 true */
  visible?: boolean;
  /** 是否为 boxShadow(只显示图形外部的阴影), 默认为 false */
  box?: boolean;
}

/** 位置信息 */
export interface PointData {
  /** 横坐标位置 */
  x: number;
  /** 纵坐标位置 */
  y: number;
}

export interface Skew {
  /** x 轴倾斜角度, 取值范围为 -90 ~ 90 */
  x: number;
  /** y 轴倾斜角度, 取值范围为 -90 ~ 90 */
  y: number;
}

export interface Scale {
  /** 水平缩放 */
  x: number;
  /** 垂直缩放 */
  y: number;
}

type PaintType = 'image' | 'solid' | GradientType;
type GradientType = 'linear' | 'radial' | 'angular';

/** 混合模式 */
export type BlendMode =
  | 'pass-through'
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity'
  | 'source-over'
  | 'source-in'
  | 'source-out'
  | 'source-atop'
  | 'destination-over'
  | 'destination-in'
  | 'destination-out'
  | 'destination-atop'
  | 'xor';

interface PaintBase {
  type: PaintType;
  blendMode?: BlendMode;
  visible?: boolean;
  opacity?: number;
}

interface SolidPaint extends PaintBase {
  type: 'solid';
  color: string;
}

type Direction =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center';

type Align = Direction;

/** 单位类型, 支持百分比和像素 */
export interface UnitData {
  type: 'percent' | 'px';
  value: number;
}

export interface UnitPointData extends PointData {
  type?: 'percent' | 'px';
}

interface ColorStop {
  offset: number;
  color: string;
}

interface GradientPaint extends PaintBase {
  type: GradientType;
  from?: Align | UnitPointData;
  to?: Align | UnitPointData;
  stretch?: number;
  stops: ColorStop[] | string[];
}

type Paint = SolidPaint | GradientPaint;

/** 填充属性 */
export type Fill = Paint | Paint[] | string;

/** 边框属性 */
export interface BaseStroke {
  /** 填充颜色、图像, 用于描边 */
  fill?: Fill;
  /** 描边的对齐方式, 默认为 inside */
  align?: 'inside' | 'center' | 'outside';
  /** 描边宽度, 默认为 1 */
  width?: number;
  /** 是否固定线宽, 默认为 false, 固定后不会随着缩放改变 */
  widthFixed?: boolean;
  /** 描边的端点形状, 默认为 none */
  cap?: 'none' | 'round' | 'square';
  /** 描边的拐角处理, 默认为 miter */
  join?: 'miter' | 'bevel' | 'round';
  /** 线段宽度 */
  dash?: number;
  /** 间隙宽度, 需要同时配置 dash */
  gap?: number;
  /** 虚线描边的起点偏移值 */
  dashOffset?: number;
}

/** 翻转属性 */
export interface Flip {
  /** 水平翻转 */
  x?: boolean;
  /** 垂直翻转 */
  y?: boolean;
}

export interface Crop {
  /** 裁剪宽度 */
  width: number;
  /** 裁剪高度 */
  height: number;
  /** 容器适应方式 */
  fit: 'cover' | 'contain' | 'none' | 'repeat';
}

/**
 * 圆角属性
 *
 * @export
 * @interface Corner
 */
export interface Corner {
  cornerRadius?: number | string | number[];
  cornerSmoothing?: number;
}

// interface BrightnessFilter extends BaseFilter {
//   type: FilterType.Brightness;
//   brightness: number;
// }

// interface ContrastFilter extends BaseFilter {
//   type: FilterType.Contrast;
//   contrast: number;
// }

// interface SaturationFilter extends BaseFilter {
//   type: FilterType.Saturation;
//   saturation: number;
// }

// interface TemperatureFilter extends BaseFilter {
//   type: FilterType;
//   temperature: number;
// }

// interface HueFilter extends BaseFilter {
//   type: FilterType;
//   hue: number;
// }

// interface ToneFilter extends BaseFilter {
//   type: FilterType;
//   tone: number;
// }

// interface BlurFilter extends BaseFilter {
//   type: FilterType.Blur;
//   blur: number;
// }

// interface ExposureFilter extends BaseFilter {
//   type: FilterType;
//   exposure: number;
// }

// interface SharpenFilter extends BaseFilter {
//   type: FilterType.Sharpen;
//   sharpen: number;
// }

// interface PixelateFilter extends BaseFilter {
//   type: FilterType.Pixelate;
//   blocksize: number;
// }

// /** 图片滤镜配置 */
// export type ImageFilter =
//   | BrightnessFilter
//   | ContrastFilter
//   | SaturationFilter
//   | BlurFilter
//   | SharpenFilter
//   | PixelateFilter;

// export { FilterType };
