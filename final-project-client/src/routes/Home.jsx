import React from 'react';
import Header from '../components/Header';
import StudentList from '../components/StudentList';
import Main from '../components/Main';
import './Home.css';

function Home() {
  return (
    <div className="homepage-container">
      <Header />
      <StudentList />
      <Main />
    </div>
  )
}

export default Home;