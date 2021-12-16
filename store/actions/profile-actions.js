import * as FileSystem from 'expo-file-system';

export const SAVE_PROFILE = "SAVE_PROFILE";

export const saveProfile = (name, alias, picture) => {
  return async dispatch => {
    const picFileName = picture.split('/').pop();
    const picPath = FileSystem.documentDirectory + picFileName;

    try {
      FileSystem.moveAsync({
        from: picture,
        to: picPath,
      });

      dispatch({
        type: SAVE_PROFILE,
        payload: {
          id: 1,
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