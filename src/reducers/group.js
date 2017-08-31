const single = (state = {
  isLoading: false,
  result: {}
}, action) => {
  switch (action.type) {
    case 'GROUP_START': 
      return {
        ...state,
        isLoading: true
      }
    case 'GROUP_SUCCESS':
      return {
        ...state,
        isLoading: false,
        result: action.payload
      }
    case 'GROUP_ERROR': 
      return {
        ...state,
        isLoading: false,
        result: -1
      }
    default: 
      return state
  }
};

const group = (state = {}, action) => {
  switch (action.type) {
    case 'GROUP_START':
    case 'GROUP_ERROR':
    case 'GROUP_SUCCESS':
      const by = action.by;
      state[by] = state[by] || {};
      return single(state[by], action);
    default:
      return state;
  }
};

export default group;