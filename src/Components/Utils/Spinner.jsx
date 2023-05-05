import classes from './Spinner.module.css'

const Spinner = () => {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <h1  className=" text-6xl ">
          L <span className={`${classes.loader} inline-block`}></span> ading...
        </h1>
      </div>
    );
};

export default Spinner;