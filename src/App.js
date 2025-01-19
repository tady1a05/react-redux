import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'
import { getChannelList } from './features/counter/channelSlice'
import { useEffect } from 'react';

function App() {
  const count = useSelector(state => state.counter.value)
  const channels = useSelector(state => state.channels.value)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChannelList())
  }, [])

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          increment 10
        </button>
      </div>
      <div>
        {channels.length}
        {channels.map(channel =>
          <div>{channel.name}</div>
        )}
      </div>
    </div>
  )
}

export default App;
