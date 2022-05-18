import React from 'react';

export default function Equation({a, b, c}) {
  return (
    <span>
          \( {a}x^2 + {b}x + {c}\)
    </span>
  );
}

Equation.defaultProps = {
    a: 2,
    b: 5,
    c: 7
}
