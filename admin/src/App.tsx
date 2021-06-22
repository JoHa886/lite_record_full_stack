import React, { FC } from 'react';
import { Button } from 'antd';
import Login from './pages/login/index'

const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <Login></Login>
  </div>
);

export default App;
