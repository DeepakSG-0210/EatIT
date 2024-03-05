import UserContext from "../utils/UserContext";
import { cloudinaryImage } from "../utils/constants";
import { useContext } from "react";


const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[280px] hover:bg-green-100 bg-green-50 rounded-lg h-[300px]">
      <img className="res-logo rounded-md w-[220px] m-auto h-[140px]" src={cloudinaryImage + cloudinaryImageId} alt="food"></img>
      <h3 className="font-bold py-1 text-lg font-serif">{name}</h3>
      <span className="text-md font-semibold">{avgRating} Stars</span>
      <span className="ml-16 text-md font-semibold">{sla.slaString}</span>
      <p className="font-normal text-sm my-2">
        {cuisines.join(", ")}
      </p>
      {/* <p>{loggedInUser}</p> */}
    </div>
  );
};

//Higher order components
export const resOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mx-4 bg-green-400/60 text-black font-medium p-1 rounded-sm ">
          Open
        </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
};
export default RestaurantCard;
