interface FunctionProps {
  degrees?: number;
  fromColor?: string;
  toColor?: string;
}

export function randomGradientColor({
  degrees,
  fromColor,
  toColor,
}: FunctionProps = {}): string {
  //   const deg = '135'; // Math.floor(Math.random() * 360);
  const deg = degrees || Math.floor(Math.random() * 360);
  const from = fromColor || createHex();
  const to = toColor || createHex();

  return `linear-gradient(${deg}deg, ${from}, ${to})`;
}

const createHex = () => {
  const hexValues = '0123456789abcdef';

  let hexCode = '';

  for (let i = 0; i < 6; i++) {
    hexCode += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
  }

  return '#' + hexCode;
};
