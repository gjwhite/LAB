import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import bem from '../../utilities/bem';

const GameController = () => {
    const [isDragging, setDragging] = useState(false);

    const handleDragStart = () => {
        setDragging(true);
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    return (
        <motion.div className={bem('c-game-controller', [])}>
            <motion.div className={bem('c-game-controller__pad', [isDragging && 's-active'])}>
                <motion.div
                    className="c-game-controller__joy-stick"
                    drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 1500, bounceDamping: 40 }}
                    onDragStart={() => handleDragStart()}
                    onDragEnd={() => handleDragEnd()}>

                </motion.div>
            </motion.div>
            <motion.div className={bem('c-game-controller__pad', [isDragging && 's-active'])}>
                <motion.div
                    className="c-game-controller__joy-stick"
                    drag
                    dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 1500, bounceDamping: 40 }}
                    onDragStart={() => handleDragStart()}
                    onDragEnd={() => handleDragEnd()}>

                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export { GameController };
