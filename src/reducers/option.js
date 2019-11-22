import { SET_OPTION } from '../constants/note'

const defaultState = {
  option: 'local'
}

const optionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_OPTION:
      state.option = action.option;
      return state
    default: 
      return state
  }
};
export default optionReducer;
