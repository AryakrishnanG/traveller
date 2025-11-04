import React, { useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';



function Landing() {

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);
  const scrollRef5 = useRef(null);

  const [openIndex, setOpenIndex] = useState(null);


  const scroll = (ref, direction) => {
    const container = ref.current;
    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const packages = [
    {
      name: "Ranikhet Tour Packages",
      img: "https://www.holidify.com/images/bgImages/RANIKHET.jpg",
    },
    {
      name: "Maharashtra Tour Packages",
      img: "https://i.pinimg.com/1200x/70/36/54/70365403748b0f2d8160647ad15a945f.jpg",
    },
    {
      name: "Shillong Tour Packages",
      img: "https://www.holidify.com/images/bgImages/SHILLONG.jpg",
    },
    {
      name: "Mount Abu Tour Packages",
      img: "https://www.holidify.com/images/bgImages/MOUNT-ABU.jpg",
    },
    {
      name: "Kasol Tour Packages",
      img: "https://www.holidify.com/images/bgImages/KASOL.jpg",
    },
    {
      name: "Spiti Valley Tour Packages",
      img: "https://i.pinimg.com/736x/91/c6/47/91c647dc7a52ee95ce5b7a4bbaec49d2.jpg",
    },
    {
      name: "Kodaikanal Tour Packages",
      img: "https://www.holidify.com/images/bgImages/KODAIKANAL.jpg",
    },
    {
      name: "Amarnath Tour Packages",
      img: "https://i.pinimg.com/1200x/6c/5a/de/6c5adefe98ece43b5ba6797a043ecf70.jpg",
    },
    {
      name: "Rajasthan Tour Packages",
      img: "https://i.pinimg.com/1200x/9e/35/e9/9e35e983fe70f4c3a1e5dbe22172a4da.jpg",
    },
    {
      name: "Kerala Tour Packages",
      img: "https://i.pinimg.com/736x/c6/f7/40/c6f74028e1026588612bdece15c6e297.jpg",
    }

  ];

  const packages2 = [
    {
      name: "Abu dhabi Tour Packages",
      img: "https://i.pinimg.com/1200x/86/9c/9e/869c9ea6c48e886d4e04390b271a5770.jpg",
    },
    {
      name: "phuket Tour Packages",
      img: "https://i.pinimg.com/1200x/a9/95/13/a99513c7625294fc4d75b818d24f8c44.jpg",
    },
    {
      name: "Srilanka Tour Packages",
      img: "https://i.pinimg.com/736x/4d/5c/3a/4d5c3a226c6cc503aa30c19c5fddc3dd.jpg",
    },
    {
      name: "Malaysia Tour Packages",
      img: "https://i.pinimg.com/736x/d4/3e/f3/d43ef32953c8cc10441255eb58a66d34.jpg",
    },
    {
      name: "Nepal Tour Packages",
      img: "https://i.pinimg.com/736x/f8/8f/dd/f88fdda5ff8241bb3967c942169fa6d1.jpg",
    },
    {
      name: "Bali Valley Tour Packages",
      img: "https://i.pinimg.com/1200x/0b/40/7f/0b407f324f3948b4b5878e834d4839a2.jpg",
    },
    {
      name: "Bhutan Tour Packages",
      img: "https://i.pinimg.com/1200x/da/f2/3d/daf23d7c0371703a6624be723575233d.jpg",
    },
    {
      name: "Dubai Tour Packages",
      img: "https://i.pinimg.com/1200x/b5/b9/50/b5b9508f565c91e781714445beca26e4.jpg",
    },
    {
      name: "Maldives Tour Packages",
      img: "https://i.pinimg.com/1200x/92/b1/79/92b1791393625bbb8f4d16d9a64c7873.jpg",
    },
    {
      name: "Singapore Tour Packages",
      img: "https://i.pinimg.com/1200x/64/fd/7e/64fd7ee249a2295ada39979b66d99879.jpg",
    }

  ];

  const packages3 = [
    {
      name: "2 Nights 3 Days Chennai Temple Tour Package",
      img: "https://i.pinimg.com/1200x/7d/d8/cf/7dd8cfd213bdc8808342ff1d39e539d5.jpg",
      oldPrice: "₹14849",
      newPrice: "₹13364",
    },
    {
      name: "2 Nights 3 Days Chennai Tour Package",
      img: "https://i.pinimg.com/1200x/dc/7a/01/dc7a018b0438369887eeb042c888e89c.jpg",
      oldPrice: "₹12349",
      newPrice: "₹11114",
    },
    {
      name: "Jaipur Tour Package for Family for 3 days",
      img: "https://i.pinimg.com/1200x/2f/26/0c/2f260c8ae22267ef889ff86e4ba25641.jpg",
      oldPrice: "₹7000",
      newPrice: "₹6300",
    },
    {
      name: "3 Nights 4 Days Rann Of Kutch Tour Package",
      img: "https://i.pinimg.com/736x/6c/f9/e8/6cf9e81b1137422e07c91ebd92068434.jpg",
      oldPrice: "₹13250",
      newPrice: "₹11925",
    },
    {
      name: "3 Nights Kerala Backwater Tour",
      img: "https://i.pinimg.com/736x/6d/b6/82/6db6823b78ce179383aed77e0de29dd5.jpg",
      oldPrice: "₹15500",
      newPrice: "₹13999",
    },
  ];

  // --- packages4 (similar style)
  const packages4 = [
    {
      name: "Kashmir Honeymoon Tour Package",
      img: "https://i.pinimg.com/736x/36/83/10/368310e96f6bc27f56654dfb30171061.jpg",
      oldPrice: "₹18000",
      newPrice: "₹15999",
    },
    {
      name: "Manali Adventure Tour Package",
      img: "https://i.pinimg.com/736x/74/99/e8/7499e864c2014e3fedd3e8173373ed69.jpg",
      oldPrice: "₹14500",
      newPrice: "₹12999",
    },
    {
      name: "Goa Family Tour Package",
      img: "https://i.pinimg.com/1200x/fe/c0/fb/fec0fb1c9a2a70f4812e3fe9ddc88d86.jpg",
      oldPrice: "₹11000",
      newPrice: "₹9500",
    },
    {
      name: "Ooty & Kodaikanal Hill Station Tour",
      img: "https://i.pinimg.com/736x/a6/04/17/a60417f9086ed1c82bc8f5f5eaffa626.jpg",
      oldPrice: "₹14000",
      newPrice: "₹12499",
    },
    {
      name: "Lakshadweep Tour",
      img: "https://i.pinimg.com/1200x/44/b1/0f/44b10fb4effa5630565604c666079381.jpg",
      oldPrice: "₹17000",
      newPrice: "₹15499",
    }

  ];

  // --- packages5 (similar style)
  const packages5 = [
    {
      name: "3 Nights 4 Days Dwarka Somnath Tour Package",
      img: "https://i.pinimg.com/736x/49/8b/bc/498bbca5663c2f3d2d9f65198090953d.jpg",
      oldPrice: "₹42000",
      newPrice: "₹37999",
    },
    {
      name: "2 Nights 3 Days Chennai Temple Tour Package",
      img: "https://i.pinimg.com/736x/3c/e2/c3/3ce2c373003a51dc5589496554b7ce76.jpg",
      oldPrice: "₹48000",
      newPrice: "₹44500",
    },
    {
      name: "4 Nights 5 Days Dwarka Somnath With Gir Tour Package",
      img: "https://i.pinimg.com/736x/1e/a4/f5/1ea4f5c724c91419d861602f8b967dae.jpg",
      oldPrice: "₹39000",
      newPrice: "₹34999",
    },
    {
      name: "2 Nights 3 Days Amarnath Yatra Package From Sonamarg",
      img: "https://i.pinimg.com/736x/47/22/1e/47221e2fde43550293985373ca41354a.jpg",
      oldPrice: "₹41000",
      newPrice: "₹36999",
    },
    {
      name: "13 Nights 14 Days Char Dham Yatra Package From Delhi",
      img: "https://i.pinimg.com/736x/87/26/2f/87262fa2a24044ce34e5928dad6124ff.jpg",
      oldPrice: "₹49000",
      newPrice: "₹42999",
    }
  ];



  return (
    <>
    <Navbar/>
      <div className="flex flex-col gap-8">
        <div className='ms-20'>
          <h1 className='text-5xl font-bold text-orange-600 leading-tight mt-25'>Fully Customized Tour <br />Packages <br />For Every Budget</h1>
          <hr className='w-40 mt-5 mb-5' />
          <h1 className='text-4xl font-normal leading-tight'>Get the Best Deal on Tour Packages <br />40%</h1>
          <br />
          <h1 className='text-2xl font-bold text-orange-600 mt-10'>Popular Themed Packages</h1>

          <div className='flex gap-4 mt-3'>
            <div className="w-45 px-3 h-60 py-3 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src="https://i.pinimg.com/1200x/91/69/9e/91699ec84f9e861897c17f11ce6d5b98.jpg" alt='' className="w-full h-40 rounded-lg object-cover" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">India Holidays</h2>
              </div>

            </div>
            <div className="w-45 px-3 h-60 py-3 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src="https://i.pinimg.com/1200x/7a/e0/43/7ae0439d1d0c634dff7862c2eb0a6b1d.jpg" alt='' className="w-full h-40 rounded-lg object-cover" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">International</h2>
              </div>

            </div>
            <div className="w-45 px-3 h-60 py-3 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src="https://i.pinimg.com/736x/ff/b5/6f/ffb56f1252c407f92e75b651e06c45be.jpg" alt='' className="w-full h-40 rounded-lg object-cover" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Honeymoon</h2>
              </div>

            </div>
            <div className="w-45 px-3 h-60 py-3 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src="https://i.pinimg.com/736x/19/d3/56/19d3564ce5829892702132a302f47c44.jpg" alt='' className="w-full h-40 rounded-lg object-cover" />
              <div className="p-3 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Religious</h2>
              </div>

            </div>
          </div>

        </div>

        <div>

          <div className="flex justify-center items-center w-300 h-100" style={{ marginTop: "-37%", marginLeft: "38%" }}>
            <div className="bg-zinc-100 shadow-lg rounded-2xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Fill the Form to get details
              </h2>

              <div className="border border-gray-900 rounded-md p-6 bg-white shadow-md space-y-4">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                  alt="Travel"
                  className="w-full h-48 object-cover rounded-md"
                />

                {/* Text */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Plan Your Dream Trip!
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Explore our curated tour packages across India and beyond. Get your basic detailed travel packages instantly.
                  </p>
                </div>

                {/* Button */}
                <a
    href="/Tour_Packages_Details.pdf"
    download
    className="block w-full text-center bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
  >
    Download
  </a>
              </div>

            </div>
          </div>

          <div className="p-10 bg-gray-50 mt-45 w-350 ms-16">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 leading-normal">
                  Popular Domestic Tour <span className="text-orange-500">Packages</span>
                </h2>
                <p className="text-gray-600 mt-2 max-w-3xl  leading-normal">
                  India is a diverse country, a land of spirituality and peace with a
                  rich culture, heritage, festivals, wildlife, and natural beauty. It’s
                  one of the most sought-after travel destinations attracting millions
                  every year.
                </p>
                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium">
                  Read More
                </button>
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={() => scroll(scrollRef1, "left")}
                  className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full p-3 hover:scale-105 transition"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={() => scroll(scrollRef1, "right")}
                  className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full p-3 hover:scale-105 transition"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Carousel Section */}
            <div
              ref={scrollRef1}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4"
            >
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="min-w-[220px] bg-white rounded-2xl shadow-md hover:shadow-xl transition flex-shrink-0"
                >
                  <img
                    src={pkg.img}
                    alt={pkg.name}
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-blue-900">
                      {pkg.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="p-10 bg-gray-50 w-350 ms-16">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 leading-normal">
                Popular International Tour <span className="text-orange-500">Packages</span>
              </h2>
              <p className="text-gray-600 mt-2 max-w-3xl  leading-normal">
                If you're looking for an adventure abroad, you must check out the most popular international tour packages
                offered by a reputable international trip planner. Whether you're travelling for business or leisure, there's
                no shortage of options to choose from.
              </p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium">
                Read More
              </button>
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => scroll(scrollRef2, "left")}
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full p-3 hover:scale-105 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => scroll(scrollRef2, "right")}
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full p-3 hover:scale-105 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Carousel Section */}
          <div
            ref={scrollRef2}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4"
          >
            {packages2.map((pkg, index) => (
              <div
                key={index}
                className="min-w-[220px] bg-white rounded-2xl shadow-md hover:shadow-xl transition flex-shrink-0"
              >
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-blue-900">
                    {pkg.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 bg-white w-350 ms-16 mt-10">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 leading-normal">
                Trip Planners India <span className="text-orange-500">Specials</span>
              </h2>
              <p className="text-gray-700 mt-2 max-w-4xl leading-relaxed">
                Looking for the best travel planners in India to plan your dream vacation?
                Look no further! India is a land of wonderful diversity, with something for everyone.
                Plan your trip to explore everything from the majestic snow-covered peaks of the Himalayas
                to the tropical delights of south India; there is no shortage of amazing landscapes to explore.
              </p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium">
                Read More
              </button>
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => scroll(scrollRef3, "left")}
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => scroll(scrollRef3, "right")}
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Carousel Section */}
          <div
            ref={scrollRef3}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4"
          >
            {packages3.map((pkg, index) => (
              <div
                key={index}
                className="min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition flex-shrink-0 border"
              >
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="text-md font-bold text-blue-900 mb-2 leading-snug">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-400 line-through">{pkg.oldPrice}</span>
                    <span className="text-black font-bold">{pkg.newPrice}</span>
                  </div>
                  <Link to={"/packageview"}>
                    <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold py-2 rounded-md">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== 4th Carousel ===== */}
        <div className="p-10 bg-white w-350 ms-16 mt-10">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 leading-normal">
                Trip Planner India Special <span className="text-orange-500">Honeymoon Packages</span>
              </h2>
              <p className="text-gray-700 mt-2 max-w-4xl leading-relaxed">
                When it comes to romance, nothing can be more enchanting than a honeymoon in India curated with a reliable
                honeymoon trip planner. Trip Planner India offers you the perfect start to your new life with exclusive honeymoon
                packages in India.
              </p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium">
                Read More
              </button>
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => scroll(scrollRef4, "left")}
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => scroll(scrollRef4, "right")}
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Carousel Section */}
          <div
            ref={scrollRef4}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4"
          >
            {packages4.map((pkg, index) => (
              <div
                key={index}
                className="min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition flex-shrink-0 border"
              >
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="text-md font-bold text-blue-900 mb-2 leading-snug">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-400 line-through">{pkg.oldPrice}</span>
                    <span className="text-black font-bold">{pkg.newPrice}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold py-2 rounded-md">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ===== 5th Carousel ===== */}
        <div className="p-10 bg-white w-350 ms-16 mt-10">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 leading-normal">
                Trip Planner India Special <span className="text-orange-500">Religious Packages</span>
              </h2>
              <p className="text-gray-700 mt-2 max-w-4xl leading-relaxed">
                Booking pilgrimage packages with an online trip planner is essential when going on a pilgrimage.
                Trip Planners India offers the best pilgrimage tour packages in India, ideal for those seeking spiritual journeys
                to the country's most sacred sites.
              </p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium">
                Read More
              </button>
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => scroll(scrollRef5, "left")}
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => scroll(scrollRef5, "right")}
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Carousel Section */}
          <div
            ref={scrollRef5}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4"
          >
            {packages5.map((pkg, index) => (
              <div
                key={index}
                className="min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition flex-shrink-0 border"
              >
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="text-md font-bold text-blue-900 mb-2 leading-snug">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-400 line-through">{pkg.oldPrice}</span>
                    <span className="text-black font-bold">{pkg.newPrice}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold py-2 rounded-md">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-white py-12 px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Trip Planners India - Avail <span className="text-orange-500">The Best Tour Packages in India</span>
            </h2>
            <p className="text-gray-700 mb-8">
              India is known for its diverse culture, heritage, and scenic beauty and has always been a popular tourist destination.
              From the serene backwaters of Kerala to the majestic Himalayas, from the bustling lifestyle cities of Delhi and Mumbai
              to the beautiful beaches of Goa, from the festival culture to vibrant Rajasthan, India has everything to attract the world.
              Exploring this vast sweep can become easy when you have the guidance of the Best holiday planner India.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition">
              Read More
            </button>
          </div>
        </section>

        <section className="bg-white py-12 px-8 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              About Incredible India Tourism <span className="text-orange-500">and Its Diversity</span>
            </h2>
            <p className="text-gray-700">
              India, with its diverse landscapes, rich culture, and ancient history, stands as a timeless beckon of exotic allure.
              From the snow-capped Himalayan peaks to the serene backwaters of Kerala, India offers an eclectic blend of experiences
              for every traveller, which can only be explored explicitly with the help of the best holiday planners India. With such
              a rich tapestry of destinations, it's imperative to have a reliable trip planner India can offer. At Trip Planners India,
              we understand the essence of this land, ensuring every traveller's journey is as vibrant as the country itself.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-8 md:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Why Trip Planners in India Is The Best Choice For <span className="text-orange-500">Your Next Trip</span>
              </h2>
              <p className="text-gray-700 mb-6">
                If you're planning your next trip to India, choosing the experienced trip organisers in India can make all the difference.
                With so many group travel planner options available, it can be tough to know where to start. After hiring a Holiday planner
                India, you can be sure that your trip will be well-planned and memorable.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition mb-8">
                Read More
              </button>

              {/* Info Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { num: "5", text: "Years Experience" },
                  { num: "20+", text: "Destination Collaboration" },
                  { num: "5K+", text: "Happy Customer" },
                  { num: "20+", text: "Travel Experts" },
                  { icon: "🎧", text: "Customer Support" },
                  { icon: "📝", text: "Tailor-Made Itineraries" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md text-center py-6">
                    <p className="text-orange-500 font-bold text-2xl mb-2">
                      {item.num || item.icon}
                    </p>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center">
              <img
                src="https://i.pinimg.com/1200x/23/9e/0b/239e0bf495437249eef029ebc7352b68.jpg"
                alt="Travelers"
                className="w-full max-w-md rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto text-center">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
              Travel <span className="text-orange-500">Reviews & Updates</span>
            </h2>

            {/* Blog Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  image:
                    "https://i.pinimg.com/736x/42/ca/48/42ca48263732a9eb40a674196643975f.jpg",
                  title:
                    "Shimla in December 2025: Best Attractions, Activities & More",
                  desc: "Step into the winter wonderland of Shimla with snow-covered hills, cozy cafes, and scenic views this December.",
                },
                {
                  image:
                    "https://i.pinimg.com/1200x/ed/db/f9/eddbf99a44b813bd83be6505fecc210b.jpg",
                  title: "Auli in December 2025: Weather, Snowfall, and Beauty",
                  desc: "Auli turns magical during December with skiing adventures and panoramic views of the mighty Himalayas.",
                },
                {
                  image:
                    "https://i.pinimg.com/1200x/30/18/13/301813fb720e4eaf8806779dab86f882.jpg",
                  title: "Goa in December 2025: Ultimate Guide to Beaches & Vibes",
                  desc: "Plan your perfect winter vacation to Goa — beaches, parties, and sunsets await you this December.",
                },
                {
                  image:
                    "https://i.pinimg.com/736x/7c/43/6e/7c436e481641b822c157a4166c58dfdd.jpg",
                  title: "Manali in November 2025: Weather, Snowfall, Things to Do",
                  desc: "Experience the first snow of winter in Manali, surrounded by majestic peaks and apple orchards.",
                },
              ].map((blog, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-bold text-blue-900 text-lg mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {blog.desc}
                      </p>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md self-start transition">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button in page */}
            <button className="mt-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition">
            <Link to={"/blog"}>View All Reviews</Link>
            </button>
          </div>
        </section>

        {/* ---------- Premium Partners Section ---------- */}
        <section className="py-12 bg-white text-center">
          <h2 className="text-3xl font-bold text-blue-900">
            Our <span className="text-orange-500">Premium Partners</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mt-10 px-6">
            {[
              "https://i.pinimg.com/736x/21/fa/96/21fa969b5684e85242e912116a04224b.jpg",
              "https://i.pinimg.com/736x/69/7d/c9/697dc90271512f283a60f088c5dc3d9b.jpg",
              "https://i.pinimg.com/736x/02/cb/a1/02cba12b81ac95c1848f41043f7aeea6.jpg",
              "https://i.pinimg.com/736x/13/88/b7/1388b7f2deefe3c867aeeb43277e57f3.jpg",
              "https://i.pinimg.com/736x/d6/36/dc/d636dc165455369153e70a836eecf9c9.jpg",
            ].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="partner logo"
                className="h-60 w-60 grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </section>

        {/* ---------- FAQ Section ---------- */}
        <section className="bg-gray-50 py-12 px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            FAQ<span className="text-orange-500">'s</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How does Trip Planners India stand out from others?",
                a: "We connect travelers with trusted agents and offer curated travel experiences with transparent pricing.",
              },
              {
                q: "Do you offer customised packages?",
                a: "Yes, all packages can be customized according to your budget and preferences.",
              },
              {
                q: "Are the packages suitable for families and senior citizens?",
                a: "Absolutely! We ensure safety and comfort for all age groups.",
              },
              {
                q: "Are international packages inclusive of flights?",
                a: "Yes, most international packages include flights, unless stated otherwise.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                onClick={() =>
                  setOpenIndex((prev) => (prev === i ? null : i))
                }
                className="bg-white rounded-lg shadow p-4 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-blue-900">{faq.q}</h3>
                  <span className="text-orange-500 text-xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </div>
                {openIndex === i && <p className="mt-2 text-gray-600">{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Footer Section ---------- */}
        <footer className="bg-blue-900 text-white py-10 px-6">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-orange-400">
                Trip Planners India
              </h3>
              <p className="text-sm text-gray-300">
                Your trusted partner for memorable travel experiences across India.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-orange-400">About</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Advertise</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-orange-400">Domestic Tours</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Kerala</li>
                <li>Goa</li>
                <li>Kashmir</li>
                <li>Rajasthan</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-orange-400">Outbound Tours</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>Dubai</li>
                <li>Maldives</li>
                <li>Singapore</li>
                <li>Thailand</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
            © 2025 Trip Planners India. All Rights Reserved.
          </div>
        </footer>





      </div>

    </>
  )
}

export default Landing