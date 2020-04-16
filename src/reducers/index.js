// import { ADD_FORM, UPDATE_FORM, DELETE_DATA } from '../actions/type'

const intialState = {
    ShippingAddressList: []
}

const Reducer = (state=intialState, action) => {
    if(action.type === "ADD_ASYNC_DATA"){
        state.ShippingAddressList.push(action.payload);
        return state
    }
    if(action.type === "UPDATE_ASYNC_DATA"){
        const tempState = {...state}
        const tempList = [...tempState.ShippingAddressList]
        tempList[action.payload.index] = action.payload.data;
        tempState.ShippingAddressList = [...tempList]
         state = {...tempState}
        return state;
    }
    if(action.type === "DELETE_ASYNC_DATA") {
        const tempState = {...state}
        const tempList = [...tempState.ShippingAddressList]
        tempList.splice(action.index,1);
        tempState.ShippingAddressList = [...tempList]
         state = {...tempState}
        return state
    }
    return state;
}

export default Reducer;