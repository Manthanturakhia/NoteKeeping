export const initialState = {
  user: "rajst",
  userNotes: [],
  noteAdded: false,
  editTitle:"",
  editBody:"",
  noteid:"",
  noteUpdated: false,
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
      case "SET_EDIT_TITLE":
      return{
        ...state,
        editTitle: action.editTitle,
      }
      case "SET_EDIT_BODY":
      return{
        ...state,
        editBody: action.editBody,
      }
      case "SET_NOTE_ID":
      return{
        ...state,
        noteid: action.noteid,
      }
      case "SET_NOTE_UPDATED":
      return{
        ...state,
        noteUpdated: action.noteUpdated,
      }
    default:
      return state;
  }
};
export default reducer;
