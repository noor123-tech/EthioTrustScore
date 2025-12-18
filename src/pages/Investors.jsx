import { BarChart, Map, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import investorOverview from '../assets/investor_overview.jpg';

const Investors = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">High-Impact Investment Opportunity</h1>
                    <p className="text-xl text-gray-600">
                        Partner with us to build the infrastructure of trust in Ethiopia.
                    </p>
                </div>

                {/* Overview Infographic */}
                <div className="mb-16">
                    <img
                        src={investorOverview}
                        alt="EthioTrustScore Investment Overview"
                        className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
                    />
                </div>

                {/* Financials & Revenue */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

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
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Implementation Plan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <RoadmapCard
                            phase="Phase 1 (Year 1)"
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
                    </div>
                </div>

                {/* Risks (Mitigation) */}
                {/* <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-ethio-yellow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <AlertTriangle className="text-ethio-yellow mr-3" /> Key Risks & Mitigation
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-2">Data Sharing Reluctance</h3>
                            <p className="text-gray-600">
                                Utilizing NBE mandates and offering incentives for data providers to ensure comprehensive reporting.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Privacy & Security</h3>
                            <p className="text-gray-600">
                                Robust cybersecurity measures and alignment with international standards (IFC/World Bank).
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Competition</h3>
                            <p className="text-gray-600">
                                Leveraging first-mover advantage to dominate the market before other entrants.
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* <div className="mt-16 text-center">
                    <Link to="/contact" className="bg-ethio-yellow text-gray-900 font-bold text-lg py-4 px-10 rounded-full hover:bg-yellow-400 transition-colors shadow-lg">
                        Invest Now
                    </Link>
                </div> */}

            </div>
        </div>
    );
};

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

export default Investors;
