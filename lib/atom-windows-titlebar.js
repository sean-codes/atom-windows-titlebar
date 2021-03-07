'use babel'

import AtomWindowsTitlebarMenu from './atom-windows-titlebar-menu'
import AtomWindowsTitlebarTitle from './atom-windows-titlebar-title'
import { CompositeDisposable } from 'atom'

export default {
  subscriptions: null,

  activate(state) {
    this.atomWindowsTitlebarMenu = new AtomWindowsTitlebarMenu()
    this.atomWindowsTitlebarTitle = new AtomWindowsTitlebarTitle()
  },

  deactivate() {
    this.atomWindowsTitlebarMenu.deactivate()
    this.atomWindowsTitlebarTitle.deactivate()
  }
}
