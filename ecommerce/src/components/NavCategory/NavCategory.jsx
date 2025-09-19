import React, { useState } from 'react';
import style from './NavCategory.module.css';
import DropDown from '../Dropdown/DropDown';
import { RxTextAlignJustify } from "react-icons/rx";

const NavCategory = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // store which category is open

  const categoriesData = [
    {
      heading: "Men's Fashion",
      subCategories: [
        { name: "T-Shirts" },
        { name: "Shirts" },
        { name: "Jeans" },
        { name: "Trousers" },
        { name: "Jackets" },
        { name: "Suits" },
        { name: "Caps & Hats" },
        { name: "Footwear" }
      ]
    },
    {
      heading: "Women's Fashion",
      subCategories: [
        { name: "Dresses" },
        { name: "Tops & T-Shirts" },
        { name: "Jeans" },
        { name: "Skirts" },
        { name: "Ethnic Wear" },
        { name: "Sweaters & Jackets" },
        { name: "Footwear" },
        { name: "Handbags" }
      ]
    },
    {
      heading: "Kids' Fashion",
      subCategories: [
        { name: "T-Shirts" },
        { name: "Shirts" },
        { name: "Jeans & Shorts" },
        { name: "Dresses" },
        { name: "School Uniforms" },
        { name: "Footwear" },
        { name: "Caps & Accessories" }
      ]
    },
    {
      heading: "Luggage & Bags",
      subCategories: [
        { name: "Backpacks" },
        { name: "Handbags" },
        { name: "Suitcases" },
        { name: "Travel Bags" },
        { name: "Laptop Bags" },
        { name: "Duffel Bags" }
      ]
    },
    {
      heading: "Watches & Accessories",
      subCategories: [
        { name: "Men's Watches" },
        { name: "Women's Watches" },
        { name: "Smartwatches" },
        { name: "Sunglasses" },
        { name: "Belts" },
        { name: "Wallets" }
      ]
    },
    {
      heading: "Electronics",
      subCategories: [
        { name: "Mobiles" },
        { name: "Laptops" },
        { name: "Headphones" },
        { name: "Smart Gadgets" },
        { name: "Speakers" },
        { name: "Power Banks" }
      ]
    }
  ];

  // Map top-level categories
  const topCategories = [
    "Fashion",
    "Electronics",
    "Home & Furniture",
    "Grocery",
    "Books",
    "Jewellery"
  ];

  return (
    <div className={style.container}>
      <div className={style.allCat}>
        <RxTextAlignJustify className={style.alignIcon} /> All Categories
      </div>

      {topCategories.map((catName, idx) => (
        <div
          key={idx}
          className={style.catWrapper}
          onMouseEnter={() => setOpenDropdown(catName)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className={style.cat}>{catName}</div>

          {catName === "Fashion" && (
            <DropDown
              visible={openDropdown === "Fashion"}
              categories={categoriesData.filter(cat =>
                cat.heading.includes("Fashion")
              )}
            />
          )}
          {catName === "Electronics" && (
            <DropDown
              visible={openDropdown === "Electronics"}
              categories={categoriesData.filter(cat =>
                cat.heading === "Electronics"
              )}
            />
          )}
          
        </div>
      ))}
    </div>
  );
};

export default NavCategory;
