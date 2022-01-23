import React, { Component } from "react";
import { Link, useRouteMatch, Route } from "react-router-dom"
import SinglePage from './SinglePage';
import Final_Header from "../components/Final_Header";
import Button from '../components/CustomButton.js'


class Final extends Component {
  render() {
    return (
        <div>
          <Final_Header />
  <button> <h2> Play again? </h2> <Link to = ".." > </Link> </button> 

        </div>
      
    );
  }
}

  export default Final;
