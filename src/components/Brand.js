import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

function Brand(props) {
  return (
    <h1>
      <Link to="/">Jeremy Morrison</Link>
    </h1>
  );
}

export default Brand;
