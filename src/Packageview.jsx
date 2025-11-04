import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    
<div>
    <Navbar/>
    
         <div
          className="w-full bg-cover bg-center flex justify-center items-center h-[200px] md:h-[250px]"
          style={{
            backgroundImage: "url('https://i.pinimg.com/1200x/cd/29/bb/cd29bbb9c651060229ceb2d4aabbbad8.jpg')", // 🔸 Replace with your background image path
          }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-[#0f1d3a] text-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md">
            2 Nights 3 Days Chennai Tour Package
          </h1>
        </div>
        
        <div className="min-h-screen  flex flex-col bg-gray-100">
          {/* Main Section */}
          <div className="relative flex flex-col lg:flex-row">
            {/* Left Side - Image Grid */}
            <div  className="lg:w-2/3 w-full grid grid-cols-2 gap-2 mt-20 ms-30">
              <img
                src="https://i.pinimg.com/1200x/37/03/b6/3703b6d7a30877eb1ede0b93c90c966a.jpg" // 🔸 Replace with your image paths
                alt="Beach 1"
                className="w-full h-[45vh] object-cover"
              />
              <img
                src="https://i.pinimg.com/1200x/2c/cd/0e/2ccd0ea78d1c1b96e3d44dcbeb2be770.jpg"
                alt="Beach 2"
                className="w-full h-[45vh] object-cover"
              />
              <img
                src="https://i.pinimg.com/1200x/f6/67/b2/f667b22c31a7cd3f8ddd4c73652ac036.jpg"
                alt="Beach 3"
                className="w-full h-[45vh] object-cover"
              />
              <img
                src="https://i.pinimg.com/1200x/86/75/cf/8675cf84aeac7e1defcbc9c1e935f5cd.jpg"
                alt="Beach 4"
                className="w-full h-[45vh] object-cover"
              />
            </div>
    
            {/* Right Side - Fixed Form */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6 w-[320px] max-w-sm z-50">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                <span className="text-orange-500 font-bold">Fill the Form to</span>{" "}
                Get Free Quote
              </h2>
    
              <form className="space-y-3">
                
    
                <Link to={"/quote"}>
                    <button
                      type="submit"
                      className="w-full bg-white border border-orange-400 text-orange-500 font-semibold py-2 rounded-md hover:bg-orange-500 hover:text-white transition"
                    >
                      Fill Form
                    </button>
                </Link>
              </form>
            </div>
          </div>
    
          {/* Scrollable Content */}
          <div className="max-w-5xl mx-auto mt-10 p-6 space-y-6">
             <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left details */}
        <div className="flex-1 space-y-2 text-gray-800">
          <p>
            <span className="font-semibold">Trip Destination:</span> Chennai
          </p>
          <p>
            <span className="font-semibold">Covered Locations:</span> Marina
            Beach, Kapaleeshwarar Temple, Fort St. George, Santhome Basilica,
            Government Museum
          </p>
          <p>
            <span className="font-semibold">Starting Destination:</span> Chennai
            Airport / Chennai Railway Station
          </p>
          <p>
            <span className="font-semibold">Final Destination:</span> Chennai
            Airport / Chennai Railway Station
          </p>
          <p>
            <span className="font-semibold">Accommodations:</span> 3-star or
            4-star hotels in central Chennai
          </p>
          <p>
            <span className="font-semibold">Activities To Do:</span> Sightseeing,
            cultural tours, shopping, beach walks, photography
          </p>
        </div>

        {/* Price badge */}
        <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-bl-[80px] rounded-tr-[20px] p-5 w-60 text-center shadow-md">
          <div className="absolute top-2 right-3 bg-[#0f1d3a] text-xs px-2 py-1 rounded font-semibold">
            2N-3D
          </div>
          <p className="text-sm">Starting From</p>
          <p className="line-through text-sm opacity-80">₹12349</p>
          <p className="text-2xl font-bold">₹11114</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6 text-gray-700 leading-relaxed">
        <p>
          Chennai, the bustling capital of Tamil Nadu, is a perfect blend of
          culture, history, and modernity. The Chennai Tour Packages offer a
          well-curated experience to explore this vibrant city in a short span.
          From serene beaches to ancient temples, Chennai has something for
          every traveler. These{" "}
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline"
          >
            Tamil Nadu tour packages
          </a>{" "}
          provide a comfortable stay, guided sightseeing, and local experiences
          that let you immerse yourself in the city’s rich heritage. Whether you
          are a first-time visitor or returning to explore more, the itinerary
          ensures you experience the essence of Chennai while enjoying
          hassle-free travel and sightseeing.
        </p>
      </div>

      {/* Day 1 section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[#0f1d3a] mb-3">
          Day 1: Explore Chennai’s Heritage
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Start your day with a visit to the iconic Marina Beach, ideal for a
          morning stroll and photography. Head to Kapaleeshwarar Temple, an
          architectural marvel and spiritual hub, followed by Santhome Basilica,
          known for its Gothic design. In the evening, explore Fort St. George,
          the first British fort in India, and understand Chennai’s colonial
          past. This first day is perfect for soaking in the city’s culture and
          history while enjoying a relaxed start. This day is tailored for
          travelers opting for Chennai tour packages for 3 days, ensuring
          maximum sightseeing without feeling rushed.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[#0f1d3a] mb-3">
          Day 2:  Culture and Shopping Experience

        </h2>
        <p className="text-gray-700 leading-relaxed">
         Day two focuses on cultural immersion and shopping. Visit the Government Museum, which houses impressive archaeological and art 
         collections. Explore Theosophical Society for a peaceful retreat amidst greenery and spiritual learning. In the afternoon, enjoy
          shopping at T Nagar, Chennai’s bustling shopping district, known for silk sarees, jewelry, and handicrafts. This day perfectly suits
           travelers seeking a curated 3 days tour packages from chennai, blending heritage and modern attractions seamlessly.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[#0f1d3a] mb-3">
          Day 3:   Beach Relaxation & Departure

        </h2>
        <p className="text-gray-700 leading-relaxed">
         On your final day, enjoy leisure time at Elliot’s Beach, one of Chennai’s serene coastal spots. Take part in water activities, enjoy
          local snacks, and relax before heading back. Depending on your schedule, visit nearby Marundeeswarar Temple for a peaceful morning or
           explore local markets for souvenirs. End your journey with a smooth departure from Chennai Airport or Railway Station. This day
            ensures a satisfying wrap-up for your 3 day trip from chennai, leaving you with lasting memories.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-[#0f1d3a] mb-3">
          Conclusion

        </h2>
        <p className="text-gray-700 leading-relaxed">
         The 3 days tour from chennai offers a balanced blend of sightseeing, relaxation, and cultural experiences. With expert guidance, 
         comfortable accommodations, and well-planned activities, these Chennai tour packages provide a hassle-free travel experience. Trust
          the best tour planners in india to curate your ideal Chennai vacation, making sure every moment of your 2 nights 3 days journey is
           memorable and enjoyable.
        </p>
      </div>
      
    </div>
          </div>
        </div>

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
  );
};

export default Landing;
