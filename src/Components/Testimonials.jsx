import React from 'react'
import SectionsHeader from './SectionsHeader'
import {assets, testimonialsData } from '../assets/images/assets'

export default function Testimonials() {
  return (
    <div className='container mx-auto py-10  md:px-20 lg:px-30 overflow-hidden w-full ' id='Testimonials'>
        <SectionsHeader title='Customer' title2='Testimonials' content='Real Stories from Those Who Found Home with Us'/>
        {/* Customer boxes */}
        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonial , index)=>(
                <div key={index} className='max-w-[340px]  shadow-xl rounded px-8 py-12 text-center'>
                    <img src={testimonial.image} alt={testimonial.alt} className='mx-auto mb-4 w-20' />
                    <h2 className='text-xl font-medium text-gray-900'>{testimonial.name}</h2>   
                    <p className=' text-gray-500 text-sm mb-4'>{testimonial.title}</p>    
                    <div className='flex justify-center gap-1 mb-4'>
                        {Array.from({length:testimonial.rating},(item,index)=>(
                            <img key={index} src={assets.star_icon}/>
                        ))}    
                    </div> 
                    <p className='text-gray-700'>{testimonial.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
