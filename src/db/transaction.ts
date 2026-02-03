import { db } from './client.js';

export async function withTransaction<T>(
  fn: (tx: any) => Promise<T>
): Promise<T> {
  return db.transaction(fn);
}
