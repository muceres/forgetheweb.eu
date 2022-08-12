# Mongo - High Level Management

## 1 - Navigation commands

- create database: `createdb databasename`
- Connect to a collection: `use <database>`
- Show databases : `db.adminCommand( { listDatabases: 1 } )`
- Show collections: `db.getCollectionInfos();`
- Show columns of a table: `\d+ <table>`
- quit mongo: `quit()`
