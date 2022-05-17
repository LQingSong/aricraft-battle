# vue3 ts TDD

## 探索 UI 和核心业务区分开

## 技术栈

1. vue3
2. typescript
3. vitest
4. pixi.js
5. pnpm
6. vue3 自定义渲染器

## 环境搭建

1. pnpm create vite
2. 按步骤选择 vue3 ts 环境
3. pnpm i 安装依赖
4. pnpm run dev 运行基本 vue3 代码
5. pnpm add -D vitest 安装 vitest
6. 随便写个测试文件 index.spec.ts 检测测试环境是否安装好

## Tasking

1. 基于 custom renderer api 实现把视图渲染到 canvas 上

- init pixijs
- renderer({}) 渲染接口

## 开始

1. pnpm i pixi.js 安装 pixi.js
2. 编写 custom renderer 接口

## 错误记录

1. ts 引入图片报红：ts 无法识别非代码资源
   - 在 src 下新建一个.d.ts 后缀的文件
   ```ts
   declare module "*.svg";
   declare module "*.png";
   declare module "*.jpg";
   declare module "*.jpeg";
   declare module "*.gif";
   declare module "*.bmp";
   declare module "*.tiff";
   ```
   亲测并没什么效果
2. vue3 用 volar，禁用 vetur
