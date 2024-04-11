import { generateBackground } from '../lib/backgroundGenerator';
import MainContent from '../views/MainContent';
import React, { useEffect, useRef, useState } from 'react';
import classes from '../views/MainContent.module.scss';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import SocialButtons from '../components/SocialButtons/SocialButtons';

function App() {
    const [backgroundOne, regenerateOne] = useState(generateBackground());
    const [backgroundTwo, regenerateTwo] = useState(generateBackground());

    const opacityRef = useRef(true);
    const [opacity, setOpacity] = useState(true);
    const [styleOne, remakeStyleOne] = useState({
        background: backgroundOne,
        height: '100%',
        width: '100%',
        transition: 'opacity 15s ease',
        position: 'absolute',
        opacity: opacity ? 0 : 1,
    });
    const [styleTwo, remakeStyleTwo] = useState({
        background: backgroundTwo,
        height: '100%',
        width: '100%',
        transition: 'opacity 15s ease',
        position: 'absolute',
        opacity: opacity ? 1 : 0,
    });

    useEffect(() => {
        remakeStyleOne({
            background: backgroundOne,
            height: '100%',
            width: '100%',
            transition: 'opacity 15s ease',
            position: 'absolute',
            opacity: opacity ? 0 : 1,
        });
        remakeStyleTwo({
            background: backgroundTwo,
            height: '100%',
            width: '100%',
            transition: 'opacity 15s ease',
            position: 'absolute',
            opacity: opacity ? 1 : 0,
        });
    }, [opacity]);

    useEffect(() => {
        const interval = setInterval(() => {
            opacityRef.current = !opacityRef.current;
            setOpacity(opacityRef.current);
            opacityRef.current ? regenerateTwo(generateBackground()) : regenerateOne(generateBackground());
        }, 15750);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <title>Feytouched Tech</title>
            <meta
                name="description"
                content="A recognized leader in website Software Engineering; delivering website overhauls and modernization
                                projects with expertise in the React ecosystem, including Typescript, NextJS, AWS, and more."
            />
            <div className={classes.outerWrapper}>
                <div className={`${classes.cloudPosition} fadeClouds`}>
                    <MouseParallaxContainer
                        globalFactorX={0.15}
                        globalFactorY={0.15}
                        useWindowMouseEvents={true}
                        containerStyle={{
                            height: 'auto',
                            width: '100%',
                            position: 'sticky',
                            overflow: 'visible',
                            top: '1px',
                            zIndex: '3',
                            opacity: '100%',
                        }}
                    >
                        <MouseParallaxChild
                            factorX={0.1}
                            factorY={0.3}
                            style={{
                                position: 'absolute',
                                top: '1000px',
                                right: '5%',
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            <img src="/cloud2.png" className={classes.cloud2} />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.2}
                            factorY={0.6}
                            style={{
                                position: 'absolute',
                                top: '500px',
                                right: '15%',
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            <img src="/cloud3.png" className={classes.cloud3} />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.1}
                            factorY={0.4}
                            style={{
                                position: 'absolute',
                                top: '900px',
                                left: '70%',
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            <img src="/cloud4.png" className={classes.cloud4} />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.15}
                            factorY={0.6}
                            style={{
                                position: 'absolute',
                                top: '350px',
                                left: '70%',
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            <img src="/cloud7.png" className={classes.cloud3} />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.3}
                            factorY={0.9}
                            style={{
                                position: 'absolute',
                                top: '700px',
                                left: '55%',
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            <img src="/cloud1.png" className={classes.cloud7} />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.7}
                            factorY={1.4}
                            style={{
                                position: 'absolute',
                                top: '750px',
                                left: '10%',
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            <img src="/cloud5.png" className={classes.cloud5} />
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            factorX={0.5}
                            factorY={0.9}
                            style={{
                                position: 'absolute',
                                marginTop: '10%',
                                right: '85%',
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            <img src="/cloud6.png" className={classes.cloud6} />
                        </MouseParallaxChild>

                        <MouseParallaxChild
                            factorX={0.7}
                            factorY={1.2}
                            style={{
                                position: 'absolute',
                                marginTop: '5%',
                                marginLeft: '70%',
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            <img src="/cloud8.png" className={classes.cloud8} />
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </div>

                <div className={classes.wrapper}>
                    <div style={styleTwo} />
                    <div style={styleOne} />
                    <MainContent backgroundColor={opacity ? '#42b6c6' : '#4b95f0'} />
                    <div className={classes.footer}>
                        <SocialButtons variant="footer" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
