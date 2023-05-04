/* eslint-disable react/no-unescaped-entities */

import Four from "./Four";
import One from "./One";
import Three from "./Three";
import Two from "./Two";



const Blog = () => {

  
    
    return (
      <div>
        <One />
        {/* props tpes */}
        <div className="my-8">
          <hr />
        </div>
        <Two />
        <div className="my-8">
          <hr />
        </div>
        <Three />
        <div className="my-8">
          <hr />
        </div>
        <Four />
      </div>
    );
};

export default Blog;