import React, { useState } from 'react';
import '../assets/style.css';

function Navbar() {

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav)
    } 

  return (
    <div>
        {/* nav popup */}
        {nav && (
            <div className="modal">
                <div onClick={toggleNav}>
                <div className="modal-content text-white rounded-xl grid grid-cols-1 md:grid-cols-2  mx-auto">
    
                </div>
                </div>
           </div>
   

        )}
        
    </div>
  );
}

export default Navbar;

