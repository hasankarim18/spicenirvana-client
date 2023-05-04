/* eslint-disable react/no-unescaped-entities */


const About = () => {
    return (
      <div>
        <div className="relative h-96 ">
          <div className="absolute w-full h-full -z-10">
            <img
              className="w-full h-96"
              src="https://cdn.pixabay.com/photo/2016/11/19/12/44/burgers-1839090__340.jpg"
              alt=""
            />
          </div>
          <div className="absolute w-full h-full z-0 bg-white bg-opacity-80"></div>
          <div className=" relative container z-10 mx-auto mobile_padding text-3xl text-black">
            <div className="w-full flex items-center justify-center h-96">
              <div>
                <h2 className="text-center text-4xl -mt-20">
                  Discover the Best of Indian Cuisine with Famous Chefs' Recipes
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-8   ">
          <p>
            Welcome to Famous Chefs' Recipes, a platform dedicated to bringing
            you the most authentic and delicious Indian recipes from some of the
            best-known chefs in the country. Our team is passionate about food
            and dedicated to sharing the unique and diverse flavors of India
            with everyone. <br/> <br/>
             We are proud to offer a wide range of recipes that
            are easy to follow, and our expert chefs are always on hand to help
            you with any questions or concerns you may have. Whether you're a
            seasoned cook or a beginner, our recipes are designed to be
            accessible to everyone. 
            <br/> <br/>  Customer Service: At Famous Chefs' Recipes,
            we are committed to providing our customers with the highest level
            of service. If you have any questions about our recipes or need help
            with an order, our friendly and knowledgeable customer service team
            is always here to help. We take great pride in the quality of our
            products, and we want you to be completely satisfied with your
            purchase. If for any reason you are not happy with your order,
            please let us know and we will do everything we can to make it
            right. Thank you for choosing Famous Chefs' Recipes, and we look
            forward to sharing the delicious flavors of India with you!
          </p>
        </div>
      </div>
    );
};

export default About;