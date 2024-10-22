import Accordion from "../../modules/component/accordion";

const FAQsPage = () => {
    return ( 
        <div>
            <div className="bg-[url('/bg.png')] bg-cover bg-no-repeat w-full p-0 m-0">
                <div className="flex flex-col justify-center items-center w-full px-44 py-16">
                    <h2 className="text-grey text-5xl">Frequently Asked Questions</h2>
                    <div className="py-6">
                        <Accordion title='How long does it take to complete a design iteration' body='approximately 15 days to complete a design' />
                        <Accordion title='How long does it take to complete a design iteration' body='approximately 15 days to complete a design' />
                        <Accordion title='How long does it take to complete a design iteration' body='approximately 15 days to complete a design' />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FAQsPage;