import React from 'react';
import FinLogo from "../../public/assets/Asset 2@4x 1.png"
import socials from "../../public/assets/Frame 14447.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container flex justify-center py-8 gap-12">
        <div className="text-md">
          <img src={FinLogo.src} alt=""/>
          <br></br>
          <p className="mb-2 font-semibold">Fin South Africa</p>
          <p className="mb-2">is a registered Credit Provider <span className='font-semibold'>(NCRCP1)</span>
          <br></br>
          and an authorised Financial Services provider <span className='font-semibold'>(FSP46701)</span>
          </p>
        </div>
       
        <div className="text-md">
          <h2 className="mb-2 font-semibold">Company</h2>
          <p className="mb-2">About us</p>
          <p className="mb-2">Blog</p>
          <p className="mb-2">Careers</p>
          <p className="mb-2">Community</p>
        </div>
        
        <div className="text-md">
          <h2 className="mb-2 font-semibold">Join us</h2>
          <p className="mb-2">Merchants</p>
          <p className="mb-2">Partners</p>
        </div>
        
        <div className="text-md">
          <h2 className="mb-2 font-semibold">Help</h2>
          <p className="mb-2">Contact</p>
          <p className="mb-2">FAQs</p>
        </div>

        <div className="text-md">
          <h2 className="mb-2 font-semibold">Legal</h2>
          <p className="mb-2">Terms & Conditions</p>
          <p className="mb-2">Private Policy</p>
          <p className="mb-2">PAIA Manual</p>
        </div>

        <div className="text-md">
          <h2 className="text-md font-semibold mb-4">Follow Us <br></br> on Socials</h2>
          <div>
            <img src={socials.src} alt=""/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
