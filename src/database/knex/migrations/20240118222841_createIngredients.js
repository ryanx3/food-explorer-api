exports.up = (knex) =>
  knex.schema.createTable("ingredients", (table) => {
    table.increments("id").primary();
    table.text("name").notNullable();

    table
      .integer("dish_id")
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE");

    table.integer("created_by").references("id").inTable("users");
    table.timestamp("created_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("ingredients");
