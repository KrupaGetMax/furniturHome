import { useContext, useState } from "react";
import { products } from "../../utils/products";
import btnIcon from "../../assets/button-icon.png";
import ProductCard from "./ProductCard";
import { ThemeContext } from "../../context/ThemeContext";

const Products = ({ headline }) => {
  const { isDarkMode } = useContext(ThemeContext);

  const categories = ["Doors", "Director's Table", "Boss Table", "kitchen"];
  const [selectedCategory, setSelectedCategory] = useState("Doors");
  const [visibleProducts, setVisibleProducts] = useState(4);

  // Filter products based on selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-secondary-bg"
      } py-12`}
    >
      <div className="section-container px-6 md:px-12">
        {/* Headline */}
        <h2 className="text-4xl font-bold text-center mb-12">{headline}</h2>

        {/* Category Tabs */}
        <div className="bg-gray-200 max-w-xl mx-auto sm:rounded-full p-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProducts(4); // Reset product view count
                }}
                className={`py-2 px-6 rounded-full ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                } hover:bg-secondary hover:text-white transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < filteredProducts.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMoreProducts}
              className="flex items-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-secondary hover:shadow-lg transition-all gap-2"
            >
              View More
              <img src={btnIcon} alt="Icon" className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
