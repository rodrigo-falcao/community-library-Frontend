import React from "react";

const donateOptions = [
    {
        title: "Basic Support",
        price: "$2",
        description: "Help keep the library running.",
        benefits: [
            "Your name on the supporters page",
            "Access to the monthly newsletter",
        ],
        button: "Support",
        featured: false,
    },
    {
        title: "Supporter",
        price: "$6",
        description: "Contribute to new projects and improvements.",
        benefits: [
            "All Basic Support benefits",
            "Invitation to exclusive events",
            "Discounts on courses and workshops",
        ],
        button: "Support",
        featured: true,
    },
    {
        title: "Sponsor",
        price: "$20",
        description: "Help transform the community.",
        benefits: [
            "All previous benefits",
            "Special highlight on the page",
            "Early access to news",
        ],
        button: "Support",
        featured: false,
    },
];

export default function DonateSection() {
    return (
        <section className="py-20 bg-white" id="donate">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">
                    Support <span className="text-blue-900">Our Library</span>
                </h2>
                <p className="mt-4 text-gray-500">
                    Your donation helps maintain and expand our projects, events, and collection. Choose a way to support:
                </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {donateOptions.map(option => (
                    <div
                        key={option.title}
                        className={`flex flex-col rounded-2xl border shadow-lg p-8 transition-all duration-300 ${
                            option.featured
                                ? "bg-blue-900 text-white border-blue-700 scale-105 z-10"
                                : "bg-white text-gray-800 border-gray-200"
                        }`}
                    >
                    <div className="mb-4">
                        <h3 className={`text-2xl font-bold mb-2 ${option.featured ? "text-white" : "text-blue-900"}`}>
                        {option.title}
                        </h3>
                        <div className="text-3xl font-extrabold mb-2">{option.price}</div>
                        <div className="text-gray-500 mb-4">{option.description}</div>
                    </div>
                    <ul className="flex-1 mb-6 space-y-2">
                        {option.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                            <span className={`mr-2 text-lg ${option.featured ? "text-blue-200" : "text-blue-600"}`}>✔</span>
                            <span>{benefit}</span>
                        </li>
                        ))}
                    </ul>
                    <button
                        className={`mt-auto px-6 py-2 rounded font-semibold cursor-pointer transition ${
                        option.featured
                            ? "bg-white text-blue-900 hover:bg-blue-100"
                            : "bg-blue-900 text-white hover:bg-blue-700"
                        }`}
                    >
                        {option.button}
                    </button>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}