import { useState } from 'react';
import { motion } from 'framer-motion';
import bem from '../../utilities/bem';

const Person = (props) => {
    const { name, role, expression } = props;

    const [face, setFace] = useState(expression.neutral);
    const [isDragging, setDragging] = useState(false);

    const handleDragStart = () => {
        setFace(expression.worried);
        setDragging(true);
    };

    const handleDragEnd = () => {
        setFace(expression.happy);
        setDragging(false);

        setTimeout(() => {
            setFace(expression.neutral);
        }, 1000);
    };

    return (
        <motion.div
            className={bem('c-person', [isDragging && 's-active'])}
            whileHover={{
                scale: 1.01
            }}
            drag
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}
            dragElastic={0.4}
            onDragStart={() => handleDragStart()}
            dragTransition={{ bounceStiffness: 750, bounceDamping: 22 }}
            onDragEnd={() => handleDragEnd()}>
            <div className="c-person__card">
                {expression && (
                    <div className="c-person__expression">
                        <motion.div>
                            <img className="c-person__image" src={face} />
                        </motion.div>
                    </div>
                )}
                {name && <h2 className="c-person__name">{name}</h2>}
                {role && <h3 className="c-person__role">{role}</h3>}
            </div>
        </motion.div>
    );
};

export { Person };
