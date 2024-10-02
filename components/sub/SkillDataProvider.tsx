"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1 // Adjust threshold for when the animation triggers
    });

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.5 }, // Start hidden and scaled down
        visible: { opacity: 1, scale: 1 } // Fade in and scale up
    };

    const animationDelay = 0.3;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay, duration: 0.5 }} // Adjust duration for smoother effect
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt='skill image'
                className="rounded-lg" // Optional styling for rounded corners
            />
        </motion.div>
    );
};

export default SkillDataProvider;