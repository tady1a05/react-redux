import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import channelsReducer from '../features/counter/channelSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        channels: channelsReducer
    }
})