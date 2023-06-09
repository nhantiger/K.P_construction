import DefaultLayout from "@/layout/DefaultLayout";
import { useState, useEffect } from "react";
import bgIron from "@/image/bg_iron.jpg";
import Ironbg from "@/image/iron_bg.jpg";
import Image from "next/image";
import Link from "next/link";
import SearchModal from "@/components/SearchModal";
import { useRouter } from "next/router";

const sampleProducts = [
  {
    id: 1,
    slug: "san-pham-a",
    name: "Sản phẩm A",
    category: "tôn mạ",
    price: 50,
    image: bgIron,
  },
  {
    id: 2,
    slug: "san-pham-b",
    name: "Sản phẩm B",
    category: "ống thép",
    price: 150,
    image: Ironbg,
  },
  {
    id: 3,
    slug: "san-pham-c",
    name: "Sản phẩm C",
    category: "gang",
    price: 550,
    image: bgIron,
  },
  {
    id: 4,
    slug: "san-pham-d",
    name: "Sản phẩm D",
    category: "điện máy",
    price: 1001,
    image: Ironbg,
  },
  {
    id: 5,
    slug: "san-pham-1",
    name: "Sản phẩm 1",
    category: "tôn mạ",
    price: 50,
    image: bgIron,
  },
  {
    id: 6,
    slug: "san-pham-2",
    name: "Sản phẩm 2",
    category: "ống thép",
    price: 150,
    image: Ironbg,
  },
  {
    id: 7,
    slug: "san-pham-3",
    name: "Sản phẩm 3",
    category: "gang",
    price: 550,
    image: bgIron,
  },
  {
    id: 8,
    slug: "san-pham-4",
    name: "Sản phẩm 4",
    category: "điện máy",
    price: 1001,
    image: Ironbg,
  },
  {
    id: 9,
    slug: "san-pham-5",
    name: "Sản phẩm 5",
    category: "tôn mạ",
    price: 50,
    image: bgIron,
  },
  {
    id: 10,
    slug: "san-pham-6",
    name: "Sản phẩm 6",
    category: "ống thép",
    price: 150,
    image: Ironbg,
  },
  {
    id: 11,
    slug: "san-pham-7",
    name: "Sản phẩm 7",
    category: "gang",
    price: 550,
    image: bgIron,
  },
  {
    id: 12,
    slug: "san-pham-8",
    name: "Sản phẩm 8",
    category: "điện máy",
    price: 1001,
    image: Ironbg,
  },
  {
    id: 13,
    slug: "san-pham-9",
    name: "Sản phẩm 9",
    category: "gang",
    price: 550,
    image: bgIron,
  },
  {
    id: 14,
    slug: "san-pham-10",
    name: "Sản phẩm 10",
    category: "điện máy",
    price: 1001,
    image: Ironbg,
  },
];

function Products({ products = sampleProducts }) {
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const categories = ["all", "tôn mạ", "ống thép", "gang", "điện máy"];
  const addToCart = (product) => {
    console.log("Thêm sản phẩm vào giỏ hàng:", product);
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  };
  const router = useRouter();
  const searchResults = router.query.searchResults
    ? JSON.parse(router.query.searchResults)
    : null;

  const displayProducts = searchResults ? searchResults : products;
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSearch = (searchTerm) => {
    const searched = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    if (searched.length === 1) {
      // Nếu chỉ tìm được 1 sản phẩm, điều hướng đến trang chi tiết sản phẩm
      const slug = searched[0].slug;
      router.push(`/product-details/${slug}`);
    } else {
      // Nếu tìm được nhiều hơn 1 sản phẩm, hiển thị danh sách sản phẩm
      setSearchedProducts(searched);
      setIsSearchModalOpen(false);
    }
  };
  

  const handleClose = () => {
    setIsSearchModalOpen(false);
  };

  const [filteredProducts, setFilteredProducts] = useState([]);
  const filterProducts = (inputProducts) => {
    let filteredProducts = [];
    if (inputProducts && inputProducts.length > 0) {
      filteredProducts = inputProducts.filter((product) => {
        if (category === "all" || product.category === category) {
          if (price === "") {
            return true;
          } else if (price === "0-100") {
            return product.price >= 0 && product.price <= 100;
          } else if (price === "100-500") {
            return product.price > 100 && product.price <= 500;
          } else if (price === "500-1000") {
            return product.price > 500 && product.price <= 1000;
          } else if (price === "1000+") {
            return product.price > 1000;
          }
        }
        return false;
      });
    }
    return filteredProducts;
  };

  useEffect(() => {
    if (searchedProducts.length > 0) {
      setFilteredProducts(filterProducts(searchedProducts));
    } else {
      setFilteredProducts(filterProducts(products));
    }
  }, [category, price, products, searchedProducts]);

  return (
    <div className="container mx-auto p-4 md:p-10">
      <h1 className="text-2xl font-bold mb-6">Danh sách sản phẩm</h1>
      <div className=" md:flex-row items-center justify-between mb-6">
        <div className="items-center mb-4 mr-5 md:mb-0">
          <span className="mr-2">Danh mục sản phẩm:</span>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="border border-gray-400 py-1 sm:flex-row flex sm:m-3 px-2 rounded w-full md:w-auto"
          >
            <option value="all">Tất cả</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="items-center">
          <span className="mr-2">Giá cả:</span>
          <select
            value={price}
            onChange={handleChangePrice}
            className="border border-gray-400 py-1 px-2 sm:flex-col flex  sm:m-3 rounded w-full md:w-auto"
          >
            <option value="">Tất cả</option>
            <option value="0-100">Dưới 100 đồng</option>
            <option value="100-500">Từ 100 - 500 đồng</option>
            <option value="500-1000">Từ 500 - 1000 đồng</option>
            <option value="1000+">Trên 1000 đồng</option>
          </select>
          <button
            onClick={() => setFilteredProducts(filterProducts())}
            className="bg-blue-500 text-white py-1 px-2 sm:ml-3 rounded w-full md:w-auto mt-2 md:mt-0"
          >
            Lọc
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.name}
              className="border border-gray-400 rounded-lg shadow-sm p-4 hover:shadow-2xl transition duration-150"
            >
              <Link href={`/product-details/${product.slug}`}>
                <div className="relative overflow-hidden h-48 w-full mb-4 cursor-pointer">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="absolute h-full w-full rounded-t-lg transform hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4 flex ">
                  <div>
                    <h2 className="text-lg font-bold whitespace-nowrap hover:text-orange-500 mb-2 cursor-pointer">
                      {product.name}
                    </h2>
                    <span className="text-sm whitespace-nowrap font-light block">
                      {product.category}
                    </span>
                  </div>
                  <div className="pl-20 ml-10 ">
                    <span className="text-lg font-bold text-orange-600 block">
                      {product.price} đồng
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-semibold">
            Không tìm thấy sản phẩm phù hợp.
          </p>
        )}
      </div>
      <SearchModal
        isOpen={isSearchModalOpen}
        onRequestClose={handleClose}
        onSubmit={handleSearch}
        products={products}
      />
    </div>
  );
}
export default function WithDefaultLayout(props) {
  return (
    <DefaultLayout>
      <Products {...props} />
    </DefaultLayout>
  );
}
