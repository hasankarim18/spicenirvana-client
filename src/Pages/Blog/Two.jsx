/* eslint-disable react/no-unescaped-entities */


const Two = () => {
    return (
      <div>
        <div className="container mx-auto mobile_padding">
          <h1 className="text-2xl py-3 text-orange-600">
            2. How to validate react props using proptypes
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-2">
                <strong>Answer:</strong>
              </p>
              <p>
                When a prop is passed from a parent to child components mistakes
                can happen when passing the props. <br />
                In the example in <strong>Child</strong> is rendered in{" "}
                <strong>Parent</strong>
                and props are passed. One props is a string and another props is
                a number. If we make mistakes passing props it will show error
                or different result in the <strong>
                  Child{" "}
                </strong> component. <br /> Now if we use proptype in the{" "}
                <strong>Child </strong> compoenent to check incoming props then
                if a wrong data type is send in the props it will show error in
                the console. <br /> Such as if <strong>age</strong> is send as
                string in the parent it will show wrong result in the output but
                the component will not show any error. <br />
                but if we use <strong>PropTypes</strong> to validate props then
                it will show a error in the console.
                <br />
                Previously it was inbuild in react now it has it's own packages.
                <br/>
                  <strong>npm install --save prop-types</strong>
                  <br/>
                
                <br/> 
                
              </p>
            </div>
            <div>
              <pre className="bg-gray-100">
                <code>
                  {`
import PropTypes from 'prop-types';

const Child = ({name, age}) => {
return (
    <h1>
        Child Name \u0024{name} and 
        is \u0024{age+5} year old 
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
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Two;