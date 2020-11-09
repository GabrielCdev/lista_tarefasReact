import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

import axios from 'axios';

axios.get('https://minhastarefas-api.herokuapp.com/tarefas', {
  headers: { 'x-tenant-id': 'gabriel@hotmail.com' }
}).then(resposta => {
  // eslint-disable-next-line no-console
  console.log(resposta.data);
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
