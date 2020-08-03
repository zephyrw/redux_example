import {createSlice} from '@reduxjs/toolkit';

const countSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        incrementAction: (state, action) => {
            state.value += action.payload;
        },
        decrementAction: (state, action) => {
            state.value -= action.payload;
        },
        errorInput: (state, action) => {
            alert(action.payload);
        }
    },
});

export const {incrementAction, decrementAction, errorInput } = countSlice.actions;

export const countReducer = countSlice.reducer;
