import React from "react";
import CategoriesCSS from "./Categories.module.css";
const categories = [
  {
    id: 1,
    title: "Birthday Party",
    description:
      "Make birthdays joyful with decorations, cakes, music, and fun activities.",
    image:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
  },
  {
    id: 2,
    title: "Wedding",
    description:
      "Complete wedding planning with venue, decoration, photography, and catering.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    id: 3,
    title: "Corporate Events",
    description:
      "Professional events for meetings, product launches, and company celebrations.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865",
  },
  {
    id: 4,
    title: "Concerts",
    description:
      "Organize music events with sound, lighting, and stage arrangements.",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  },
];

function Categories(){
    return(
        <div className={`${CategoriesCSS.Categories_wrapper} section`}>
           <small className="categories_title">Event Categories</small> <br />
           <h2 className="categories_text">Explore and choose the perfect one for you special occasion we organize</h2>

        </div>)}

export default Categories