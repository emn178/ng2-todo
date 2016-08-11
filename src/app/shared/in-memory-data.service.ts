import { db } from '../../test/fixture';

export class InMemoryDataService {
  createDb() {
    return db;
  }
}
