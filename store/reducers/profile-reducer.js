import { SAVE_PROFILE, LOAD_PROFILE } from "../actions/profile-actions";
import ProfileModel from "../../db/ProfileModel";

const initialState = {
  profile: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROFILE:
      const profile = new ProfileModel(action.payload.id, action.payload.name, action.payload.alias, action.payload.picture);
      return {
        ...state,
        profile
      };
    case LOAD_PROFILE:
      if (action.profile && action.profile.id) {
        const profile = new ProfileModel(action.profile.id, action.profile.name, action.profile.alias, action.profile.picture);
        return {
          ...state,
          profile
        };
      } else {
        return {
          ...state,
          profile: {}
        };
      }

    default:
      return state;
  }
}