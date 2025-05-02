"use client";

import { trpc } from "@/utils/trpc";

export default function Profile() {
    // const { data, isLoading, error } = trpc.hello.useQuery({
    //     name: "1"
    // }, {
    //     refetchInterval: 5000,
    // });

    const { data, isLoading, error } = trpc.generateText.useQuery({
        prompt: "hello"
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>{`${data?.generatedText}`}</h1>
        </div>
    );
}
