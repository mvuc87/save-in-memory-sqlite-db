import { Database } from 'sqlite3';
import { promisify } from 'util';

const filepath = "C:\\temp\\db";

const createContactsTableSql = `
  CREATE TABLE contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL
  )
`;

const insertContactsSql = `
  INSERT INTO
    contacts (name, email)
  VALUES
    ('John Smith', 'john.smith@example.com'),
    ('Jane Doe', 'jane.doe@imaginary.com')
`;

const vacuumSql = `VACUUM MAIN INTO "${filepath}"`;

(async function main() {
  const db = new Database(':memory:');
  const exec = promisify(db.exec.bind(db));
  await exec(createContactsTableSql);
  await exec(insertContactsSql);
  await exec(vacuumSql);
})();
