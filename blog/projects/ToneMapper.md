---
title: 8. ToneMapper - Spectral Coloring Audio Processor
description: A JUCE-based VST3 audio plugin that maps input audio through a 48-band filter array with nonlinear distortion, then blends the processed "tone color" signal with the original for spectral enhancement and EQ shaping.
order: 8
date: 2025-12-24
tags:
  - Audio Plugin
  - Spectral Processing
  - VST3
  - JUCE
  - Sound Design
image: images/tonemapper-cover.jpg
---

## Project Introduction

*ToneMapper* is a VST3 audio plugin developed with the JUCE framework, functioning as a spectral coloring processor and EQ effect. Unlike traditional equalizers that simply boost or cut frequencies, ToneMapper analyzes the input audio by splitting it into 48 frequency bands, applies nonlinear distortion to each band to generate a harmonically rich "tone color" signal, and then blends this processed signal with the original audio. The result is a warm, textured enhancement that adds character and depth to the sound.

## Related Links

- [GitHub Repository](https://github.com/ZichengYin/ToneMapper)
- [Demo Video](https://youtu.be/...)

## Tech Stack

- **Development Framework**: JUCE / C++
- **Audio Processing**: 48-band filter array, nonlinear distortion, dynamic gain control
- **EQ Section**: Low-Cut (HPF), High-Cut (LPF), Peak EQ with adjustable Q
- **Build Targets**: VST3 Plugin / Standalone Executable

## My Role

- Core audio algorithm implementation, including multi-band filter array, distortion processing, and signal mixing
- Parameter design and UI layout
- Build configuration and testing in DAW environments

## Project Highlights

- **48-Band Spectral Filtering**: Splits audio into 48 frequency bands, each independently analyzed and processed for detailed tonal control.
- **Nonlinear Distortion per Band**: Applies dynamic distortion to each filter output, generating rich harmonic content and "color" that evolves with the input signal.
- **Side-Track Mixing**: The processed filter outputs are summed into a side track, then blended with the original audio via Tone Strength and Original Attenuation controls.
- **Three-Stage EQ Section**: Additional Low-Cut, High-Cut, and Peak EQ filters with adjustable slope (12/24/36/48 dB/Oct) provide traditional tonal shaping alongside the spectral coloring engine.
- **Versatile Applications**: Suitable for sound design, music production, and audio restoration where warmth, texture, and character are desired.