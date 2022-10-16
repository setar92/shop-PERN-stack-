import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserStore } from './store/user-store';
import { DeviceStore } from './store/device-store';

const Contex = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Contex.Provider value={{
    user: new UserStore(),
    device: new DeviceStore(),
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Contex.Provider>
);


export { Contex };