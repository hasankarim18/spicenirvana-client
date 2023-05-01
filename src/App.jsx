import './App.css'
import { getAuth } from "firebase/auth";
import app from './firebase.config';

function App() {
const auth = getAuth(app)
console.log(auth);

  return (
    <>
      <h1>SpiceNirvana starting and deploying in firebase</h1>
    </>
  );
}

export default App
