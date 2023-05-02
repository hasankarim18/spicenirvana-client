import './App.css'
import { getAuth } from "firebase/auth";
import app from './firebase.config';

function App() {
const auth = getAuth(app)
console.log(auth);

  return (
    <>
      <h1>SpiceNirvana starting and deploying in firebase</h1>
      <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>
    </>
  );
}

export default App
