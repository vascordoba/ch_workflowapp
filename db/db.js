import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('cup.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS cup_profile (
          id INTEGER PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          alias TEXT NOT NULL,
          picture TEXT NOT NULL
        )`,
        [],
        () => { resolve() },
        (_, err) => { reject(err) },
      );
    });
  });

  return promise;
}

export const insertProfile = (
  name,
  alias,
  picture
) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO cup_profile (name, alias, picture)
          VALUES (?, ?, ?)`,
        [name, alias, picture],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
}

export const fetchProfile = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM cup_profile`,
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
}