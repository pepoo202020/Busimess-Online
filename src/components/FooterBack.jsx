import React from "react";
import footerBg from '../assets/footerBg.png'

const FooterBg = () => {
  return (<div className="w-full lg:h-fit h-full lg:pt-16 absolute -z-10 bottom-0">
    <div className='w-full flex flex-col'>
				<div className=' w-full lg:h-80 h-96'>
					<img
						src={footerBg}
						alt='footer_Bg'
						className='w-full h-full bg-cover'
					/>
				</div>
				<div className='w-full  lg:h-56 h-96 bg-[#222222] flex items-end justify-between text-white'></div>
			</div>
			<div className='lg:py-8 lg:h-fit h-full  flex justify-center items-center py-10 lg:px-0 px-10 text-center  bg-black w-full text-white heading text-sm'>
				© 2023 COPYRIGHT Abanob Shenoda-2020. PRIVACY POLICY | TERMS OF SERVICE
			</div>
  </div>);
};

export default FooterBg;
