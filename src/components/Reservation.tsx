import { useState, FormEvent } from 'react';
import { Calendar, Send } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    numberOfPeople: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://hook.eu2.make.com/zvqhh525s8d7wfy6d77dhy5bb42dgt5t', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          numberOfPeople: '',
          date: '',
          time: '',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Failed to submit. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservation" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-8">
          <Calendar className="text-[#E85C0D] mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233]">Reserve Your Table</h2>
        </div>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Planning to visit or want to pre-order? Fill out the form below and we'll reach out to you soon.
        </p>

        {submitSuccess && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8 rounded">
            <p className="font-semibold">✓ Thank you! Your enquiry has been received. We'll contact you shortly.</p>
          </div>
        )}

        {submitError && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded">
            <p>{submitError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[#2F5233] font-semibold mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E85C0D] focus:outline-none transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-[#2F5233] font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E85C0D] focus:outline-none transition"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#2F5233] font-semibold mb-2">Email (Optional)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E85C0D] focus:outline-none transition"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-[#2F5233] font-semibold mb-2">Number of People *</label>
              <select
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E85C0D] focus:outline-none transition"
              >
                <option value="">Select</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#2F5233] font-semibold mb-2">Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E85C0D] focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-[#2F5233] font-semibold mb-2">Time *</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E85C0D] focus:outline-none transition"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#2F5233] font-semibold mb-2">Message / Special Request</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#E85C0D] focus:outline-none transition resize-none"
              placeholder="Any dietary preferences or special requests?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#E85C0D] hover:bg-[#d14d00] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : (
              <>
                <Send className="mr-2" size={20} />
                Send Enquiry
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
