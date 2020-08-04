import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';
import MyPage from './MyPage';
import AppContainer from './AppContainer';

let appDOMElement = document.getElementById('app-components'); // DOM element
const exportedComponents = {
  'MyPage': MyPage,
  'TestComponent': TestComponent
};

// ReactDOM.render(<AppContainer />, appDOMElement);

function mountFn ({ element, componentName, appName, props }) {
  console.log(element, appName, componentName);
  appDOMElement = element;
  if (componentName) {
    ReactDOM.render(
      React.createElement(exportedComponents[componentName], props),
      appDOMElement)
  } else {
    ReactDOM.render(
      <AppContainer { ...props } />,
        appDOMElement)
  }
}

function unMountFn (element) {
  ReactDOM.unmountComponentAtNode(element);
}

export {
  mountFn,
  unMountFn,
}
