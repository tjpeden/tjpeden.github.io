---
layout: post.html
title: Interrupt-Driven Reverse Geocache Box
description: A project to help my best friends propose to his (now) wife.
date: 2019-01-07
collection: posts
comments: true
feature:
  title: Deployed RGB
  image: rgb_photos/deployed.jpg
---

## Overview
What is a reverse geocache box, you say? In the simplest of terms, it's like a regular geocache, except you start with the cache locked in a box that is location aware (it has a GPS). You take the box to the appropriate location and it will open up! How do you know what location to take it to, you ask? There is a screen on the top of the box which tells you what direction to go and how far to go in that direction. It's probably best to bring some maps with you or use Google Maps to try to determine where you really need to go as it only gives you simple distance and direction. Sounds cool, huh?

![RGB Display][1]

## Features
Oh, you've seen projects like this before? What's so special about our box? Excellent question! We decided to take it a couple steps further. First, we chose to handle power conservation a bit differently. Second, the box doesn't just open when you get to a single designated location. It's firmware allows for multiple locations to be set and the box only opens once you have visited each location in order. I know what you're thinking, it sounds like more trouble than it's worth. Well, there's a reason for all of the different locations. The box is to be used in a wedding proposal. The idea is to revisit some of the important memories of their courtship.

So, what about the "interrupt-driven" part? All the other RGB projects I've seen use a Pololu switch to cut power to the MCU. While that is extremely effective, it's also kind of boring. Our box uses low power modules with sleep functions to reduce their power consumption when not in use. We use a hardware interrupt on the MCU to wake it up and then it wakes up the other modules. It also sports a USB charging circuit so that the 2500mAh battery can be charged and is ready when you need it.

![RGB Prototype][2]

## Parts

- [Teensy 3.1](http://www.adafruit.com/product/1625)
- [Adafruit Ultimate GPS Breakout](http://www.adafruit.com/products/7460)
- [1.5" Color OLED](http://www.adafruit.com/products/1431)
- [Lithium Ion Polymer Battery - 3.7v 2500mAh](http://www.adafruit.com/products/328)
- [USB LiIon/LiPoly charger](http://www.adafruit.com/products/259)
- [Micro Servo](http://www.adafruit.com/products/169)
- [Waterproof Metal Pushbutton with Blue LED Ring](http://www.adafruit.com/products/481)
- [Large Enclosed Piezo Element w/Wires](http://www.adafruit.com/products/1739)
- 3 x NDS355AN N-Channel MOSFET
- 3 x 330Ω Resistors
- 3 x 100kΩ Resistors

## Tools & Supplies

- [Soldering Iron](https://www.adafruit.com/categories/84) + [Solder](https://www.adafruit.com/categories/84)
- [Ribbon Cable](https://www.adafruit.com/product/3889)
- [Helping Third Hands](https://www.adafruit.com/products/291) / [Panavise](https://www.adafruit.com/products/151)
- [Heat Shrink](https://www.adafruit.com/products/1649)
- [Wire Stripper](https://www.adafruit.com/products/527) / [Cutters](https://www.adafruit.com/products/152)
- Glue / Mounting Tack
- Filing Tool / Hobby Knife

![RGB Unlocked][3]
&nbsp;
![RGB Isometric][4]

## Circuit Diagram
![RGB Circuit Diagram][5]

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

![RGB Wiring Action][6]

## Software
All the code used in this project is available on my [Github](https://github.com/tjpeden/interrupt-driven-rgb).

![RGB Test Fit][7]

## Conclusion
We did a lot of testing with the prototype, but very little with the actual box, since we ran out of time. However, the box was deployed quite successfully. The GPS and firmware worked flawlessly across 3 states and it locked and unlocked as/when expected.

![RGB Reaction][8]

## Authors & Contributors
TJ Peden ([tpeden](https://github.com/tpeden)) is the Engineer and Developer of the project. Patrick Reames ([patrickr](https://github.com/patrickr)) designed, planned and deployed the project. Special thanks to Andrew Harmon over at [FabLab Tulsa](http://www.fablabtulsa.com/) for all of his help.


[1]: /images/rgb_photos/display_again.jpg
[2]: /images/rgb_photos/prototype.jpg
[3]: /images/rgb_photos/unarmed.jpg
[4]: /images/rgb_photos/isometric_view.jpg
[5]: /images/rgb_photos/rgb_project_bb.jpg
[6]: /images/rgb_photos/soldering_the_power.jpg
[7]: /images/rgb_photos/test_fit_screen.jpg
[8]: /images/rgb_photos/first_reaction.jpg
