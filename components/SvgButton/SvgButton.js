import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import bem from '../../utilities/bem';

const random = require('canvas-sketch-util/random');

const SvgButton = (props) => {
    const { text, classes } = props;
    const ref = useRef();
    const [ hover, setHover ] = useState(false);
    const [ tVal, setTVal ] = useState(0);

    // const toggleHover = () => setHover(!hover);
    // console.log(hover);

    // var bt = document.querySelectorAll('.button')[0],
	// turbVal = { val: 0.000001 },
	// turb = document.querySelectorAll('#noise feTurbulence')[0],

	// btTl = new TimelineLite({ paused: true, onUpdate: function() {
    //     turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
    // } });

    // btTl.to(turbVal, 0.2, { val: 0.2 })
    //     .to(turbVal, 0.2, { val: 0.000001 });

    // bt.addEventListener('click', function() {
    //     btTl.restart();
    // });

    const toggleHover = () => {
        setHover(!hover);
    };
{/* <animate attributeName="baseFrequency" from="0.3, 0.3" to="0.2, 0.2" dur="20s" repeatCount="indefinite"/> */}
    return (
        <motion.a
            className={bem('c-svg-button', [classes, hover ? 's-active' : ''])}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}>

            <span className="c-svg-button__text">{ hover ? 'Fire' : 'Water' }</span>

            <div className="c-svg-button__effect">
            <svg className="c-svg-button__noise" width="100%" height="100%" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="100" stroke={ hover ? 'rgb(255, 183, 0)' : '#4444dd'} stroke-width="5" fill="transparent" shape-rendering="crispEdges" />

                <filter id='noise' x='-20%' y='-20%' width='140%' height='140%'>
                    <feTurbulence
                        ref={ref}
                        type="fractalNoise"
                        baseFrequency={ hover ? 0.08 : 0.02 }
                        result="NOISE"
                        numOctaves={ hover ? 17 : 2 }

                        />

                        <feColorMatrix in="NOISE" type="hueRotate" values="0" result="cloud">
                            <animate attributeName="values" from="0" to="360" dur={ hover ? 4 : 8 } repeatCount="indefinite"/>
                        </feColorMatrix>

                        <feColorMatrix in="cloud" result="wispy" type="matrix"
                            values="4 1 0 0 0
                                    4 0 5 0 0
                                    4 0 0 3 0"
                        />

                    <feDisplacementMap in="SourceGraphic" in2="wispy" scale={ hover ? 42 : 24 } xChannelSelector={ hover ? 'R' : 'G' } yChannelSelector={ hover ? 'G' : 'B' } />

                    {/* <feTurbulence
                        ref={ref}
                        type="fractalNoise"
                        baseFrequency="0.0"
                        result="NOISE"
                        numOctaves="2"

                        >

                        { hover ? (
                            <animate
                                attributeName="baseFrequency"
                                dur="40s"
                                repeatCount="indefinite"
                                values="0.03;0.06;"
                                />
                         ) : ''}

                    </feTurbulence>

                    <feDisplacementMap in="SourceGraphic" in2="wispy" scale="20" xChannelSelector="R" yChannelSelector="G" /> */}

                </filter>
            </svg>
            </div>



        </motion.a>
    );
};

export { SvgButton };
