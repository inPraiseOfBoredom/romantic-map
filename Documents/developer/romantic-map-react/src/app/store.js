import { createStore, combineReducers } from "@reduxjs/toolkit";
import {spots} from '../data';

import {favoriteSpotsReducer} from '../features/featureFavorite/featureFavoriteSlice';
import {searchTermReducer} from '../features/featureSearch/featureSearchSlice';




  export const store = createStore(combineReducers({
    allSpots: spots,
    favoriteSpots: favoriteSpotsReducer,
    searchTerm: searchTermReducer
}));






