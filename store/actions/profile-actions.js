import * as FileSystem from 'expo-file-system';

import { fetchProfile, insertProfile } from '../../db/db';

export const SAVE_PROFILE = "SAVE_PROFILE";
export const LOAD_PROFILE = "LOAD_PROFILE";

export const saveProfile = (name, alias, picture) => {
  return async dispatch => {
    const picFileName = picture.split('/').pop();
    const picPath = FileSystem.documentDirectory + picFileName;

    try {
      FileSystem.moveAsync({
        from: picture,
        to: picPath,
      });

      const resultInsertProfile = await insertProfile(
        name,
        alias,
        picPath
      );

      dispatch({
        type: SAVE_PROFILE,
        payload: {
          id: resultInsertProfile.insertId,
          name,
          alias,
          picture: picPath,
        },
      });
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  };
};

export const loadProfile = () => {
  return async dispatch => {
    try {
      const resultGetProfile = await fetchProfile()
      if (resultGetProfile.rows.length === 1) {
        dispatch({
          type: LOAD_PROFILE,
          profile: resultGetProfile.rows._array[0],
        })
      } else {
        dispatch({
          type: LOAD_PROFILE,
          profile: {},
        })
      }

    } catch (err) {
      throw err;
    }
  }
}