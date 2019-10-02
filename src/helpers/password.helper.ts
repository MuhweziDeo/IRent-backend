import * as bcrypt from 'bcrypt';


export const hashPassword = async(plainPassword: string, saltRounds?: number): Promise<string> => {
    const hashed: string = await bcrypt.hash(plainPassword, saltRounds || 10);
    return hashed;
};

export const verifyPassword = async(plainPassword: string, hashPassword: string): Promise<boolean> => {
    const verified = await bcrypt.compare(plainPassword, hashPassword);
    return verified;
};
