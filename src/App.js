import React from 'react';

import Dog from './components/Dog';
import './App.css';
import styled from 'styled-components';

const Header = styled.h1`
  background-color: lime;
  margin-top: 20px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Comic Sans MS';

`

function App() {
  return (
    <div className="App">
      <Header>Doggo Pics, Such Wow</Header>
      <Dog/>
    </div>
  );
}

export default App;