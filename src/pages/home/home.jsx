import Footer from '../../modules/component/footer';
import Header from '../../modules/component/header';
import Section from '../../modules/component/section';



const HomePage = () => {
    return ( 
        <div className='w-full m-0 p-0'>
           <Header />
           <div className="bg-[url('/bg.png')] bg-cover bg-no-repeat w-full p-0 m-0">
            <Section />
           </div>
           <Footer />
        </div>
     );
}
 
export default HomePage;