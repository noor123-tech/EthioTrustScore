import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight, Building2, Smartphone, Database,
    CheckCircle, XCircle,
    TrendingUp, Users, ShieldCheck, Flag,
    BarChart, Map, AlertTriangle,
    Mail, Phone, MapPin,
    X
} from 'lucide-react';

import heroImage from '../assets/hero_skyline.jpg';
import logo from '../assets/logoforeuthpiaedit.png';
import creditReportImg from '../assets/credit_report_new.png';
import swotInfographic from '../assets/swot_infographic.jpg';
import investorOverview from '../assets/investor_overview.jpg';
import footerBg from '../assets/image_bd7729.jpg';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const GlobalCallBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-gray-100 border-b border-gray-200 text-gray-800 relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-start justify-between">
                <p className="text-sm md:text-base font-normal leading-relaxed pr-8">
                    Example below is specific to Ethiopia, but we welcome Myanmar, Eritrea, Cameroon, Gabon, Congo, Mauritania, Yemen, Equatorial Guinea, Comoros, São Tomé, Príncipe, Micronesia, Palau, Marshall Islands, Tuvalu, Nauru, Sudan, Somalia, etc... to inquire bc we can help you
                </p>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                    aria-label="Dismiss banner"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
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
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-ethio-yellow">Contact Us</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>Fairfax, VA<br />United States</p>
                            <p>Kirillysc@gmail.com</p>
                            <p>+1 571 276-0986</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} EthioTrustScore. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

const Home = () => {
    // Scroll Handling from Layout
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

    // Contact Form State
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        interest: 'Investor',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch("https://formsubmit.co/ajax/Kirillysc@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', organization: '', interest: 'Investor', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <GlobalCallBanner />


            <main className="flex-grow">
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
                                className="max-w-xl text-center"
                            >
                                <div className="flex justify-center mb-6">
                                    <img src={logo} alt="EthioTrustScore Logo" className="h-64 w-auto" />
                                </div>
                                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                    Pioneering Credit Intelligence in <span className="text-ethio-yellow">Ethiopia</span>
                                </h1>
                                <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                                    Building Ethiopia’s financial backbone to unlock trillions in new lending and drive a 10x economic multiplier.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Video Section */}
                    <section className="py-10 bg-white">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="shadow-2xl rounded-2xl overflow-hidden border-4 border-gray-700 bg-black">
                                <iframe
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/DsZLFNwDDEk"
                                    title="EthioTrustScore Explainer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </section>

                    {/* The Opportunity */}
                    <section className="py-10 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-8">
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
                    <section className="py-10 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-8">
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
                                        <div className="text-4xl font-bold mb-2 whitespace-nowrap">250-877</div>
                                        <div className="text-lg font-medium">EthioTrustScore</div>
                                        <div className="mt-2 text-xs opacity-80">Centralized Credit Profile</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Why It Matters: Comparison */}
                    <section className="py-10 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-8">
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
                    <section className="py-10 bg-gray-900 text-white">
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
                        </div>
                    </section>

                    <section id="how-it-works" className="scroll-mt-28">
                        {/* HowItWorks Content Inline */}
                        <div className="bg-gray-50 py-8">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                                {/* Header */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-center mb-16"
                                >
                                    <h1 className="text-4xl font-bold text-ethio-green mb-4">Understanding EthioTrustScore</h1>
                                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                                        Your "financial report card" summarizing your borrowing history and reliability.
                                    </p>
                                    <div className="mb-4">
                                        <span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            Illustrative Example
                                        </span>
                                    </div>
                                    <motion.img
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        src={creditReportImg}
                                        alt="Sample Credit Report"
                                        className="mx-auto rounded-lg shadow-xl w-full max-w-2xl"
                                    />
                                </motion.div>

                                {/* Score Composition */}
                                <div className="mb-20">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="text-3xl font-bold text-center text-gray-800 mb-12"
                                    >
                                        Score Composition
                                    </motion.h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {[
                                            { color: "bg-ethio-green", percentage: "35%", title: "Payment History", desc: "Paying bills on time" },
                                            { color: "bg-blue-500", percentage: "30%", title: "Credit Utilization", desc: "Ratio of current debt to limit" },
                                            { color: "bg-ethio-yellow", percentage: "15%", title: "History Length", desc: "Age of credit accounts", textColor: "text-gray-900" },
                                            { color: "bg-purple-500", percentage: "20%", title: "Mix & New Credit", desc: "Types of credit and inquiries" }
                                        ].map((card, index) => (
                                            <CompositionCard
                                                key={index}
                                                index={index}
                                                {...card}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* For Individuals */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                                >
                                    <div className="bg-ethio-green py-6 px-8">
                                        <h2 className="text-2xl font-bold text-white">For Individuals</h2>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-semibold mb-4">How to build your score</h3>
                                        <p className="text-gray-600 mb-6">
                                            You can build a strong credit score by leveraging "positive data". This isn't just about bank loans—everyday payments count.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-ethio-green transition-colors">
                                                <h4 className="font-bold text-ethio-green mb-2">Utility Payments</h4>
                                                <p className="text-sm text-gray-500">Water and electricity bills paid on time.</p>
                                            </div>
                                            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-ethio-green transition-colors">
                                                <h4 className="font-bold text-ethio-green mb-2">Mobile Money</h4>
                                                <p className="text-sm text-gray-500">Consistent Telebirr transaction history.</p>
                                            </div>
                                            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-ethio-green transition-colors">
                                                <h4 className="font-bold text-ethio-green mb-2">Micro-loans</h4>
                                                <p className="text-sm text-gray-500">Repaying small digital loans promptly.</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </section>

                    <section id="impact" className="scroll-mt-28">
                        {/* Impact Content Inline */}
                        <div className="bg-white">
                            {/* Header */}
                            <div className="bg-gray-50 py-8 text-center">
                                <h1 className="text-4xl font-bold text-ethio-green mb-4">Driving Economic Transformation</h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
                                    Unlocking potential and accelerating growth for Ethiopia.
                                </p>
                            </div>

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                                {/* Economic Impact Stats */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                                    <div className="text-center p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
                                        <div className="inline-flex p-4 rounded-full bg-green-100 text-ethio-green mb-4">
                                            <TrendingUp size={32} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">$10-$20 Billion</h3>
                                        <p className="text-gray-500">Addition to nominal GDP by 2035</p>
                                    </div>
                                    <div className="text-center p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
                                        <div className="inline-flex p-4 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                                            <Users size={32} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">35%</h3>
                                        <p className="text-gray-500">Target adult coverage in 5 years</p>
                                    </div>
                                    <div className="text-center p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
                                        <div className="inline-flex p-4 rounded-full bg-red-100 text-ethio-red mb-4">
                                            <ShieldCheck size={32} />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">20-40%</h3>
                                        <p className="text-gray-500">Reduction in defaults</p>
                                    </div>
                                </div>

                                {/* SWOT Analysis */}
                                <h2 className="text-3xl font-bold text-center mb-12">Strategic Analysis</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {/* Strengths */}
                                    <div className="bg-green-50 p-8 rounded-xl border border-green-100">
                                        <h3 className="text-xl font-bold text-ethio-green mb-4 flex items-center">
                                            Strengths
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>First-mover advantage in private credit reporting.</li>
                                            <li>Strong alignment with the 10-Year National Plan.</li>
                                            <li>Scalable technology infrastructure.</li>
                                        </ul>
                                    </div>
                                    {/* Weaknesses */}
                                    <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
                                        <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
                                            Weaknesses
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>High initial setup costs ($5-15M).</li>
                                            <li>Consumer education gap regarding credit scores.</li>
                                        </ul>
                                    </div>
                                    {/* Opportunities */}
                                    <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                                        <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                                            Opportunities
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Integration with Digital ID (Fayda).</li>
                                            <li>Explosive fintech and mobile money growth.</li>
                                            <li>Banking liberalization.</li>
                                        </ul>
                                    </div>
                                    {/* Threats */}
                                    <div className="bg-red-50 p-8 rounded-xl border border-red-100">
                                        <h3 className="text-xl font-bold text-ethio-red mb-4 flex items-center">
                                            Threats
                                        </h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Macroeconomic instability.</li>
                                            <li>Reluctance in data sharing among institutions.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="investors" className="scroll-mt-28">
                        {/* Investors Content Inline */}
                        <div className="bg-gray-50 py-8">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                                {/* Overview Infographic */}
                                <div className="mb-16">
                                    <img
                                        src={investorOverview}
                                        alt="EthioTrustScore Investment Overview"
                                        className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
                                    />
                                </div>

                                {/* Financials & Revenue */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">

                                    {/* Revenue Streams */}
                                    <div className="bg-white p-8 rounded-xl shadow-md">
                                        <h2 className="text-2xl font-bold text-ethio-green mb-6 flex items-center">
                                            <BarChart className="mr-3" /> Business Model
                                        </h2>
                                        <div className="space-y-6">
                                            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                                                <h3 className="font-bold text-lg mb-1">Core Reports</h3>
                                                <p className="text-gray-600">ETB 1,000 fee per report. Includes credit scores and localized fraud alerts.</p>
                                            </div>
                                            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                                                <h3 className="font-bold text-lg mb-1">B2B Subscriptions</h3>
                                                <p className="text-gray-600">Recurring revenue from banks for portfolio monitoring and analytics.</p>
                                            </div>
                                            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                                                <h3 className="font-bold text-lg mb-1">Value-Added Services</h3>
                                                <p className="text-gray-600">Identity verification, debt collection tools, and premium analytics.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Projections */}
                                    <div className="bg-white p-8 rounded-xl shadow-md">
                                        <h2 className="text-2xl font-bold text-ethio-green mb-6">Projections (5-Year)</h2>
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-center border-b pb-4">
                                                <span className="text-gray-600 font-medium">Year 1 (Setup)</span>
                                                <span className="text-2xl font-bold text-gray-900">ETB 50M</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b pb-4">
                                                <span className="text-gray-600 font-medium">Year 3 (Growth)</span>
                                                <span className="text-2xl font-bold text-gray-900">30M Records</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b pb-4">
                                                <span className="text-gray-600 font-medium">Year 5 (Scale)</span>
                                                <span className="text-2xl font-bold text-gray-900">ETB 500M+</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b pb-4">
                                                <span className="text-gray-600 font-medium">Target Margin</span>
                                                <span className="text-2xl font-bold text-ethio-green">20%+</span>
                                            </div>
                                            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                                <span className="font-bold text-yellow-800">ROI: 25-30% IRR for strategic partners</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Roadmap */}
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-center mb-4">Implementation Plan</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <RoadmapCard
                                            phase="Phase 1 "
                                            title="Foundation"
                                            items={["Secure NBE License", "Seed Capital $5-15M", "Partner Global Tech"]}
                                        />
                                        <RoadmapCard
                                            phase="Phase 2"
                                            title="Onboarding"
                                            items={["Integrate Data Providers", "Pilot with major banks (CBE)", "System testing"]}
                                        />
                                        <RoadmapCard
                                            phase="Phase 3"
                                            title="Expansion"
                                            items={["Consumer Tools Launch", "Financial Literacy Campaigns", "National Scale"]}
                                        />
                                        <RoadmapCard
                                            phase="Phase 4"
                                            title="Roadmap "
                                            items={["Implement machine learning on the data to transform the EthioTrustScore into an AI-driven company", "Integrate AI chat and voice services for customer support", "Develop Android/iOS app"]}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section id="contact" className="scroll-mt-28">
                        {/* Contact Content Inline */}
                        <div className="bg-white py-8">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                                <div className="text-center mb-16">
                                    <h1 className="text-4xl font-bold text-ethio-green mb-4">Join the Financial Revolution</h1>
                                    <p className="text-xl text-gray-600 mb-2">
                                        Partner with us to build the infrastructure of trust in Ethiopia.
                                    </p>
                                    <p className="text-xl text-gray-600">
                                        We seek strategic investors and partners for equity or joint ventures.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                                    {/* Contact Info */}
                                    <div>
                                        <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
                                        <div className="space-y-8">
                                            <div className="flex items-start">
                                                <MapPin className="text-ethio-green w-6 h-6 mr-4 mt-1" />
                                                <div>
                                                    <h3 className="font-bold text-gray-900">Visit Us</h3>
                                                    <p className="text-gray-600">Fairfax, VA<br />United States</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <Mail className="text-ethio-green w-6 h-6 mr-4 mt-1" />
                                                <div>
                                                    <h3 className="font-bold text-gray-900">Email Us</h3>
                                                    <p className="text-gray-600">Kirillysc@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <Phone className="text-ethio-green w-6 h-6 mr-4 mt-1" />
                                                <div>
                                                    <h3 className="font-bold text-gray-900">Call Us</h3>
                                                    <p className="text-gray-600">+1 571 276-0986</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Form */}
                                    <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-ethio-yellow">
                                        {status === 'success' ? (
                                            <div className="text-center py-12">
                                                <div className="w-16 h-16 bg-green-100 text-ethio-green rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                                <p className="text-gray-600">Thanks for submitting. We will be in touch soon.</p>
                                                <button
                                                    onClick={() => setStatus('idle')}
                                                    className="mt-6 text-ethio-green font-semibold hover:underline"
                                                >
                                                    Send another message
                                                </button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethio-green focus:border-transparent outline-none transition-all"
                                                        placeholder="John Doe"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                                                    <input
                                                        type="text"
                                                        name="organization"
                                                        value={formData.organization}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethio-green focus:border-transparent outline-none transition-all"
                                                        placeholder="Company Name"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Interest</label>
                                                    <select
                                                        name="interest"
                                                        value={formData.interest}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethio-green focus:border-transparent outline-none transition-all bg-white"
                                                    >
                                                        <option>Investor</option>
                                                        <option>Data Provider</option>
                                                        <option>Bank / Financial Institution</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                        rows="4"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethio-green focus:border-transparent outline-none transition-all"
                                                        placeholder="How can we help you?"
                                                    ></textarea>
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={status === 'sending'}
                                                    className="w-full bg-ethio-yellow text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                                </button>
                                                {status === 'error' && (
                                                    <p className="text-red-600 text-center text-sm">Something went wrong. Please try again.</p>
                                                )}
                                            </form>
                                        )}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

// Helper Components
const CompositionCard = ({ color, percentage, title, desc, textColor = "text-white", index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`${color} ${textColor} p-6 rounded-xl shadow-lg transform transition hover:-translate-y-1`}
    >
        <div className="text-4xl font-extrabold mb-2">{percentage}</div>
        <div className="text-lg font-bold mb-2">{title}</div>
        <div className="text-sm opacity-90">{desc}</div>
    </motion.div>
);

const RoadmapCard = ({ phase, title, items }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-gray-100 px-3 py-1 rounded-bl-lg text-xs font-bold text-gray-500">{phase}</div>
        <h3 className="text-xl font-bold text-ethio-green mb-4 mt-2">{title}</h3>
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600">
                    <span className="mr-2">•</span> {item}
                </li>
            ))}
        </ul>
    </div>
);

export default Home;
