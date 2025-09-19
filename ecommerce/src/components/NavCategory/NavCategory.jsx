import React, { useState ,useRef ,useEffect } from 'react';
import style from './NavCategory.module.css';
import DropDown from '../Dropdown/DropDown';
import { RxTextAlignJustify } from "react-icons/rx";

const NavCategory = () => {
  const mobileMenuRef = useRef(null); 
  const [openDropdown, setOpenDropdown] = useState(null); // store which category is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //  mobile hamburger state
  console.log(openDropdown);
  

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

  const dropdownMap = {
    Fashion: categoriesData.filter((c) => c.heading.includes("Fashion")),
    Electronics: categoriesData.filter((c) => c.heading === "Electronics"),
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current && 
      !mobileMenuRef.current.contains(event.target) // check click bahar hua
    ) {
      setIsMobileMenuOpen(false); // menu close
    }
  };

  if (isMobileMenuOpen) {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
  }

  return () => {
    // cleanup function
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("touchstart", handleClickOutside);
  };
}, [isMobileMenuOpen]);


  return (
    <div className={style.container}>
   
      <div 
      className={style.allCat}
      onClick={()=>setIsMobileMenuOpen((prev)=>!prev)}
      >
        <RxTextAlignJustify className={style.alignIcon} /> 
        <span>All Categories</span>
      </div>

      {topCategories.map((catName) => {
        const hasDropdown = Array.isArray(dropdownMap[catName]) && dropdownMap[catName].length > 0;

        return (
          <div
            key={catName}
            className={style.catWrapper}
            // only attach handlers if dropdown exists
            onMouseEnter={() => hasDropdown && setOpenDropdown(catName)}
            onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
            onFocus={() => hasDropdown && setOpenDropdown(catName)}
            onBlur={() => hasDropdown && setOpenDropdown(null)}
            aria-haspopup={hasDropdown ? "menu" : undefined}
            aria-expanded={openDropdown === catName}
          >
            <div className={style.cat}>{catName}</div>

            {hasDropdown && (
              <DropDown
                visible={openDropdown === catName}
                categories={dropdownMap[catName]}
                // optional: pass a close callback if DropDown contains interactive elements
                onClose={() => setOpenDropdown(null)}
              />
            )}
          </div>
        );
      })}

     {/* Mobile Menu (toggle) */}
    {isMobileMenuOpen && (
      <div ref={mobileMenuRef} className={style.mobileMenu}>
      {topCategories.map((catName)=>(
        <div key={catName} className={style.mobileCat}>
          {catName}
        </div>
      ))}
    </div>
    )}
     
    </div>
    
   

  );

};

export default NavCategory;
