import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import books from "common/json/books.json";
import uuid from 'react-uuid';
import booksimg from "assets/books/booksimg";
export default function Carrossel() {
  console.log(booksimg)
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {books.books.map(book => {
          return <SwiperSlide key={uuid()}><img src={booksimg[book.img]} alt="" /></SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}
