import {createEnv} from '@t3-oss/env-nextjs';

export const env = createEnv({
    server: {
        DB_HOST: process.env.DB_HOST,
        DB_NAME: process.env.DB_NAME,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_USER: process.env.DB_USER,
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
    },
    client: {},
})