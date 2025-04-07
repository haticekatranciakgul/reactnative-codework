import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './favouriteSlice';

export default configureStore({
  reducer: {
    favorites: favouriteReducer,
  },
});
