export const themeReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_THEME':
      return action.theme;
    default:
      return state;
  }
};