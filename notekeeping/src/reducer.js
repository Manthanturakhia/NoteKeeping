export const initialState = {
  user: "rajst",
  userNotes: [],
  noteAdded: false,
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
    case "SET_NOTE_ADDED":
      return{
        ...state,
        noteAdded: action.noteAdded,
      }
    default:
      return state;
  }
};
export default reducer;
