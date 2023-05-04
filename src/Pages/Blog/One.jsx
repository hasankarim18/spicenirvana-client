/* eslint-disable react/no-unescaped-entities */


const One = () => {
    return (
      <div>
        <div className="container mx-auto mobile_padding">
          {/* 1 */}
          <div>
            <h1 className="text-2xl py-3 text-orange-600">
              1. What is the difference between react controlled component and
              uncontroll component?
            </h1>
            <p className="mb-2">
              The main difference between controlled and uncontrolled components
              in React is the way the component's state is managed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-2">
                  <strong>Controlled Components: </strong> <br />
                  In a controlled component, the state is managed by the parent
                  component through props. The parent component pass value to
                  the child component through the props. The child componet is
                  dependent on the parent components value or state which is
                  coming to him via props
                </p>
                <p className="mb-2">
                  In this example, the input (child) component receives its
                  current value and an onChange callback via props. The
                  LoginForm component(parent) maintains the state of email and
                  password, and when the user types into the inputs, it calls
                  the onChange callback and updates the state, which updates the
                  input values.
                </p>
              </div>
              <div>
                <pre className="bg-gray-100">
                  <code>
                    {` 
"Controlled Components"
    const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form>
        <input
         value={email}
         onChange={setEmail}
         placeholder="Email" />
        <ControlledInput
            value={password}
            onChange={setPassword}
            placeholder="Password"
        />
        <button>Submit</button>
        </form>
    );
    };
    `}
                  </code>
                </pre>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div>
                <p className="mb-2">
                  <strong>UnControlled Components: </strong> <br />
                  On the other hand, an uncontrolled component manages its own
                  state using the browser's form handling api. The component
                  renders a form element, and the value of the input is managed
                  by the browser. This can make it more difficult to predict and
                  manage the state of the component.
                </p>
                <p className="mb-2">
                  In this example, the UncontrolledInput component maintains its
                  own internal state, and when the user types into the input, it
                  calls the setValue function and updates the state, which
                  updates the input value. <br/>
                  In general <strong>useRef</strong> is used to collect the value of the input field in uncontrolled compoents
                </p>
              </div>
              <div>
                <pre className="bg-gray-100">
                  <code>
                    {` 
"Uncontrolled Components"
const LoginForm = () => {
const inputEl = useRef(null);
const onButtonClick = () => {   
    inputEl.current.focus();
  };
  return (
    <form>
      <input defaultValue="" placeholder="Email" />
      <input defaultValue="" placeholder="Password" />
      <button onClick={onButtonClick}>Submit</button>
    </form>
  );
};
    `}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default One;