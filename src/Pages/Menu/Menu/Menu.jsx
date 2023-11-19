import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hocks/Hocks";




const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  const drinks = menu.filter(item => item.category === 'drinks');
  return (
    <div>
      <Helmet><title>Bistro | Menu</title> </Helmet>
      <Cover img={menuImg} title="our menu" ></Cover>
      <SectionTitle subHeading="don't miss it" heading="Today's Offer" > </SectionTitle>





    </div >
  );
};

export default Menu;