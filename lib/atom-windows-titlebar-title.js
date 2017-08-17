'use babel'
const path = require('path');

export default class AtomWindowsTitlebarTitleBar {
   constructor(){
      this.buildTitleBar()
      setTimeout(() => { this.addEvents() }, 0)
   }
   addEvents(){
      this.browserWindow = atom.getCurrentWindow()
      this.controls = {
         minimize: this.titlebar.querySelector('.control-minimize'),
         maximize: this.titlebar.querySelector('.control-maximize'),
         close: this.titlebar.querySelector('.control-close')
      }

      this.controls.minimize.addEventListener('click', () => {
         this.browserWindow.minimize()
      })

      this.controls.maximize.addEventListener('click', ()=>{
         this.browserWindow.isMaximized()
            ? this.browserWindow.unmaximize()
            : this.browserWindow.maximize()
      })


      this.maxUnMaxIcon()
      window.addEventListener('resize', () => { this.maxUnMaxIcon() })

      this.controls.close.addEventListener('click', () => {
         this.browserWindow.close()
      })
   }

   maxUnMaxIcon(){
      this.browserWindow.isMaximized()
         ? this.controls.maximize.firstChild.classList.add('maximized')
         : this.controls.maximize.firstChild.classList.remove('maximized')
   }

   buildTitleBar(){
      this.titlebar = document.createElement('div')
      this.titlebar.setAttribute('class', 'atom-windows-titlebar-title-container')
      this.titlebar.innerHTML += this.buildIcon() + this.buildTitle() + this.buildControls()
      document.querySelector('.workspace').prepend(this.titlebar)
   }

   buildIcon(){
      return `
         <div class="favicon">
            <img src="${path.join(__dirname, '../atom.png')}"/>
         </div>`
   }

   buildControls(){
      return `
         <div class="controls">
            <div class="control control-minimize"><div class="control-icon-minimize"></div></div>
            <div class="control control-maximize"><div class="control-icon-maximize"></div></div>
            <div class="control control-close"><div class="control-icon-close"></div></div>
         </div>
      `
   }

   buildTitle(){
      return `<div class="title">Atom</div>`
   }
}
