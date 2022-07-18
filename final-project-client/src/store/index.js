import studentReducer from '../slices/studentSlice/';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: {
        students: studentReducer
    }
});

export default store;