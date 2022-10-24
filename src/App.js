import React from 'react';
import { Form } from './components/forms'
import { UserProfile } from './components/user'
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <UserProfile />
      <Form />
    </div>
  );
}

export default App;
