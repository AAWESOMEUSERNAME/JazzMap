import * as sqlite from 'sqlite3'

const DB_NAME = 'JazzMap'
export const TABLES = {
    MUSICIAN: 'musician',
    SONG: 'song',
    ALBUM: 'album',
    MUSICIAN_ALBUM_RELATION: 'musician_album_relation'
}

const JazzMapDB = new sqlite.Database(DB_NAME)

const SCHEMA_MUSICIAN = `create table if not exists ${TABLES.MUSICIAN}(
    id INTEGER primary key AUTOINCREMENT,
    name TEXT,
    birth: TEXT,
    death: TEXT,
    photoPath: TEXT,
    intro: TEXT,
    profileKey: TEXT
)`

const SCHEMA_SONG = `create table if not exists ${TABLES.SONG}(
    id integer primary key AUTOINCREMENT,
    name text,
    albumId integer
)`

const SCHEMA_ALBUM = `create table if not exists ${TABLES.ALBUM}(
    id integer primary key AUTOINCREMENT,
    name text
)`

const SCHEMA_MUSICIAN_ALBUM_RELATION = `create table if not exists ${TABLES.MUSICIAN_ALBUM_RELATION}(
    musicianId integer,
    albumId integer,
    UNIQUE(musicianId, albumId)
)`

JazzMapDB.run(SCHEMA_SONG)
JazzMapDB.run(SCHEMA_MUSICIAN)
JazzMapDB.run(SCHEMA_ALBUM)
JazzMapDB.run(SCHEMA_MUSICIAN_ALBUM_RELATION)

export default JazzMapDB