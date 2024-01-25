import type { DB } from '@/core/db/schema';
import { Kysely, MysqlDialect } from 'kysely';
import { createPool } from 'mysql2';

export const db = new Kysely<DB>({
  dialect: new MysqlDialect({
    pool: createPool({
      uri: process.env.DATABASE_URL!,
      ssl: {
        minVersion: 'TLSv1.2',
      }
    })
  })
})