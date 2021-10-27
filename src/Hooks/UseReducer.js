import "./styles.css";

import {useRef, useReducer} from 'react';
export default function App() {

    const inputRef = useRef();
    const [items, dispatch] = useReducer((state, action) => {
      switch (action.type) {
        case 'add':
          return [
            ...state,
            {
              id: state.length,
              name: action.name
            }
          ];
        default:
          return state;
      }
    }, []);
  
    function handleSubmit(e) {
      e.preventDefault();
      dispatch({
        type: 'add',
        name: inputRef.current.value
      });
      inputRef.current.value = '';
    }
    
    console.log(items);

  return (
    <div className="App">
     <form >
        <input ref={inputRef} />
        <button onClick={handleSubmit}>Button</button>
      </form>
      
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
