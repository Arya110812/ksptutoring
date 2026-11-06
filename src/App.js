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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <span className="text-2xl font-black text-blue-600 tracking-tight">KSP<span className="text-gray-900">Tutoring</span></span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <button onClick={() => setCurrentPage('home')} className={`hover:text-blue-600 transition ${currentPage === 'home' ? 'text-blue-600 font-semibold' : ''}`}>Home</button>
          <button onClick={() => setCurrentPage('about')} className={`hover:text-blue-600 transition ${currentPage === 'about' ? 'text-blue-600 font-semibold' : ''}`}>About Us</button>
          <button onClick={() => setCurrentPage('programs')} className={`hover:text-blue-600 transition ${currentPage === 'programs' ? 'text-blue-600 font-semibold' : ''}`}>Program Plans</button>
          <button onClick={() => setCurrentPage('testimonials')} className={`hover:text-blue-600 transition ${currentPage === 'testimonials' ? 'text-blue-600 font-semibold' : ''}`}>Testimonials</button>
          <button onClick={() => setCurrentPage('contact')} className={`hover:text-blue-600 transition ${currentPage === 'contact' ? 'text-blue-600 font-semibold' : ''}`}>Contact Us</button>
        </div>

        <div className="hidden md:block">
          <button onClick={() => setCurrentPage('contact')} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm">
            Book Now
          </button>
        </div>

        <button className="md:hidden text-gray-700 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 p-6 flex flex-col space-y-6 animate-fade-in">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-black text-blue-600 tracking-tight">KSP<span className="text-gray-900">Tutoring</span></span>
            <button className="text-gray-700 p-2" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="flex flex-col space-y-4 text-lg font-medium text-gray-800">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-gray-100">Home</button>
            <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-gray-100">About Us</button>
            <button onClick={() => { setCurrentPage('programs'); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-gray-100">Program Plans</button>
            <button onClick={() => { setCurrentPage('testimonials'); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-gray-100">Testimonials</button>
            <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-gray-100">Contact Us</button>
          </div>
          <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-md">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="bg-[#0b1329] text-white py-16 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500 tracking-tight">KSP<span className="text-white">Tutoring</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Guiding 6th-10th grade students toward academic success through personalized, peer-to-peer tutoring.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center"><Mail className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" /> ksptutoring1@gmail.com</li>
            <li className="flex items-center"><Phone className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" /> 510-775-1374</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2.5 text-gray-400 text-sm">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition">Home</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition">About Us</button></li>
            <li><button onClick={() => setCurrentPage('programs')} className="hover:text-white transition">Program Plans</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition">Book a Consultation</button></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
        <p>© 2026 KSP Tutoring. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Nav />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div>
            <section className="py-24 px-6 text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900">
                Take Control of Your <span className="text-blue-600">Academic Journey</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Master Math, English, History, Science, and more with personalized, one-on-one support tailored for middle and early high school students.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => setCurrentPage('contact')} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-md">
                  Schedule a consultation
                </button>
                <button onClick={() => setCurrentPage('about')} className="bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition">
                  Learn More
                </button>
              </div>
            </section>

            <section className="py-20 px-6 max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose KSP Tutoring?</h2>
                <p className="text-gray-600">We go beyond simple homework help to build lifelong academic skills.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Structured Materials</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our curriculum is designed to identify and target weak points. We use comprehensive pre-exams and customized worksheets so students master concepts systematically.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                    <Calculator className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Quantitative Confidence</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Math can be intimidating. Our unique peer-to-peer approach breaks down complex equations into intuitive, bite-sized lessons that click with young minds.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                    <Globe className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Holistic Success</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We don't just teach the subject; we teach the student how to learn. From study habits to time management, we prepare them for the rigors of high school.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-20 px-6 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized for Grades 6-10</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The transition from middle school to early high school is a critical period in a student's academic development. The workload increases, the concepts become abstract, and grades start to heavily impact future opportunities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                At KSP Tutoring, we specialize exclusively in this age group. By focusing on grades 6 through 10, we provide highly targeted, relevant, and empathetic support that directly addresses the developmental and academic milestones of these crucial years.
              </p>
            </section>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="max-w-4xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">About KSP Tutoring</h1>
            <p className="text-center text-gray-600 mb-16 text-lg">Dedicated to transforming academic frustration into unwavering confidence through relatable, expert peer mentoring.</p>
            
            <div className="space-y-12">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Founded by Arya Shah, KSP Tutoring is driven by a deep passion for peer mentoring and academic excellence. As an honors student, Arya understands the modern curriculum inside and out, knowing exactly where students typically get stuck and how to guide them through it.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Arya brings hands-on experience in curriculum support, having created highly structured practice materials and having comprehensive curriculum designed for all students.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  This methodical approach ensures that foundational concepts are fully grasped before moving on to complex problems. By connecting with students in grades 6-10 on a peer-to-peer level, we bridge the gap between confusion and confidence, empowering students to succeed in their core classes and build strong skills for high school and beyond.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our mission is to democratize high-quality academic support by offering accessible, relatable, and highly effective tutoring. We believe that every student has the potential to excel when given the right tools, the right environment, and a mentor who truly understands their struggles.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    We strive to turn academic anxiety into achievement, equipping our students not just with answers, but with the problem-solving skills they need to navigate their educational journey independently.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Philosophy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We operate on the principle that learning should never be intimidating. Traditional tutoring often involves an adult lecturing a child, which can inadvertently increase pressure. Our peer-to-peer model flips this dynamic.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    By learning from someone who recently navigated the exact same curriculum, students feel more comfortable asking questions and admitting confusion. We focus heavily on formative assessment—using pre-exams to identify gaps—so that every minute of our tutoring sessions is spent efficiently.
                  </p>
                </div>
              </div>

              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Start your journey with us today</h3>
                <button onClick={() => setCurrentPage('contact')} className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition shadow-md">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'programs' && (
          <div className="max-w-6xl mx-auto py-20 px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-2 block">Curriculum</span>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Program Plans</h1>
              <p className="text-gray-600 text-lg mb-8">Focused, intensive tutoring for grades 6-10 designed to build strong study habits, master core classes, and eliminate academic anxiety.</p>
              
              <div className="bg-blue-50 border border-blue-100 p-8 rounded-2xl inline-block max-w-md w-full shadow-sm">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Simple, Transparent Pricing</span>
                <div className="text-4xl font-black text-gray-900 mb-2">$25 <span className="text-lg font-medium text-gray-600">per class</span></div>
                <p className="text-sm text-gray-600">Includes all custom practice materials, pre-exams, and progress tracking.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <Calculator className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Mathematics</h3>
                <p className="text-gray-600 text-sm mb-6">Specialized focus on Pre-Algebra, Algebra 1, Geometry, and Pre-Calculus. We use structured practice and pre-exams to build quantitative confidence.</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Pre-Algebra:</strong> Mastering fractions, decimals, basic equations, and foundational logic.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Algebra 1:</strong> Linear equations, polynomials, factoring, and graphing techniques.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Geometry:</strong> Proofs, spatial reasoning, theorems, and area/volume calculations.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Pre-Calculus:</strong> Advanced functions, trigonometry, and preparation for rigorous high school math.</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">English & Literature</h3>
                <p className="text-gray-600 text-sm mb-6">Improve reading comprehension, essay writing skills, and grammar to build confidence in communication and literary analysis.</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Essay Structure:</strong> Mastering the 5-paragraph format, thesis generation, and transitions.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Reading Comprehension:</strong> Active reading strategies for complex middle and high school texts.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Grammar & Syntax:</strong> Eradicating common errors to produce polished, professional writing.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Literary Analysis:</strong> Understanding themes, motifs, and character development in assigned reading.</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <FlaskConical className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Science</h3>
                <p className="text-gray-600 text-sm mb-6">Making Earth, Life, and Physical sciences approachable by breaking down complex systems into understandable, relatable concepts.</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Earth Science:</strong> Geology, meteorology, and understanding planetary systems.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Life Science/Biology:</strong> Cellular structures, genetics, ecosystems, and human anatomy basics.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Physical Science/Intro Chemistry:</strong> Atomic structure, forces, motion, and energy transfer.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Lab Reports:</strong> Structured assistance with scientific method execution and formal write-ups.</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <Globe className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">History & Social Studies</h3>
                <p className="text-gray-600 text-sm mb-6">Develop critical thinking and historical context through engaging reviews of world history, US history, and global geography.</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>U.S. History:</strong> Deep dives into constitutional foundations, major eras, and historical figures.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>World History:</strong> Connecting ancient civilizations to modern global dynamics.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>Geography:</strong> Map reading, cultural understanding, and geopolitical basics.</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> <strong>DBQ Prep:</strong> Document-Based Question training for advanced middle school and high school readiness.</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 md:col-span-2">
                <Languages className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Spanish</h3>
                <p className="text-gray-600 text-sm mb-6">Specialized focus on Spanish 1 and Spanish 2 Honors.</p>
                <ul className="space-y-3 text-gray-700 text-sm grid md:grid-cols-2">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Vocabulary building and retention</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Grammar, conjugation, and sentence structure</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /> Reading and writing comprehension</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'testimonials' && (
          <div className="max-w-4xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">What Parents Say</h1>
            <p className="text-center text-gray-600 mb-16 text-lg">Don't just take our word for it. Read these detailed accounts from families who have experienced the KSP Tutoring difference firsthand.</p>
            
            <div className="space-y-10">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "My 8th grader was struggling immensely with Algebra 1. Since starting with KSP Tutoring, not only has his grade jumped from a C to an A, but his overall confidence has soared. Arya's structured practice materials are a complete game-changer. Instead of dreading homework time, my son now sits down with his worksheets knowing exactly what to do. The pre-exams helped pinpoint the exact areas he was failing to grasp, and they tackled them head-on. We are incredibly grateful for the patience and expertise provided."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center">M</div>
                  <div>
                    <div className="font-bold text-gray-900">Maria T.</div>
                    <div className="text-sm text-gray-500">Parent of an 8th Grader</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "Finding a tutor who can genuinely connect with a middle schooler isn't easy, but KSP Tutoring exceeded every expectation we had. The peer-to-peer approach works absolute wonders. Traditional tutors always felt too intimidating for my daughter, but learning from an honors student made the material feel accessible.<br/><br/>She now actually looks forward to her English and History sessions. Her writing has become significantly more structured, and her teachers have noted a massive improvement in her reading comprehension."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center">D</div>
                  <div>
                    <div className="font-bold text-gray-900">David L.</div>
                    <div className="text-sm text-gray-500">Parent of a 7th Grader</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "The transition into 9th grade science and Pre-Calculus was brutally tough for our son. He felt overwhelmed by the pace of the curriculum. KSP Tutoring stepped in and completely broke down the curriculum into manageable, bite-sized pieces.<br/><br/>We've seen a complete turnaround in his study habits. He no longer crams the night before; instead, he uses the structured practice methods taught during his tutoring sessions. His grades reflect this new maturity. Highly, highly recommended to any parent whose child is struggling with the high school transition!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center">S</div>
                  <div>
                    <div className="font-bold text-gray-900">Sarah W.</div>
                    <div className="text-sm text-gray-500">Parent of a 9th Grader</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "What impressed me most about KSP Tutoring wasn't just the affordable $25 rate—though that is incredibly helpful for our family budget—but the sheer professionalism and preparation brought to every single session.<br/><br/>My 6th grader needed help with foundational math and Earth Science. The custom curriculum designed for her was spot on. The tutor was incredibly patient, explaining complex planetary systems and fractions in ways that finally made sense to her. She went from failing quizzes to bringing home consistent A's in just one semester."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center">J</div>
                  <div>
                    <div className="font-bold text-gray-900">James P.</div>
                    <div className="text-sm text-gray-500">Parent of a 6th Grader</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="max-w-5xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Get in Touch</h1>
            <p className="text-center text-gray-600 mb-16 text-lg max-w-xl mx-auto">Ready to boost your student's confidence? Contact us today to set up your initial assessment and personalized academic plan.</p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <a href="mailto:ksptutoring1@gmail.com" className="text-blue-600 hover:underline">ksptutoring1@gmail.com</a>
                    <p className="text-xs text-gray-500 mt-1">We aim to respond to all inquiries within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Call Us</h3>
                    <a href="tel:5107751374" className="text-blue-600 hover:underline">510-775-1374</a>
                    <p className="text-xs text-gray-500 mt-1">Available Monday to Friday, 3 PM - 8 PM.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">Thank you for reaching out. We will get back to you shortly.</p>
                    <button onClick={() => setSubmitStatus(null)} className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Parent Name</label>
                      <input type="text" name="parent_name" required placeholder="Jane Doe" className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Student Name</label>
                      <input type="text" name="student_name" required placeholder="John Doe" className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Student Grade</label>
                        <select name="grade" defaultValue="" required className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                          <option value="" disabled>Select Grade</option>
                          <option value="6th Grade">6th Grade</option>
                          <option value="7th Grade">7th Grade</option>
                          <option value="8th Grade">8th Grade</option>
                          <option value="9th Grade">9th Grade</option>
                          <option value="10th Grade">10th Grade</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Subject Needed</label>
                        <select name="subject" defaultValue="" required className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                          <option value="" disabled>Select Subject</option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="English">English & Literature</option>
                          <option value="Science">Science</option>
                          <option value="History">History & Social Studies</option>
                          <option value="Spanish">Spanish</option>
                          <option value="Multiple">Multiple Subjects</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                      <input type="email" name="email" required placeholder="jane@example.com" className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Message / Additional Details</label>
                      <textarea name="message" rows="3" required placeholder="Tell us a little bit about what your student is struggling with..." className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition shadow-md disabled:opacity-50">
                      {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}