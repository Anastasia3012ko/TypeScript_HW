import {Request, Response } from "express";
import User from "../models/userSchema.js";

//createUser
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    if(!user.name) {
        return res.send({error: 'Name is required'})
    }

    const newUser = await User.create(req.body);
    res.status(201).json({message: 'User created successfully', newUser});
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
}

//getAllUsers

export const getUsers = async (_: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
}


