import {
  CMP_TYPE,
  Crop,
  Fill,
  Flip,
  Scale,
  Shadow,
  Skew,
  BaseStroke,
  PointData,
  UnitData,
  BlendMode,
  PATH_TYPE,
  // ImageFilter,
  // FilterType,
} from './base';

export { CMP_TYPE, PATH_TYPE };

export interface CanvasSettings {
  /** 缩放比例 */
  zoomLevel: number;
  /** 是否显示标尺 */
  ruler?: boolean;
  /** 是否显示滚动条 */
  scrollBar?: boolean;
}

/** 页面基础模型 */
export interface PageModel {
  /** 页面 id */
  id: string;
  /** 页面名称 */
  name: string;
  /** 页面组件 */
  cmps: CmpModel[];
  /** 页面设置 */
  settings: PageSettings;
}

/** 背景颜色配置 */
export interface BackgroundColor {
  /** 背景颜色值 */
  color: string;
  /** 是否显示背景颜色 */
  visible: boolean;
}

/** 背景图片配置 */
export interface BackgroundImage {
  /** 图片地址 */
  src: string;
  /** 填充类型 */
  fillType: 'cover' | 'stretch' | 'repeat' | 'fit';
  /** 图片高度 */
  height: number;
  /** 图片宽度 */
  width: number;
  /** 图片透明度 */
  opacity: number;
}

export interface PageSettings {
  /** 布局属性 */
  layout?: {
    /** 宽 */
    width?: number;
    /** 高 */
    height?: number;
  };
  /** 背景 */
  background?: {
    /** 背景颜色 */
    backgroundColor?: BackgroundColor;
    /** 背景图片 */
    backgroundImage?: BackgroundImage;
  };
}

/** 组件基础模型 */
export interface BaseCmpModel<T extends CMP_TYPE = CMP_TYPE> {
  /** 组件类型 */
  type: T;
  /** 组件 id */
  id: string;
  /** 组件名称 */
  name: string;
  /** 父 id */
  parentId: string;
  /** 是否锁定 */
  locked?: true;
  /** 是否可见 */
  visible?: false;
  /** 是否被 hover，同一时间只能 hover 一个组件 */
  hovered?: true;
  /** 设置数据 */
  settings: BaseCmpSettings;
  /** 组件层级 */
  zIndex?: number;
}
export interface BaseCmpSettings<
  E extends Record<string, any> = Record<string, any>,
> {
  /**
   * 是否是遮罩层
   * 'path'  // 路径遮罩，高性能，使用路径裁剪，不显示自身
   * 'pixel' // 像素遮罩，使用每个像素的透明度，可以制作出复杂的效果，不显示自身
   * 'clipping' // 剪贴遮罩，和PS中的剪贴蒙版一样的效果，使用每个像素的透明度，并会显示自身
   */
  mask?: boolean | 'path' | 'pixel' | 'clipping';
  /** 位置属性 */
  position: {
    /** 横坐标位置 */
    x: number;
    /** 纵坐标位置 */
    y: number;
    // TODO
    alignment?: any;
    /** 变换 */
    transform?: {
      /** 旋转角度 */
      rotation?: number;
    };
  };
  /** 布局属性 */
  layout: {
    /** 宽 */
    width: number;
    /** 高 */
    height: number;
    /** 是否锁定比率 */
    proportion?: boolean;
  };
  /** 外观属性 */
  appearance?: {
    /** 透明度 */
    opacity?: number;
    /** 圆角 */
    cornerRadius?: number;
  };
  /** 填充 */
  fill?: Fill;
  /** 缩放参数 */
  scale?: Scale;
  /** 倾斜参数 */
  skew?: Skew;
  /** 外阴影, 支持多个阴影叠加、boxShadow 效果 */
  shadow?: Shadow | Shadow[];
  /** 翻转属性 */
  flip?: Flip;
  /** 内阴影 */
  innerShadow?: Shadow | Shadow[];
  /** 描边属性 */
  stroke?: BaseStroke;
  /** 混合模式, 默认为 'pass-through' */
  blendMode?: BlendMode;
  /** 扩展设置 */
  extendSettings?: E;
}
export interface BaseGroupCmpModel<T extends CMP_TYPE> extends BaseCmpModel<T> {
  /** 子组件 */
  cmps: CmpModel[];
}
export interface BaseGroupCmpSettings extends BaseCmpSettings {}

/** 图片组件模型 */
export interface ImageCmp extends BaseCmpModel<CMP_TYPE.Image> {
  settings: ImageCmpSettings;
}
export type ImageCmpSettings = BaseCmpSettings<{
  /** 图片地址 */
  url: string;
  /** 图片裁剪参数 */
  crop?: Crop;
  /** 图片滤镜 */
  // filters?: ImageFilter[];
}>;

/** 文字组件模型 */
export interface TextCmp extends BaseCmpModel<CMP_TYPE.Text> {
  settings: TextCmpSettings;
}
export type TextCmpSettings = BaseCmpSettings<{
  /** 文本信息 */
  text: string;
  /** 样式配置 */
  fontStyle?: FontStyle;
  /** 水平布局 */
  textAlign?: TextAlign;
  /** 垂直布局 */
  verticalAlign?: VerticalAlign;
  /** 换行配置 */
  textWrap?: TextWrap;
  /** 行高 */
  lineHeight?: number;
  /** 文本装饰效果 */
  textDecoration?: TextDecoration;
  /** 字间距 */
  letterSpace?: number | UnitData;
  /** 文字是否倾斜 */
  italic?: boolean;
  /** 溢出显示配置 */
  textOverflow?: 'show' | 'hide' | string;
  /** 宽度自适应 */
  autoWidth?: false;
  /** 高度自适应 */
  autoHeight?: false;
}>;

/** 水平排列取值 */
type TextAlign = 'left' | 'center' | 'right' | 'justify';
/** 垂直排列取值 */

type VerticalAlign = 'top' | 'middle' | 'bottom';
/** 换行属性 */
type TextWrap = 'normal' | 'none' | 'break';
type FontWeight = FontWeightNumer | FontWeightString;
type FontWeightNumer = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type FontWeightString =
  | 'thin'
  | 'extra-light'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'black';
type TextDecoration = 'none' | 'under' | 'delete';

/** 字体样式 */
interface FontStyle {
  /** 字体大小 */
  fontSize?: number;
  /** 字体粗细 */
  fontWeight?: FontWeight;
  /** 字体 */
  fontFamily?: string;
}

/** 路径组件，可画任意形状图形  */
interface BasePathCmp<S extends BasePathCmpSettings>
  extends BaseCmpModel<CMP_TYPE.Path> {
  settings: S;
}

/** 路径组件设置 */
export type BasePathCmpSettings<E extends object = object> = BaseCmpSettings<
  {
    /** 路径数据, 支持 MLVHQCZ 命令 */
    path: string;
    /**
     * 路径缠绕规则, 默认为 非零缠绕 nonzero
     * 两条以上路径重合时的填充算法, 可产生相加、相交、减去的效果
     *
     * @type {WindingRule}
     * @memberof BasePathCmp
     */
    windingRule?: WindingRule;
  } & E
>;

/** 路径组件设置，带标准路径类型 */
export type BasePathCmpSettingsWithPathType<
  T extends PATH_TYPE = PATH_TYPE,
  E extends object = object,
> = BasePathCmpSettings<
  {
    /** 标准路径类型，可选，编辑路径后 pathType 会变成 Unknown，E 数据会被清除 */
    pathType: T;
  } & E
>;

type WindingRule = 'nonzero' | 'evenodd';

/** 组组件 */
export interface GroupCmp extends BaseGroupCmpModel<CMP_TYPE.Group> {
  settings: GroupCmpSettings;
}
export type GroupCmpSettings = BaseGroupCmpSettings;

/** 未知形状 */
export interface UnknownPathCmp extends BasePathCmp<UnknownPathCmpSettings> {}
export type UnknownPathCmpSettings = BasePathCmpSettings;

/** 矩形: 正方形, 长方形 */
export interface RectanglePathCmp
  extends BasePathCmp<RectanglePathCmpSettings> {}
export type RectanglePathCmpSettings =
  BasePathCmpSettingsWithPathType<PATH_TYPE.Rectangle>;

/** 椭圆 */
export interface EllipsePathCmp extends BasePathCmp<EllipsePathCmpSettings> {}
export type EllipsePathCmpSettings = BasePathCmpSettingsWithPathType<
  PATH_TYPE.Ellipse,
  {
    /** 弧形的起始角度, 取值范围为 -180 ~ 180 */
    startAngle?: number;
    /** 弧形的结束角度, 取值范围为 -180 ~ 180 */
    endAngle?: number;
    /** 内半径比力, 取值范围为 0.0 ~ 1.0 */
    innerRadius?: number;
  }
>;

/** 多边形 */
export interface PolygonPathCmp extends BasePathCmp<PolygonPathCmpSettings> {}
export type PolygonPathCmpSettings = BasePathCmpSettingsWithPathType<
  PATH_TYPE.Polygon,
  {
    /** 有几条边，最少三条 */
    count: number;
  }
>;

/** 星星 */
export interface StarPathCmp extends BasePathCmp<StarPathCmpSettings> {}
export type StarPathCmpSettings = BasePathCmpSettingsWithPathType<
  PATH_TYPE.Star,
  {
    /** 有几条边，最少三条 */
    count: number;
    /** 内半径比力, 取值范围为 0.0 ~ 1.0 */
    ratio: number;
  }
>;

/** 线 */
export interface LinePathCmp extends BasePathCmp<LinePathCmpSettings> {}
export type LinePathCmpSettings = BasePathCmpSettingsWithPathType<
  PATH_TYPE.Line,
  {
    /**
     * 目标点(相对元素起点的坐标), 自动换算出 width 和 rotation
     *
     * @type {PointData}
     * @memberof LinePathCmp
     */
    toPoint?: PointData;
    /**
     * 可通过做标数组 [x1, y1, x2, y2] 绘制折线(高性能)
     * 或通过坐标对象数组[{x, y}, {x, y}...] 绘制折线(可读性高, 性能一般)
     *
     * @type {(number[] | PointData[])}
     * @memberof LinePathCmp
     */
    points?: number[] | PointData[];
    /** 开始线条样式 */
    startPointStyle: string;
    /** 结束线条样式 */
    endPointStyle: string;
  }
>;

/** 路径组件 */
export type PathCmp =
  | UnknownPathCmp
  | LinePathCmp
  | RectanglePathCmp
  | EllipsePathCmp
  | PolygonPathCmp
  | StarPathCmp;

/** 路径组件设置 */
export type PathCmpSettings = Exclude<PathCmp['settings'], undefined>;
export type CMP_MODEL_MAP = {
  [CMP_TYPE.Text]: TextCmp;
  [CMP_TYPE.Image]: ImageCmp;
  [CMP_TYPE.Group]: GroupCmp;
  [CMP_TYPE.Path]: PathCmp;
};

export type CmpModel = CMP_MODEL_MAP[keyof CMP_MODEL_MAP];

/**
 * 移动类型
 *
 * @export
 * @enum {string}
 */
export enum MOVE_TYPE {
  TOP = 'TOP',
  UP = 'UP',
  DOWN = 'DOWN',
  BOTTOM = 'BOTTOM',
}

/** 内部编辑器标签枚举 */
export enum INNER_EDITOR_TAG {
  TextEditor = 'TextEditor', // 文本编辑器
  CustomImageEditor = 'CustomImageEditor', // 自定义图片编辑器
  SVGPathEditor = 'SVGPathEditor', // SVG路径编辑器
  ImageAiInnerEditorClipping = 'ImageAiInnerEditorClipping', // 智能扣图编辑器
}

/** 内部编辑器模型 */
export type InnerEditorModel = {
  tag: Omit<INNER_EDITOR_TAG, INNER_EDITOR_TAG.ImageAiInnerEditorClipping>;
} & {
  tag: INNER_EDITOR_TAG.ImageAiInnerEditorClipping;
  data?: {
    /** 图片 AI 处理后的 url，如果为 undefined 代表处理中，此时不能点击应用按钮 */
    url?: string;
  };
};
