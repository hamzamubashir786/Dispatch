import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import customer1 from "./assets/customer1.jpeg"
import { FaStar } from "react-icons/fa";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import customer2 from "./assets/customer2.png"
import customer3 from "./assets/customer3.png"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Slider.css';
const Section5 = () => {
    return (
            <div className='w-full px-[4vw] my-10' id='testimonials'>
                <div className='flex  px-[1vw] py-4 gap-2  font-bold uppercase text-4xl flex-wrap'>
                <h1 className=''>our </h1>
                <h1 className='text-[#FF7B1B]'>customers</h1>
                <h1 className=''>Say </h1>
                </div>
                <Silder />
            </div>
    )
}

export default Section5

const Silder = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}

                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                <SwiperSlide>
                    <RecipeReviewCard imageSrc={customer1} message={"We help thousands of Carriers & Owner Operators to streamline their operations and increase their cash flow."} name="Danel" rating={5} />
                </SwiperSlide>

                <SwiperSlide>
                    <RecipeReviewCard imageSrc={customer2} message="We help thousands of Carriers & Owner Operators to streamline their operations and increase their cash flow.," name="Rubin" rating={5} />
                </SwiperSlide>

                <SwiperSlide>
                    <RecipeReviewCard imageSrc={customer3} message={"We help thousands of Carriers & Owner Operators to streamline their operations and increase their cash flow."} name="Borker" rating={5} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}



const RecipeReviewCard = ({ name, imageSrc, message, rating }) => {
    return (
        <Card sx={{ maxWidth: 320  , boxShadow: '0 0 4px 1px #D9F9F8'   }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <CardMedia
                            component="img"
                            height="140"
                            image={customer1}
                            alt="Sample image"
                        />
                    </Avatar>
                }
                title={<div className='text-lg font-bold'>{name}</div>}
                subheader={
                    <div className='flex text-[#2679B8] text-xl gap-1 '>
                        <FaStar />  <FaStar /> <FaStar />   <FaStar />   <FaStar />
                    </div>

                }
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>


        </Card>
    );
}
