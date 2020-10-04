import { useState, useEffect } from 'react';
import bem from '../../utilities/bem';

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

const Cursor = (props) => {
    if (typeof navigator !== 'undefined' && isMobile()) return null;
    const { classes } = props;
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        EventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const EventListeners = () => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const handleLinkHoverEvents = () => {
        document.querySelectorAll('a').forEach((el) => {
            el.addEventListener('mouseover', () => setLinkHovered(true));
            el.addEventListener('mouseout', () => setLinkHovered(false));
        });
    };

    const classHidden = hidden ? 'hidden' : null;
    const classClicked = clicked ? 'clicked' : null;
    const classLinkHovered = linkHovered ? 'link-hovered' : null;

    return (
        <div
            className={bem('c-cursor', [
                classes,
                classHidden,
                classClicked,
                classLinkHovered
            ])}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
};

export { Cursor };
