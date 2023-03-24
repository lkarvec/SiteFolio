import useBackground from '../lib/backgroundGenerator';
import MainContent from '../views/MainContent';
import React, { useMemo } from 'react';
import { Container } from 'react-bootstrap';
import Button from '../components/Button/Button';

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
                handleClick={() => {
                    regenerate();
                }}
            />
        </div>
    );
}

export default App;
