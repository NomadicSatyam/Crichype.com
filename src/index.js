import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider,BlogProvider,NewsProvider} from './Components/stateprovider/Stateprovider';
import reducer,{initialState} from './Components/reducer/Reducer'; 

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BlogProvider>
        <NewsProvider>
        <App />
        </NewsProvider>
      </BlogProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



