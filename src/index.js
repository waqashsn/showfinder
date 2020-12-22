import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import Show from './components/Show'
import reportWebVitals from './reportWebVitals';
import { configureStore } from './store/configureStore';
import { getShowsAsync, displayShow, closeShow, setError } from './actions/showsActions';

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App keyword="game thrones" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// store.dispatch(getShowsAsync('x files'));
// store.dispatch(getShowsAsync('news'));
// store.dispatch(displayShow({ showId: "X files" }));
// store.dispatch(setError("this is error"))
// store.dispatch(closeShow());
// store.dispatch(getShowsAsync('bbc'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
