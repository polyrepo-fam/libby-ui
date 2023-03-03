import { createElement } from 'react';
import { TOKEN_COLOR, TOKEN_SIZE, TOKEN_WEIGHT } from '@jonbri/token';

export interface HeadingProps {
  level?: number;
  children: string;
}
export const Heading = ({ level = 1, children }: HeadingProps) => {
  const text = children;
  const style = {
    color: TOKEN_COLOR,
    fontSize: TOKEN_SIZE,
    fontWeight: TOKEN_WEIGHT,
  };
  switch (level) {
    case 1:
      return <h1 style={style}>{text}</h1>;
    case 2:
      return <h2 style={style}>{text}</h2>;
    case 3:
      return <h3 style={style}>{text}</h3>;
    case 4:
      return <h4 style={style}>{text}</h4>;
    case 5:
      return <h5 style={style}>{text}</h5>;
    case 6:
      return <h6 style={style}>{text}</h6>;
  }
  return <h1 style={style}>{text}</h1>;
};
