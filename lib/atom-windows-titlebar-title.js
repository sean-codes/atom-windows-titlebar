'use babel'

export default class AtomWindowsTitlebarTitleBar {
   constructor(){
      this.buildTitleBar()
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
            <div class="control">-</div>
            <div class="control">[]</div>
            <div class="control">X</div>
         </div>
      `
   }

   buildTitle(){
      return `<div class="title">Test Some folder!</div>`
   }
}
