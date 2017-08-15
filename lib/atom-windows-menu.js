'use babel'

export default class AtomWindowsTitlebarMenu {

   constructor(){
      var menus = JSON.parse(menuData)
      var container = document.querySelectorAll('.container')[0]
      var init = function(){
         for(var menu of menus){
            var menuHTML = buildMenu(menu)
            container.innerHTML += menuHTML
         }
         setTimeout(listenMenu, 0)
      }
   }
   listenMenu(){
      var menuItems = document.querySelectorAll('.submenu-item')
      for(var i = 0; i < menuItems.length; i++){
         menuItems[i].addEventListener('click', function(){
            console.log('cats')
         })
      }
   }
   buildMenu(menu){
      var submenuHTML = buildSubMenuHTML(menu.submenu)
      return `
         <div class='menu'>
            <label>${menu.label}</label>
            ${submenuHTML}
         </div>`
   }
   buildSubMenuHTML(submenu){
      if(!submenu) return ''
      var html = ''
      for(var item of submenu){
         // Skip on separator
         if(item.type == 'separator'){ html += `<hr>`; continue }

         html += `
            <div class='submenu-item ${item.submenu ? 'has-submenu' : ''}'>
               ${item.label}
               ${buildSubMenuHTML(item.submenu)}
            </div>`
      }
      return `<div class='submenu'>${html}</div>`
   }
}
