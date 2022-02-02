import React, { useState} from 'react';

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return ( 
    <div>

      <button className='mt-16 py-4 px-7 text-lg bg-indigo-300 shadow-lg shadow-zinc-800 hover:text-amber-300 hover:shadow-amber-200 hover:shadow-2xl hover:scale-105 transition transform duration-150 ease-out rounded-xl font-semibold'>Contact Me</button>  

      {/* modal for contact form */}

      {modal && (

        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content text-white rounded-xl grid grid-cols-1 md:grid-cols-2  mx-auto">

            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti maxime ipsam magnam sed aliquam porro quaerat aperiam sit iste maiores minima saepe iusto officia debitis, adipisci provident nostrum accusantium odio.</h1>

          </div>  
          </div>
        </div>
      )}

    </div>
  
 );
}

export default Modal;
