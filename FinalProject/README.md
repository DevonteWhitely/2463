# LED Button Game

This project combines hardware and software to create an interactive game using LEDs, buttons, and sound cues. The game prompts the player to press buttons corresponding to specific LEDs based on randomly generated instructions.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Arduino Setup](#arduino-setup)
- [License](#license)

## Introduction

The LED Button Game is a fun and interactive project that challenges players to follow prompts by pressing buttons connected to LEDs. The game utilizes p5.js for the graphical interface, Tone.js for sound cues, and an Arduino kit for the hardware components.

In this game, players are presented with a prompt that instructs them to press either the red or blue button. If the player presses the correct button, the corresponding LED lights up both physically and graphically, and a correct sound cue plays. If the wrong button is pressed, an incorrect sound cue plays, and the game moves on to the next round.

## Technologies Used

- **p5.js**: A JavaScript library for creative coding and visualization.
- **Tone.js**: A Web Audio framework for creating interactive music in the browser.
- **Arduino Kit**: Hardware components including LEDs, buttons, and a breadboard.

## Setup

1. Clone this repository to your local machine.
2. Ensure you have p5.js and Tone.js libraries installed or linked in your project.
3. Connect your Arduino kit with LEDs and buttons as described in the Arduino Setup section.

## Usage

1. Open the `index.html` file in your web browser.
2. Connect your Arduino board to your computer.
3. Run the Arduino sketch (`Arduino.ino`) on your Arduino board.
4. Press the "Connect" button on the web interface to establish a serial connection with the Arduino.
5. Follow the prompts on the screen and press the corresponding button on the breadboard.

## Arduino Setup

1. Connect two LEDs to digital pins 12 and 13 on your Arduino board.
2. Connect two buttons to digital pins 2 and 3 on your Arduino board.
3. Ensure proper grounding and wiring to avoid short circuits or malfunctions.

## License

This project is licensed under the [MIT License](LICENSE).
