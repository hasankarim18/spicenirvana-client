const Four = () => {
  return (
    <div>
      <div className="container mx-auto mobile_padding">
        <h1 className="text-2xl py-3 text-orange-600">
          4. What is custom hook? And why will you create custom hook?
        </h1>
        <p>
          <strong>Answer</strong>: <br />
          React custom hook is a javascript function which allows us to use and
          share stateful components of react. When more than one component has
          commom funtionality we extract the commone functionality from that
          component and make a custom hook which can be shared by components
          which results code duplication.
          <br />
          custom hooks start by <strong>use</strong> word. for example{" "}
          <strong>useCounter</strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mt-4">
            In this example we use separate the counting funtion in a separate component <strong>useCounter</strong> which acts as a custom hook in this case. All the calculation is done in the hook and only the returned data is used to show in <strong>Counter</strong> component. by this way we can use counter calcuation in any component without writting the calculation. 
          </div>
          <div>
            <pre className="bg-gray-100">
              <code>
                {`
""useCounter hook
import { useState } from 'react';

function useCounter() {
const [count, setCount] = useState(0);

function increment() {
 setCount(count + 1);
}
return [count, increment];
}
`}
              </code>
            </pre>
            <div className="my-4"></div>
            <pre className="bg-gray-100">
              <code>
                {`
"useCounter hook in action"
import React from 'react';
import useCounter from './useCounter';

function Counter() {
const [count, increment] = useCounter();

return (
<div>
    <h1>Count: {count}</h1>
    <button onClick={increment}>
    Increment
    </button>
</div>
  );
}
export default Counter;

    `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
