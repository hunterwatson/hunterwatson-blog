---
template: post
title: tinkering with my terminal
slug: /posts/tinkering-with-my-terminal
draft: false
date: 2019-05-16T03:40:00.000Z
description: >-
  A step-by-step guide on how I configure my terminal on MacOS using iTerm2,
  Zsh, and a whole bunch of other technologies. This post also includes a
  reference to my config file if anyone wants to copy my setup exactly.
category: Dev
tags:
  - Design
  - Typography
  - Web Development
---
I was talking with my fellow interns about our personal workspace setups, and I was super surprised when two of them said they use the default Mac `terminal.app` with no customization whatsoever. I thought I was going to blow their mind when I whipped out my spiffy, colourful, dark-theme terminal prompt, but to my surprise, they were having none of it. 

"_Yeah, but it does the same stuff, so what's the point?_", one of them said. 

And then I froze... I didn't have a response. Was it true? Was my gorgeous, fully customized terminal equivalent to the default, out-of-the-box version despite the countless hours I've devoted to the iterative process of creative the perfect command prompt? Was everything a waste of time?

Or was I just so used to my _power-user-enabled_, _ergonimically-crafted_, _beeaaauuutiful_, that the advantages became second nature? Was I so comfortable with the brainchild I created that I started to take it for granted?

The answer is... probably something in between. Anyways here's a little guide on how I set up my terminal.

![finished terminal preview](/media/screen-shot-2019-05-15-at-3.20.33-am.png "Fully Customized Terminal")

---

## Install Brew
Homebrew is a package manager for Mac (and Linux). If you're doing any kind of software dev stuff on your Mac, you'll probably end up using it to install packages and dependencies.

In your command prompt, run the following command:
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Set Up iTerm2
iTerm2 offers a lot of benefits over the default Mac terminal... but I mostly use it because it supports a lot of different colours.

Install iTerm2 [here](https://www.iterm2.com/) or run the following command:
```
brew cask install iterm2
```
