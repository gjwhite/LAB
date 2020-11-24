import { useState } from 'react';
import { motion } from 'framer-motion';
import bem from '../../utilities/bem';

const HeadingHuge = (props) => {
    const { heading } = props;

    const spaces = heading.replace(/ /g, '\u00a0');
    const letters = Array.from(spaces);

    return (
        <motion.div className={bem('c-heading-huge', [])}>
            <h1 className="c-heading-huge__heading">
                {letters.map((letter, key) => (
                    <span className="c-heading-huge__letter" key={key}>
                        {letter}
                    </span>
                ))}
            </h1>
        </motion.div>
    );
};

export { HeadingHuge };
