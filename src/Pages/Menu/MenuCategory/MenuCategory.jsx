import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items }) => {

  return (
    <div className="grid md:grid-cols-2 gap-10" >

      {
        items.map(item => <MenuItem
          key={item._id}
          item={item}
        >     <h1> menu Category</h1>
        </MenuItem>)
      }
    </div>
  );
};

export default MenuCategory;