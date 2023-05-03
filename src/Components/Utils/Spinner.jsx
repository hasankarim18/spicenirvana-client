import classes from './Spinner.module.css'

const Spinner = () => {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <h1 style={{fontSize:"120px"}} className="">
          L <span className={`${classes.loader} inline-block`}></span> ading...
        </h1>
      </div>
    );
};

export default Spinner;