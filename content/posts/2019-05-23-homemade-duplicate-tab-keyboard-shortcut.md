---
template: post
title: homemade duplicate tab keyboard shortcut
slug: duplicate-tab-keyboard-shortcut
draft: false
date: 2019-05-23T04:55:15.342Z
description: >-
  Google Chrome has a lot of useful keyboard shortcuts, but there are still a
  handful of features that aren't mapped to keys. This post will showcase the
  least elegant method for duplicating a tab... but at least you will feel like
  a power user.
category: productivity
---
Google Chrome has a whole bunch of useful [keyboard shortcuts](https://support.google.com/chrome/answer/157179); however, there are still some features that can only be accessed by using the mouse. Fortunately, if we want to duplicate a tab, we are given all the tools we need to hack together our own solution. I'm doing this on a Mac, but all of these shortcuts can be mapped to other operating systems.

To duplicate the tab you are in, execute the following shortcuts in sequence:

```
⌘ + l       // this is a lowercase L
⌘ + return
⌘ + 9
```
_If you just want duplicate a tab and not open it, you can exclude the `⌘ + 9` at the end_.

## Why?
This works because the url will be selected after jumping to the address bar, and then the page is opened in a new tab (since the action is to go to that url). Unfortunately, this tab will be added to the end of the tabs, so if we have 5 tabs open and we want to duplicate tab 2, the tab 2 copy will be in the 6th position. Fortunately, we can use the _jump to last_ tab command to open the duplicate tab regardless of how many tabs we have open.

### Jump to Address Bar (`⌘ + l`)
This shortcut moves the focus to the address bar (which shows the current url)

### Open in New Tab (`⌘ + return`)
Most people know that if you hold `⌘` and then select something with the mouse (click a link, press a button), it will complete that action in a new tab. This concept is the same, except it uses `return` or `enter` instead to select.

### Jump to Last Tab (`⌘ + 9`)
`⌘ + 1` through `⌘ + 8` will bring you to a specific tab in your window (`⌘ + 4` will open the 4th tab). `⌘ + 9` brings you to the last tab. So if you have 40 tabs open, it will open the 40th. If you have 2 tabs open, it will bring you to the 2nd.

- - -

The alternative is right-clicking the tab we want to duplicate, and selecting `duplicate` from the menu. This is nice because you don't have to have that tab open, it create the duplicate in the next tab space, and it takes less actions to complete... but it isn't nearly as flashy.
