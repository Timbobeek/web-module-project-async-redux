import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import { getDog } from '../actions';

import axios from 'axios';


const Dog = ({ dog, isFetching, error, dispatch}) => {

  useEffect(()=>{
    dispatch(getDog());
  },[])

  if (error) {
    return <p>Error!!! ---> {error}</p>;
  }

  if (isFetching) {
    return <p>Fetching a doggo!!!</p>;
  }

  const handleClick = () => {
     dispatch(getDog())
  }

  return(
    <div>
      <div>
      <h2>Here is a nice doggo for you!</h2>
      <img src = {dog}/>   {/*dog.picture would not fetch new pics while dog was an obj with a pic in it */}
      </div>
    <button onClick={handleClick}>WANT ANOTHER DOGGO</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dog: state.dog,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(Dog);