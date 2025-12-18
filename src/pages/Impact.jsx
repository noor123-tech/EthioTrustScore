import { TrendingUp, Users, ShieldCheck, Flag } from 'lucide-react';

const Impact = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-16 text-center">
                <h1 className="text-4xl font-bold text-ethio-green mb-4">Driving Economic Transformation</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
                    Unlocking potential and accelerating growth for Ethiopia.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Economic Impact Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="text-center p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
                        <div className="inline-flex p-4 rounded-full bg-green-100 text-ethio-green mb-4">
                            <TrendingUp size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">$100-200 B</h3>
                        <p className="text-gray-500">Potential addition to nominal GDP by 2035</p>
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
                        <p className="text-gray-500">Reduction in defaults (benchmarked vs Kenya/SA)</p>
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
    );
};

export default Impact;
