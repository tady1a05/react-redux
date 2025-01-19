import { createSlice } from '@reduxjs/toolkit'

export const channelSlice = createSlice({
    name: 'channels',
    initialState: {
        value: []
    },
    //the function in reducers is not allow to api call, other mathod call(), should keep it simple just set value
    reducers: {
        setChannelList: (state, action) => {
            state.value = action.payload
        }
    }
})

const getChannelList = () => {
    return async (dispatch) => {
        let response = await fetch('http://geek.itheima.net/v1_0/channels');
        let res = await response.json();
        dispatch(setChannelList(res.data.channels))
    }

}
export const { setChannelList } = channelSlice.actions

export { getChannelList }
export default channelSlice.reducer