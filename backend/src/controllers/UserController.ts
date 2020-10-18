import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import user_view from '../views/user_view';
import User from '../models/User';

export default {
    async index(req: Request, res: Response){
        const userRepository = getRepository(User);

        const user = await userRepository.find(); 

        return res.json(user_view.renderMany(user));

    },
    async show(req: Request, res: Response){
        const { email, password }  = req.body; 

        const userRepository = getRepository(User);

        const user = await userRepository.findOneOrFail(email, password); 

        return res.json(user_view.render(user));

    },
    async create(req: Request, res: Response){
        const {
            name,
            email,
            password,
        } = req.body

        const userRepository = getRepository(User);

        const data = {
            name,
            email,
            password,
            status: true,
        };

        const user = userRepository.create(data);

        await userRepository.save(user);

        return res.status(201).json(user)
    }
};