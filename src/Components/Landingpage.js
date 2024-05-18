import React from 'react';
import { Button, TextField } from '@mui/material';

export default function Landingpage() {
  return (
    <div className='flex flex-col'>

      <img className='mt-20 w-full' src="/Fitness.jpg" alt="" />

      <div className="formbelowimage w-full p-10 bg-zinc-900 text-white text-center">
        <p className='text-xl p-5'>EXPERIENCE THE FITNESS WAVE AT MUMBAI'S FRIENDLIEST GYM IN ANDHERI WEST!</p>
        <span className="text-4xl text-orange-700 italic">JOIN WAVES GYM TODAY</span>
        <div className="form flex gap-4 justify-center my-4">
          <TextField className='bg-white' id="outlined-basic" label="Name" variant="outlined" />
          <TextField className='bg-white' id="outlined-basic" label="Email" variant="outlined" />
          <TextField className='bg-white' id="outlined-basic" label="Mobile" variant="outlined" />
        </div>

        <span>
          <Button className='mb-5 bg-orange-700 ' variant="contained" color="success">GET STARTED</Button>
        </span> <br />

        <div className='grid text-xl'>
          <span>#20YEARS OF SERVICE</span>
          <span>TO THE FITNESS & WELLNESS COMMUNITY.</span>
          <span>#HEREFORYOU</span>
          <span>#HERETOSTAY</span>
          <span>#SAFESWEATSPACE</span>
        </div>
      </div>

      <div className="page2 w-full p-10  flex justify-center my-10 text-left">


        <div className="page2text w-1/3  text-xl">
          <p>YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE. YOUR PERSONAL TRAINING SHOULD REFLECT THAT!</p>
          <p className='text-4xl italic font-bold text-orange-600'>CERTIFIED PERSONAL TRAINERS</p>
          <p>Get fit fast with Waves Gym’s certified personal trainers. Enjoy cardio, strength, and weight training with top equipment. Join now and make ‘Impossible’ ‘I’m Possible’!
          </p>
          <div className="page2-btn">
            <Button className='top-10' variant="contained" color="success">BOOK A FREE SESSION</Button>
          </div>
        </div>

        <div>
          <img className='firstimg h-96 w-72 object-cover rounded-2xl' src="https://wavesgym.com/wp-content/uploads/elementor/thumbs/Personal-Training-Home-Page-Image-qhf8i9t8o15kzoc5shz23jhhofkknkgr2qzf7ny1a8.jpg" alt="" />
        </div>

      </div>

      <div className='page3 flex items-center justify-center my-28  w-full text-white my-10'>

        <div className='page3 flex  bg-zinc-900  p-10 justify-center'>

            <div className='page3text w-1/3 '>
                <p className='text-xl'>EXPERIENCE THE FITNESS WAVE</p> <br />
                <p className='text-5xl italic text-orange-600'>1500 SQ.FT OPEN AIR CROSSFIT STUDIO</p><br />
                <p className='text-xl'>Our rooftop open air CrossFit studio will help you push your limits and get you to your fitness goals.</p><br />
                {/* <div className="page3-btn">
                  <Button variant="contained" color="success">JOIN TODAY</Button>
                </div> */}
            </div>

            <div className='page3img  flex '>
                <img className='  page3img1 relative left-12 bottom-28 h-76 w-64 rounded-2xl' 
                src="https://wavesgym.com/wp-content/uploads/elementor/thumbs/CrossFit-ppqgd4c6vufmk899pqohjmlyqz15a3a023k4n9wkcg.jpg" alt="" />
                <img className=' page3img2 h-76 w-64 relative top-28 rounded-2xl' 
                src="https://wavesgym.com/wp-content/uploads/elementor/thumbs/CrossFit-2-prhxfmv41fm507d5enynpgvvhzkgbkrb3qqtdcgem8.jpg" alt="" />
            </div>

        </div>


      </div>

      <div className='page4 w-full text-center'>

        <div className='pt-14 pb-8'>
          <p className='text-xl'>EXPERIENCED & INTERNATIONALLY CERTIFIED PERSONAL TRAINERS</p>
          <p className='text-5xl font-bold italic text-orange-600'>THE BEST FITNESS EXPERIENCE</p>
          <p className='text-xl'>We’re committed to bringing you the best workout experience.</p>
        </div>

        <div className="page4-list w-full flex flex-wrap justify-center gap-12">

          <img className=' h-44 w-60' src="https://wavesgym.com/wp-content/uploads/2023/12/InBody-260-Website-Image.jpg" alt="" />
          <img className=' h-44 w-60' src="https://wavesgym.com/wp-content/uploads/2022/05/WG-Open-7-Days-1024x576.jpg" alt="" />
          <img className=' h-44 w-60' src="https://wavesgym.com/wp-content/uploads/2022/05/WG-Valet-Parking-1024x576.jpg" alt="" />
          <img className=' h-44 w-60' src="https://wavesgym.com/wp-content/uploads/2022/05/WG-Clean-Safe-1024x576.jpg" alt="" />
        </div>
        <div className='page4-btn m-10'>
          <Button variant="contained" color="success">JOIN TODAY</Button>
        </div>
      </div>

      <div className='p-14 page5 w-full bg-zinc-900 text-white text-center'>
        <p className='italic font-bold text-orange-600 text-5xl'>EXPERIANCE OUR GYM.</p>
        <span >Experience The Best Group Exercise Classes In Mumbai</span>
        <div className='flex justify-center'>
          <div id="carouselExample" class=" carousel slide w-96 m-14 ">
            <div class="carousel-inner  ">
              <div class="carousel-item active h-64 w-100 ">
                <img src="https://wavesgym.com/wp-content/uploads/2017/10/Waves-Gym-New-300x200.jpg" class="d-block h-64 w-100" alt="..." />
              </div>
              <div class="carousel-item h-64 w-100">
                <img src="https://wavesgym.com/wp-content/uploads/2019/02/Kickboxing_2-300x200.jpg" class="d-block h-64 w-100" alt="..." />
              </div>
              <div class="carousel-item h-64 w-100">
                <img src="https://wavesgym.com/wp-content/uploads/2018/02/Studio_Cycling-300x200.jpg" class="d-block h-64 w-100" alt="..." />
              </div>
              <div class="carousel-item h-64 w-100">
                <img src="https://wavesgym.com/wp-content/uploads/2017/12/Zumba-1-300x200.jpg" class="d-block h-64 w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='page5-btn'>
          <Button variant="contained" color="success">BOOK OUR FREE CLASS</Button>
        </div>
      </div>

    </div>
  )
}
