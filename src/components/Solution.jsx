import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

function Solution() {
    const testimonials = [
        {
            quote: "Community Library is designed as a collaborative tool for learning and connection.",
            name: "Oberon Shaw, MCH",
            position: "Head of Talent Acquisition, North America",
            image: "/img-client1.png",
        },
        {
            quote: "Community Library offers a vast collection of resources tailored to your needs.",
            name: "Jane Doe",
            position: "Educator, Europe",
            image: "/img-client2.png",
        },
        {
            quote: "A welcoming space to explore, share, and grow together.",
            name: "John Smith",
            position: "Community Leader, Asia",
            image: "/img-client3.png",
        },
        {
            quote: "Community Library is a hub for knowledge and community engagement.",
            name: "Alice Johnson",
            position: "Librarian, South America",
            image: "/img-client4.png",
        },
        {
            quote: "Join us in building a vibrant community of learners and explorers.",
            name: "Bob Brown",
            position: "Volunteer, Africa",
            image: "/img-client5.png",
        },
        {
            quote: "Community Library is a place where ideas flourish and connections thrive.",
            name: "Charlie Green",
            position: "Tech Enthusiast, Australia",
            image: "/img-client6.png",
        },
    ];
    return (
        <section className="bg-blue-900 text-white py-16 gap-3 flex flex-col" id="solutions">
            <div className='container mx-auto'>
                <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-bold mb-4">Use as Extension</h2>
                        <p className="text-lg mb-6">
                            Discover how the Community Library can transform your learning experience. Access a vast collection of books, 
                            participate in engaging community programs, and explore resources tailored to your needs. Whether you're looking 
                            to expand your knowledge or connect with others, our library is here to support your journey.
                        </p>
                        <Link className="bg-white text-blue-500 px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
                            Let's Go →
                        </Link>
                    </div>
                    <img src="/solution-img.svg" alt="Solution Image" />
                </div>
                <div className="bg-blue-900 text-white py-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
                    </div>
                    <Swiper
                        spaceBetween={20}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        navigation={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Keyboard, Pagination, Navigation]}
                        className="mySwiper max-w-5xl mx-auto py-30"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl h-[340px] w-full mx-auto flex flex-col justify-between border border-blue-100">
                                    <div className="flex-1 flex items-center justify-center">
                                        <span className="text-4xl text-blue-600 mr-2">“</span>
                                        <p className="text-lg font-medium text-center">{testimonial.quote}</p>
                                        <span className="text-4xl text-blue-600 ml-2">”</span>
                                    </div>
                                    <div className="flex items-center mt-8">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full border-4 border-blue-500 shadow-md object-cover mr-4"
                                        />
                                        <div>
                                            <div className="font-bold text-blue-900 text-base">{testimonial.name}</div>
                                            <div className="text-sm text-gray-500">{testimonial.position}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Solution;