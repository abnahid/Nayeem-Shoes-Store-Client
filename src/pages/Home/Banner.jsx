import BannerImg from "@/assets/new-slippers.png";

const Banner = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 gap-12 md:gap-24 bg-gradient-to-r from-blue-50 to-white">
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">New Arrival</span>
                    <span className="text-gray-500 text-sm">2025 Collection</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
                    Step Into Style with <span className="text-blue-600">Nayeem Shoes</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 font-light max-w-lg">
                    Trendy, comfy & affordable shoes for everyone in Sylhet.
                </h2>
                <p className="text-gray-500 max-w-md">
                    Whether you're walking into the office or the weekend, our new range of footwear has you covered. Men’s, women’s, and kids’ shoes available now.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300">
                        Shop Collection
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full font-medium transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
                <img
                    src={BannerImg}
                    alt="Stylish shoes from Nayeem Shoes Store"
                    className="w-full max-w-md xl:max-w-xl object-contain "
                />
            </div>
        </section>
    );
};

export default Banner;
