import { useState } from "react";
import { menu } from "../utils/Data";

const Products = () => {
  const [isFilteredMenu, setIsFilteredMenu] = useState(menu);

  const showProductCategory = (category) => {
    if (category === "all") {
      setIsFilteredMenu(menu);
    } else {
      const filteredProducts = menu.filter(
        (item) => item.category === category
      );
      setIsFilteredMenu(filteredProducts);
    }
  };

  const handleChange = (e) => {
    const searchItem = e.target.value.toLowerCase();

    if (searchItem.length >= 4) {
      const filterProduct = menu.filter((product) =>
        product.title.toLowerCase().includes(searchItem)
      );
      setIsFilteredMenu(filterProduct);
    } else {
      setIsFilteredMenu(menu);
    }
  };

  return (
    <div className="main">
      <div className="products">
        <div className="btn">
          <button onClick={() => showProductCategory("all")}>All</button>
          <button onClick={() => showProductCategory("breakfast")}>
            Breakfast
          </button>
          <button onClick={() => showProductCategory("lunch")}>Lunch</button>
          <button onClick={() => showProductCategory("dinner")}>Dinner</button>
        </div>
        <div className="main-input">
          <input type="text" placeholder="menu" onChange={handleChange} />
        </div>
      </div>

      <div className="container">
        {isFilteredMenu.map((item) => (
          <ul key={item.id} className="menu-item">
            <div className="menu-img">
              <img className="cont-img" src={item.img} alt={item.title} />
            </div>
            <div className="menu-details">
              <li> {item.title} </li>
              <li> &#x20B9;{item.price} </li>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Products;
