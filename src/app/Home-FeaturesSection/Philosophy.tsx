import React from 'react';
import Image from 'next/image';
import Carusel from './Carusel';

const Philosophy = () => {
  return (
    <div>
     <div className=' h-[758px]  bg-[#E1F5EB] pt-[100px] pl-[117px] mb-[50px]'>
      <div className=''>
        <h1 className='text-[42px] text-[#006A44]'>Philosophy for Strategic Alliances</h1>

        <p className='text-[#000000] w-[1220px] text-[18px] leading-[34px] pt-[20px]'>NBL Securities focuses on maximizing client service by providing technologically advanced products and services. Our core goal is to simplify investing for clients by ensuring efficient online trading, swift trade execution, offering fundamental and technical analysis databases, proprietary trading platforms, and easy access to margin facilities. Upholding this motto, NBL Securities emphasizes establishing and maintaining strategic alliances with various local and international organizations.</p>
      </div>
       
       <div className='flex gap-[82px]'>
        <div className='mt-[80px] '>
        <Image
           src="/homepage-img/Partnership.png"
           alt="Partnership Logo"
            width={537}
            height={241}
            className=""
            />
       </div>

       <div  className='w-[537px] h-[192px] mt-[100px] '>
        <h1 className='text-[#006A44] text-[32px] font-bold'>We Offer</h1>
        <ul className='list-disc pl-5 leading-[34px] pt-[10px] text-[18px]'>
          <li>Robust Technology.</li>
          <li>RM support for effective client service.</li>
          <li>Marketing and Business Development support.</li>
          <li>Training for partners and staff.</li>
        </ul>
       </div>
       </div>

     </div>

     <Carusel/>
    </div>
  );
};

export default Philosophy;