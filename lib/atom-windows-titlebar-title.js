'use babel'

export default class AtomWindowsTitlebarTitleBar {
   constructor(){
      this.buildTitleBar()
      setTimeout(() => { this.addEvents() }, 0)
   }
   addEvents(){
      var browserWindow = atom.getCurrentWindow()
      this.controls = {
         minimize: this.titlebar.querySelector('.control-minimize'),
         maximize: this.titlebar.querySelector('.control-maximize'),
         close: this.titlebar.querySelector('.control-close')
      }

      this.controls.minimize.addEventListener('click', function(){
         browserWindow.minimize()
      })

      this.controls.maximize.addEventListener('click', function(){
         browserWindow.isMaximized()
            ? browserWindow.unmaximize()
            : browserWindow.maximize()
      })

      this.controls.close.addEventListener('click', function(){
         browserWindow.close()
      })
   }
   buildTitleBar(){
      this.titlebar = document.createElement('div')
      this.titlebar.setAttribute('class', 'atom-windows-titlebar-title-container')
      this.titlebar.innerHTML += this.buildIcon() + this.buildTitle() + this.buildControls()
      document.querySelector('.workspace').prepend(this.titlebar)
   }

   buildIcon(){
      return `<div class="icon">[]</div>`
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
      return `<div class="title">Test Some folder!</div>`
   }
}
