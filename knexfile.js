// Update with your config settings.
require('dotenv').config()
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user: 'robin.abrahamsson',
      database: 'todo-api'
    }
  },

  production: {
    client: 'postgresql',
    connection: `${process.env.DATABASE_URL}${process.env.NODE_ENV === 'production' ? '?ssl=require' : ''}`,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};