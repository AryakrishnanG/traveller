import React, { useEffect, useRef, useState } from 'react'
import img from "./assets/logo1.png"
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const menus = [
  { id: "menu1", label: "Indian Holidays", items: ["kerala Tour Packages", "Kashmir Tour Packages", "Goa Tour Packages"] },
  { id: "menu2", label: "International Holidays", items: ["Bali Tour Packages", "Bhutan Tour Packages", "Dubai Tour Packages"] },
  { id: "menu3", label: "Honeymoon Packages", items: ["Indian Honeymoon Tour Packages", "International Honeymoon Tour Packages"] },
  { id: "menu4", label: "religious Packages", items: ["Ayodhya Tour Packages", "Amarnath Tour Packages", "Kedarnath Tour Packages"] },
];

function Navbar() {

  const [open, setOpen] = useState(null); // id of open menu or null
  const navRef = useRef(null);

  // close when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <nav className='flex gap-13'>
        <Link to={"/"}><img src={img} alt="" className='ms-10' width={"170px"} height={"150px"} /></Link>
        <button className="bg-gradient-to-r mt-4 ms-150 h-10 from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded rounded-10 transition">
          New Year packages 2026
        </button>
        <button className="bg-gradient-to-r mt-4  h-10 from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded transition">
          Tour Packages
        </button>
        <button className="bg-gradient-to-r mt-4 h-14 from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-10 font-bold py-2 px-4 rounded transition">
          Get Free Quote <br /> upto 40% off
        </button>


      </nav>
      <hr className='w-180 ms-190' style={{ marginTop: "-90px" }} />
      <div className='flex ms-160 mt-2'>
       <Link to={"/"}> <FaHome className='text-xl mt-2' /></Link>

        {menus.map((m) => (
          <div key={m.id} className="relative">

            <button
              onClick={() => setOpen((prev) => (prev === m.id ? null : m.id))}
              className="text-dark px-4 py-2 ms-2 rounded hover:bg-gray-100 transition"
              type="button"
            >
              {m.label} <span className={`inline-block ml-2 transform transition-transform ${open === m.id ? "rotate-180" : ""}`}>🡻</span>
            </button>

            {open === m.id && (
              <div className="absolute mt-2 w-40 bg-white border rounded shadow z-20">
                <ul className="text-gray-700">
                  {m.items.map((it) => (
                    <li
                      key={it}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        // example: handle item click then close
                        console.log(`${m.label} -> ${it}`);
                        setOpen(null);
                      }}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

      </div>

    </>
  )
}

export default Navbar