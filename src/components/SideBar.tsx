import {
  // Link,
  NavLink,
} from "react-router-dom";
import { menuListMenu } from "../utils/mainMenuList";
import { useDispatch } from "react-redux";
import { storeHeading } from "../store/slices/headingSlice";

const SideBar = () => {
  const dispatch = useDispatch();

  const changeHeading = (newHeading: any) => {
    console.log("newHeading-->>", newHeading);
    dispatch(storeHeading(newHeading));
  };

  return (
    <>
      <div className="container flex justify-between py-3">
        <h1 className="font-bold text-[22px]">LOGO</h1>
        <div>{/* <button>Menu</button> */}</div>
      </div>

      <div className="container mt-5">
        <p className="#8B909A">Main Menu</p>

        <div className="mt-3">
          {menuListMenu.map((item: any) => (
            <div
              key={item.id}
              className="py-4 cursor-pointer"
              onClick={() => changeHeading(item.title)}
            >
              {/* <Link to={item.navigateTo} >
                <p className="text-[#8B909A] text-[15px]">{item.title}</p>
              </Link> */}
              <NavLink
                to={item.navigateTo}
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "red" : "inherit",
                  };
                }}
                // activeClassName="text-[#FFFFFF] bg-blue-500"
                className="text-[#8B909A] text-[15px] rounded px-2"
              >
                {item.title}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
