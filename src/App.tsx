import React, {lazy, Suspense} from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './app.scss';

const MainPage = lazy(() => import('../src/pages/MainPage'));
const MyPasswordsPage = lazy(() => import('../src/pages/MyPasswordsPage'));

function App() {
  return (
    <Router>
      <div className='app'>
        <Suspense fallback={<div>LOADING...</div>}>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="my-passwords/" element={<MyPasswordsPage/>}/>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;