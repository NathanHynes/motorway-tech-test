import React from 'react';
import { Form } from './components/forms'
import { UserGallery } from './components/user'
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <UserGallery />
      <Form />
    </div>
  );
}

export default App;
