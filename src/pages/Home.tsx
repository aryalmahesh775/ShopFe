import Hero from "../components/Layout/Hero"
import FeaturedCollection from "../components/Products/FeaturedCollection"
import FeaturesSection from "../components/Products/FeaturesSection"
import GenderCollectionSection from "../components/Products/GenderCollectionSection"
import NewArrivels from "../components/Products/NewArrivels"
import ProductDetails from "../components/Products/ProductDetails"
import ProductGrid from "../components/Products/ProductGrid"

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        alText:"Product 1"
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
        alText:"Product 2"
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
        alText:"Product 3"
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
        alText:"Product 4"
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
        alText:"Product 5"
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
        alText:"Product 6"
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
        alText:"Product 7"
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
        alText:"Product 8"
      },
    ],
  },
];


const Home = () => {
  return (
    <div>
      <Hero /> 
      <GenderCollectionSection />
      <NewArrivels />

      {/* best seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">Top Wears for Women</h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />
      <FeaturesSection />
    </div>
  )
}

export default Home
