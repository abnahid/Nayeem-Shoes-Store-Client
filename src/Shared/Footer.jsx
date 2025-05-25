import { FaFacebookF, FaHome, FaInstagram, FaPhoneAlt, FaPinterestP } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-Primary text-white px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo Section */}
                <div className="flex flex-col gap-3">
                    <img src="/logo.png" alt="Foot Zone Logo" className="w-24" />
                </div>

                {/* General Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">General</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Faq</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Know Us Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Know us</h3>
                    <ul className="space-y-2">
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press Release</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>

                {/* Contact Info & Socials */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Contact Info</h3>
                    <p className="flex items-start gap-2"><FaHome className="mt-1" /> No: 58 A, East Madison Street, Baltimore, MD, USA 4508.</p>
                    <p className="flex items-center gap-2"><FaPhoneAlt /> (+1) +000 - 123 - 456789</p>
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold mb-2">Follow us on</h4>
                        <div className="flex gap-4 text-xl">
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaPinterestP /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/20 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© 2025 Developed by Abdul Jabbar Al Nahid</p>
                <div className="flex items-center gap-4">
                    <img src="/visa.png" alt="Visa" className="w-10" />
                    <img src="/mastercard.png" alt="Mastercard" className="w-10" />
                    <img src="/amex.png" alt="Amex" className="w-10" />
                    <img src="/paypal.png" alt="PayPal" className="w-10" />
                    <img src="/discover.png" alt="Discover" className="w-10" />
                </div>
                <a href="#" className="bg-black text-white p-2 rounded-full"><span className="text-xl">↑</span></a>
            </div>
        </footer>
    );
}
