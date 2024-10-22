import Footer from "../../modules/component/footer";
import Form from "../../modules/component/form";

const BookCallPage = () => {
    return ( 
        <>
            <div className="bg-[url('/home.png')] bg-cover bg-no-repeat w-full">
                <Form/>
            </div>
            <div>
                <Footer />
            </div>
        </>
     );
}
 
export default BookCallPage;