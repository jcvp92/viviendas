import {Router} from "express";
import { checkin, logged } from "../controllers/user";

export const user_router: Router= Router();

user_router.post('/user', checkin);
user_router.post("/login", logged); 