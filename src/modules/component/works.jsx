import CardOne from '/card6.png';
import CardTwo from '/card7.png';
import CardThree from '/card8.png';

function WorkHeader() {
  return (
    <div>
       <div className="bg-[url('/home.png')] bg-cover bg-no-repeat w-full">
          <div className="text-center py-36">
            <h2 className="text-[5rem] text-grey leading-tight font-semibold">
              The Work We Do And <br/>
              The People We Help
            </h2>
            <p className="text-grey text-xl py-2 font-gilroy-regular leading-8">
              Our client inspire us. We become invested on what they are<br/>
              passionate about and ultimately we care about soemthing,<br/>
              it shows in the work
            </p>
          </div>
        </div>
        <div className="bg-[url('/bg.png')] bg-cover bg-no-repeat w-full p-0 m-0">
          <div className='flex flex-row justify-center items-center py-10 gap-1'>
            <div>
              <img src={CardOne} alt={CardOne} className='w-[360px] px-2 h-[330px] rounded-lg' />
            </div>
            <div>
              <img src={CardTwo} alt={CardTwo} className='w-[360px] px-2 h-[330px] rounded-lg'/>
            </div>
            <div>
              <img src={CardThree} alt={CardThree} className='w-[360px] px-2 h-[330px] rounded-3xl border-white'/>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center py-10 gap-1'>
            <div>
              <img src={CardOne} alt={CardOne} className='w-[360px] px-2 h-[330px] rounded-lg' />
            </div>
            <div>
              <img src={CardTwo} alt={CardTwo} className='w-[360px] px-2 h-[330px] rounded-lg'/>
            </div>
            <div>
              <img src={CardThree} alt={CardThree} className='w-[360px] px-2 h-[330px] rounded-3xl border-white'/>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full px-44 py-16">
            <div className="text-white">
              <p>TESTIMONAL</p>
              <h2 className="text-white text-4xl font-medium leading-2 py-2">
                What Our <br/>
                Client Says
              </h2>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-full px-44 py-16'>
            <div className="bg-[url('/frame5.png')] bg-cover bg-no-repeat rounded-3xl flex flex-col justify-center items-center w-full h-[280px] px-8 py-14 mx-2">
              <p className="text-center font-semibold">5 SPOT LEFT</p>
              <h2 className="text-black text-center text-5xl font-medium leading-2 py-2">
                Lets Start Creating<br/>
                Something Special
              </h2>
              <button className="bg-black py-2 px-6 text-sm my-3 rounded-full text-white">Book A Call</button>
            </div>
          </div>
        </div>
        
    </div>

  )
}

export default WorkHeader;