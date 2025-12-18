import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/image.png';
import footerBg from '../assets/image_bd7729.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'How It Works', path: '/#how-it-works' },
        { name: 'Impact', path: '/#impact' },
        { name: 'Investors', path: '/#investors' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="EthioTrustScore" className="h-32 w-auto" />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                                    ? 'text-ethio-green border-b-2 border-ethio-green'
                                    : 'text-gray-600 hover:text-ethio-green'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-ethio-green focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                    ? 'text-ethio-green bg-green-50'
                                    : 'text-gray-600 hover:text-ethio-green hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="relative bg-gray-900 text-white">
            <div className="absolute inset-0 z-0">
                <img
                    src={footerBg}
                    alt="Sunset city view"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-ethio-yellow">EthioTrustScore</h3>
                        <p className="text-gray-300">
                            Pioneering financial inclusion through data-driven credit reporting in Ethiopia.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-ethio-yellow">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/#how-it-works" className="hover:text-ethio-green transition-colors">How It Works</a></li>
                            <li><a href="/#impact" className="hover:text-ethio-green transition-colors">Impact</a></li>
                            <li><a href="/#investors" className="hover:text-ethio-green transition-colors">Investors</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-ethio-yellow">Contact Us</h3>
                        <p className="text-gray-300">Addis Ababa, Ethiopia</p>
                        <p className="text-gray-300">info@ethiotrustscore.com</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} EthioTrustScore. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

const Layout = ({ children }) => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
