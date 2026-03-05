---
title: Interrupt-Driven Reverse Geocache Box
description: A project to help my best friend propose to their (now) wife.
date: 2019-01-07
image: /images/rgb_photos/deployed.jpg
tags:
  - hardware
  - electronics
  - arduino
  - gps
---

## Overview

What is a reverse geocache box, you say? In the simplest of terms, it's like a regular geocache, except you start with the cache locked in a box that is location aware (it has a GPS). You take the box to the appropriate location and it will open up! How do you know what location to take it to, you ask? There is a screen on the top of the box which tells you what direction to go and how far to go in that direction. It's probably best to bring some maps with you or use Google Maps to try to determine where you really need to go as it only gives you simple distance and direction. Sounds cool, huh?

![RGB Display](/images/rgb_photos/display_again.jpg)

## Features

Oh, you've seen projects like this before? What's so special about our box? Excellent question! We decided to take it a couple steps further. First, we chose to handle power conservation a bit differently. Second, the box doesn't just open when you get to a single designated location. Its firmware allows for multiple locations to be set and the box only opens once you have visited each location in order. I know what you're thinking, it sounds like more trouble than it's worth. Well, there's a reason for all of the different locations. The box is to be used in a wedding proposal. The idea is to revisit some of the important memories of their courtship.

So, what about the "interrupt-driven" part? All the other RGB projects I've seen use a Pololu switch to cut power to the MCU. While that is extremely effective, it's also kind of boring. Our box uses low power modules with sleep functions to reduce their power consumption when not in use. We use a hardware interrupt on the MCU to wake it up and then it wakes up the other modules. It also sports a USB charging circuit so that the 2500mAh battery can be charged and is ready when you need it.

![RGB Prototype](/images/rgb_photos/prototype.jpg)

## Parts

- [Teensy 3.1](https://www.adafruit.com/product/1625)
- [Adafruit Ultimate GPS Breakout](https://www.adafruit.com/product/746)
- [1.5" Color OLED](https://www.adafruit.com/product/1431)
- [Lithium Ion Polymer Battery - 3.7v 2500mAh](https://www.adafruit.com/product/328)
- [USB LiIon/LiPoly charger](https://www.adafruit.com/product/259)
- [Micro Servo](https://www.adafruit.com/product/169)
- [Waterproof Metal Pushbutton with Blue LED Ring](https://www.adafruit.com/product/481)
- [Large Enclosed Piezo Element w/Wires](https://www.adafruit.com/product/1739)
- 3 x NDS355AN N-Channel MOSFET
- 3 x 330Ω Resistors
- 3 x 100kΩ Resistors

## Tools & Supplies

- [Soldering Iron](https://www.adafruit.com/categories/84) + [Solder](https://www.adafruit.com/categories/84)
- [Ribbon Cable](https://www.adafruit.com/product/3889)
- [Helping Third Hands](https://www.adafruit.com/product/291) / [Panavise](https://www.adafruit.com/product/151)
- [Heat Shrink](https://www.adafruit.com/product/1649)
- [Wire Stripper](https://www.adafruit.com/product/527) / [Cutters](https://www.adafruit.com/product/152)
- Glue / Mounting Tack
- Filing Tool / Hobby Knife

![RGB Unlocked](/images/rgb_photos/unarmed.jpg)

![RGB Isometric](/images/rgb_photos/isometric_view.jpg)

## Circuit Diagram

![RGB Circuit Diagram](/images/rgb_photos/rgb_project_bb.jpg)

### Pins

```cpp
#define OLED_MOSI       11
#define OLED_CLK        13
#define OLED_CS         14
#define OLED_DC         3
#define OLED_RESET      2
#define SD_MISO         12
#define SD_CS           10
#define PIEZO_PIN       23
#define BUTTON_PIN      6
#define SERVOSIGNAL_PIN 5
#define STATUS1_PIN     22
#define STATUS2_PIN     21
#define OLEDPOWER_PIN   20
#define BUTTONLED_PIN   19
#define SERVOPOWER_PIN  18
```

![RGB Wiring Action](/images/rgb_photos/soldering_the_power.jpg)

## Software

All the code used in this project is available on my [GitHub](https://github.com/tjpeden/interrupt-driven-rgb).

![RGB Test Fit](/images/rgb_photos/test_fit_screen.jpg)

## Conclusion

We did a lot of testing with the prototype, but very little with the actual box, since we ran out of time. However, the box was deployed quite successfully. The GPS and firmware worked flawlessly across 3 states and it locked and unlocked as/when expected.

![RGB Reaction](/images/rgb_photos/first_reaction.jpg)

## Authors & Contributors

TJ Peden ([tjpeden](https://github.com/tjpeden)) designed and developed the electronics. Lora Reames ([lora-reames](https://github.com/lora-reames)) designed, planned and deployed the project. Special thanks to Andrew Harmon over at [FabLab Tulsa](https://fablabtulsa.org/) for all of his help.
