// import {

// } from '../actions/words.actions';

const initialState = {
  words: ''
};

const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case DISABLE_PRINTABLE_MOD: {
    //   return {
    //     ...state, printableMode: false
    //   }
    // }
    default:
      return state;
  }
};

export default wordsReducer;
