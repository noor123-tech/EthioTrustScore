import { CheckCircle, XCircle } from 'lucide-react';
import creditReportImg from '../assets/credit_report_new.png';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    return (
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
    );
};

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

export default HowItWorks;
