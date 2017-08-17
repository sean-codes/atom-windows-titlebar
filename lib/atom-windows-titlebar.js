'use babel';

import AtomWindowsTitlebarView from './atom-windows-titlebar-view';
import AtomWindowsTitlebarMenu from './atom-windows-titlebar-menu';
import AtomWindowsTitlebarTitle from './atom-windows-titlebar-title';
import AtomWindowsTitlebarFrame from './atom-windows-titlebar-frame';
import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,

  activate(state) {
    this.atomWindowsTitlebarMenu = new AtomWindowsTitlebarMenu();
    this.atomWindowsTitlebarTitle = new AtomWindowsTitlebarTitle();
    this.atomWindowsTitlebarFrame = new AtomWindowsTitlebarFrame();

    this.subscriptions()
  },
  subscriptions() {
     // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
     this.subscriptions = new CompositeDisposable();

     // Register command that toggles this view
     this.subscriptions.add(atom.commands.add('atom-workspace', {
        'atom-windows-titlebar:toggle': () => this.toggle()
     }));
  },
  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomWindowsTitlebarView.destroy();
  },

  serialize() {

  },

  toggle() {
    console.log('AtomWindowsTitlebar was toggled!');
  }
};
