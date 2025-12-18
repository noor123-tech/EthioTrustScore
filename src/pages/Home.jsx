import { ArrowRight, Building2, Smartphone, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero_skyline.jpg';
import HowItWorks from './HowItWorks';
import Impact from './Impact';
import Investors from './Investors';
import Contact from './Contact';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row min-h-[85vh] bg-gray-900 relative">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden">
                    <img
                        src={heroImage}
                        alt="Addis Ababa Skyline"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Right Side: Text */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-gray-900 text-white relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="max-w-xl"
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            Pioneering Credit Intelligence in <span className="text-ethio-yellow">Ethiopia</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                            Building Ethiopia’s financial backbone to unlock trillions in new lending and drive a 10x economic multiplier.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="bg-ethio-yellow text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-yellow-400/20">
                                Join the Revolution
                            </Link>
                            <Link to="/how-it-works" className="bg-transparent border-2 border-gray-600 text-gray-300 font-bold py-3 px-8 rounded-full hover:border-white hover:text-white transition-colors">
                                How It Works
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Opportunity */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-ethio-green mb-4">The Opportunity</h2>
                        <div className="w-24 h-1 bg-ethio-red mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-ethio-green">
                            <h3 className="text-2xl font-bold mb-4">Economic Growth</h3>
                            <p className="text-gray-600 text-lg">
                                With a projected GDP growth of <span className="font-bold text-ethio-green">6.5-7.4%</span> and banking sector liberalization starting in 2025, Ethiopia is poised for a financial transformation.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-ethio-red">
                            <h3 className="text-2xl font-bold mb-4">The Gap</h3>
                            <p className="text-gray-600 text-lg">
                                Currently, <span className="font-bold text-ethio-red">less than 1%</span> of adults are covered by the public registry. This leaves millions without access to formal credit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Solution */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-ethio-green mb-4">Our Solution: EthioTrustScore</h2>
                        <p className="text-xl text-gray-600">The first semi private credit reporting agency in Ethiopia.</p>
                    </div>

                    {/* Flowchart Visual */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">

                        {/* Input Sources */}
                        <div className="flex flex-col gap-6 w-full md:w-1/3">
                            <div className="flex items-center p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                                <Building2 className="w-10 h-10 text-blue-600 mr-4" />
                                <div>
                                    <h4 className="font-bold">Banks</h4>
                                    <p className="text-sm text-gray-500">Loan repayment data</p>
                                </div>
                            </div>
                            <div className="flex items-center p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                                <Smartphone className="w-10 h-10 text-ethio-green mr-4" />
                                <div>
                                    <h4 className="font-bold">Telecoms</h4>
                                    <p className="text-sm text-gray-500">Telebirr, bill payments</p>
                                </div>
                            </div>
                            <div className="flex items-center p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                                <Database className="w-10 h-10 text-purple-600 mr-4" />
                                <div>
                                    <h4 className="font-bold">Utilities</h4>
                                    <p className="text-sm text-gray-500">Electricity, Water bills</p>
                                </div>
                            </div>
                        </div>

                        {/* Arrow & Center */}
                        <div className="hidden md:flex items-center justify-center text-gray-300">
                            <ArrowRight size={48} />
                        </div>

                        {/* Central Score */}
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="bg-gradient-to-br from-ethio-green to-emerald-700 text-white rounded-full p-12 w-64 h-64 flex flex-col items-center justify-center text-center shadow-2xl relative z-10">
                                <div className="text-5xl font-bold mb-2">750</div>
                                <div className="text-lg font-medium">EthioTrustScore</div>
                                <div className="mt-2 text-xs opacity-80">Centralized Credit Profile</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why It Matters: Comparison */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why EthioTrustScore Matters</h2>
                        <p className="text-xl text-gray-600">Bridging the gap between financial institutions and the Ethiopian people.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* For Banks */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600"
                        >
                            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                                <Building2 className="mr-3 text-blue-600" /> For Banks & Lenders
                            </h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-green-500 font-bold mr-2">✓</span>
                                    Reduce Non-Performing Loans significantly.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 font-bold mr-2">✓</span>
                                    Move away from 100-200% collateral requirements.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 font-bold mr-2">✓</span>
                                    Unlock new revenue streams by serving the unbanked.
                                </li>
                            </ul>
                        </motion.div>

                        {/* For People */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-ethio-green"
                        >
                            <h3 className="text-2xl font-bold text-ethio-green mb-6 flex items-center">
                                <Smartphone className="mr-3 text-ethio-green" /> For Individuals & SMEs
                            </h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-green-500 font-bold mr-2">✓</span>
                                    Access credit without needing property collateral.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 font-bold mr-2">✓</span>
                                    Build a financial reputation using Telebirr/Utility bills.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 font-bold mr-2">✓</span>
                                    Get lower interest rates for good repayment history.
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Security & Compliance */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-ethio-yellow mb-8">Trusted, Secure, & Compliant</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 border border-gray-700 rounded-lg bg-gray-800">
                            <h3 className="text-xl font-bold mb-2">NBE Compliant</h3>
                            <p className="text-gray-400">Fully licensed and operating under National Bank of Ethiopia directives.</p>
                        </div>
                        <div className="p-6 border border-gray-700 rounded-lg bg-gray-800">
                            <h3 className="text-xl font-bold mb-2">Data Privacy</h3>
                            <p className="text-gray-400">Bank-grade encryption protecting critical personal and financial data.</p>
                        </div>
                        <div className="p-6 border border-gray-700 rounded-lg bg-gray-800">
                            <h3 className="text-xl font-bold mb-2">Global Standards</h3>
                            <p className="text-gray-400">Aligned with IFC/World Bank best practices for credit reporting.</p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <Link to="/contact" className="bg-ethio-green text-white font-bold py-4 px-10 rounded-full hover:bg-green-700 transition-colors shadow-lg text-lg">
                            Become a Data Partner
                        </Link>
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="scroll-mt-28">
                <HowItWorks />
            </section>

            <section id="impact" className="scroll-mt-28">
                <Impact />
            </section>

            <section id="investors" className="scroll-mt-28">
                <Investors />
            </section>

            <section id="contact" className="scroll-mt-28">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
