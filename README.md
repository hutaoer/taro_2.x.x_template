# 项目说明

- 这个项目模板，是电商项目的基础模板，包含了商品、分类、用户、登录等基础功能，开箱即用。
- 由于项目前期要求快速支持 H5 和微信小程序两端，所以采用了`Taro`作为多端框架来进行开发，碰到的问题也比较多。
- 同时支持微信小程序和 H5
- 支持三套环境，分别为 开发：dev，测试：fat，生产：pro

## 技术栈

- Taro 版本：2.2.6
- React + Taro + Dva + Sass + ES6/ES7
- 使用`redux`，需要安装相应的包，`yarn add redux @tarojs/redux @tarojs/redux-h5 redux-thunk redux-logger`

## 核心规范

```
使用 Flex 布局
基于 BEM 写样式
采用 style 属性覆盖组件样式
```

## 目录结构

## 项目运行

## 注意事项

### 使用 mock 插件

- 本地调试的时候，如果使用了 mock 插件，有时候项目停掉后，本地的 mock 服务还在运行，这时候需要手动杀掉进程。
- Mac OS 下查看某个端口号的进程信息：`lsof -i:${port}`
- Mac OS 杀死进程：`kill ${pid}`
