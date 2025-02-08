import type { InferSelectModel } from "drizzle-orm";
import type { userTable } from "./src/db/schema/user";

declare global {
  namespace Express {
    interface User extends InferSelectModel<typeof userTable> {}
  }
}


export {};