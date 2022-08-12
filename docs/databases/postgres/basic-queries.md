# Postgres SQL - Basic Queries

## 1 - Select

**Basic select**

```sql
-- Fetch all data
SELECT * from films  
```
```sql
-- Cherry pick data to fetch
SELECT column_1, column_2 from films  
```
```sql
--  statement with expressions example
SELECT
   first_name || ' ' || last_name AS full_name,
   email
FROM
   customer;
```
**ORDER BY**

```sql
SELECT
   column_1,
   column_2
FROM
   table_name
ORDER BY
   column_1 [ASC | DESC],
   column_2 [ASC | DESC];
```

**WHERE**

```sql
SELECT select_list
FROM table_name
WHERE condition;
```

**LIMIT**

```sql
SELECT
   *
FROM
   table
LIMIT n [OFFSET m];
```
- n : number of rows returned
- m : number of rows skiped
