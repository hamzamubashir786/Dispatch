import React from "react";
import { SiBookstack } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full h-[420px] bg-[#30DEFA] flex justify-around items-start p-[20px] pt-[70px] mt-[40px]">
      <div className="footer-1">
        <SiBookstack />
        <div>
          <i className="fa-solid fa-phone"></i>
          <a href="tel:(302)-219-7080" className="ml-[10px] text-white cursor-pointer">
            
          </a>
        </div>
        <div>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:info@wagglyllc.com" className="ml-[10px] text-white cursor-pointer">
            
          </a>
        </div>
        <div>
          <i className="fa-solid fa-globe"></i>
          <a href="http://www.wagglyllc.com" target="_blank" rel="noopener noreferrer" className="ml-[10px] text-white cursor-pointer">
           
          </a>
        </div>
      </div>

      <div className="footer-2">
        <li className="font-bold text-[24px] mb-[10px] cursor-pointer">Truck types</li>
        <span className="cursor-pointer text-white">Dry Van</span>
        <span className="cursor-pointer text-white">Reefer</span>
        <span className="cursor-pointer text-white">Power Only</span>
        <span className="cursor-pointer text-white">Step Deck</span>
        <span className="cursor-pointer text-white">Flat Bed</span>
        <span className="cursor-pointer text-white">Box Truck</span>
      </div>

      <div className="footer-2 footer-3">
        <li className="font-bold text-[24px] mb-[10px] cursor-pointer">WHAT WE DO</li>
        <span className="cursor-pointer text-white">Load search FTL/LTL</span>
        <span className="cursor-pointer text-white">Rate Negotiation & booking</span>
        <span className="cursor-pointer text-white">Broker Setup</span>
        <span className="cursor-pointer text-white">Detention Layover Tonu</span>
        <span className="cursor-pointer text-white">Invoicing & Collections</span>
        <span className="cursor-pointer text-white">Factoring & Insurance Assistance</span>
        <span className="cursor-pointer text-white">Dedicated Dispatch Team</span>
        <span className="cursor-pointer text-white">24/7 Support</span>
        <span className="cursor-pointer text-white">Pay Per Load No Contracts</span>
      </div>

      <div className="footer-4">
        <li className="font-bold text-[24px] text-black mb-[20px] cursor-pointer">
          FIND US ON SOCIAL MEDIA
        </li>
        <div className="conbox w-[200px] my-[20px] flex justify-between">
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
        <span className="cursor-pointer text-white">24/7 Support</span>
        <span className="cursor-pointer text-white">Broker Setup</span>
        <span className="cursor-pointer text-white">No Contracts</span>
        <span className="cursor-pointer text-white">Factoring Assistance</span>
      </div>
    </footer>
  );
};

export default Footer;