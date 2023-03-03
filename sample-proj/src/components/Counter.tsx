import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { 
  increment, 
  decrement, 
  addByAmount,
  reset,
} from '../features/counterSlice';

interface CounterState {
  counter: {
    count: number
  }
}

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count:number = useSelector((state: CounterState) => state.counter.count)
  const dispatch = useDispatch();

  return (
    <section
      style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}
    >
      <p>{count}</p>
      <div>
        <button onClick={() => { dispatch(decrement()) }}>-</button>
        <button onClick={() => { dispatch(increment()) }}>+</button>
      </div>
      <div>
        <input value={amount} onChange={(e) => { setAmount(Number(e.target.value))} }/>
      </div>
      <div>
        <button onClick={() => { dispatch(addByAmount(amount)) }}>Add by amount</button>
        <button onClick={() => { setAmount(0); dispatch(reset()); }}>Reset</button>
      </div>
    </section>
  )
}

export default Counter