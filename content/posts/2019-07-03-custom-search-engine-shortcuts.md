---
template: post
title: custom search engine shortcuts
slug: custome-search-engines
draft: false
date: 2019-07-05T03:45:00.000Z
description: >-
  Sometimes we want our searches to be more specific than Google. Maybe we want
  to search something on wikipedia, netflix,  or google translate. Maybe you
  think it takes one-too-many clicks to search for a site, go to it, and search
  from there. Here's the solution.
category: productivity
tags:
  - productivity
---
I tried using DuckDuckGo for a couple days (privacy, unbiased results, control, blah blah blah), but I found preceding every search with `!g`. DuckDuckGo has these things called _!Bangs_, which are "shortcuts that quickly take you to search results on other sites", according to [their website](https://duckduckgo.com/bang). For example, if I want to search "dog" on Wikipedia, I can type `!w dog` in the search field at the top of my browser, and it will take me to the [search result of dogs on wikipedia](https://en.wikipedia.org/wiki/Dog).

_!Bangs_ were the only thing stopping me from switching back to Google search... But then I found out you can homebrew your own bangs with Google and I instantly switched back.

## Creating Custom Search Engines

In Google Chrome, go to settings (⌘ + ,), scroll down to _Search Engine_, and select _Manage Search Engines_.

In the _Other search engines_ section, you might see a bunch of random stuff. These are websites automatically adding them for you. Feel free to delete these so there's no conflicts when you add your own. When you select **Add**, a modal will pop up:

![add search engine](/media/custom_search_engine.png "Add New Search Engine")

There's 3 fields with sort of crappy names, but here's what they mean:

* **Search Engine**: This is the name of your custom search. You never type this in, but it will display after you've activated the custom search.
* **Keyword**: This is your shortcut to activate the custom search. I personally follow the same structure as DuckDuckGo's _!Bangs_ by preceding the shortcut with a `!`, but it can be whatever you want. I suggest picking a short-ish term that is related to the site you're querying.
* **URL with %s in place of query**: This field requires a little work. Go to the site you want to make a custom search for and make a search. You'll most likely see your search reflected in the URL. Take this URL and substitute `%s` with the term that you searched.

Here's an example for searching for subreddits on Reddit:

![add search engine example](/media/custom_search_example.png "New Search Engine Example")

To use this custom search, type the **keyword** into your browser search bar, hit _space_ or _tab_, and then type your query.

![using custom search gif](/media/custom_search.gif "Using Custom Search")

## My Custom Search Engines

Here's a list of the custom searches I currently have set up (along with the config):

| Search Engine | Keyword | URL |
|:---|:---|:---|
| Reddit | !sr | `https://www.reddit.com/r/%s` |
| Google Drive | !drive | `https://drive.google.com/drive/search?q=%s` |
| Google Translate (to French) | !2fr | `https://translate.google.com/#en/fr/%s` |
| Netflix | !netflix | `https://www.netflix.com/search?q=%s` |
| YouTube | !yt | `https://www.youtube.com/results?search_query=%s` |
| Genius (Lyrics) | !genius | `https://genius.com/search?q=%s` |
| Thesaurus | !t | `https://www.thesaurus.com/browse/%s` |
| Google Maps | !m | `https://www.google.com/maps/search/%s` |

If you want more inspiration (or keyword suggestions), check out [DuckDuckGo's !Bangs page](https://duckduckgo.com/bang) for a very, very long list of shortcuts they have set up.
