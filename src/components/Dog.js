import React from 'react';
import {connect} from 'react-redux';

import { fetchStart, fetchSuccess, fetchFail } from '../actions';

import axios from 'axios';


const Dog = ({ dog, isFetching, error, dispatch}) => {

  if (error) {
    return <p>Error!!! ---> {error}</p>;
  }

  if (isFetching) {
    return <p>Fetching a doggo!!!</p>;
  }

  const handleClick = () => {
     dispatch(fetchStart());
     axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        console.log(res.data);
        dispatch(fetchSuccess(res.data.message))
      })
      .catch(err=>{
        dispatch(fetchFail(err))
      })

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