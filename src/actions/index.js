import { ADD_FORM, UPDATE_FORM, DELETE_DATA } from './type';

export const addAddress = (data) => {
    return {
        type: ADD_FORM,
        payload: data,
      } 
}

export const updateForm = (data, index) => {
    return {
        type: UPDATE_FORM,
        payload:{data , index}
    }
}

export const deleteFormData = (index) => {
    return {
        type: DELETE_DATA,
        index
    }
}