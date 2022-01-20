import React from 'react';
import {connect} from 'react-redux';

const Dog = ({ dog, isFetching, error}) => {

  if (error) {
    return <p>Error!!! ---> {error}</p>;
  }

  if (isFetching) {
    return <p>Fetching a doggo!!!</p>;
  }

  return(
    <div>
      <div>
      <h2>Here is a nice doggo for you!</h2>
      <img src = {dog.picture}/>
      </div>
    <button>WANT ANOTHER DOGGO</button>
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