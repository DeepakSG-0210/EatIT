import RestaurantCard, { resOpen } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantOpen = resOpen(RestaurantCard);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=12.9303176&lng=77.6970796"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <h2> Looks like you are offline, Please check ur internet status</h2>
    );
  }

  // Conditional rendering
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
// UserContext changing by getting input
  const { setUserName, loggedInUser } = useContext(UserContext);

  return (
    <div className="body-container">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid rounded-md border-black focus:ring-1"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 ml-2 rounded-lg border border-black bg-blue-200 hover:font-semibold"
            onClick={() => {
              console.log(searchText);
              const filteredList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
          <button
            className="filter-btn rounded-lg border border-black bg-slate-400 ml-4 px-4 cursor-pointer hover:font-semibold"
            onClick={() => { 
              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredList(filteredList);
            }}
          >
            Top-Rated
          </button>
        </div>
        {/* <div className="search m-4 p-4 flex items-center">
          <label className="p-2">UserName: </label>
          <input type="text" placeholder="Search" className="border border-black p-2" value = {null} onChange={(e) => {setUserName(e.target.value)}}></input>
        </div> */}
      </div>
      <div className="restaurant-container flex flex-wrap shadow-sm">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/Restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.isOpen ? (
              <RestaurantOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
