import React from 'react';
import ServiceImg from '../../public/service-img.svg'
import ServiceIconFlat from '../../public/flat-icon.png';

function Service() {
    return (
        <section className="bg-white text-gray-800" id="service">
            {/* Primeira seção: Project Management */}
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mb-16">
                <div className="max-w-lg">
                    <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                    <p className="text-lg mb-6">
                        Discover a wide range of books, resources, and community programs designed to inspire learning and connection. Our library is a welcoming space for everyone to explore, share, and grow together.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition">
                        Login Now! →
                    </button>
                </div>
                <img src={ServiceIconFlat} alt="" className='md:h-[580px] w-auto'/>
            </div>
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="">
                        <img src={ServiceImg} alt="" className='pt-8 md:pt-0'/>
                    </div>
                </div>
                <div className="max-w-lg ">
                    <h2 className="text-3xl font-bold mb-4">Work together</h2>
                    <p className="text-lg mb-6">
                        Create an account to access a wide range of books, resources, and community programs. Join the Community Library and start your journey today!
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition cursor-pointer">
                        Try it now →
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Service;