// UserController.ts
import { Request, Response } from 'express';

class UserController {
    getUser(req: Request, res: Response) {
        const { userId } = req.params;
        res.status(200).json({ userId, message: 'User fetched successfully' });
    }
}

export default UserController;