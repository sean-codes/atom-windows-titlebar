'use babel'
fs = require('fs')

export default class AtomWindowsTitlebarFrame {
   constructor(){
      this.listenForSettingChange()
   }

   listenForSettingChange(){
      atom.config.onDidChange('atom-windows-titlebar.hideFrame', (e) => {
        this.toggleFrame(e.newValue)
      })
   }

   toggleFrame(toggle){
      // This will go into atoms js file and set frame to false
      // Very dangerous and unprofessional
      var that = this
      var appSourcePath = process.resourcesPath + '/app/src/main-process/atom-window.js'
      fs.readFile(appSourcePath, 'utf8', (err, content) => {
         content = toggle
            ? that.insertChange(content)
            : that.removeChange(content)

         fs.writeFile(appSourcePath, content, 'utf8', () => {})

         that.askToRestart()
      })
   }

   removeChange(content){
      return content.replace('frame: false,', '')
   }

   insertChange(content){
      if(content.includes('frame: false,')) return content
      return content.replace('options = {', 'options = { frame: false,')
   }

   askToRestart(){
      var restart = atom.confirm({
         message: "Would you like to restart Atom now?",
         detailedMessage: "You must restart atom to show/hide the style titlebar",
         buttons:{
            Yes: function(){ atom.restartApplication() },
            No: function(){ console.log('You need to restart atom! ')}
         }
      })
   }

   deactivate(){
     this.toggleFrame(false)
   }
}
