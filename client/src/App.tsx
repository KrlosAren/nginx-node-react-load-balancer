import { useEffect, useState } from 'react';
import { fetchApi } from '../utils/fetch';
import './App.css';

export interface StateType {
  data?: any;
  error?: any;
}

function App() {
  const [state, setState] = useState<StateType>({});

  useEffect(() => {
    fetchApi({
      url: 'http://node.localhost/',
      method: 'get',
      body: {},
    })
      .then((resp) => {
        setState({
          ...state,
          data: resp,
        });
      })
      .catch((err) => {
        console.log(err);
        setState({
          ...state,
          error: err,
        });
        throw err;
      });
  }, []);

  return (
    <div>
      {state.error && <div>{state.error.message}</div>}
      {state.data && <div>{JSON.stringify(state.data)}</div>}
    </div>
  );
}

export default App;
