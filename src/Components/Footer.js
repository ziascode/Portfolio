import React, { useState,Component } from 'react';
import song from '../assets/fire.mp3';
import night from '../assets/night.wav';
import stream from '../assets/water.mp3';
import { FaFireAlt } from 'react-icons/fa';
import { FireIcon } from '@heroicons/react/solid';
import { MdNightsStay } from "react-icons/md";
import { BiWater } from "react-icons/bi";
import Modal from './Modal';

class Footer extends Component {

      state = {

        // Get audio file in a variable
        audio: new Audio(song),
        audio2: new Audio(night),
        audio3: new Audio(stream),

        // Set initial state of song
        isPlaying: false,
      };


      // Fire- Main function to handle both play and pause operations
      playPauseFire = () => {

        // Get state of song
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
          // Pause the song if it is playing
          this.state.audio.pause();
        } else {

          // Play the song if it is paused
          this.state.audio.play();
          this.state.audio.loop = true;
        }

        // Change the state of song
        this.setState({ isPlaying: !isPlaying });
      };

      // Night
      playPauseNight = () => {
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
          this.state.audio2.pause();
        } else {
          this.state.audio2.play();
          this.state.audio2.loop = true;
        }

        this.setState({ isPlaying: !isPlaying });
      };

      // water
      playPauseStream= () => {
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
          this.state.audio3.pause();
        } else {
          this.state.audio3.play();
          this.state.audio3.loop = true;
        }

        this.setState({ isPlaying: !isPlaying });
      };






render() {
  
  return (
    <div id="contact">

        

      <div className='relative flex flex-col items-center lg:space-x-0 md:flex-row md:items-start justify-around mt-24 md:mt-0'>
          
          <img className='camp max-h-[90vh]' src="https://res.cloudinary.com/dvhcociyf/image/upload/v1643236033/metas/portfolio/cd1_ke7mqj.png" alt="" />
            
         

          <div className='flex flex-col items-center text-center md:items-start md:text-justify max-w-md mt-0 sm:-mt-16 xxl:mt-0'>
              <div>
                <h1 className='-mt-26 md:pt-28 pt-9 text-lg md:text-2xl font-semibold text-red-50 pt-36 mb-14 md:mt-24"'>Thank you for stopping by friend. Stay a while longer, pick a few relaxing tunes below and let's have a chat by the campfire!</h1>
              </div>
              <div className='flex justify-start space-x-10'>

                <div className='relative text-center text-slate-100'>
                    <button className='bg-indigo-800 bg-opacity-80 hover:scale-125 transform duration-150 ease-in-out rounded-full ' onClick={this.playPauseFire}>
                      <FaFireAlt className='text-7xl p-4'/>
                    </button>
                    <p className='py-3'>Fire</p>
                </div>

                <div className='relative  text-center text-slate-100'>
                    <button className='bg-indigo-800 bg-opacity-80 rounded-full hover:scale-125 transform duration-150 ease-out' onClick={this.playPauseNight}>
                      <MdNightsStay className='text-7xl p-4'/>
                    </button>
                    <p className='py-3'>Night Ambience</p>
                </div>

                <div className='relative  text-center text-slate-100'>
                    <button className='bg-indigo-800 bg-opacity-80 hover:scale-125 transform duration-150 ease-out rounded-full ' onClick={this.playPauseStream}>
                      <BiWater className='text-7xl p-4'/>
                    </button>
                    <p className='py-3'>Creek</p>
                </div>
                
              </div>
              <div className='flex justify-center items-center'>
              <a href="mailto:ZIAYOUSAF94@GMAIL.COM"><Modal/></a>
              </div>
              

          </div>
          
          
      </div>


      

    </div>
  )
}

}

export default Footer;


