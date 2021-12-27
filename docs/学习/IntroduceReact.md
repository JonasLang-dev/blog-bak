---
id: react_introduce
title: React Introduce
sidebar_label: React
slug: /react_introduce
---
[TOC]

# React上手

## Create React App
React官方脚手架[Create React App](https://create-react-app.dev/)支持一下三种方式构建react项目：
```shell
    npx create-react-app [app-name] 
    npm init react-app [app-name] #使用npm
    yarn create react-app [app-name] #使用yarn
```
或者使用template选择模板
```shell
    npx create-react-app my-app --template [template-name]
    npx create-react-app my-app --template typescript #使用typescript
```

## Vite
使用vite脚手架搭建react项目
```shell
    npm init vite@latest
    yarn create vite
    pnpm create vite
```
然后按照提示操作

或者直接使用
```shell
    # npm 6.x
    npm init vite@latest my-react-app --template react

    # npm 7+, 需要额外的双横线：
    npm init vite@latest my-react-app -- --template react

    # yarn
    yarn create vite my-react-app --template react

    # pnpm
    pnpm create vite my-react-app -- --template react
```

通过 [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) 查看支持模块: react react-ts

## 从零开始
### 1.使用vite和react预览版18
#### 首先新建项目文件夹并使用npm或者yarn初始化项目
```shell
    mkdir react-demo
    cd react-demo
    yarn init 
    # or
    npm init
```
#### 安装依赖/项目配置
* 使用Vite做编译
```shell
    npm install react@alpha react-dom@alpha
    npm install vite -D
    # or 
    yarn add react@alpha react-dom@alpha
    yarn add vite -D
```
* 配置packgejson
```json
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
```
* 热更新支持
```shell
    npm install @vitejs/plugin-react-refresh -D
```
* 新建vite.config.js添加热更新插件
```js
import { defineConfig } from 'vite'
import refreshReactPlugin from '@vitejs/plugin-react-refresh'
export default defineConfig({
    plugins: [refreshReactPlugin()]
})
```
* 增加typescript支持
```shell
    npm install typescript @types/react @types/react-dom -D
```
配置tsconfig.json文件
```ts
{
    "compilerOptions": {
        "target": "ESNext",
        "lib": ["DOM", "DOM.Iterable", "ESNext"],
        "allowJs": false,
        "skipLibCheck": false,
        "esModuleInterop": false,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "module": "ESNext",
        "moduleResolution": "Node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react",
        "types": ["react/next", "react-dom/next"]
    },
    "include": ["./src"]
}
```
更改后需将打包命令替换为 
```json 
"build": "tsc && vite build" 
```
* 创建入口文件 \src\index.tsx
```tsx
 import React from 'react'
 import ReactDOM from 'react-dom'
 const App = () => {
     return <h1>Hello, React 18</h1>
 }
 // 使用 react 18 新的并发模式写法进行 dom render
 ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
```
* 在根目录创建承载页面 index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <div id="root"></div>
     <script type="module" src="/src/index.tsx"></script>
</body>
</html>
```
### 2.使用webpack和react