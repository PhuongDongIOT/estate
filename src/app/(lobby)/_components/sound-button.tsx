"use client";

import React from "react";
import useSound from "use-sound";
import { Button } from "@/components/ui/button";

// Đường dẫn đến file âm thanh
const soundUrl = "/musics/click.wav";
const SoundButton: React.FC = () => {
    const [play] = useSound(soundUrl, { volume: 0.5 });

    return (
        <section className="w-full mx-auto p-4">
            <h2 className="text-xl font-semibold">Click to Play Sound</h2>
            <Button onClick={() => play()} className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Play Sound
            </Button>
        </section>
    );
};

export default SoundButton;
