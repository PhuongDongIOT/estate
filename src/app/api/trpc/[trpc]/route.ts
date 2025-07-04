import { appRouter } from "@/server/trpc/router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}) as any,
  });

export { handler as GET, handler as POST };