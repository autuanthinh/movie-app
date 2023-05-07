import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import configFontAwesome from './config/configFontAwesome';
import { store } from './store';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-loading-skeleton/dist/skeleton.css';
import 'styles/index.scss';

configFontAwesome();

// Create Persist Store
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
