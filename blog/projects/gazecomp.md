---
title: 1. GazeComp - Gaze-Driven Dynamic Multiband Compressor
description: A VST3 audio plugin and standalone application powered by gaze-tracking technology, enabling contactless audio processing by mapping eye tracker gaze coordinates to real-time multiband compressor crossover frequency control.
order: 1
date: 2026-06-24
tags:
  - Audio Plugin
  - Eye Tracking
  - VST3
  - JUCE
image: images/gazecomp-cover.jpg
---

## Project Introduction

*GazeComp* is a VST3 audio plugin and standalone application developed with the JUCE framework. Its core innovation lies in mapping Tobii eye tracker gaze coordinates to crossover frequency control of a multiband compressor. Users can intuitively adjust the crossover points between the low band (20–200Hz), mid band (200–2000Hz), and high band (2000–20000Hz) simply by moving their gaze, transforming traditional parameter adjustment that relies on auditory experience into a spatial positioning operation.

The plugin employs a Linkwitz-Riley filter structure for three-band crossover, ensuring phase alignment at crossover points to avoid coloration. Each band features independent control over Threshold, Ratio, Attack, Release, and Makeup Gain, with all parameters supporting DAW automation recording.

## Related Links

- [Project Link](https://...)

## Tech Stack

- **Development Framework**: JUCE 8.x / C++ / CMake
- **Eye Tracking**: Tobii Eye Tracker 4C / GazeOSC / OSC Protocol
- **Audio Processing**: Linkwitz-Riley Crossover Filters / Envelope Follower Compressor
- **Build Targets**: VST3 Plugin / Standalone Executable
- **Build Tools**: VS Code + CMake Tools

## My Role

- Independent development and design
- Core audio algorithm implementation, including crossover filtering, compressor envelope following, and gain calculation
- Eye-tracking signal bridging solution design and implementation (Tobii 4C → GazeOSC → OSC → JUCE)
- Gaze coordinate smoothing filter and parameter mapping algorithms
- Plugin UI design and interaction logic
- Cross-platform build configuration (CMake) and testing

## Project Highlights

- **Gaze-Driven Interaction**: Maps the crossover frequency parameter (freqLow) to the X-axis gaze coordinate. Lower gaze frequency points shift the crossover downward, while higher gaze positions shift it upward.
- **Linkwitz-Riley Crossover**: Ensures phase alignment at crossover points, eliminating coloration and achieving clean three-band separation (Low, Mid, High).
- **Independent Compression Control**: Each band features independent Threshold, Ratio, Attack, Release, and Makeup Gain parameters.
- **Multi-Approach Eye-Tracking Bridging**: After encountering setbacks with Tobii Research SDK and Tobii.StreamEngine, successfully established connectivity with the consumer-grade eye tracker through GazeOSC + EyeX API.
- **Low CPU Overhead**: Runs stably in DAWs such as Reaper with CPU usage below 5%.
- **Smooth Gaze Tracking**: Applies a first-order low-pass filter to raw gaze coordinate jitter, enabling natural parameter transitions and consistent auditory response.

## Project Achievements and Future Plans

- **Current Achievement**: Completed a VST3 audio plugin and standalone application featuring three-band Linkwitz-Riley crossover, independent compression control, and gaze-tracking parameter mapping.
- **Future Plans**:
  1. Introduce gaze dwell-time recognition for multi-parameter control (e.g., Threshold, Ratio, etc.)
  2. Add a learning mode that displays real-time gaze frequency range mapping with auditory feedback
  3. Extend gaze control to other effects such as EQ and reverb, providing contactless mixing solutions for users with physical disabilities

## Related Documents

- [Production Report (PDF)](link)