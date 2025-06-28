
function Hero() {
    return (
        <section className="flex items-center justify-between bg-blue-900 text-white p-8">
            <div className='container flex items-center justify-between mx-auto h-full flex-col sm:flex-row'>
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold mb-4">Explore, Inspire, Connect</h1>
                    <p className="text-lg mb-6">
                        Dive into a diverse collection of books and resources for every interest and age. Enjoy a welcoming space to read, learn, and share ideas with others. Start your next adventure with us today!
                    </p>
                    <button className="bg-white text-blue-500 px-6 py-2 rounded font-semibold hover:bg-gray-200 transition cursor-pointer">
                        Try for free →
                    </button>
                </div>
                <div className="">
                    <img src='/img-hero.png' alt="Community Library" />
                </div>
            </div>
        </section>
    );
}

export default Hero;