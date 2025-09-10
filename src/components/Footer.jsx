import React from 'react';

function Footer(props) {
    return (
        <footer className="bg-gradient-to-b from-[#D9305B] to-[#7E2784] text-white h-[78px] flex items-center justify-center mb-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center space-x-8 text-[18px] font-dm font-normal">
                    <a href="#" className="hover:text-gray-300 transition-colors">
                        Terms Of Use
                    </a>
                    <span>
                        ABM LLC 2017
                    </span>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                        Cookies
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;