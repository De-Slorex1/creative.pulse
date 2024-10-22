
function Form() {
  return (
    <div className="bg-[url('/bg.png')] bg-cover bg-no-repeat w-full p-0 m-0">
        <div className="flex flex-col">
            <div className="text-center text-grey">
                <h1 className="text-[5rem] general-sans-bold font-semibold">Let Make It Happen</h1>
                <p className="text-xl font-light">
                    To get the conversion tarted, fill up this form, we will contact<br/>
                    you in less than 24hours
                </p>
            </div>
            <div className="w-full px-96">
                <form className="flex flex-col w-[700px] px-12 py-16">
                    <label className="text-white py-2 text-xl">1. What type of project are you interested in ?</label>
                    <div className="flex flex-row">
                        <button className="border border-grey rounded-full py-2 px-6 text-grey mx-1 text-base">Brand Design</button>
                        <button className="border border-grey rounded-full py-2 px-6 text-grey mx-1 text-base">Creative Design</button>
                        <button className="border border-grey rounded-full py-2 px-6 text-grey mx-1 text-base">Digital Experience</button>
                    </div>
                    <label className="text-white py-2 text-xl">Your Name</label>
                    <input type='text' className="border-b-2 border-white bg-transparent w-[500px] py-1 mb-2" placeholder='Your name'/>
                    <label className="text-white py-2 text-xl">Your Email</label>
                    <input type='email' className="border-b-2 border-white bg-transparent w-[500px] py-1 mb-2" placeholder='Your email' />
                    <label className="text-white py-2 text-xl">Your Country</label>
                    <input type='text' className="border-b-2 border-white bg-transparent w-[500px] py-1 mb-2" placeholder='Type your country' />
                    <label className="text-white py-2 text-xl">Phone Number</label>
                    <input type='number' className="border-b-2 border-white bg-transparent w-[500px] py-1 mb-2" placeholder='Type your phone number'/>
                    <label className="text-white py-2 text-xl">Scope Of Your Project ?</label>
                    <input type='text' className="border-b-2 border-white bg-transparent w-[500px] py-1 mb-2" placeholder='Tell us about your business' />
                    <label className="text-white py-2 text-xl">What Is Your Budget ?</label>
                    <input type='text' className="border-b-2 border-white bg-transparent w-[500px] py-1 mb-2" placeholder="what's your estimated cost?" />
                    <button type='submit' className="w-[500px] bg-dark-orange rounded-full py-2 my-6 text-white text-base">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form