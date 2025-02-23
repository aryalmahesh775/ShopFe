import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

interface fetchProductsProps {
  _id: string | number;
  name: string;
  price: number;
  images: { url: string; alText: string }[];
}

const CollectionPage = () => {
  const [products, setProducts] = useState<fetchProductsProps[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleClickOutside = (e:MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  // to close sidebar if user click outside sidebar
  useEffect(() => {
    // add event listener for click
    document.addEventListener("mousedown", handleClickOutside);
    // clean event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=1",
              alText: "Product 1",
            },
          ],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 200,
          images: [
            {
              url: "https://picsum.photos/500/500?random=2",
              alText: "Product 2",
            },
          ],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 300,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
              alText: "Product 3",
            },
          ],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 400,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
              alText: "Product 4",
            },
          ],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
              alText: "Product 5",
            },
          ],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 600,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
              alText: "Product 6",
            },
          ],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 700,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
              alText: "Product 7",
            },
          ],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 800,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
              alText: "Product 8",
            },
          ],
        },
      ];

      setProducts(fetchProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center cursor-pointer items-center"
      >
        <FaFilter className="mr-2" />
        Filters
      </button>

      {/* filter sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }  fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0
        `}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4 ">All Collections</h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
