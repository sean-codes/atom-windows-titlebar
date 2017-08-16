'use babel'

export default class AtomWindowsTitlebarMenu {

   constructor(){
      this.menus = atom.menu.packageManager.menuManager.template
      this.container = document.createElement('div')
      this.container.setAttribute('class', 'atom-windows-titlebar-container')
      document.querySelector('.workspace').prepend(this.container)

      for(var menu of this.menus){
         var menuHTML = this.buildMenu(menu)
         this.container.innerHTML += menuHTML
      }
      setTimeout(this.listenMenu, 0)
   }

   listenMenu(){
      var menuItems = document.querySelectorAll('.atom-windows-titlebar-container .submenu-item')
      for(var i = 0; i < menuItems.length; i++){
         menuItems[i].addEventListener('mousedown', function(){
            var target = atom.views.getView(atom.workspace.getActiveTextEditor())
            var command = this.getAttribute('data-command')
            atom.commands.dispatch(target, command )
         })
      }
   }

   buildMenu(menu){
      var submenuHTML = this.buildSubMenuHTML(menu.submenu)
      return `
         <div class='menu'>
            <label>${menu.label.split('&').join('')}</label>
            ${submenuHTML}
         </div>`
   }

   buildSubMenuHTML(submenu){
      if(!submenu) return ''
      var html = ''
      for(var item of submenu){
         if(item.type == 'separator'){ html += `<hr>`; continue }
         console.log(item)
         html += `
            <div class='submenu-item ${item.submenu ? 'has-submenu' : ''}' data-command="${item.command}">
               <span class="label">${item.label.split('&').join('')}</span>
               ${this.getCommandKeyBind(item.command)}
               ${this.buildSubMenuHTML(item.submenu)}

            </div>`
      }
      return `<div class='submenu'>${html}</div>`
   }

   getCommandKeyBind(command){
      var keys = atom.menu.packageManager.menuManager.keymapManager.keyBindings
      var keymap = ''
      for(var key of keys){
         if(command && key.keystrokeArray.length == 1 && key.command == command){
            // Return 'cmd-shift-i' as 'Cmd-Shift-I'
            keymap = key.keystrokeArray[0].split('-').map(function(e){
               return e.slice(0, 1).toUpperCase() + e.slice(1, e.length).toLowerCase()
            }).join('-')
         }
      }

      return keymap == '' ? keymap : `<span class="keymap">${keymap}</span>`
   }
}
