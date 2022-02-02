import React, { useState } from 'react';
import '../assets/style.css';
import { XIcon, MinusCircleIcon } from '@heroicons/react/solid'


function Projects({img, title, stack, description, site, img1, img2, img3, img4}) {
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }
 
  return (
    <>
    
    
    <div className='space-y-2 hover:scale-105 transition transform duration-150 ease-out cursor-pointer pb-10' onClick={toggleModal}>
        <div className='relative w-full sm:w-80 md:w-80'> 
            <img className='object-cover h-64 sm:h-32 sm:w-1/2 md:w-full md:h-64 w-full rounded-xl' src={img} alt="" />
        </div>
        <h1 className='font-semibold text-md text-red-100'>{title}</h1>
    
    </div>
    
    {/* // the modal popup */}
    { modal && (
      
      <div className="modal">
        <div onClick={toggleModal} className="overlay">
          <div className="modal-content text-white rounded-xl grid grid-cols-1 md:grid-cols-2  mx-auto">

            <div className='space-y-5 pl-5 md:pr-0 pr-5 pt-0 flex flex-col justify-around items-center sm:items-start'>
              <h1 className='font-bold text-5xl mb-0'>{title}</h1>
              <p className='font-semibold text-white'>{stack}</p>
              <div className='h-100 text-zinc-300 sm:text-left text-center'><p>{description}</p></div>
                          
              <a href={site} target="_blank"><button className='border rounded-2xl w-36 pt-5 pb-5 mt-0 hover:bg-indigo-900 py-1 border-teal-900 border-0 hover:border-teal-300 bg-orange-600 text-violet-50 font-semibold text-lg transform duration-150 ease-out'>View Project</button></a>
            </div>
            
            <div className='hidden md:flex justify-center  pl-5'>
              <img className='h-[450px] rounded-2xl border-indigo-600 border-opacity-50 border-4' src={img1} alt=''/>
            </div>
            

            <MinusCircleIcon className='h-8 absolute top-0 right-0 my-3 mx-3 p-1 text-white hover:text-indigo-300 cursor-pointer transform duration-150'/>
          </div>  
        </div>
      </div>

    )
    } 
    {/* //end modal */}
    </>

  );
}

export default Projects;
