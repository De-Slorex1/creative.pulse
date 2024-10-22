import { Link, NavLink, useNavigate} from 'react-router-dom';
import logo from '/logo.svg';;

const Navbar = () => {
    const navigate = useNavigate()
    return ( 
        <div className="bg-[url('/bg.png')] bg-cover bg-no-repeat w-full m-0 px-32">
            <div className='py-7'>
                <div className='border-2 border-white rounded-full flex flex-row items-center justify-between w-full'>
                    <div>
                        <Link to='/'><img src={logo} alt={logo} className='w-[100%] h-[75px]' /></Link>
                    </div>
                    <div className='px-4 text-white'>
                        <NavLink className={({isActive}) => { return isActive ? 'px-5 py-2 font-light text-sm bg-dark-orange rounded-full transition duration-75 ease-linear' : 'px-3'}} to="/works">Works</NavLink>
                        <NavLink className={({isActive}) => { return isActive ? 'px-5 py-2 font-light text-sm bg-dark-orange rounded-full transition duration-75 ease-linear' : 'px-3'}} to="/services">Our Services</NavLink>
                        <NavLink className={({isActive}) => { return isActive ? 'px-5 py-2 font-light text-sm bg-dark-orange rounded-full transition duration-75 ease-linear' : 'px-3'}} to="/faqs">FAQs</NavLink>
                        <button onClick={() => navigate('/bookcall', {replace: true})} className='px-10 font-normal text-md bg-dark-orange rounded-full py-3 hover:bg-transparent hover:border' to="/bookcall">Book A Call</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;