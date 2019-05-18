---
template: post
title: having fun with TextExpander
slug: /posts/having-fun-with-textexpander
draft: false
date: 2019-05-17T03:40:00.000Z
description: >-
  TextExpander is a handy tool that lets you insert "snippets" using keyboard shortcuts or abbreviations. This post explores some of my most used shortcuts as well as some fun stuff you can do with it.
category: Dev
tags:
  - TextExpander
  - Productivity
---

## What is TextExpander

[TextExpander](https://textexpander.com/) is a handy tool that lets you insert "snippets" using keyboard shortcuts or abbreviations. They market it to enterprise customers who want their support team to have consistent, accurate boilerplates for responses and statements, but there's plenty of functionality for normal people like me. I currently have the $3.33/month plan for one user.

![text-expander-demo](/media/textexpander_personal.gif "TextExpander Demo")

Basically you can set _snippets_, which will replace the abbreviation that you create for it. For example, when I type `;em` (short for email), right the abbreviation gets _expanded_ to my email, `hunter@hunterwatson.ca`. You can categorize your shortcuts with groups, which can be activated/deactivate within certain apps. Each group also lets you choose a _delimiter_ (mine is `;`) which will prefix your abbreviation (since making just `em` expand into my email would be amess).

Here's what the UI looks like when making these shortcuts (I have the darkmode enabled because it makes me feel like a programmer):

![text-expander-interface](/media/textexpander_menu.png "TextExpander Menu")

The left bar houses all of the groups, and each group can be expanded to see the snippets within them. The `Content` can be changed to Plain Text, Picture, JavaScript, and some others. The big white text box is your outputted message, or snippet; you can add values like dates, fill-ins, and cursor movements with the dropdowns at the top of the section. `Abbreviation` is the input, so when you type this prefixed by the delimiter it will turn into the snippet. The delimiter is set in the group, so you shouldn't add it to the abbreviation.

You can hide the application from your doc and just have it show in the top menu bar which is nice. Another cool feature is receiving a notification whenever you type out a snippet instead of using the abbreviation. It's a nice reminder that I can save time by using the app.

## TexExpander Uses

The most obvious use is creating shortcuts for frequently used terms. I have my phone number (`;phone`), address (`;home`), email (`;em`), and various other personal bits of information set up with abbreviations.

### Emojis

I've also set up a Slack-like emoji system I can use in other applications. Surrounding an emoji term with colons will create that emoji. For example, `:eyes:` -> 👀, `:triumph:` -> 😤, and `:joy:` -> 😂. I only added my frequently used emojis, but you can subscribe to a free, premade list with all the emojis if you don't want to go through the work of picking and choosing.

### Clipboard Macros

There's some cool functionality you can do with the `clipboard` feature, which let's you use whatever you have copied. The TextExpander website suggests using it for various business-y things (When writing an email, if you don’t want to misspell the first name of the person your emailing, copy/paste their first name!), but that's not very useful for someone who rarely communicates to people. I found some cool uses with the JavaScrirpt functionality.

![text-expander-clipboard](/media/textexpander_fun.gif "TextExpander Clipboard")

Both of these are just for fun and the memes associated with them are super outdated, but I use them nonetheless. The [_ratchet clap_](https://knowyourmeme.com/memes/clap-emoji-%F0%9F%91%8F) macro is great for sarcastically emphasizing a point, and the [_mocking SpongeBob_](https://knowyourmeme.com/memes/mocking-spongebob) macro is used for... well... mocking.

The code for `;clap` (_Content: JavaScript_):

```javascript
var str = (TextExpander.pasteboardText).split(" ");
var result = "";

for( i = 0; i < str.length - 1; i++) {
    result += str[i] + " " + String.fromCodePoint(0x1F44F) + " ";
}

result += str[str.length-1]
```

The code for `;mock` (_Content: JavaScript_):

```javascript
var str = (TextExpander.pasteboardText)
var result = "";
var counter = 0

for( i = 0; i < str.length - 1; i++) {
    if (str[i] == " ") {
        result += str[i];
    } else {
        if (counter % 2) {
            result += str[i].toUpperCase()
        } else {
            result += str[i].toLowerCase()
        }
        counter++
    }
}
result += str[str.length-1]
```

### JSON

The clipboard functionality can also be used for pretty-printing JSON.

![text-expander-json](/media/textexpander_json.gif "TextExpander JSON")

The code for `;json` (_Content: JavaScript_):

```javascript
JSON.stringify(%clipboard, null, 2);
```

- - -

I'm still pretty new to TextExpander, but I'm pretty happy with it so far. I'm planning on adding some trash-talking macros so I can flame people in League of Legends without actually typing the whole thing out.
