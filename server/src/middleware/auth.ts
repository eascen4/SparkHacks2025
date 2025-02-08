import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { db } from "../db/drizzle";
import { eq } from "drizzle-orm";
import { userTable } from "../db/schema/user";
import { ApiError } from "./errorHandler";

interface TokenPayload {
  userId: number;
}

const cookieExtractor = (req): string | null => {
    console.log("cookies: ", req.cookies["access_token"]);
  if (req && req.cookies) {

    return req.cookies["access_token"];
  }
  return null;
};

passport.use(
  new Strategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.ACCESS_TOKEN_SECRET,
    },
    async (payload: TokenPayload, done) => {
      try {
        const user = await db.query.userTable.findFirst({
          where: eq(userTable.id, payload.userId),
        });

        if (!user) return done(null, false);

        return done(null, user);
      } catch (error) {
        return done;
      }
    }
  )
);

export const requireAuth = (req: any, res: any, next: any) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {

    if (err) return next(new ApiError("Internal server error", 500));

    if (!user) return next(new ApiError("Unauthorized", 401));

    req.user = user;

    return next();
  })(req, res, next);
};
