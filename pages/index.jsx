import useBackground from '../lib/backgroundGenerator';
import MainContent from '../views/MainContent';
import React, { useMemo } from 'react';
import Button from '../components/Button/Button';
import classes from '../views/MainContent.module.scss';

function App() {
    const { backgrounds, regenerate } = useBackground();
    const style = useMemo(() => {
        return {
            background: backgrounds,
            height: '100%',
        };
    }, [backgrounds]);

    return (
        <div style={style}>
            <MainContent />

            <Button
                label="Regenerate colors"
                className={classes.regenerate}
                handleClick={() => {
                    regenerate();
                }}
            />
        </div>
    );
}

export default App;
