

const Three = () => {
  return (
    <div>
      <div className="container mx-auto mobile_padding">
        <h1 className="text-2xl py-3 text-orange-600">
          3. What is the difference between nodejs and expressjs
        </h1>
        <p>
          <strong>Answer: </strong> <br />
          Nodejs is server side javascript environment. Ryan Dahl developed node
          js. He tooks google chromes v8 engine and run it in a c++ environment.
          Node js is a cross-platform, open-source server environment that can
          run on Windows, Linux, Unix, macOS, and more.
        </p>
        <p>
          On the other hand, Express.js  is a web application framework for
          Node.js. Express.js provides many features and utilities for building web
          applications in the server side. Express.js is build by using Node.js and provides a
          higher-level solutions for common backend / server side web development.
          Express.js is just a framework of build upon node.js.
        </p>
      </div>
    </div>
  );
};

export default Three;
