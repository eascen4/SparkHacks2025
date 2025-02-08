import { Request, Response } from "express";
import { asyncErrorHandler } from "../lib/utils";
import { loginValidator, registerValidator } from "../lib/validators";
import { db } from "../db/drizzle";
import { eq, or } from "drizzle-orm";
import { refreshTokenTable, userTable } from "../db/schema/user";

import bcrypt from "bcryptjs";
import { generateJwtTokens } from "../lib/jwtUtils";

export const login = asyncErrorHandler(
  async (request: Request, response: Response) => {
    const loginData = loginValidator.parse(request.body);

    const existingUser = await db.query.userTable.findFirst({
      where: eq(userTable.email, loginData.email),
    });

    if (!existingUser) throw new Error("User does not exist");

    const isValidPassword = await bcrypt.compare(
      loginData.password,
      existingUser.password
    );

    if (!isValidPassword) throw new Error("Invalid password");

    const { accessToken, refreshToken } = generateJwtTokens(existingUser.id);

    await db.insert(refreshTokenTable).values({
      userId: existingUser.id,
      token: refreshToken,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return response
      .cookie("access_token", accessToken, { httpOnly: true, secure: false })
      .status(200)
      .json({ status: "Success", message: "You have made an account" });
  }
);

export const register = asyncErrorHandler(
  async (request: Request, response: Response) => {
    const registerData = registerValidator.parse(request.body);

    const existingUser = await db.query.userTable.findFirst({
      where: or(
        eq(userTable.email, registerData.email),
        eq(userTable.username, registerData.username)
      ),
    });

    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(registerData.password, 10);

    const [user] = await db
      .insert(userTable)
      .values({
        email: registerData.email,
        username: registerData.username,
        password: hashedPassword,
      })
      .returning();

    return response
      .status(200)
      .json({ status: "Success", message: "You have made an account" });
  }
);
