# Atom Windows Titlebar

The titlebar replacement for Atom on Windows 10

## Matches titlebar with Theme
![Theme](https://raw.githubusercontent.com/sean-codes/atom-windows-titlebar/master/example/example_theme.gif)

## Keeps Default Menu (Use alt key to show/hide)
![Menu](https://raw.githubusercontent.com/sean-codes/atom-windows-titlebar/master/example/example_menu.gif)

## How it works
You must click the toggleFrameButton to enable/disable windows default frame!

### This file is found:

    C:\Users\{username}\AppData\Local\atom\app{version}\resources\app\src\main-process\atom-window.js

### Around line 58-60 inside the options add a value `frame: false,`

    options = {
        frame: false, // Add this line!
        show: false,
        title: 'Atom',
        
