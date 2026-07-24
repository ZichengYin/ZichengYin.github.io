---
title: 1. GazeComp 视线驱动的动态多段压缩器
description: 一款基于视线追踪技术的 VST3 音频插件与独立应用程序，通过眼动仪视线坐标实时控制多段压缩器的分频点，实现非接触式音频处理。
order: 1
date: 2026-06-24
tags:
  - 音频插件
  - 眼动追踪
  - VST3
  - JUCE
image: images/gazecomp-cover.jpg
---

## 项目简介

《GazeComp》是一款基于 JUCE 框架开发的 VST3 音频插件及独立应用程序，核心创新在于将 Tobii 眼动仪视线坐标映射至多段压缩器的分频点控制。用户通过视线移动即可直观调整低频段（20–200Hz）与中频段（200–2000Hz）的分界频率，将传统依赖听觉经验的参数调节转化为空间定位操作。
同时，插件采用 Linkwitz-Riley 滤波器结构实现三段分频，保证分频点处相位对齐。每段压缩器独立控制 Threshold、Ratio、Attack、Release 与 Makeup Gain，所有参数支持 DAW 自动化录制。

## 相关链接

- [GitHub 仓库](https://github.com/ZichengYin/MultibandCompressor-vst3)
- [演示视频（YouTube）](https://youtu.be/OcuK2agQBCI)
- [演示视频（Bilibili）](https://www.bilibili.com/video/BV1S6ge6uEHd/?spm_id_from=333.1387.homepage.video_card.click&vd_source=211fcdfc3d98834faf84ffc6efb01104)

## 技术栈

- **开发框架**：JUCE 8.x / C++ / CMake
- **眼动追踪**：Tobii Eye Tracker 4C / GazeOSC / OSC 协议
- **音频处理**：Linkwitz-Riley 分频滤波器 / 包络跟随压缩器
- **编译目标**：VST3 插件 / Standalone 可执行文件
- **构建工具**：VS Code + CMake Tools

## 我的职责

- 独立开发与设计
- 音频核心算法编写，包括分频滤波、压缩器包络跟随与增益计算
- 眼动信号桥接方案设计与实现（Tobii 4C → GazeOSC → OSC → JUCE）
- 视线坐标平滑滤波与参数映射算法
- 插件 UI 设计与交互逻辑
- 跨平台构建配置（CMake）与测试

## 项目亮点

- **视线驱动交互**：将分频点参数（freqLow）映射至视线 X 轴坐标，视线向左分频点降低，视线向右分频点升高。
- **Linkwitz-Riley 分频**：保证分频点处相位对齐，避免音染，实现干净的三段分离（低频、中频、高频）。
- **独立压缩控制**：每段压缩器拥有独立的 Threshold、Ratio、Attack、Release、Makeup Gain 参数。
- **跨方案眼动桥接**：经历 Tobii Research SDK、Tobii.StreamEngine 等方案失败后，最终通过 GazeOSC + EyeX API 打通消费级眼动仪数据链路。
- **低 CPU 占用**：在 Reaper 等 DAW 中稳定运行，CPU 占用低于 5%。
- **平滑视线追踪**：一阶低通滤波处理视线原始坐标抖动，实现自然的参数过渡与听感变化。

## 项目成果与未来计划

- **当前成果**：完成一款具备三段 Linkwitz-Riley 分频、独立压缩控制与视线追踪映射的 VST3 音频插件及独立应用。
- **未来计划**：
  1. 引入视线停留时间识别，实现多参数控制（如 Threshold、Ratio 等）。
  2. 增加教学模式，实时显示视线对应频率范围与听觉反馈。
  3. 将视线控制扩展至 EQ、混响等效果器，为肢体障碍用户提供非接触式混音方案。

## 相关文档

- [制作报告（PDF）](https://raw.githubusercontent.com/ZichengYin/ZichengYin.github.io/master/files/GazeComp%20-%20Gaze-Driven%20Dynamic%20Multi-Band%20Compressor.pdf)
