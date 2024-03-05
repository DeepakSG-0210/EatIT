import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantMenu = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);
  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards[0]?.card?.card.info;

  const itemCards =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card.itemCards;
  const categories =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl p-4 m-4 font-serif">{name}</h1>
      <hr />
      <p className="m-2 p-2 font-medium">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categoried Accordian*/}
      {/* Controlled Component */}
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
