# Basics

  1. It is a complete state management tool with a single store as a central
     data store 

  2. It manages the state and return the updated state

  3. The actions have 2 properties types including a unique identifier and a payload
     which has data

  4. Dipatch - It is a built in react function that allows us to send actions to update
     the data

# Redux toolkit 

  1. Simplifies configuration of redux store 

  2. reduces boiler plate code 

  3. less packages to do things

  4. installation 

    a. npm i --save @reduxjs/toolkit react-redux

# Configure store with redux toolkit on store.js/ts file

  e.g
  import { configureStore } from '@reduxjs/toolkit'

  export const store = configureStore({
    reducer: {
      // add in created reducers
    }
  })

# Using Store 

  1. Import store to the root file which is typically the index.js/ts file 

  2. Import and use a Provider to connect our store to the application itself 

  3. Wrap the app using the Provider

  e.g
  import { store } from './store';
  import { Provider } from 'react-redux';

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )

# Implementing Features

  1. A design pattern for redux is to create a features folder which represents
     the different features we want to use redux store for state management 

  2. THe files themselves are going to handle the state mangement for the global
     store 

    e.g 
    import { createSlice } from "@reduxjs/toolkit";

    const initState = {
      count: 0,
    }

    export const counterSlice = createSlice({
      name: 'counter',
      initialState: initState,
      reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
      }
    })

    export const { increment, decrement } = counterSlice.actions;
    export default counterSlice.reducer;

      a. import createSlice to pass in the reducers which will perform actions that will update the global store state variables

      b. we set an initial state where 'count' is set to 0. 

      c. The two reducers increment and decrement add or subtact 1 respectively to the state var 'count'

      d, export the actions within the reducer and the reducer as a whole 

  3. Import the reducer you created into the store file because we want the
     entire app to have access to this reducer not just one file

    e.g
    import { configureStore } from '@reduxjs/toolkit'
    import counterReducer from './features/counterSlice';
    export const store = configureStore({
      reducer: {
        counter: counterReducer,
      }
    })

      a. 'counterReducer' is just the same we assigned to the counterSlice so we can give it any name

      b. 'counter' is the name we set in our counterSlice file and we should use 'coutner' set to the reducer 

      c. we can add as many reducers as needed here.

  4. If you have react es7 snippets, installed use 'rafce' to create a functioal
     expression quickly
    
# Consuming Reducers 

  1. You consume reducers throughout your app and especially your components
     which retrieves and update the global state

  2. use 'useSelector' for retrieving from the store and useDispatch() to
     execute an action to update the store. 

     e.g
    import { useSelector, useDispatch } from 'react-redux';
    import { increment, decrement } from '../features/counterSlice';

    interface CounterState {
      counter: {
        count: number
      }
    }

    const Counter = () => {
      const count:number = useSelector((state: CounterState) => state.counter.count)
      const dispatch = useDispatch();

      return (
        <section>
          <p>{count}</p>
          <div>
            <button onClick={() => { dispatch(increment()) }}>+</button>
            <button onClick={() => { dispatch(decrement()) }}>-</button>
          </div>
        </section>
      )
    }

      a. the buttons dispatch the increment and decrement action while the useSelector retrieves the state varaible count from the store

# Payloads

  1. You can grab values from components to update the store through
     action.payload 
     
    e.g 
    addByAmoutn: (state, action) => { state.count += action.payload }

      a. You now can add values as argument when calling dipatch which will be represented as action.payload in the reducer as shown here
  
  2. Since you are applying changes to the same variable as before, the store
     itself already has the variable imported so you won't need to do anything
     there
     
  3. You do need to export it directly from the JS component files to use it.

    e.g
    <button onClick={() => { dispatch(addByAmount(amount)) }}>+</button>

      a. dispatch now has an argument that paases argument amount into the reducer logic and addes it to the state coutn. 