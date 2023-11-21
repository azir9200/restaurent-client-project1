import FoodCard from "../../../Components/FoodCard/FoodCard";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className='grid md:grid-cols-3 gap-10' >
        {
          items.map(item => <FoodCard
            key={item._id}
            item={item}
          ></FoodCard>)
        }
      </div>
    </div>
  );
};

export default OrderTab;