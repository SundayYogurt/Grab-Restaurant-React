import React from "react";
import Card from "./Card";

const Restaurant = ({ restaurants }) => {
  {
    /*ชื่อเดียวกับหน้า Homejs*/
  }
  console.log(restaurants);
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {restaurants &&
          restaurants.map((restaurant) => {
            //เชคว่ามีข้อมูลไหม
            return (
              <Card
                key={restaurant.id}
                title={restaurant.title}
                type={restaurant.type}
                img={restaurant.img}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Restaurant;
