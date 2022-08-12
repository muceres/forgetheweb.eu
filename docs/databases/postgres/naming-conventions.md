# Postgres SQL - Naming Convention

## 1 - Tables

- use singular
- use camelcase
- not abbreviations

```sql
-- Good
cinema
film
seance
film_seance;
```

```sql
-- Bad
films        --use-singular
FILMS        --only-camel-case
Films        --only-camel-case
Film_Seance  --only-camel-case
Film_seance  --only-camel-case
film_Seance  --only-camel-case
film_sc      --not-abbreviations
```

## 2 - Fields

- use camelcase
- not abbreviations

### 2.1 - Primary Keys

Single column primary key fields should be named `id`
```sql
CREATE TABLE person (
  id            SERIAL PRIMARY KEY NOT NULL,
  full_name     text NOT NULL
);
```

### 2.2 - Foreign Keys

Foreign key fields should be a combination of the name of the referenced table and the name of the referenced fields
```sql
CREATE TABLE person (
  id            SERIAL PRIMARY KEY NOT NULL
);

CREATE TABLE team (
  id            SERIAL PRIMARY KEY NOT NULL
);

CREATE TABLE team_member (
  team_id       bigint NOT NULL REFERENCES team(id),
  person_id     bigint NOT NULL REFERENCES person(id),
  CONSTRAINT team_member_pkey PRIMARY KEY (team_id, person_id)
);
```
