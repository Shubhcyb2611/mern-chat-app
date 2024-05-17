import express from "express";
import { Router } from "express";

const router = Router();

router.route("/").get(getAllUsers).post(registerUser);
router.route("/login").post(login);

export default router;
