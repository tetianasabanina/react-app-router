import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import One from "./One";

const topics = [
  {
    id: 1,
    name: "one"
  },
  {
    id: 2,
    name: "two"
  },
]

const Topics = ({ match }) => {
  console.log(match);
    return (
      <div>
        <h1>This is Topics page</h1>
       
        <nav>
          <ul>
          {topics.map(item => (
            <li key={item.id}>
              <Link to={`/topics/${item.id}`}>
                {item.name}
              </Link>
            </li>
          ))}
          </ul>
        </nav>
        
        
          
    
      </div>
    );
  }

  export default Topics;