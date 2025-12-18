import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-ethio-green mb-4">Join the Financial Revolution</h1>
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
                                    <p className="text-gray-600">Financial District, Bole Road<br />Addis Ababa, Ethiopia</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="text-ethio-green w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900">Email Us</h3>
                                    <p className="text-gray-600">partnerships@ethiotrustscore.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="text-ethio-green w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900">Call Us</h3>
                                    <p className="text-gray-600">+251 11 123 4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-ethio-yellow">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethio-green focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethio-green focus:border-transparent outline-none transition-all"
                                    placeholder="Company Name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Interest</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethio-green focus:border-transparent outline-none transition-all bg-white">
                                    <option>Investor</option>
                                    <option>Data Provider</option>
                                    <option>Bank / Financial Institution</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethio-green focus:border-transparent outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-ethio-yellow text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;
