const initialState = {
  watch: 0,
  timing: false,
};

const LesGo = (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        watch: state.watch + 1,
        timing: true,
      };
    case 'STOP':
      return {
        ...state,
        watch: state.watch,
        timing: false,
      };
    case 'RESET':
      return {
        ...state,
        watch: 0,
        timing: false,
      };
    default:
      return state;
  }
};
export default LesGo;
