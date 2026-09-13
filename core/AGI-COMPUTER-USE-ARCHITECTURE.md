# GKFXL OS Computer-Use Robot Architecture

## Purpose

Define the engineering architecture for a robot whose primary job is to operate a laptop or PC. This is a computer-use agent architecture and does not by itself claim general intelligence.

## System

Goal -> Mission Control -> Context -> Decision -> Computer-Use Tools -> Observe -> Verify -> Reality Feedback -> Memory -> Next Decision

## Hardware

- Mini PC or laptop-class compute node for the main runtime
- ESP32-S3 for physical I/O, status, buttons, sensors, and optional actuators
- USB camera for physical-world awareness
- Microphone and speaker
- Status display or LEDs
- Physical emergency stop
- USB hub and reliable power

## Software

- Python/FastAPI agent runtime
- Next.js/TypeScript control dashboard
- Screen capture and OCR/vision pipeline
- Mouse and keyboard control adapter
- Browser automation adapter
- Terminal/process adapter
- File/application adapter
- PostgreSQL and vector memory
- WebSocket realtime state channel
- Docker-based development and deployment

## Computer Action Model

The agent operates through explicit actions such as CLICK, TYPE, PRESS, HOTKEY, SCROLL, OPEN_APP, OPEN_URL, RUN_COMMAND, and READ_SCREEN.

Every consequential action follows:

1. Understand the goal.
2. Build a bounded plan.
3. Execute a safe action.
4. Observe the new state.
5. Verify the expected result.
6. Recover or escalate when verification fails.
7. Record the outcome for future learning.

## Safety

Low-risk actions may run automatically. Medium-risk actions require additional checks. High-impact actions such as destructive file operations, security changes, or external transactions require explicit human approval.

## GKFXL Integration

The robot uses the GKFXL closed-loop architecture: Mission, Context, Decision, Action, Observation, Reality Grounding, Feedback, Attribution, Calibration, Regression/Drift checks, Learning Quality, Memory, and Benchmarking.

## Roadmap

- V1: screen, mouse, keyboard, browser, terminal
- V2: autonomous goal-to-outcome computer operation
- V3: full GKFXL memory, recovery, and evaluation integration
- V4: physical robot I/O and camera integration
- V5: multi-computer and multi-tool operation
