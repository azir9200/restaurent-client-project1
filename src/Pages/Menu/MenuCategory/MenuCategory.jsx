import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, img, title }) => {

  return (
    <div>
      {title && <Cover img={img} title={title} ></Cover>}

      <div className="grid md:grid-cols-2 gap-10" >

        {
          items.map(item => <MenuItem
            key={item._id}
            item={item}
          >     <h1> menu Category</h1>
          </MenuItem>)
        }
      </div>
      <Link to={`/order/${title}`} >
        <button className="btn btn-outline rounded border-0 border-b-8 border-r-8 mt-4 border-orange-700 ">Order Now </button>   </Link>

    </div>
  );
};

export default MenuCategory;