'use babel'
fs = require('fs')

export default class AtomWindowsTitlebarFrame {
   constructor(){
      this.listenForSettingChange()
   }

   listenForSettingChange(){
      atom.config.onDidChange('atom-windows-titlebar.hideFrame', this.toggleFrame)
   }

   toggleFrame(){
      // This will go into atoms js file and set frame to false
      // Very dangerous and unprofessional
      var appSourcePath = process.resourcesPath + '/app/src/main-process/atom-window.js'
      fs.readFile(appSourcePath, 'utf8', function(err, contents){
         contents = contents.includes('frame: false')
         ? contents.replace('frame: false,', '')
         : contents.replace('options = {', 'options = { frame: false,')

         fs.writeFile(appSourcePath, contents, 'utf8', () => {})
      })
   }
}
