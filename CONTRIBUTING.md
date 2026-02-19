# 贡献指南

## 前提

环境要求:

- 对于 Windows 开发者:
  1. 任意代码编辑器或 IDE (推荐 [Visual Studio Code](https://code.visualstudio.com/))
  2. [Rust](https://www.rust-lang.org/tools/install) 1.77.2 或更高版本
  3. [Edge WebView2](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/) 90.x 或更高版本
  4. [Node.js](https://nodejs.org/zh-cn/download) 20.x 或更高版本
  5. [PNPM](https://pnpm.io/zh/installation) 10.28.0 或更高版本
- 对于 macOS 开发者:
  1. 任意代码编辑器或 IDE (推荐 [Visual Studio Code](https://code.visualstudio.com/))
  2. [Rust](https://www.rust-lang.org/tools/install) 1.77.2 或更高版本
  3. [Node.js](https://nodejs.org/zh-cn/download) 20.x 或更高版本
  4. [PNPM](https://pnpm.io/zh/installation) 10.28.0 或更高版本
- 对于 Linux 开发者:
  1. 任意代码编辑器或 IDE (推荐 [Visual Studio Code](https://code.visualstudio.com/))
  2. [Rust](https://www.rust-lang.org/tools/install) 1.77.2 或更高版本
  3. [GTK WebView2](https://webkitgtk.org/reference/webkit2gtk/stable/) 4.1 或更高版本
  4. [Node.js](https://nodejs.org/zh-cn/download) 20.x 或更高版本
  5. [PNPM](https://pnpm.io/zh/installation) 10.28.0 或更高版本

## 贡献流程

1. [Fork 本项目](https://github.com/LateDreamXD/moekoe-tauri/fork) 到你的 GitHub 账号
2. 克隆你的 Fork 以及仓库中的子模块到本地
3. 进行修改并提交到你的 Fork
4. [提交 Pull Request](https://github.com/LateDreamXD/moekoe-tauri/compare) 到本项目

## 开发命令参考

```sh
pnpm install # 安装依赖
pnpm dev # 启动 vite 开发服务器
pnpm build # 构建 webui
pnpm app:dev # 在 tauri 中启动开发服务器
pnpm app:build # 构建 app
```
