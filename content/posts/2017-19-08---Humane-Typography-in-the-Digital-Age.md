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

The answer is... probably something in between. Anyways here's a little guide on how I set up my terminal. Obviously you can (and should) change any of the configurations to your liking.

![finished terminal preview](/media/screen-shot-2019-05-15-at-3.20.33-am.png "Fully Customized Terminal")

- - -

# 0. Install Brew

[Homebrew](https://brew.sh/) is a package manager for Mac (and Linux). If you're doing any kind of software dev stuff on your Mac, you'll probably end up using it to install packages and dependencies.

In your command prompt, run the following command:

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

# 1. Set Up iTerm2

iTerm2 offers a lot of benefits over the default Mac terminal... but I mostly use it because it supports a lot of different colours.

## Install iTerm2

Install iTerm2 [here](https://www.iterm2.com/) or run the following command:

```shell
brew cask install iterm2
```

## Customize Colours

Open the application and navigate to the Colors tab (`iTerm2 -> Preferences -> Profiles -> Colors`).

![iTerm2 Colors Tab Screenshot](/media/iterm2_colors.png "iTerm2 Colors Tab")

In the bottom right corner, you can select a preset. I'm rocking with a slightly altered [Dracula](https://draculatheme.com/iterm/) theme I think... I'm not sure. But you can download my presets [here](https://github.com/hunterwatson/dotfiles/tree/master/terminal/color_presets). Here's a side by side comparison with `meemoo` on the left and `yubah` on the right:

![iTerm2 Color Preset Comparison Screenshot](/media/iterm2_theme_comparison.png "iTerm2 Color Preset Comparison")

## Change Font
Navigate to the Text tab (`iTerm2 -> Preferences -> Profiles -> Text`). At the bottom of the tab, you'll want to change the font that supports special symbols. You can download my preferred fonts [here](https://github.com/hunterwatson/dotfiles/tree/master/terminal/fonts), or you can check out [this](https://github.com/ryanoasis/nerd-fonts#patched-fonts) selection.

## Configure Other iTerm2 Settings
Spend some time looking around the other settings tabs and change things to your liking. I don't remember what I changed in here, but it should mostly be preference. One thing I have enabled is `Unlimited scrollback` from the Terminal tab (iTerm2 -> Preferences -> Profiles -> Terminal), which lets you scroll wayyyyyyy back to see your old stuff.

# 1. Set Up Zsh (and other stuff)
By default, your Mac uses `Bash`. Zsh (_sometimes called Z-Shell_) is a fancy shmancy version of it. I'll get into some features later. [Oh my Zsh](https://ohmyz.sh/) is a configuration framework for Zsh. I don't really know what it does, but I appreciate it.

Install Zsh
```sh
brew install zsh zsh-completions
```

Install Oh my Zsh
```sh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## Customize your `~/.zshrc`

This file houses all the custom configurations we're about to do. Remember that whenever you make a change you'll need to run `source ~/.zshrc` or restart your terminal for the changes to take effect.

### Install Powerlevel9k Theme
I like [Powerlevel9k](https://github.com/bhilburn/powerlevel9k) because it's super customizable.

```sh
git clone https://github.com/bhilburn/powerlevel9k.git ~/.oh-my-zsh/custom/themes/powerlevel9k
```
Add the theme to your `~/.zshrc` file
```
ZSH_THEME="powerlevel9k/powerlevel9k"
```
Your prompt is gonna probably look absolutely wild, especially compared to the white, default terminal. Now is a good chance to [take a look at other people's prompts](https://github.com/bhilburn/powerlevel9k/wiki/Show-Off-Your-Config) for inspiration. I think you can just copy-paste their config file into yours. [Here](https://github.com/hunterwatson/dotfiles/blob/master/terminal/.zshrc) is my personal configuration (what you saw in the screenshots). I think mine is pretty humble, but still makes me feel like I'm _hacking the mainframe_.
