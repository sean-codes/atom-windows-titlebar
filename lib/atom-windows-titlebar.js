'use babel';

import AtomWindowsTitlebarView from './atom-windows-titlebar-view';
import { CompositeDisposable } from 'atom';

export default {

  atomWindowsTitlebarView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomWindowsTitlebarView = new AtomWindowsTitlebarView(state.atomWindowsTitlebarViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomWindowsTitlebarView.getElement(),
      visible: false
    });

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
    return {
      atomWindowsTitlebarViewState: this.atomWindowsTitlebarView.serialize()
    };
  },

  toggle() {
    console.log('AtomWindowsTitlebar was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
