import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';

export default function About() {
  return (
    <Card>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores incidunt blanditiis. Reiciendis pariatur, eveniet maxime aliquid temporibus labore dicta magni nostrum illo iure placeat magnam autem quis eum laborum?</p>
      <Link to='/'>
        Back to home
      </Link>
    </Card>
  );
}
