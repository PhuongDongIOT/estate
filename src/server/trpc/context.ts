import { inferAsyncReturnType } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';

export function createContext({ req, res }: CreateNextContextOptions) {
    return { req, res }; // Có thể truyền auth user vào đây
}

export type Context = inferAsyncReturnType<typeof createContext>;
