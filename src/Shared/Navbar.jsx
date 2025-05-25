
const Navbar = () => {
    return (
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center bg-white shadow-md">
            <div className="text-2xl font-bold text-blue-700">👟 Nayeem Shoes</div>
            <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
                <a href="#" className="hover:text-blue-600 transition">Home</a>
                <a href="#" className="hover:text-blue-600 transition">Men</a>
                <a href="#" className="hover:text-blue-600 transition">Women</a>
                <a href="#" className="hover:text-blue-600 transition">Kids</a>
                <a href="#" className="hover:text-blue-600 transition">About Us</a>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition">
                Shop Now
            </button>
        </nav>
    );
};

export default Navbar;
