import pool from "./db";

async function testDatabase() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Database Connected Successfully");
    console.log("Database Time:", result.rows[0].now);
  } catch (error) {
    console.error("Database Connection Failed:", error);
  } finally {
    await pool.end();
  }
}

testDatabase();