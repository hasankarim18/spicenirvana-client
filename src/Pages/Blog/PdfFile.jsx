/* eslint-disable react/no-unescaped-entities */
import {

  Document,
  Page,
  View,
  Text,
  StyleSheet
} from "@react-pdf/renderer";


// Create styles
const styles = StyleSheet.create({
  page: {
    display: "block",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    display: "block",
  },
  text: {
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    marginBottom:20
  },
  textBorder: {
    border: "2px solid #F99B7D",
    padding:20,
    marginBottom:10
  },
});


const PdfFile = () => {
  return (
    <Document>
      <Page style={styles.page} wrap={false} size="A4">
        <View style={styles.section}>
          <Text style={styles.heading}>
            1. What is the difference between react controlled component and
            uncontroll component?
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            {" "}
            The main difference between controlled and uncontrolled components
            in React is the way the component's state is managed.
          </Text>
        </View>
        <View style={styles.section}>
          <Text>Controlled Components:</Text>
          <Text>
            In a controlled component, the state is managed by the parent
            component through props. The parent component pass value to the
            child component through the props. The child componet is dependent
            on the parent components value or state which is coming to him via
            props
          </Text>
        </View>
        <View style={styles.section}>
          <Text>Controlled Components:</Text>
          <Text style={styles.textBorder}>
            {` 
            "Controlled Components"
                const LoginForm = () =
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
              `}
          </Text>
        </View>
        <View style={styles.section}>
          <Text>UnControlled Components:</Text>
          <Text>
            On the other hand, an uncontrolled component manages its own state
            using the browser's form handling api. The component renders a form
            element, and the value of the input is managed by the browser. This
            can make it more difficult to predict and manage the state of the
            component.
          </Text>
          <Text>
            In this example, the UncontrolledInput component maintains its own
            internal state, and when the user types into the input, it calls the
            setValue function and updates the state, which updates the input
            value. In general useRef is used to collect the value of the input
            field in uncontrolled compoents
          </Text>
          <Text style={styles.textBorder}>
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
          </Text>
        </View>
      </Page>
      <Page>
        <View style={styles.section}>
          <Text style={styles.heading}>
            2. How to validate react props using proptypes?{" "}
          </Text>
          <Text>
            When a prop is passed from a parent to child components mistakes can
            happen when passing the props. In the example in Child is rendered
            in Parentand props are passed. One props is a string and another
            props is a number. If we make mistakes passing props it will show
            error or different result in the Child component. Now if we use
            proptype in the Child compoenent to check incoming props then if a
            wrong data type is send in the props it will show error in the
            console. Such as if age is send as string in the parent it will show
            wrong result in the output but the component will not show any
            error. but if we use PropTypes to validate props then it will show a
            error in the console. Previously it was inbuild in react now it has
            it's own packages. npm install --save prop-types
          </Text>
          <Text style={styles.textBorder}>
            {`
  
import PropTypes from 'prop-types';

const Child = ({name, age}) => {
return (
    <h1>
        Child Name {name} and 
        is {age + 5} year old 
    </h1>
        )
      }
Child.propTypes = {
  name: PropTypes.string
  age: Proptypes.number
};

--------------------

const Parnent = () => {
    return <Child name="Nowshin" age={15} />
}
  `}
          </Text>
        </View>
      </Page>
      <Page>
        <View style={styles.section}>
          <Text style={styles.heading}>
            3. What is the difference between nodejs and expressjs{" "}
          </Text>
          <Text>
            Answer: Nodejs is server side javascript environment. Ryan Dahl
            developed node js. He tooks google chromes v8 engine and run it in a
            c++ environment. Node js is a cross-platform, open-source server
            environment that can run on Windows, Linux, Unix, macOS, and more.
            On the other hand, Express.js is a web application framework for
            Node.js. Express.js provides many features and utilities for
            building web applications in the server side. Express.js is build by
            using Node.js and provides a higher-level solutions for common
            backend / server side web development. Express.js is just a
            framework of build upon node.js.
          </Text>
        </View>
      </Page>
      <Page>
        <View style={styles.section}>
          <Text style={styles.heading}>
            4. What is custom hook? And why will you create custom hook?
          </Text>
          <Text>
            React custom hook is a javascript function which allows us to use
            and share stateful components of react. When more than one component
            has commom funtionality we extract the commone functionality from
            that component and make a custom hook which can be shared by
            components which results code duplication. custom hooks start by use
            word. for example useCounter In this example we use separate the
            counting funtion in a separate component useCounter which acts as a
            custom hook in this case. All the calculation is done in the hook
            and only the returned data is used to show in Counter component. by
            this way we can use counter calcuation in any component without
            writting the calculation.
          </Text>
          <Text style={styles.textBorder}>
            {`""useCounter hook
import { useState } from 'react';

function useCounter() {
const [count, setCount] = useState(0);

function increment() {
 setCount(count + 1);
}
return [count, increment];
}`}
          </Text>
          <Text style={styles.textBorder}>
            {`""useCounter hook
import { useState } from 'react';

function useCounter() {
const [count, setCount] = useState(0);

function increment() {
 setCount(count + 1);
}
return [count, increment];
}`}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfFile;
