# Atom Windows Titlebar

The titlebar replacement for Atom on Windows 10

## Matches titlebar with Theme
![Theme](https://raw.githubusercontent.com/sean-codes/atom-windows-titlebar/master/example/example_theme.gif)

## Keeps Default Menu (Use alt key to show/hide)
![Menu](https://raw.githubusercontent.com/sean-codes/atom-windows-titlebar/master/example/example_menu.gif)

## How it works
You need to enable/disable windows default frame!
> Atom switched back to ASAR and this is a bit scary. We need an option to disable windows frame from atom for Windows Users. [Pull Request](https://github.com/atom/atom/pull/15871)

### 1. Terminal/CMD to your atom/app-X.XX.X folder
run `cd C:\Users\{user}\AppData\Local\atom\app-{version}`

### 2. npm install asar
run `npm install asar`

### 3. node toggleframe.js
run `node toggleframe.js`
