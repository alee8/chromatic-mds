/* eslint-disable max-classes-per-file */
import { TABLEAU_API } from '~mds/blocks/Tableau/utils';

class MockScriptElement {
  constructor() {
    this.listeners = { error: [], load: [] };
  }

  addEventListener(type, listener) {
    if (type in this.listeners) {
      this.listeners[type].push(listener);
    }
  }

  fireEvent(event) {
    if (event.type in this.listeners) {
      for (const listener of this.listeners[event.type]) {
        listener(event);
      }
    }
  }
}

export default function createScriptTag(src, onloadCallback, onerrorCallback) {
  const scriptTag = new MockScriptElement();
  scriptTag.addEventListener('load', onloadCallback);
  scriptTag.addEventListener('error', onerrorCallback);
  setTimeout(() => {
    if (src === 'failure') {
      scriptTag.fireEvent({ type: 'error' });
      return;
    }
    if (src === TABLEAU_API) {
      window.tableau = { Viz: class { } };
    }
    scriptTag.fireEvent({ type: 'load' });
  }, 1);
  return scriptTag;
}
