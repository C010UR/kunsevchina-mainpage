class App {
  _loaded = false;
  _options = {};

  constructor(options) {
    this._options = options;
  }

  load() {
    this._updateTheme();
  }

  loadOnReady() {
    return () => {
      if (this._loaded) {
        return;
      }

      this._configureApp();
      this._addToggleDarkModeListeners();
      this._addLinks();

      this._loaded = true;
    };
  }

  _configureApp() {
    let appNameNode = document.querySelector('#app-name');

    if (appNameNode && this._options.name) {
      appNameNode.innerHTML = '';
      appNameNode.appendChild(document.createTextNode(this._options.name));
    }

    let appLogoNode = document.querySelector('#app-logo');

    if (appLogoNode && this._options.logo) {
      appLogoNode.src = this._options.logo;
    }
  }

  _addLinks() {
    let containerNode = document.querySelector('#item-container');

    if (!containerNode) {
      return;
    }

    let linkNode = containerNode.querySelector(`#item-template-${this._options.style}`);
    let categoryNode = containerNode.querySelector('#item-category');

    if (!linkNode || !categoryNode) {
      return;
    }

    let categoryNodeClone = categoryNode.cloneNode();

    for (const categoryChildNode of categoryNode.children) {
      if (categoryChildNode.id.includes('item-category')) {
        categoryNodeClone.appendChild(categoryChildNode);
      }
    }

    containerNode.innerHTML = '';

    if (this._options.categories && this._options.categories.length > 0) {
      for (const category of this._options.categories) {
        containerNode.appendChild(this._createCategoryNode(category, categoryNodeClone, linkNode));
      }
    }
  }

  _createCategoryNode(category, categoryTemplate, linkTemplate) {
    let node = categoryTemplate.cloneNode(true);

    let nameNode = node.querySelector('#item-category-name');
    if (nameNode && category.name) {
      nameNode.innerHTML = '';
      nameNode.appendChild(document.createTextNode(category.name));
    }

    if (category.links && category.links.length > 0) {
      for (const link of category.links) {
        node.appendChild(this._createLinkNode(link, linkTemplate));
      }
    }

    return node;
  }

  _createLinkNode(link, template) {
    let node = template.cloneNode(true);

    let nameNode = node.querySelector('#item-name');
    if (nameNode && link.name) {
      nameNode.innerHTML = '';
      nameNode.appendChild(document.createTextNode(link.name));
    }

    let descriptionNode = node.querySelector('#item-description');
    if (descriptionNode) {
      if (!link.description) {
        descriptionNode.remove();
      } else {
        descriptionNode.innerHTML = '';
        descriptionNode.appendChild(document.createTextNode(link.description));
      }
    }

    let hrefNode = node.querySelector('#item-link');
    if (hrefNode && link.href) {
      hrefNode.href = link.href;
    }

    let imageNode = node.querySelector('#item-background-image');
    if (imageNode) {
      if (!link.image) {
        imageNode.remove();
      } else {
        imageNode.style = `background-image: url('${link.image}')`;
      }
    }

    imageNode = node.querySelector('#item-image');
    if (imageNode) {
      if (!link.image) {
        imageNode.remove();
      } else {
        imageNode.src = link.image;
      }
    }

    let iconContainerNode = node.querySelector('#item-icon-container');
    if (iconContainerNode) {
      if (!link.icon) {
        iconContainerNode.remove();
      } else {
        iconContainerNode.classList.remove('bg-cyan-500');

        if (link.iconBackground) {
          iconContainerNode.classList.add(`bg-${link.iconBackground}`);
        }

        if (link.iconDarkBackground) {
          iconContainerNode.classList.add(`dark:bg-${link.iconBackground}`);
        }

        let iconNode = iconContainerNode.querySelector('#item-icon');

        if (iconNode && link.icon) {
          iconNode.classList.remove('text-white');
          iconNode.classList.remove('fa-rotate');
          iconNode.classList.add(link.icon);

          if (link.iconColor) {
            iconNode.classList.add(`text-${link.iconColor}`);
          }

          if (link.iconDarkColor) {
            iconNode.classList.add(`dark:text-${link.iconDarkColor}`);
          }
        }
      }
    }

    return node;
  }

  _updateTheme() {
    // Set default dark mode
    if (!('dark-mode' in localStorage)) {
      localStorage.setItem('dark-mode', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'true' : 'false');
    }

    // Set dark mode on page load
    if (localStorage.getItem('dark-mode') === 'true') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  _addToggleDarkModeListeners() {
    let items = document.querySelectorAll('.light-switch');

    for (const item of items) {
      item.addEventListener('click', () => {
        console.log('test');
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('dark-mode', 'false');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('dark-mode', 'true');
        }
      });
    }
  }
}

export default App;
