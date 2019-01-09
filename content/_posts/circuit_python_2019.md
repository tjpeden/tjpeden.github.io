---
layout: post.html
title: CircuitPython2019
description: What I'd like to see from CircuitPython in 2019
date: 2019-01-09
collection: posts
comments: true
---

In June of 2014, I finished one of the coolest projects on which I've ever worked. Coolest, not in terms of what it was (others have done it, there's even a guide on [learn.adafruit.com][1] from 2012), but what it represented. I helped my best friend build a Reverse Geocache Box that he then used to propose to his, then, girlfriend! It successfully navigated her, not just to a single location, but a string of locations across 3 states, over 3 days to her final destination where the box opened and my best friend was there to ask her to marry him. A very lovely wedding and four and a half years later, technology has gotten better, faster, and more affordable (as technology does) and the possibilities for building a new version of my favorite project are mouth watering. But what really stands out to me is the possiblity of using Adafruit's Feather system with Adafruit's CircuitPython. It will be easier to build (way less soldering), more compact, and way easier to program. Here the two main things I will need from CircuitPython to complete the next iteration of this project.

1. Decent image and text functions for the 2.4" TFT Touchscreen FeatherWing (along the lines of u8glib/ucglib libraries)
1. More GPS functions like `distanceTo` and `courseTo` (along the lines of TinyGPSPlus library)

I look foreward to seeing how `displayio` will be helpful with the first one and the second one might be a good oppertunity to contribute to CircuitPython myself, but those are the biggest gaps I see so far.

P.S. I documented that project four and a half years ago, but [republished][2] it in cleaner format earlier this week.

[1]: https://learn.adafruit.com/reverse-geocache-engagement-box
[2]: http://peden.software/2019/01/07/interrupt-driven-reverse-geocache-box
