import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const One = ({ match }) => {
  console.log(match);
    return (
      <div>
        <h1>This is page</h1>
        <h3>{match.params.topicId}</h3>
    
      </div>
    );
  }

  export default One;