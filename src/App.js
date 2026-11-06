import React, { useState } from 'react';
import { 
  BookOpen, Calculator, Globe, FlaskConical, Languages, 
  CheckCircle, GraduationCap, Target, Users, ArrowRight, 
  Mail, Phone, Star, Menu, X 
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">KSP</div>
          <span className="text-2xl font-extrabold text-blue-900 tracking-tight">KSP Tutoring</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <button onClick={() => setCurrentPage('home')} className={`hover:text-blue-600 transition ${currentPage === 'home' ? 'text-blue-600 font-bold' : ''}`}>Home</button>
          <button onClick={() => setCurrentPage('about')} className={`hover:text-blue-600 transition ${currentPage === 'about' ? 'text-blue-600 font-bold' : ''}`}>About Us</button>
          <button onClick={() => setCurrentPage('programs')} className={`hover:text-blue-600 transition ${currentPage === 'programs' ? 'text-blue-600 font-bold' : ''}`}>Program Plans</button>
          <button onClick={() => setCurrentPage('testimonials')} className={`hover:text-blue-600 transition ${currentPage === 'testimonials' ? 'text-blue-600 font-bold' : ''}`}>Testimonials</button>
          <button onClick={() => setCurrentPage('contact')} className={`hover:text-blue-600 transition ${currentPage === 'contact' ? 'text-blue-600 font-bold' : ''}`}>Contact Us</button>
        </div>

        <div className="hidden md:block">
          <button onClick={() => setCurrentPage('contact')} className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm">
            Book a Class ($25)
          </button>
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-3">
          <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium text-gray-700">Home</button>
          <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium text-gray-700">About Us</button>
          <button onClick={() => { setCurrentPage('programs'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium text-gray-700">Program Plans</button>
          <button onClick={() => { setCurrentPage('testimonials'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium text-gray-700">Testimonials</button>
          <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium text-gray-700">Contact Us</button>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">KSP Tutoring</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering students in grades 6-10 with expert peer tutoring, structured practice modules, and comprehensive academic support.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition">Home</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition">About Founder</button></li>
            <li><button onClick={() => setCurrentPage('programs')} className="hover:text-white transition">Subjects & Pricing ($25/class)</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition">Schedule Consultation</button></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
          <p className="text-gray-400 text-sm flex items-center mb-2"><Mail className="w-4 h-4 mr-2 text-blue-400" /> ksptutoring1@gmail.com</p>
          <p className="text-gray-400 text-sm flex items-center"><Phone className="w-4 h-4 mr-2 text-blue-400" /> 510-775-1374</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © 2026 KSP Tutoring. All Rights Reserved. Founded by Arya Shah.
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      <Nav />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div>
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 px-4 text-center relative overflow-hidden">
              <div className="max-w-4xl mx-auto relative z-10">
                <span className="bg-blue-700/60 text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 inline-block">
                  Specialized Peer Tutoring for Grades 6–10
                </span>
                <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                  Transforming Academic Potential Into Consistent Success
                </h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Rigorous honors-level instruction, custom pre-exams, and targeted practice modules designed specifically to help middle and early high school students thrive.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={() => setCurrentPage('contact')} className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg flex items-center justify-center">
                    Book a Session ($25) <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button onClick={() => setCurrentPage('programs')} className="bg-blue-700/50 border border-blue-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition">
                    Explore Programs
                  </button>
                </div>
              </div>
            </section>

            <section className="py-20 px-4 max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">The KSP Advantage</h2>
                <p className="text-gray-600">Built by a high-achieving student scholar who understands the exact pain points and curriculum standards of modern middle and high school classes.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Honors-Level Mastery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Benefit from advanced coursework insights in Mathematics, Spanish Honors, Science, and Humanities tailored precisely to grade 6-10 requirements.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Structured Pre-Exams</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We eliminate test anxiety through custom practice modules, diagnostic pre-exams, and systematic problem-solving drills that guarantee test readiness.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Relatable Peer Mentoring</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Students connect easier and engage deeper in an encouraging peer environment that fosters open questioning and genuine conceptual understanding.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Simple, Transparent Pricing</h2>
                <p className="text-gray-700 text-lg mb-8">
                  High-quality academic support shouldn't break the bank. Every class is structured for maximum efficiency and conceptual mastery.
                </p>
                <div className="bg-white inline-block px-10 py-8 rounded-2xl shadow-sm border border-blue-100 mb-8">
                  <span className="text-gray-500 block text-sm font-semibold uppercase tracking-wider mb-2">Flat Rate</span>
                  <span className="text-5xl font-extrabold text-blue-900">$25</span>
                  <span className="text-gray-600 block text-sm mt-1">per class session</span>
                </div>
                <div>
                  <button onClick={() => setCurrentPage('contact')} className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition shadow-md">
                    Schedule Your First Session
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="max-w-4xl mx-auto py-20 px-4">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-4 text-center">About KSP Tutoring</h1>
            <p className="text-center text-gray-600 mb-16 text-lg">Dedicated to unlocking every student's full academic capability.</p>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Meet the Founder</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                KSP Tutoring was founded by <strong className="text-blue-900">Arya Shah</strong>, a dedicated honors student with a passion for peer education. Arya brings hands-on experience in curriculum support, having created highly structured practice materials, comprehensive study guides, and diagnostic pre-exams designed to build rigorous academic confidence.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Specializing in Pre-Algebra, Algebra 1, Geometry, Pre-Calculus, Spanish Honors, and core STEM/Humanities subjects, Arya understands the unique academic transition students face between middle school and high school.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Our Core Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide accessible, high-caliber peer tutoring that turns classroom frustration into genuine academic achievement, equipping students in grades 6-10 with lifelong study habits.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">The Teaching Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  We emphasize structured practice, targeted pre-exams, and error analysis. Rather than just memorizing formulas, students learn the foundational "why" behind every concept.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'programs' && (
          <div className="max-w-6xl mx-auto py-20 px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Program Plans & Subjects</h1>
              <p className="text-gray-600 text-lg mb-6">Comprehensive academic tutoring tailored for students in grades 6 through 10.</p>
              <div className="inline-block bg-blue-600 text-white font-extrabold px-8 py-3 rounded-full text-2xl shadow-md">
                Flat Rate: $25 Per Class
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-blue-600">
                <Calculator className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Mathematics</h3>
                <p className="text-gray-600 text-sm mb-6">Building rock-solid quantitative reasoning and problem-solving agility.</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Pre-Algebra</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Algebra 1</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Geometry</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Pre-Calculus</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-blue-600">
                <Languages className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Spanish</h3>
                <p className="text-gray-600 text-sm mb-6">Mastering vocabulary, grammatical structures, and conversational fluency.</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Spanish 1 Honors Support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Spanish 2 Honors Support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Conjugation & Verb Drills</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Speaking & Comprehension</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-blue-600">
                <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">English</h3>
                <p className="text-gray-600 text-sm mb-6">Sharpening reading analysis, persuasive writing, and grammatical clarity.</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Reading Comprehension</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Essay Structure & Editing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Literary Analysis</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-blue-600">
                <Globe className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">History</h3>
                <p className="text-gray-600 text-sm mb-6">Developing historical perspective, document analysis, and essay frameworks.</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> World History</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> US History</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Source Evaluation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-blue-600 md:col-span-2">
                <FlaskConical className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Science</h3>
                <p className="text-gray-600 text-sm mb-6">Unlocking core scientific principles and rigorous lab report techniques.</p>
                <ul className="space-y-3 text-gray-700 text-sm grid md:grid-cols-2">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Earth Science</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Biology</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Scientific Method & Labs</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Exam Preparation</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'testimonials' && (
          <div className="max-w-4xl mx-auto py-20 px-4">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-4 text-center">Success Stories</h1>
            <p className="text-center text-gray-600 mb-16 text-lg">Hear from parents whose students transformed their academic journey.</p>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "Since starting with KSP Tutoring, not only has his grade jumped from a C to an A, but his entire attitude towards math has changed. The pre-exams provided were exactly what he needed to build his confidence before tests."
                </p>
                <div className="font-bold text-blue-900">— Parent of 8th Grade Student</div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "She went from failing quizzes to bringing home consistent A's in just one semester. The peer-to-peer approach made her feel so much more comfortable asking questions without feeling intimidated."
                </p>
                <div className="font-bold text-blue-900">— Parent of 9th Grade Student</div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="max-w-3xl mx-auto py-20 px-4">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-4 text-center">Schedule a Consultation</h1>
            <p className="text-center text-gray-600 mb-12">Fill out the form below and we will get back to you promptly at <strong className="text-blue-900">ksptutoring1@gmail.com</strong>.</p>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Sent Successfully!</h2>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. We have received your message and will respond shortly.</p>
                  <button onClick={() => setSubmitStatus(null)} className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Student Name</label>
                      <input type="text" name="student_name" required placeholder="e.g., Alex Smith" className="w-full p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Parent Name</label>
                      <input type="text" name="parent_name" required placeholder="e.g., Sarah Smith" className="w-full p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                      <input type="email" name="email" required placeholder="name@example.com" className="w-full p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Grade Level</label>
                      <select name="grade" defaultValue="" required className="w-full p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white">
                        <option value="" disabled>Select Student Grade</option>
                        <option value="6">6th Grade</option>
                        <option value="7">7th Grade</option>
                        <option value="8">8th Grade</option>
                        <option value="9">9th Grade</option>
                        <option value="10">10th Grade</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject of Interest</label>
                    <select name="subject" defaultValue="" required className="w-full p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white">
                      <option value="" disabled>Select Subject Area</option>
                      <option value="math">Mathematics (Pre-Algebra through Pre-Calculus)</option>
                      <option value="spanish">Spanish (1 & 2 Honors)</option>
                      <option value="english">English</option>
                      <option value="science">Science</option>
                      <option value="history">History</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message or Specific Goals</label>
                    <textarea name="message" rows="4" required placeholder="Tell us about what concepts or classes you'd like support with..." className="w-full p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"></textarea>
                  </div>

                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-sm font-medium">Something went wrong sending your message. Please email ksptutoring1@gmail.com directly.</p>
                  )}

                  <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-md disabled:opacity-50">
                    {isSubmitting ? 'Sending Message...' : 'Submit Inquiry ($25 / Class)'}
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