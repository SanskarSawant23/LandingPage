import {testimonials} from '../constants'

export const Testimonials = ()=>{
    return(
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
                What People are saying
            </h2>
            <div className="flex flex-wrap justify-cneter">
                {testimonials.map((item, index)=>(
                    <div key = {index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                        <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800'>
                            <p className='text-left'>{item.text}</p>
                            <div className='flex mt-8 items-start'>
                            <img src={item.image} className='w-12 h-12 rounded-full mr-6' alt={item.user} />
                            <div className='text-left'>
                                <h6>{item.user}</h6>
                                <span className='text-sm font-normal italic text-neutral-600'>{item.company}</span>
                            </div>

                        </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
