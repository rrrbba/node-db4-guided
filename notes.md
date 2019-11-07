# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.


# A good data model
- clear and concise 
- non-repeating 
- captures all the info the system needs
- captures only the info the system needs
- reflect reality, meaning from the point of view from the system
- is flexible and can evolve 
- should guarentee `data integrity` without sacrificing too much performance 
- is driven by the way we access data

# Components of a data model
- entities (nouns: zoo, animal, species; like a resource in your db that usually maps to a table)
- properties (columns, fields)
- relationships (foregin keys (fk))

# Workflow
- ID the entities, relationships and properties

# Relationships
- One to one
- One to many (of one thing there may be several things): most common
- Many to many 


_There are many animals in one species_ (one to many)
_There can be more than one animal in a zoo and also an animal can belong to more than one zoo at some point_ (many to many)

# Mantras (Design motivation when designing a model)
- Every table must have a `primary key` (having it as a `serial` which is a integer that is auto-incremented is ideal in knex it's integer)
- Work on two or three entities at a time (don't try and design 7 tables at a time)
_For strings (use varchar)_
- One to many relationships are modeled using a `foreign key`
- The foreign key always goes in the 'many' side (so it would be in the animals side)
- Naming a foreign key (singular version of the many and underscore id: species_id) and point it to the 'one' table (species) at the id
- Foreign key column must be the same type as the primary key it references (so if one was a string the other would be a string)
- In a many to many relationship are modeled using a third table
- The third table (in the many to many) could include other columns


foreign key references a prim key in another table