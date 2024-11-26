// import { useContext, useState } from "react";
// import { products } from "../../utils/products";
// import btnIcon from "../../assets/button-icon.png";
// import ProductCard from "./ProductCard";
// import { ThemeContext } from "../../context/ThemeContext";
// import axios from "axios";
// const Products = ({ headline }) => {
//   const { isDarkMode } = useContext(ThemeContext);

//   const categories = ["Doors", "Director's Table", "Boss Table", "kitchen"];
//   const [selectedCategory, setSelectedCategory] = useState("Doors");
//   const [visibleProducts, setVisibleProducts] = useState(4);

//   // Filter products based on selected category
//   const filteredProducts = products.filter(
//     (product) => product.category === selectedCategory
//   );

//   const loadMoreProducts = () => {
//     setVisibleProducts((prev) => prev + 4);
//   };

//   return (
//     <div
//       className={`${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-secondary-bg"
//       } py-12`}
//     >
//       <div className="section-container px-6 md:px-12">
//         {/* Headline */}
//         <h2 className="text-4xl font-bold text-center mb-12">{headline}</h2>

//         {/* Category Tabs */}
//         <div className="bg-gray-200 max-w-xl mx-auto sm:rounded-full p-4 mb-12">
//           <div className="flex flex-wrap justify-center gap-4">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => {
//                   setSelectedCategory(category);
//                   setVisibleProducts(4); // Reset product view count
//                 }}
//                 className={`py-2 px-6 rounded-full ${
//                   selectedCategory === category
//                     ? "bg-primary text-white"
//                     : "bg-white text-primary"
//                 } hover:bg-secondary hover:text-white transition-colors`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {filteredProducts.slice(0, visibleProducts).map((product, index) => (
//             <ProductCard key={index} product={product} />
//           ))}
//         </div>

//         {/* Load More Button */}
//         {visibleProducts < filteredProducts.length && (
//           <div className="flex justify-center mt-12">
//             <button
//               onClick={loadMoreProducts}
//               className="flex items-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-secondary hover:shadow-lg transition-all gap-2"
//             >
//               View More
//               <img src={btnIcon} alt="Icon" className="h-5 w-5" />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

// import { useContext, useState, useEffect } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
// import axios from "axios";
// import ProductCard from "./ProductCard"; // Assuming you have a separate ProductCard component
// import btnIcon from "../../assets/button-icon.png"; // Replace with your actual icon path

// const Products = ({ headline }) => {
//   const { isDarkMode } = useContext(ThemeContext);

//   const [categories, setCategories] = useState([]);  // Store categories
//   const [selectedCategory, setSelectedCategory] = useState(""); // To track selected category
//   const [products, setProducts] = useState([]);  // Store products
//   const [visibleProducts, setVisibleProducts] = useState(4);
//   const [loading, setLoading] = useState(true);

//   // Fetch categories and products from the API
//   useEffect(() => {
//     const fetchCategoriesAndProducts = async () => {
//       try {
//         // Fetch data from the same API
//         const response = await axios.get("https://api.publicapis.org/entries"); // Replace with your API endpoint

//         // Extract categories from the product data (ensure each product has a 'category' field)
//         const uniqueCategories = [
//           ...new Set(response.data.map((product) => product.category)),
//         ];

//         // Set the categories and products in state
//         setCategories(uniqueCategories);
//         setProducts(response.data);
//         setSelectedCategory(uniqueCategories[0]); // Select the first category by default
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);  // Stop loading once data is fetched
//       }
//     };

//     fetchCategoriesAndProducts();
//   }, []); // Empty dependency array to fetch data once on mount

//   // Filter products based on selected category
//   const filteredProducts = products.filter(
//     (product) => product.category === selectedCategory
//   );

//   const loadMoreProducts = () => {
//     setVisibleProducts((prev) => prev + 4);
//   };

//   return (
//     <div
//       className={`${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-secondary-bg"
//       } py-12`}
//     >
//       <div className="section-container px-6 md:px-12">
//         {/* Headline */}
//         <h2 className="text-4xl font-bold text-center mb-12">{headline}</h2>

//         {/* Category Tabs */}
//         <div className="bg-gray-200 max-w-xl mx-auto sm:rounded-full p-4 mb-12">
//           <div className="flex flex-wrap justify-center gap-4">
//             {loading ? (
//               <div className="text-center text-xl text-gray-500">Loading categories...</div>
//             ) : (
//               categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => {
//                     setSelectedCategory(category);
//                     setVisibleProducts(4); // Reset product view count
//                   }}
//                   className={`py-2 px-6 rounded-full ${
//                     selectedCategory === category
//                       ? "bg-primary text-white"
//                       : "bg-white text-primary"
//                   } hover:bg-secondary hover:text-white transition-colors`}
//                 >
//                   {category}
//                 </button>
//               ))
//             )}
//           </div>
//         </div>

//         {/* Loading Indicator */}
//         {loading && (
//           <div className="text-center text-xl text-gray-500">Loading products...</div>
//         )}

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {filteredProducts.slice(0, visibleProducts).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>

//         {/* Load More Button */}
//         {visibleProducts < filteredProducts.length && (
//           <div className="flex justify-center mt-12">
//             <button
//               onClick={loadMoreProducts}
//               className="flex items-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-secondary hover:shadow-lg transition-all gap-2"
//             >
//               View More
//               <img src={btnIcon} alt="Icon" className="h-5 w-5" />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import axios from "axios";
import ProductCard from "./ProductCard";
import btnIcon from "../../assets/button-icon.png";

const Products = ({ headline }) => {
  const { isDarkMode } = useContext(ThemeContext);

  const [categories, setCategories] = useState([]); // Store categories
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category by id
  const [products, setProducts] = useState([]); // Store products
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [loading, setLoading] = useState(true);

  // Fetch categories and products from the API
  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const categoriesResponse = await axios.get(
          "https://api.example.com/categories"
        ); // Replace with your API endpoint for categories
        const productsResponse = await axios.get(
          "https://api.example.com/products"
        ); // Replace with your API endpoint for products

        // Set categories and products
        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);

        // Select the first category by default if categories are available
        setSelectedCategory(categoriesResponse.data[0]?.id || null);
      } catch (error) {
        console.error("Error fetching categories or products:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchCategoriesAndProducts();
  }, []); // Empty dependency array to fetch data once on mount

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
            {loading ? (
              <div className="text-center text-xl text-gray-500">
                Loading categories...
              </div>
            ) : (
              categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setVisibleProducts(4); // Reset product view count
                  }}
                  className={`py-2 px-6 rounded-full ${
                    selectedCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-white text-primary"
                  } hover:bg-secondary hover:text-white transition-colors`}
                >
                  {category.name}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="text-center text-xl text-gray-500">
            Loading products...
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
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
