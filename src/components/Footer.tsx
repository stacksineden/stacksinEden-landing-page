import { AiFillInstagram, AiFillFacebook ,AiFillTwitterCircle} from 'react-icons/ai';


const Footer = () => {
    return (
        <div className='bg-transparent text-gray-600'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-20 md:px-32 py-14'>
                <div className="space-y-4 text-xs text-gray-800 font-roboto cursor-pointer">
                    <h5 className="font-bold font-roboto text-[16px]">ABOUT</h5>
                    <p>About stacksinEDEN</p>
                    <p>Blog</p>
                    <p>Meet Samuel</p>
                    <p>investors</p>
                    <p>FAQs</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800 font-roboto cursor-pointer">
                    <h5 className="font-bold font-roboto text-[16px]">USEFUL LINKS</h5>
                    <p>Help center</p>
                    <p>Enquiries</p>
                    <p>Our services</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800 font-roboto cursor-pointer">
                    <h5 className="font-bold font-roboto text-[16px]">CATEGORIES</h5>
                    <p>Ai chatbots</p>
                    <p>Contnt generation systems</p>
                    <p>AI automation</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800 font-roboto cursor-pointer">
                    <h5 className="font-bold font-roboto text-[16px]">SUPPORT</h5>
                    <p>Home</p>
                    <p>Book a call</p>
                    <p>User experience</p>
                </div>
            </div>
            <div className='px-10 md:px-32 py-4 grid grid-cols-1 md:grid-cols-2 border-t-[1px] border-slate-400 space-y-2 md:space-y-1'>
               <div className='flex items-center space-x-1 md:space-x-2'>
                   <p className='text-xs'>English (US)</p>
                   {/* <p className='text-xs'>Naira</p> */}
                   <div className='flex items-center space-x-1'>
                     <AiFillInstagram className='text-[24px] text-black cursor-pointer'/>
                     <AiFillFacebook className='text-[24px] text-black cursor-pointer'/>
                     <AiFillTwitterCircle className='text-[24px] text-black cursor-pointer'/>
                   </div>
               </div>
               <div className='flex items-center space-x-3 md:space-x-4'>
                   <p className='text-xs'>Privacy</p>
                   <p className='text-xs'>Terms</p>
                   <p className='text-xs'>Sitemap</p>
                   <p className='text-xs font-semibold font-roboto'>&copy; {new Date().getFullYear()} stacksinEDEN inc</p>
               </div>
            </div>
        </div>
    )
}

export default Footer