import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
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
    );
};

export default Contact;
