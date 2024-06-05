exports.up = (knex) =>
  knex.schema.createTable("favoriteDishes", (table) => {
    table.increments("id").primary();

    table.integer("dish_id").references("id").inTable("dishes").onDelete("CASCADE");

    table.integer("user_id").references("id").inTable("users");
    table.timestamp("created_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("favoriteDishes");
