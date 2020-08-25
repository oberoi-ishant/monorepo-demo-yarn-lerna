import React from 'react';
export default class TestComp extends React.Component {
  constructor(props) {
    super(props);
    this.appOrComponentRef = null;
  }

  getElement({ elemName }) {
    let packOne = document.getElementById(elemName);
    if (!packOne) {
      packOne = document.createElement('div');
      packOne.id = elemName;
      const rootApp = document.getElementById('app');
      rootApp.appendChild(packOne);
    }
    return packOne;
  }

  loadAppOrComponent(e, { componentName, appName, props }) {
    e.preventDefault();
    import('@monorepo-demo/app-components')
      .then(module => {
        this.appOrComponentRef = module;
        const element = componentName
          ? this.getElement({ elemName: componentName })
          : this.getElement({ elemName: appName });
        this.appOrComponentRef.mountFn({
          element,
          componentName,
          appName,
          props
        });
        element.scrollIntoView({ behavior: "smooth" });
    });
  }

  // loadAppOrComponent1({ componentName, appName, props }) {
  //   import('@monorepo-demo/app-components')
  //     .then(module => {
  //       this.appOrComponentRef = module;
  //       const element = componentName
  //         ? this.getElement({ elemName: componentName })
  //         : this.getElement({ elemName: appName });
  //       this.appOrComponentRef.mountFn({
  //         element,
  //         componentName,
  //         appName,
  //         props
  //       });
  //   });
  // }

  unloadAppOrComponent(e, name) {
    e.preventDefault();
    const elem = this.getElement({elemName: name});
    if (this.appOrComponentRef) {
      this.appOrComponentRef.unMountFn(elem);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  render () {
    return (
      <div class="comp-test-core">
        <h2 class="heading-secondary">Component: App Core</h2>
        <p class="text u-margin-bottom-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Integer et tempus orci. Cras diam magna, l
          acinia vel posuere quis, bibendum vitae lorem.
          Vestibulum ultricies odio nibh, non viverra mauris
          laoreet id. Morbi nec sapien nec elit euismod auctor
          ut eu justo. Nulla eros velit, euismod sed velit vel,
          pretium consectetur ipsum. Interdum et malesuada fames
          ac ante ipsum primis in faucibus.
        </p>
        <div class="comp-test-core__btns">
          <a
            class="btn btn--green u-margin-right-medium"
            href="#" onClick={ (e) => this.loadAppOrComponent(e,
              {
                componentName: 'MyPage',
                props: {
                  name: 'MyPageComponent',
                  parent: 'App Core'
              }})
            }>
            Load MyPage
          </a>
          <a class="btn btn--green" href="#" onClick={ (e) => this.unloadAppOrComponent(e, 'MyPage') }>UnMount MyPage</a>
        </div>
        <section class="subapp u-margin-medium" id="MyPage"></section>
      </div>
    );
  }
}