import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGreetings } from '../redux/greeting/greetingSlice';

function Greeting() {
  const { greetings } = useSelector((state) => state.greetings)
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(fetchGreetings());
  }, [])
  
  const handleClick = () => {
    dispatch(fetchGreetings())
  }

  const styles = {
    backgroundColor: '#f0f0f0',
    fontSize: '8rem',
    color: 'darkblue',
    padding: '1rem',
    borderRadius: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  };

  const styles2 = {
    backgroundColor: 'blue',
    padding: '4rem',
    border: 'none',
    color: 'white',
    fontSize: '4rem',
    borderRadius: '0.8rem',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div style={styles}>
      <p> { greetings.greeting }</p>
      <button onClick={handleClick} style={styles2}>Random Greeting</button>
    </div>

  );
}

export default Greeting;