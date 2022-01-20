import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import { getDog } from '../actions';

import styled from 'styled-components';

const DoggoMessage = styled.h2`
  color: blue;
  font-family: 'Comic Sans MS';
  border-style: solid;
  background-color: pink;
  width: 600px;
  height: 200px; 
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  background-color: yellow;
  color: green;
  width: 20%;
  padding: 1%;
  margin-top: 120px;
  margin-bottom: 20px;
  font-family: 'Comic Sans MS';
  border-style: dashed;
  border-color: purple;
`

const Image = styled.img`
  border-style: groove;
  border-color: red;
  border-width: 15px;
  margin-bottom: 20px;
`


const MainDiv = styled.div`
  background-color: orange;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



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
    <MainDiv>
      <Button onClick={handleClick}>WANT ANOTHER DOGGO!!!</Button>
        <div>
          <Image src = {dog.picture} width='400'/>
          <DoggoMessage>Here is a nice doggo for you!</DoggoMessage>
        </div>
    </MainDiv>
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