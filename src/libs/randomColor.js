import colors from '../data/colors';
const c = Object.keys(colors);

export default function randomColor() {
  return c[Math.floor(Math.random() * (c.length -1))];
}
