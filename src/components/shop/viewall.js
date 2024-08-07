"use client";
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import axios from 'axios';
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"


const Viewall = ({search_query,totalproducts}) => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/ProductList.json');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching the product data:', error);
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
      setLoading(false);
    }, 500); // simulate network delay
  };

  return (
    <section className='py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-end gap-4 sm:justify-between items-center mb-8'>
          <h1 className="text-lg sm:text-2xl w-2/3 break-all font-semibold">All Products</h1>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  {/* <FilterIcon className="w-5 h-5" /> */}
                  <span>Filter out</span>
                  <ChevronsUpDownIcon className="w-4 h-4 ml-auto" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                  <DialogTitle>Filter Products</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="category">Filter by</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="justify-between w-full">
                          <span>Select products</span>
                          <ChevronsUpDownIcon className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuCheckboxItem>Pickles</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Spice</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Chips</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Dairy</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Cold Drinks</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Breakfasts</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Masala</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Meat</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Rice</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Oils</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Candy</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Snacks</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Biscuits</DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="size">Sort out</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="justify-between w-full">
                          <span>Filter Products</span>
                          <ChevronsUpDownIcon className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        <DropdownMenuCheckboxItem>Popular Products</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Trending Products</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>You may like</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>New Arrivals</DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="price">Price Range</Label>
                    <div className="flex items-center gap-4">
                      <Input id="min-price" type="number" placeholder="Min" className="w-full" />
                      <span>-</span>
                      <Input id="max-price" type="number" placeholder="Max" className="w-full" />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Clear Filters</Button>
                  <Button>Apply Filters</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

          </div>
        </div>
        {loading && products.length === 0 ? (
          <div className="flex justify-center items-center h-48">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.slice(0, visibleProducts).map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
                  <img
                    src={product.img_url}
                    alt={product.Name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">{product.Name}</h2>
                    <p className="text-gray-600 mb-4">{product.sale_price} per lb</p>
                    <div className="mt-auto">
                      <Link href={`/product/${product.id}`}>
                        <Button variant="outline" className="w-full">
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {visibleProducts < products.length ? (
              <div className="text-center mt-8">
                <Button onClick={handleLoadMore}>
                  Load More
                </Button>
                {loading && <div className="flex justify-center items-center mt-4"><div className="spinner"></div></div>}
              </div>
            ) : (
              <p className="text-center mt-8">All products listed</p>
            )}
          </>
        )}
      </div>
    </section>
  );
};
function ChevronsUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  )
}


function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export default Viewall;
