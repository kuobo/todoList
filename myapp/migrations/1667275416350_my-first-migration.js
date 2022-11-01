/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('todotest', {
        name: { type: 'varchar(1000)', notNull: true },
      })
};

exports.down = pgm => {};
//DATABASE_URL=postgres://postgres:021622@localhost:5432/todo npm run migrate up