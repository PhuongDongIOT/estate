"use client";

import { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence,
    PanInfo
} from "framer-motion";
import Image from "next/image";

interface CardProps {
    frontCard: boolean;
    index?: number;
    setIndex?: (index: number) => void;
    drag?: boolean | "x" | "y";
}

const Card: React.FC<CardProps> = (props) => {
    const [exitX, setExitX] = useState<number>(0);

    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });

    const variantsFrontCard = {
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: (custom: number) => ({
            x: custom,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
        })
    };
    const variantsBackCard = {
        initial: { scale: 0, y: 105, opacity: 0 },
        animate: { scale: 0.75, y: 30, opacity: 0.5 }
    };

    function handleDragEnd(_: any, info: PanInfo) {
        if (info.offset.x < -100) {
            setExitX(-250);
            props.setIndex && props.setIndex(props.index! + 1);
        }
        if (info.offset.x > 100) {
            setExitX(250);
            props.setIndex && props.setIndex(props.index! + 1);
        }
    }

    return (
        <motion.div
            className="w-44 h-44 absolute top-0"
            style={{
                x,
                rotate,
                cursor: "grab"
            }}
            whileTap={{ cursor: "grabbing" }}
            // Dragging
            drag={props.drag}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            onDragEnd={handleDragEnd}
            // Animation
            variants={props.frontCard ? variantsFrontCard : variantsBackCard}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitX}
            transition={
                props.frontCard
                    ? { type: "spring", stiffness: 300, damping: 20 }
                    : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
            }
        >
            <motion.div
                className="w-44 h-44 rounded-md overflow-hidden"
                style={{ scale }}
            >
                <Image
                    src={"https://ui.aceternity.com/_next/image?url=%2Fdemo%2Fthumbnail.png&w=3840&q=75"}
                    alt=""
                    width={176}
                    height={176}
                    className="object-cover h-full pointer-events-none" />
            </motion.div>
        </motion.div>
    );
};

const Example: React.FC = () => {
    const [index, setIndex] = useState<number>(0);

    return (
        <motion.div className="w-44 h-44 relative">
            <AnimatePresence initial={false}>
                <Card key={index + 1} frontCard={false} />
                <Card
                    key={index}
                    frontCard={true}
                    index={index}
                    setIndex={setIndex}
                    drag="x"
                />
            </AnimatePresence>
        </motion.div>
    );
};

export default Example
