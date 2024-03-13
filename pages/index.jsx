import { generateBackground } from '../lib/backgroundGenerator';
import MainContent from '../views/MainContent';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Button from '../components/Button/Button';
import classes from '../views/MainContent.module.scss';

function App() {
    const [backgroundOne, regenerateOne] = useState(generateBackground());
    const [backgroundTwo, regenerateTwo] = useState(generateBackground());
    const opacityRef = useRef(true);
    const [opacity, setOpacity] = useState(true);

    const styleOne = useMemo(() => {
        return {
            background: backgroundOne,
            height: '100%',
            width: '100%',
            transition: 'opacity 15s ease',
            position: 'absolute',
            opacity: opacity ? 0 : 1,
        };
    }, [opacity]);

    const styleTwo = useMemo(() => {
        return {
            background: backgroundTwo,
            height: '100%',
            width: '100%',
            transition: 'opacity 15s ease',
            position: 'absolute',
            opacity: opacity ? 1 : 0,
        };
    }, [opacity]);

    useEffect(() => {
        const interval = setInterval(() => {
            opacityRef.current = !opacityRef.current;
            setOpacity(opacityRef.current);
            opacityRef.current ? regenerateTwo(generateBackground()) : regenerateOne(generateBackground());
        }, 15700);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={classes.wrapper}>
            <div style={styleTwo} />
            <div style={styleOne} />
            <MainContent backgroundColor={opacity ? '#42b6c6' : '#4b95f0'} />
        </div>
    );
}

export default App;
