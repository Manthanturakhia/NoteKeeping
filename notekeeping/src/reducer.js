export const initialState = {
  user: "",
  users: [],
  userNotes: [],
  noteAdded: "",
  editTitle:"",
  editBody:"",
  noteid:"",
  noteUpdated: false,
  susername:"",
  access:"",
  contributorList:[],
  readerList:[],
  notePermissions:[],
  revoke:"",
  setNotePermission:"",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_USERS":
      return {
        ...state,
        users: action.users,
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
      case "SET_SUSERNAME":
      return{
        ...state,
        susername: action.susername,
      }
      case "SET_ACCESS":
      return{
        ...state,
        access: action.access,
      }
      case "SET_NOTE_UPDATED":
      return{
        ...state,
        noteUpdated: action.noteUpdated,
      }
      case "SET_CONTRIBUTOR_LIST":
      return{
        ...state,
        contributorList: action.contributorList,
      }

      case "SET_READER_LIST":
      return{
        ...state,
        readerList: action.readerList,
      }
      case "SET_NOTE_PERMISSION_DETAILS":
        return{
          ...state,
          notePermissions: action.notePermissions,
        }
        case "SET_REVOKE":
        return{
          ...state,
          revoke: action.revoke,
        }
        case "SET_PERMISSION":
        return{
          ...state,
          setNotePermission: action.setNotePermission,
        }
    default:
      return state;
  }
};
export default reducer;
