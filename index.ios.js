import React, { AppRegistry } from 'react-native';
import { Provider } from 'react-redux/native';
import App from './src/containers/App';
import configStore from './src/store/configStore';

const store = configStore();

var lesspriceApp = React.createClass({
  render () {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
});

AppRegistry.registerComponent('lesspriceApp', () => lesspriceApp);
