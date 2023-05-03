import star from '../../assets/star.svg'
import halfstar from '../../assets/halfStar.svg'
import emptystar from '../../assets/emptyStar.svg'


let output = [];

function getStars(rating) {
  // Round to nearest half
  rating = Math.round(rating * 2) / 2;

  // Append all the filled whole stars
  for (var i = rating; i >= 1; i--)
    output.push(`<img src=${star} />`);

  // If there is a half a star, append it
  if (i === 0.5)
    output.push(`<img src=${emptystar} />`);

  // Fill the empty stars
  for (let i = 5 - rating; i >= 1; i--)
    output.push(`<img src=${halfstar} />`);

  // return output.join("");
  return output.join("");
}




export {getStars}