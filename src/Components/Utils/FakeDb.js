


const saveBookmarkToDb = (id)=> {
      const newBookmarkId = id;
      const newBookmarkArray = [...bookmarkedId, newBookmarkId];     
      localStorage.setItem("bookmarkIdArray", JSON.stringify(newBookmarkArray));
}

const getFavoriteId = ()=> {
    return JSON.parse(localStorage.getItem("bookmarkIdArray"));
}


// const getReadTime = ()=> {
//     return JSON.parse(localStorage.getItem("totalReadTime"));
// }

export { saveBookmarkToDb, getFavoriteId };