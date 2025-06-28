import { Link } from 'react-router-dom';

function Service() {
    return (
        <section className="bg-white text-gray-800 pb-10 pt-5" id="services">
            <div className="container flex flex-col mt-10 md:flex-row items-center justify-around mb-16 ">
                <div className="max-w-lg">
                    <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                    <p className="text-lg mb-6">
                        Discover a wide range of books, resources, and community programs designed to inspire learning and connection. Our library is a welcoming space for everyone to explore, share, and grow together.
                    </p>
                    <Link to='/login' className="bg-blue-500 text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition">
                        Login Now! →
                    </Link>
                </div>
                <img src='/flat-icon.png' alt="" className='h-40 sm:h-56 md:h-72 lg:h-80 xl:h-[400px] 2xl:h-[480px] w-auto max-w-full'/>
            </div>
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-around">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="">
                        <img src='/service-img.svg' alt="" className='h-40 sm:h-56 md:h-72 lg:h-80 xl:h-[360px] 2xl:h-[400px] w-auto max-w-full'/>
                    </div>
                </div>
                <div className="max-w-lg ">
                    <h2 className="text-3xl font-bold mb-4">Work together</h2>
                    <p className="text-lg mb-6">
                        Create an account to access a wide range of books, resources, and community programs. Join the Community Library and start your journey today!
                    </p>
                    <Link to='/register' className="bg-blue-500 text-white px-6 py-2 rounded font-semibold hover:bg-blue-600 transition cursor-pointer">
                        Try it now →
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Service;