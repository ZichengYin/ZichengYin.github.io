---
title: 6. Remix Lab - 音频 Remix 工作站
description: 基于网页的音频 Remix 工具，支持 11 种预设效果、BPM 检测、波形可视化和背景音叠加。
date: 2026-04-29
tags:
  - 音频处理
  - Web 应用
  - Streamlit
  - UI/UX 设计
image: images/remix-cover.jpg?raw=true
---

## 项目简介

Remix Lab 是一个运行在浏览器中的音频 Remix 工作站，用户可以上传歌曲、应用不同音频效果，并生成个性化的混音版本。项目基于开源项目进行二次开发，我主要负责功能设计与功能扩展，包括 11 种预设效果、实时 BPM 检测、波形可视化，以及黑胶噪声与环境声构成的背景音叠加系统。应用使用 Streamlit 构建界面，音频处理由 Pydub 与 Spotify Pedalboard 支持。

## 相关链接

- [在线演示](https://remixlab.streamlit.app)
- [GitHub 仓库](https://github.com/ZichengYin/music_remixer01)
- [演示视频](https://github.com/ZichengYin/music_remixer01)

## 技术栈

- **前端/界面**：Streamlit
- **音频处理**：Pydub、Spotify Pedalboard、Librosa
- **数据可视化**：Matplotlib
- **系统依赖**：FFmpeg、NumPy

## 我的职责

- 项目维护者与功能开发者
- UI/UX 设计（夕阳主题）
- 音频处理流程集成

## 项目亮点

- 11 种预设音效，一键应用
- 双语界面
- 10 秒预览模式与进度回调
- 背景音叠加系统，包括黑胶噪声与环境声
- 实时 BPM 检测与波形可视化
- 自定义预设保存与读取

## 相关文档

- [制作报告（PDF）](https://raw.githubusercontent.com/ZichengYin/ZichengYin.github.io/master/files/Remix%20Lab%20Development%20Report.pdf)
