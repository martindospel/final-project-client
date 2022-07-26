import './App.css';
import Home from './routes/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './routes/Login';
import { useSelector } from 'react-redux';
import { clientId } from './config'

function App() {
  const currentTeacher = useSelector(store => store?.teachers?.currentTeacher)
  return (
    <div>
      <GoogleOAuthProvider clientId={clientId} >
        {currentTeacher ? <Home /> : <Login />}
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
