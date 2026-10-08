================================================================================
                       TWT SAVES (twtsaves.com)
            Official Public Client & Media Extraction Toolkit
================================================================================

Official Website : https://twtsaves.com/
Public Repo      : https://github.com/jod-prime/twtsaves.com
License          : Open Client Toolkit / Web Utility

--------------------------------------------------------------------------------
1. PROJECT OVERVIEW
--------------------------------------------------------------------------------
TWT Saves is a high-speed, ad-free web utility for downloading and archiving 
publicly accessible videos, animated GIF loops, and Spaces audio from Twitter 
and X.com in Full HD 1080p, 720p, and SD MP4 resolutions.

Key Highlights:
* 1080p Full HD Video Downloads (adaptive HLS stream extraction)
* 100% Watermark-Free & Original Bitrate
* Direct Apple iOS Camera Roll integration for iPhone & iPad Safari
* Twitter Spaces & Audio Extraction into high-clarity MP3
* Looping GIF to universal MP4 conversions
* Zero registration, accounts, or password requirements
* 100% Free & Unlimited Usage

--------------------------------------------------------------------------------
2. DIRECT DOWNLOADS IN THIS REPOSITORY
--------------------------------------------------------------------------------
This public repository provides direct downloads of the official client toolkits:

[A] Chrome & Brave Browser Extension:
    File: downloads/twt-saves-extension.zip
    How to install:
    1. Download and unzip "twt-saves-extension.zip"
    2. Open Chrome/Brave/Edge and go to chrome://extensions
    3. Turn ON "Developer mode" in the top right
    4. Click "Load unpacked" and select the unzipped folder
    5. An instant "Download HD" button will now appear under every video on X/Twitter!

[B] Apple iOS Siri Shortcut:
    File: downloads/TWT-Saves.shortcut
    How to install:
    1. Download "TWT-Saves.shortcut" on your iPhone or iPad
    2. Tap to add it to your Apple Shortcuts app
    3. In the Twitter/X app, tap Share -> Share via... -> TWT Saves
    4. The video will be saved directly into your Photos Camera Roll!

--------------------------------------------------------------------------------
3. THE "TWT" URL PREFIX TRICK
--------------------------------------------------------------------------------
Save any video without leaving Twitter or copying links manually:
Simply add "twtsaves.com/" in front of any tweet URL in your browser address bar
and press Enter!

Example:
  Original : https://x.com/sports/status/1838848483
  TWT Trick: twtsaves.com/https://x.com/sports/status/1838848483

--------------------------------------------------------------------------------
4. GITHUB PAGES WEB CLIENT & PREVIEW
--------------------------------------------------------------------------------
This repository includes a standalone web client (index.html, styles.css, app.js).
You can preview it directly in your browser or host it via GitHub Pages:

To enable GitHub Pages:
1. Go to repository Settings -> Pages
2. Source: Deploy from a branch
3. Branch: main, Folder: / (root)
4. Save

When a user pastes a Twitter link on the GitHub client and clicks "Download", 
it automatically validates the URL and redirects to:
https://twtsaves.com/?url=<tweet_url>

On twtsaves.com, the video extraction triggers automatically, landing the user 
directly in the resolution selection section (1080p, 720p, etc.) for an 
effortless, instant download.

--------------------------------------------------------------------------------
5. SECURITY & CODE PRIVACY
--------------------------------------------------------------------------------
This public repository contains only the front-facing client interfaces, 
documentation, and standalone browser tools. No proprietary backend code, 
scrapers, API keys, or private server infrastructure are included. All media 
processing is routed safely to the high-performance infrastructure at 
https://twtsaves.com.

--------------------------------------------------------------------------------
6. DISCLAIMER
--------------------------------------------------------------------------------
TWT Saves is an independent third-party web tool and is not affiliated with, 
endorsed by, or sponsored by X Corp. or Twitter. All trademarks and logos 
belong to their respective owners.
================================================================================
