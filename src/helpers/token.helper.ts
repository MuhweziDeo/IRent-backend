import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

export const createToken = async(payload: any, options?: object): Promise<any> =>  {
    const accessToken  = await jwt.sign(payload, SECRET_KEY, {...options});
    return accessToken;
}