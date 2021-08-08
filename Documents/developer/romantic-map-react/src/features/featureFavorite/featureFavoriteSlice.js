export const addSpot = (spot) => {
    return {
        type: 'favoriteSpots/addSpot',
        payload: spot
    }
}

export const removeSpot = (spot) => {
    return {
        type: 'favoriteSpots/removeSpot',
        payload: spot
    }
} 

const initialFavoriteSpots = [];
export const favoriteSpotsReducer = (favoriteSpots = initialFavoriteSpots, action) => {
switch(action.type) {
      case 'favoriteSpots/addSpot': 
       return  [...favoriteSpots, action.payload];
case 'favoriteSpots/removeSpot': 
return favoriteSpots.filter(element => element.id !== action.payload.id);
default: return favoriteSpots;

}
}