// import {
//   SET_PERMIT_USAGE_INTERNET,
// } from '../actions/root.actions';

const initialState = {
  // permitUsageInternet: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_PERMIT_USAGE_INTERNET: {
    //   return {
    //     ...state, 
    //     permitUsageInternet: action.payload
    //   }   
    // }
    default:
      return state;
  }
};

export default rootReducer;

      