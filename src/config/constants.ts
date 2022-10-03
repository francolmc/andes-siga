import dotenv from 'dotenv';

dotenv.config();

export const consts: Consts = {
    PORT: process.env.PORT,
    DATABASE_NAME: process.env.DATABASE_NAME || '',
    DATABASE_HOST: process.env.DATABASE_HOST || '',
    DATABASE_PORT: +(process.env.DATABASE_PORT || 0),
    DATABASE_USER: process.env.DATABASE_USER || '',
    DATABASE_PWD: process.env.DATABASE_PWD || ''
};

export interface Consts {
    PORT: string | undefined;
    DATABASE_NAME: string;
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USER: string;
    DATABASE_PWD: string;
};