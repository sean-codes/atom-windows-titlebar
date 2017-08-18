# Atom Windows Titlebar

The titlebar replacement for Atom on Windows 10

## Matches titlebar with Theme
![Theme](https://raw.githubusercontent.com/sean-codes/atom-windows-titlebar/master/example/example_theme.gif)

## Keeps Default Menu (Use alt key to show/hide)
![Menu](https://raw.githubusercontent.com/sean-codes/atom-windows-titlebar/master/example/example_menu.gif)

## How it works
You need to enable/disable windows default frame! Please do this automatically or manually. 
> Hint: Don't forget to restart atom!

### AUTO:
#### Go to this package settings and check to hide frame
![Setting](https://raw.githubusercontent.com/sean-codes/atom-windows-titlebar/master/example/example_settings.png)

### MANUAL:
#### Find this file:

    C:\Users\{username}\AppData\Local\atom\app{version}\resources\app\src\main-process\atom-window.js

#### Around line 58-60 inside the options add a value `frame: false,`

    options = {
        frame: false, // Add this line!
        show: false,
        title: 'Atom',
