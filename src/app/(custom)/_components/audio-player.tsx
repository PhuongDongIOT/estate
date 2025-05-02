"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Heart, Shuffle, Repeat, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const musics = ["/musics/simson.mp3", "/musics/snow.mp3"]
type IStep = 'BACK' | 'GO';

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState<number>(0);
    const [music, setMusic] = useState<number>(0);
    const [isOpen, setIsOpen] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const currentSong = musics[music];


    const onChange = (step: IStep) => {
        stop();
        if (step === 'BACK') {
            let changeMusic: number = music - 1 < 0 ? musics.length - 1 : music - 1;
            setMusic(changeMusic);
            return;
        }

        let changeMusic: number = music + 1 > musics.length - 1 ? 0 : music + 1;
        setMusic(changeMusic);
        return;
    }

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying, music]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const progressPercent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(progressPercent);
        }
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (audioRef.current) {
            const clickX = e.nativeEvent.offsetX;
            const progressWidth = e.currentTarget.clientWidth;
            const newTime = (clickX / progressWidth) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
            setProgress((newTime / audioRef.current.duration) * 100);
        }
    };

    return (
        <div className="fixed bottom-24 left-0 w-full p-4">
            <audio
                ref={audioRef}
                src={`${currentSong}`}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => onChange("GO")}
                className="hidden"
            />
            {!isOpen ?
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    transition={{
                        delay: 0.5,
                        duration: 0.3,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                ><Button
                    variant="ghost"
                    size="icon"
                    className="m-4 w-10 h-10 bg-gray-200 rounded-full shadow-lg"
                >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </Button></motion.button> : null}
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        <Card className="w-full p-4 max-w-md shadow-md rounded-xl flex items-center gap-4">
                            <motion.div
                                className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-3 relative"
                                animate={isPlaying ? { rotate: 360 } : {}}
                                transition={isPlaying ? { repeat: Infinity, duration: 5, ease: "linear" } : {}}
                            >
                                <Image src="/images/unsplash.jpg" alt="Album Cover" width={80} height={80} className="rounded-full object-cover" />
                            </motion.div>
                            <div className="flex flex-col flex-grow">
                                <div className="flex justify-between">
                                    <span className="text-md font-semibold">A Sky Full of Stars
                                    </span>
                                    <Button variant="ghost" size="icon" className="w-8 h-8" onClick={() => setIsOpen(!isOpen)}>
                                        <Heart className="text-red-500 w-6 h-6" />
                                    </Button>
                                </div>

                                <span className="text-xs text-gray-500">Ghost Stories</span>
                                <Progress value={progress} className="w-full h-2 bg-gray-200 mt-2cursor-pointer" onClick={handleSeek} />
                                <div className="flex gap-4 mt-2 justify-center items-center">
                                    <Button variant="ghost" size="icon" className="w-8 h-8">
                                        <Shuffle className="text-gray-500 w-5 h-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="w-10 h-10" onClick={() => onChange("BACK")}>
                                        <SkipBack className="text-gray-500 w-6 h-6" />
                                    </Button>
                                    <Button
                                        onClick={togglePlayPause}
                                        variant="ghost"
                                        size="icon"
                                        className="w-12 h-12 bg-red-500 text-white rounded-full shadow-lg"
                                    >
                                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                                    </Button>
                                    <Button variant="ghost" size="icon" className="w-10 h-10" onClick={() => onChange("GO")}>
                                        <SkipForward className="text-gray-500 w-6 h-6" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="w-8 h-8">
                                        <Repeat className="text-gray-500 w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>) : null}
            </AnimatePresence>
        </div>
    );
}
