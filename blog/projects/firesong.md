---
title: 1. Firesong 2D Shooter Game
description: A 2D side-scrolling shooter game featuring layered interactive sound design, 6 bullet types with unique audio-visual feedback, 5 enemy types, and AI-generated music processed in Cubase.
date: 2026-01-16
tags:
  - 2D Shooter
  - Sound Design
  - Unity
  - Indie Game
  - AI Music
image: images/firesong-cover.jpg
---

## Project Introduction

"Firesong" is a 2D side-scrolling shooter game developed with the Unity engine, based on the open-source project JetFire for secondary development and functional expansion. The game features layered interactive sound design as its core characteristic, combined with rich visual and auditory experiences to create an immersive shooting atmosphere.

Controls: Players can jump using the S key or Spacebar, and attack using the K key or Left Mouse Button.

## Related Links

- [GitHub Repository](https://github.com/ZichengYin/Firesong)
- [Demo Video](https://youtu.be/...)
- [Play Online](https://zichengyin.github.io/Firesong/)

## Tech Stack

- **Development Engine**: Unity (C# scripts)
- **Art Design**: Hand-drawn original assets (characters, enemies, backgrounds, UI) using Photoshop
- **Sound Design**: Layered interactive sound effects, dynamic mixing
- **Music Production**: Suno AI + Cubase (post-processing, tempo adjustment, key conversion)
- **Core Features**: 6 bullet types, 5 enemy types, vertical movement shooting

## My Role

- Sole developer and designer
- Core gameplay logic programming (player control, shooting system, enemy AI, collision detection)
- Original art design and animation (characters, enemies, scenes, UI)
- Layered sound effect design and implementation
- Music generation and post-processing (Suno AI + Cubase)
- Game testing, debugging, and difficulty balancing

## Project Highlights

- **Layered Interactive Sound Design**: Deconstructs single interaction behaviors (shooting, hitting, jumping) into multiple independent audio tracks. For example, a jump consists of character shout + jetpack startup + continuous operation sound.
- **6 Unique Bullet Types**: Each bullet type has unique visual effects and sound feedback, randomly obtained during gameplay.
- **5 Enemy Types**: Each enemy has different attack patterns and behavioral logic.
- **AI-Generated Music with Post-Processing**: Uses Suno AI to generate two background music tracks (in-combat and out-of-combat), then processed in Cubase for tempo adjustment, key conversion, and effect addition. The game over screen uses a slow-tempo version of the main theme to convey a sense of loss.
- **Custom Sound Effects per Bullet/Enemy**: Unique sound effect combinations for each bullet and enemy type, with real-time parameter adjustments (volume, pitch, reverb) via Unity scripts.
- **Two Rounds of Playtesting**: Fixed bugs, adjusted difficulty and pacing based on player feedback.

## Project Achievement & Future Plan

- **Current Achievement**: Completed a fully functional 2D shooter with layered sound design, 6 bullet types, 5 enemy types, and AI-generated music.
- **Future Plan**:
  1. Further expand bullet and enemy types
  2. Optimize sound effect layering and dynamic mixing
  3. Explore more advanced audio-visual synchronization techniques

## Related Documents

- [Production Report (PDF)](https://raw.githubusercontent.com/ZichengYin/ZichengYin.github.io/master/files/Firesong%E5%88%B6%E4%BD%9C%E6%8A%A5%E5%91%8A.pdf)
