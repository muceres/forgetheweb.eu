# Postgres SQL - High Level Management

## 1 - Navigation commands

- create database: `createdb databasename`
- Connect to a database: `\c <database>`
- Show databases : `\l`
- Show tables: `\dt`
- Show columns of a table: `\d+ <table>`
- quit postgres: `\q`

## 2 - Managing databases

**Create a database:**

```sql
CREATE DATABASE db_name; -- IF NOT EXISTS don't exists for db creation in postgres
```

**Delete a database:**

```sql
DROP DATABASE [IF EXISTS] db_name;
```

**Rename a database:**

```sql
ALTER DATABASE current_name RENAME TO new_name;
```

## 3 - Managing tables

**Create a table:**

```sql
CREATE TABLE [IF NOT EXISTS] table_name(
   pk SERIAL PRIMARY KEY,
   c1 type(size) NOT NULL,
   c2 type(size) NULL,
   ...
);
```

**Drop a table [and its dependent objects]:**

```sql
DROP TABLE [IF EXISTS] table_name [CASCADE];
```

**Add a new column to a table:**

```sql
ALTER TABLE table_name ADD COLUMN new_column_name TYPE;
```

**Add a new column to a table:**

```sql
ALTER TABLE table_name DROP COLUMN column_name;
```

**Rename table:**

```sql
ALTER TABLE current_name RENAME TO new_name;
```
