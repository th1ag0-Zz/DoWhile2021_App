import { Request, Response, NextFunction, request, response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
	sub: string;
}

export function ensureAuthenticated(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	const authToken = req.headers.authorization;

	if (!authToken) {
		return res.status(401).json({
			error: 'invalid Token',
		});
	}

	const [, token] = authToken.split(' ');

	try {
		const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

		req.user_id = sub;

		return next();
	} catch (error) {
		return response.status(401).json({
			error: 'expired Token',
		});
	}
}
