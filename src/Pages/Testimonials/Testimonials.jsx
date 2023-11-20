import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'



const Testimonials = () => {

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));

  }, [])

  return (
    <section>
      <SectionTitle
        subHeading="What Our Client Say !"
        heading={'testimonials'}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          reviews.map(review => <SwiperSlide
            key={review._id} >
            <div className=' m-24 text-center ' >
              <Rating
                className=' flex flex-col mx-24 my-16 justify-center items-center '
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p> {review.details} </p>
              <h3 className='text-2xl text-center text-orange-700' >{review.name} </h3>

            </div>
          </SwiperSlide>)
        }

      </Swiper>


    </section>
  );
};

export default Testimonials;