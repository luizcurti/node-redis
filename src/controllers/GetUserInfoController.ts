import { Request, Response } from "express";
import { getRedis } from "../redisConfig";

export class GetUserInfoController {
  async handle(request: Request, response: Response) {
    const { userId } = request;

    const userRedis = await getRedis(`user-${userId}`);
    const user = JSON.parse(userRedis);

    return response.json(user);
  }
}
