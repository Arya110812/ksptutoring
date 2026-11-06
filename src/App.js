import React, { useState } from 'react';
import { BookOpen, Calculator, Globe, FlaskConical, Languages, CheckCircle, GraduationCap, Target, Users } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    formData.append("access_key", "0393fcbe-23b5-4692-b799-1567438daf05");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  const Nav = () => (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900 cursor-pointer" onClick={() => setCurrentPage('home')}>KSP Tutoring</h1>
        <div className="space-x-6 text-gray-700 hidden md:flex">
          <button onClick={() => setCurrentPage('home')} className="hover:text-blue-600 font-medium">Home</button>
          <button onClick={() => setCurrentPage('about')} className="hover:text-blue-600 font-medium">About Us</button>
          <button onClick={() => setCurrentPage('programs')} className="hover:text-blue-600 font-medium">Program Plans</button>
          <button onClick={() => setCurrentPage('testimonials')} className="hover:text-blue-600 font-medium">Testimonials</button>
          <button onClick={() => setCurrentPage('contact')} className="hover:text-blue-600 font-medium">Contact Us</button>
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-8 text-center mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-bold mb-4">KSP Tutoring</h3>
        <p>Email: ksptutoring1@gmail.com | Phone: 510-775-1374</p>
        <p className="mt-4 text-gray-400 text-sm">© 2026 KSP Tutoring. All Rights Reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Nav />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            <section className="bg-blue-50 py-24 text-center px-4">
              <h1 className="text-5xl font-extrabold text-blue-900 mb-6">Empowering Grades 6-10 to Succeed</h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">Specialized peer-to-peer tutoring in Math, English, History, Science, and Spanish.</p>
              <button onClick={() => setCurrentPage('contact')} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition">Schedule a Consultation</button>
            </section>
            
            <section className="py-20 px-4 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose KSP?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Honors Experience</h3>
                  <p className="text-gray-600">Guidance from a student who has mastered honors-level coursework and understands the curriculum.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Targeted Practice</h3>
                  <p className="text-gray-600">We use structured practice and pre-exams to build quantitative confidence before test day.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Peer Connection</h3>
                  <p className="text-gray-600">Relatable mentoring that reduces stress and makes learning an engaging experience.</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="max-w-4xl mx-auto py-20 px-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">About Us</h1>
            
            <div className="bg-white rounded-2xl shadow-sm p-10 mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Meet Our Founder, Arya Shah</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Arya brings hands-on experience in curriculum support, having created highly structured practice materials and comprehensive curriculum designed for all students. With a specialized focus on Pre-Algebra, Algebra 1, Geometry, and Pre-Calculus, Arya understands what it takes to excel. We use structured practice and pre-exams to build quantitative confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-bold text-blue-800 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To provide accessible, high-quality peer tutoring that transforms academic anxiety into achievement for middle and early high school students.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-bold text-blue-800 mb-4">Educational Philosophy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We believe that consistent, structured practice combined with relatable guidance is the key to unlocking a student's full potential.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'programs' && (
          <div className="max-w-6xl mx-auto py-20 px-4 animate-fade-in">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-blue-900 mb-4">Program Plans</h1>
              <div className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-2xl font-extrabold shadow-sm">
                Each Class is $25
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-600">
                <Calculator className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Mathematics</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Pre-Algebra</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Algebra 1</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Geometry</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Pre-Calculus</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-600">
                <Languages className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Spanish</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Spanish 1 Honors Support</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Spanish 2 Honors Support</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Vocabulary Building</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Grammar & Conversation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-600">
                <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">English</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Reading Comprehension</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Essay Writing</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Grammar & Syntax</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-600">
                <Globe className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">History</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> World History</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> US History</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Document Analysis</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-blue-600 lg:col-span-2">
                <FlaskConical className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Science</h3>
                <ul className="space-y-3 text-gray-700 grid md:grid-cols-2">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Earth Science</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Biology</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Lab Report Assistance</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'testimonials' && (
          <div className="max-w-4xl mx-auto py-20 px-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">Success Stories</h1>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <p className="text-gray-700 text-lg italic mb-4">"Since starting with KSP Tutoring, not only has his grade jumped from a C to an A, but his entire attitude towards math has changed. The pre-exams provided were exactly what he needed."</p>
                <p className="font-bold text-blue-900">- Parent of 8th Grade Student</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <p className="text-gray-700 text-lg italic mb-4">"She went from failing quizzes to bringing home consistent A's in just one semester. The peer-to-peer approach made her feel so much more comfortable asking questions."</p>
                <p className="font-bold text-blue-900">- Parent of 9th Grade Student</p>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="max-w-3xl mx-auto py-20 px-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Schedule a Consultation</h1>
            <div className="bg-white p-10 rounded-2xl shadow-sm">
              {submitStatus === 'success' ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-800">Message Sent!</h2>
                  <p className="text-gray-600 mt-2">We will get back to you shortly.</p>
                  <button onClick={() => setSubmitStatus(null)} className="mt-6 text-blue-600 underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Student Name</label>
                      <input type="text" name="student_name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Parent Name</label>
                      <input type="text" name="parent_name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input type="email" name="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Grade Level</label>
                      <select name="grade" defaultValue="" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="" disabled>Select Grade</option>
                        <option value="6">6th Grade</option>
                        <option value="7">7th Grade</option>
                        <option value="8">8th Grade</option>
                        <option value="9">9th Grade</option>
                        <option value="10">10th Grade</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject of Interest</label>
                    <select name="subject" defaultValue="" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="" disabled>Select Subject</option>
                      <option value="math">Mathematics (Pre-Algebra to Pre-Calc)</option>
                      <option value="spanish">Spanish (1 & 2 Honors)</option>
                      <option value="english">English</option>
                      <option value="science">Science</option>
                      <option value="history">History</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea name="message" rows="4" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50">
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}