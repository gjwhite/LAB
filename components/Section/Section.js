import { children } from 'react';
import { motion } from 'framer-motion';
import bem from '../../utilities/bem';

// Styles
import './Section.module.scss'

const Section = (props) => {
    const { children, classes } = props;

    return (
        <motion.section className={bem('c-section', [classes])}>
            { children }
        </motion.section>
    );
};

export { Section };
