import { configureStore } from '@reduxjs/toolkit';

// Example: import your reducers here
// import rootReducer from './reducers';

const store = configureStore({
    reducer: {
        // Add your reducers here
        // example: user: userReducer,
    },
    // Optional: add middleware, devTools, etc.
});

export default store;