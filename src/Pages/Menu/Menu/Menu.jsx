import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hocks/Hocks";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import drImg from '../../../assets/menu/menu-bg.png'

const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  // const offered = menu.filter(item => item.category === 'offered');
  const drinks = menu.filter(item => item.category === 'drinks');
  return (
    <div>
      <Helmet><title>Bistro | Menu</title> </Helmet>
      <Cover img={menuImg} title="our menu" ></Cover>
      <SectionTitle subHeading="don't miss it" heading="Today's Offer" > </SectionTitle>


      <MenuCategory items={desserts} title="dessert" img={dessertImg} ></MenuCategory>

      <MenuCategory items={pizza} title={'pizza'} img={pizzaImg} ></MenuCategory>
      <MenuCategory items={salad} title={'salad'} img={saladImg} ></MenuCategory>
      <MenuCategory items={soup} title={'soup'} img={soupImg} ></MenuCategory>
      <MenuCategory items={drinks} title={'drinks'} img={drImg} ></MenuCategory>





    </div >
  );
};

export default Menu;