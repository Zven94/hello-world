import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Greeting from './components/Greeting';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Greeting />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);