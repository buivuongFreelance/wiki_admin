module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '167.99.182.153'),
      port: env.int('DATABASE_PORT', 5433),
      database: env('DATABASE_NAME', 'learning'),
      user: env('DATABASE_USERNAME', 'tomrot'),
      password: env('DATABASE_PASSWORD', 'vnng2018'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
