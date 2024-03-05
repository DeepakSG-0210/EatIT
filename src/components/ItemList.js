import { useDispatch } from "react-redux";
import { cloudinaryImage } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = ( item ) => {
    //dispatch an action
    dispatch(addItems(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex p-2 m-2 border-gray-400 border-b-2 text-left shadow-md bg-green-100"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-me">{item.card.info.name}</span>{" "}
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-left">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-1 bg-black text-white shadow-md  mx-12 mt-16 rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={cloudinaryImage + item.card.info.imageId}
              className="rounded-md h-[90px] w-[150px]"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
