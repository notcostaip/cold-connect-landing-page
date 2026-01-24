import { useState } from 'react';
import { motion } from 'framer-motion';
import { Snowflake } from 'lucide-react';

export const BackgroundEffects = () => {
    // Snowflakes configuration
    const [snowflakes] = useState<Array<{ id: number; left: number; duration: number; delay: number; size: number; opacity: number }>>(() =>
        Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // Random horizontal position (0-100%)
            duration: Math.random() * 10 + 10, // Random duration between 10s and 20s
            delay: Math.random() * 10, // Random delay
            size: Math.random() * 10 + 10, // Random size between 10px and 20px
            opacity: Math.random() * 0.5 + 0.1, // Random opacity
        }))
    );

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Fog Layers */}
            <div className="absolute bottom-0 left-0 w-[200%] h-[300px] bg-gradient-to-t from-primary/10 to-transparent opacity-30 animate-mist" />
            <div className="absolute bottom-0 left-[-50%] w-[200%] h-[400px] bg-gradient-to-t from-blue-500/5 to-transparent opacity-20 animate-mist" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

            {/* Snowflakes */}
            {snowflakes.map((flake) => (
                <motion.div
                    key={flake.id}
                    className="absolute top-[-20px]"
                    style={{
                        left: `${flake.left}%`,
                        opacity: flake.opacity,
                    }}
                    animate={{
                        y: ['-10vh', '110vh'],
                        x: ['-20px', '20px', '-20px'], // Swaying effect
                    }}
                    transition={{
                        y: {
                            duration: flake.duration,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: flake.delay,
                        },
                        x: {
                            duration: flake.duration / 2, // Sway faster than fall
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }
                    }}
                >
                    <Snowflake size={flake.size} className="text-white" />
                </motion.div>
            ))}
        </div>
    );
};
