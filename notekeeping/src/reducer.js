export const initialState = {
  user: null,
  userNotes: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USER_NOTES":
      return {
        ...state,
        userNotes: action.userNotes,
      };
    default:
      return state;
  }
};
export default reducer;
