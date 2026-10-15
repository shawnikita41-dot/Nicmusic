# Nic 🎧

A responsive, Spotify-inspired music player website built with HTML, CSS, and vanilla JavaScript. It is designed as a portfolio-friendly front-end project that runs in VS Code and can be deployed to GitHub Pages.

## Features

- Dark responsive layout for desktop, tablet, and mobile
- Play/pause, next/previous, shuffle, repeat, volume, and seek controls
- Search tracks, artists, albums, and moods
- Liked Songs / favorites saved in `localStorage`
- Album browsing and mood mixes
- Create playlists and add tracks to them
- Recently played history saved locally
- Lyrics panel with original demo placeholder lines
- Demo login/signup UI
- GitHub Pages-ready static files

## Project structure

```text
nic-music/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
```

## Run locally in VS Code

1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Create/open the `nic-music` folder in VS Code.
3. Install the **Live Server** extension (by Ritwick Dey), or use another static local server.
4. Right-click `index.html` and choose **Open with Live Server**.
5. The website opens in your browser. Keep an internet connection for the sample audio URLs and Google Fonts.

You can also open `index.html` directly, but Live Server gives a more realistic development workflow.

## About the demo audio and lyrics

The original demo tracks use public sample MP3 URLs from SoundHelix. Bollywood entries open the official Apple Music embedded player for the matching recording. Tap play in that player; full-song playback may require an Apple Music subscription. Do not upload commercial songs without permission.

The lyric lines in `script.js` are original placeholders written for this demo. If you replace them with actual song lyrics, only display lyrics you wrote or are licensed to use.

## Important authentication limitation

Login/signup is a **front-end demonstration only**. It stores only a demo profile name/email in the browser and does not verify passwords or provide secure accounts. Never use a real password in this demo. Real authentication needs a backend or an authentication service, proper password handling, and security rules. GitHub Pages is static hosting and cannot run your own server-side authentication code.

## Customize the tracks

Open `script.js` and edit the `tracks` array. Each track includes:
- `id`, `title`, `artist`, `album`
- `duration`, `seconds`
- `cover`, `symbol`, `mood`
- `audio` URL
- `lyrics` array

Use an audio URL that supports direct browser playback. For files stored in the project, you can use paths like `assets/my-track.mp3` (and add your own audio file to `assets/`).

## Publish with GitHub Pages

1. Create a new repository on GitHub, for example `nic-music`.
2. In VS Code, open the project folder and open **Terminal → New Terminal**.
3. Run the following commands (replace the URL with your repository URL):

```bash
git init
git add .
git commit -m "Build Nic music website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nic-music.git
git push -u origin main
```

If Git asks for your identity, configure it once:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

4. On GitHub, open the repository → **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then click **Save**.
7. Wait for the deployment to finish. Your website URL will look like:

`https://YOUR-USERNAME.github.io/nic-music/`

It can take a few minutes for the first deployment. If changes don't appear, check the **Actions** tab and refresh after deployment succeeds.

## Troubleshooting

- **No sound:** Try another sample, confirm internet access, and check browser volume. Some networks or browsers may block sample sources.
- **Git command not found:** Install Git from [git-scm.com](https://git-scm.com/) and restart VS Code.
- **Pages shows 404:** Confirm `index.html` is at the repository root and Pages is configured to use `main` / root.
- **Favorites reset:** Use the same browser and origin; browser storage is local to that browser/device.
- **Login is not secure:** This is expected for the demo; connect a real auth service for production.

## Suggested portfolio description

**Nic — Responsive Music Player Website**  
Built a responsive music streaming-style interface using HTML, CSS, and JavaScript. Implemented audio controls, searchable track listings, favorites, playlist management, recently played history, album browsing, and a lyrics panel. Used browser local storage for client-side persistence and deployed the static site with GitHub Pages.
