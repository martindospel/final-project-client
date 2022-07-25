import studentReducer from '../slices/studentSlice';
import classReducer from '../slices/classSlice';
import teacherReducer from '../slices/teacherSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        students: studentReducer,
        class: classReducer,
        teacher: teacherReducer,
    }
});

export default store;