

const HomeBannerSkeleton = () => {
    return (
      <div className="bg-gray-200 animate-pulse">
        <div className="h-80">
          <div className="flex gap-8 w-full">
            <div className="w-3/4 p-12 flex justify-center items-center ">
              <div className="p-2 h-12 w-full bg-gray-400"></div>
            </div>
            <div className="w-1/4 p-12 ">
              <div className="p-2 h-60 w-full bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeBannerSkeleton;