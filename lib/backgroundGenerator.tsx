import { getEdgePoint } from './helpers';

const palette = ['#855988', '#42b6c6', '#33a68c', '#446ba6', '#4b95f0', '#c16bc5'];

// cache this to save memory
const paletteLength = palette.length;

export const generateBackground = () => {
    return Array(5)
        .fill(null)
        .map(() => palette[Math.floor(Math.random() * paletteLength)])
        .map((color) => {
            const [x, y] = getEdgePoint(Math.floor(Math.random() * 400), 100, 100);
            return `radial-gradient(farthest-corner at ${x}% ${y}%, ${color}, transparent 100%)`;
        });
};
