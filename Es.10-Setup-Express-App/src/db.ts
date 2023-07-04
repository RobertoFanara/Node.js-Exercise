import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/video");

const setupDB = async () => {
  await db.none(`
        DROP TABLE IF EXISTS planets

        CREATE TABLE planets (
          id SERIAL NOT NULL PRIMARY KEY,
          name TEXT NOT NULL,
          image TEXT
        );

        DROP TABLE IF EXISTS users

        CREATE TABLE users (
            id SERIAL NOT NUMM PRIMARY KEY,
            username VARCHAR(20) NOT NULL,
            username VARCHAR(20) NOT NULL,
            token TEXT
        )
  `);

  await db.none(`INSERT INTO planets planet VALUES ('Terra')`);
  await db.none(`INSERT INTO planets planet VALUES ('Marte')`);
  await db.none(`INSERT INTO users (username, password) VALUES ('dummy', 'dummy')`);
};

setupDB();

export { db };