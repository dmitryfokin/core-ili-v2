const env: string = process.env.NODE_ENV || 'development'

const configFactory = ( env ) => {
  return {
    development: {
      url: process.env.DEV_DATABASE_URL,
      dialect: 'postgres',
    },
    test: {
      url: process.env.TEST_DATABASE_URL,
      dialect: 'postgres',
    },
    production: {
      url: process.env.DATABASE_URL,
      dialect: 'postgres',
    },
  }[env]
}

export const configDB = configFactory( env )
