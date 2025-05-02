import { client } from '@/utils/fetch-graphQL';
import { gql } from '@apollo/client';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
// import { Context } from './context';

const t = initTRPC.create();

export const appRouter = t.router({
    hello: t.procedure
        .input(z.object({ name: z.string().min(1) }))
        .query(async ({ input }) => {
            const GET_HELLO = gql`
                query {
                    hello
                }
            `;

            try {
                const { data } = await client.query({ query: GET_HELLO });
                return { message: `Hello, ${data.hello}!` };
            } catch (error) {
                return null;
            }
        }),
    generateText: t.procedure
        .input(z.object({ prompt: z.string() }))
        .output(z.object({ generatedText: z.string() }))
        .query(async ({ input }) => {
            const GENERATE_TEXT = gql`
            mutation GenerateText($prompt: String!) {
              generateText(prompt: $prompt)
            }
          `;

            try {
                const { data } = await client.mutate({
                    mutation: GENERATE_TEXT,
                    variables: { prompt: input.prompt },
                });
                
                return {
                    generatedText: `${data.generateText}`
                };
            } catch (error) {
                return {
                    generatedText: ""
                };;
            }
        }),
});

export type AppRouter = typeof appRouter;
