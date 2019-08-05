// import { CSS_CLASSES, STRINGS } from './constants';
import { throwStatement } from '@babel/types';
import { validateNodeType } from '../../global/js/util';

class Tabs {
  static instances = new WeakMap();

  static get cssClasses() {
    // return CSS_CLASSES;
  }

  static get strings() {
    return {
      INIT_SELECTOR: '.ray-tabs'
    };
  }

  static create(element, options) {
    return this.instances.get(element) || new this(element, options);
  }

  static createAll(target = document, _options = {}) {
    // Finds all instances of select on the document or within a given element and instantiates them.
    const options = {
      initSelector: this.strings.INIT_SELECTOR,
      ..._options
    };

    validateNodeType(target);

    const selects = Array.from(target.querySelectorAll(options.initSelector));
    selects.forEach(select => this.create(select, options));
  }

  constructor(root) {
    this.root = root;
    console.log(root);
    root.addEventListener('click', event => {
      console.log(event.target);
      if (event.target.dataset.target) {
      }
    });
  }
}

export default Tabs;
