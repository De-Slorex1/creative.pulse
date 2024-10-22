import Icon from '/arrow.svg';
import { useState } from 'react';

function Accordion({title, body}) {
  const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <div>
        <div>
          <div>
            <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex border my-1 py-8 px-4 rounded-xl border-grey justify-between w-[800px]'>
              <span className='text-light-grey text-lg font-light'>{title}</span>
              {accordionOpen ? <img src={Icon} alt='icon'/> : <img src={Icon} alt='icon'/>}
            </button>
          </div>
          <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white 
          ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className='overflow-hidden border py-2 px-4 rounded-xl border-white w-[800px]'>
              <p className='text-white'>
                {body}
              </p>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Accordion;