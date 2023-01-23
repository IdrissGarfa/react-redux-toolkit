import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    reset,
    incrementByAmout
} from './counterSlice';

import { useState } from 'react';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmmount, setIncrementAmmount] = useState(0);

    const addValue = Number(incrementAmmount) || 0;

    const resetAll = () => {
        setIncrementAmmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <input
                type="text"
                value={incrementAmmount}
                onChange={(e) => setIncrementAmmount(e.target.value)}
            />
            <div>
                <button onClick={() => dispatch(incrementByAmout(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}

export default Counter 