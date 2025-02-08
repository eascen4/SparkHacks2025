import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

import { userTable, refreshTokenTable } from "./schema/user";
import { courseTable } from "./schema/course";

config({ path: ".env" });

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle({
  client: sql,
  schema: { userTable, refreshTokenTable, courseTable },
});
