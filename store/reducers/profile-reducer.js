import { ActionSheetIOS } from "react-native";
import { SAVE_PROFILE } from "../actions/profile-actions";

const initialState = {
  profile: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
}