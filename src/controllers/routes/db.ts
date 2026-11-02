import { readFileSync } from 'node:fs';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';

dotenv.config({ path: fileURLToPath(new URL('../../.env', import.meta.url)) });

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL is missing. Check your .env file.');
}

const connectionUrl = new URL(databaseUrl);
const sslMode = connectionUrl.searchParams.get('sslmode');
let poolConfig: ConstructorParameters<typeof Pool>[0] = {
  connectionString: databaseUrl,
};

if (sslMode === 'verify-full') {
  const caPath = process.env.SUPABASE_CA_CERT_PATH
    ?? connectionUrl.searchParams.get('sslrootcert')
    ?? fileURLToPath(new URL('../../../certs/supabase-ca.crt', import.meta.url));
  const ca = readFileSync(caPath, 'utf8');
  connectionUrl.searchParams.delete('sslmode');
  connectionUrl.searchParams.delete('sslrootcert');
  poolConfig = {
    connectionString: connectionUrl.toString(),
    ssl: { ca },
  };
}

export const pool = new Pool(poolConfig);