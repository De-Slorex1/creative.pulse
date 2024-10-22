import BookCallPage from "../../pages/bookCall";
import Footer from "./footer";
import Slides from "./slider";


function Services() {
  return (
    <>
      <div>
        <div className="bg-[url('/home.png')] bg-cover bg-no-repeat w-full">
            <Slides />
        </div>
        <BookCallPage />
        <Footer />
      </div>
    </>
  )
}

export default Services;