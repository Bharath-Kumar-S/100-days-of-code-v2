import { Database } from "bun:sqlite";

// Create a new in-memory database
const db = new Database("./app.sqlite");

// Create a new table
db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)");

// Insert some data
const insert = db.prepare("INSERT INTO users (name) VALUES (?)");
insert.run("Alice");
insert.run("Bob");

// Query the data
const select = db.prepare("SELECT * FROM users");
for (const user of select.iterate()) {
  console.log(user);
}

// Close the database connection
db.close();
