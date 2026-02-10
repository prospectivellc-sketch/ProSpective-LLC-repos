
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Star,
  Users,
  ExternalLink,
  ShoppingBag,
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Eye,
  Target,
  Compass,
  GraduationCap,
  Award,
  Layers,
  Send,
  Scale,
  Lock
} from 'lucide-react';
import { SERVICES, CERTIFICATES, getIcon, BUSINESS_LOGO, TECH_SECTION_BG, FINANCE_BG, AUTOCAD_BG, AMAZON_PRODUCTS, EXPERTISE_BG, FOCUS_VIDEO_URL } from './constants';
import { Service, Product } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentView, setCurrentView] = useState<'home' | 'for-sale' | 'vision-mission' | 'credentials' | 'pillars' | 'inquiry-gateway' | 'privacy-terms'>('home');

  const categories = ['All', ...Array.from(new Set(SERVICES.map(s => s.category)))];
  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section id="about" className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-16 lg:mb-0">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
                <ShieldCheck size={16} />
                <span>Precision Meets Creativity</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                A Professional <span className="text-blue-900">Perspective</span> on Science, Art & Finance.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-4xl">
                Founded by Lathanza Williams, ProSpective LLC is a five-pillar foundation birthed to bring talent and skillset diversity together under one roof. Our mission is to deliver unparalleled excellence across a diverse spectrum of services.
              </p>

              <div className="mt-3 flex items-center space-x-8 border-t border-gray-100 pt-2">
                <div>
                  <div className="text-3xl font-bold text-blue-900">5</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Service Pillars</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">20+</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Years Exp.</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <img key={i} src={`https://picsum.photos/seed/${i*20}/40/40`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Client" />
                   ))}
                   <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-900">+More</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] rotate-3 blur-sm"></div>
              <div className="relative bg-white p-6 rounded-[2rem] shadow-2xl overflow-hidden">
                <img 
                  src="https://pictures.alignable.com/eyJidWNrZXQiOiJhbGlnbmFibGV3ZWItcHJvZHVjdGlvbiIsImtleSI6ImJ1c2luZXNzZXMvYmFubmVycy9vcmlnaW5hbC8xMzU2NDkzNC9Qcm9TcGVjdGl2ZUxMQyBwaWMgYmFubmVyLnBuZyIsImVkaXRzIjp7ImV4dHJhY3QiOnsibGVmdCI6MCwidG9wIjowLCJ3aWR0aCI6MTEyMCwiaGVpZ2h0IjozMDR9LCJyZXNpemUiOnsid2lkdGgiOjExMjAsImhlaWdodCI6MzA0fSwiZXh0ZW5kIjp7InRvcCI6MCwiYm90dG9tIjowLCJsZWZ0IjowLCJyaWdodCI6MCwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=" 
                  className="w-full h-[375px] object-cover rounded-2xl" 
                  alt="Founder Lathanza Williams / ProSpective Workspace"
                />
                <div className="absolute bottom-9 left-10 right-10 bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50">
                  <div className="flex items-center mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} className="text-yellow-400 fill-current w-5 h-4 mr-1" />)}
                  </div>
                  <p className="text-gray-800 italic font-medium mb-1 text-lg">
                    "Join us on a journey where precision meets creativity, and where every service offered is a testament to our unwavering dedication to quality."
                  </p>
                  <div className="flex items-center">
                    <div className="w-24 h-24 rounded-3xl bg-blue-900 text-white flex items-center justify-center font-bold text-xl mr-6 shadow-xl overflow-hidden border-4 border-white">
                      <img src={BUSINESS_LOGO} className="w-full h-full object-contain p-1 bg-white" alt="Founder Logo" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-2xl tracking-tight italic">Lathanza Williams</div>
                      <div className="text-blue-900 font-bold text-sm uppercase tracking-widest mt-1">Founder & Owner, ProSpective LLC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview on Home with Background Video */}
      <section id="services-anchor" className="relative py-32 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <video 
            src={FOCUS_VIDEO_URL} 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
          />
          <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 uppercase tracking-tight italic leading-tight">Our Multidisciplinary Focus</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-xl text-gray-800 font-bold italic">Explore the diverse core disciplines that form the foundation of ProSpective LLC</p>
              <div className="flex flex-wrap justify-center gap-4 text-blue-900 font-black uppercase tracking-widest text-lg">
                <span>Technical</span>
                <span className="text-orange-500">•</span>
                <span>Multimedia</span>
                <span className="text-orange-500">•</span>
                <span>Design</span>
                <span className="text-orange-500">•</span>
                <span>Financial</span>
                <span className="text-orange-500">•</span>
                <span>E-Commerce</span>
              </div>
              <p className="text-xl text-gray-700 font-medium leading-relaxed italic">
                So whether you need a process map, a business presentation, a floorplan layout, to get your TAXES done, or purchase a gift for a loved one, we have got you covered! Click below...
              </p>
            </div>
            <button 
                onClick={() => { setCurrentView('pillars'); window.scrollTo(0, 0); }}
                className="mt-12 inline-flex items-center px-12 py-6 bg-blue-900 text-white rounded-2xl font-black text-xl shadow-2xl hover:bg-blue-800 hover:scale-105 transition-all uppercase tracking-widest italic border-4 border-white/20"
            >
                View The Five Pillars
                <ArrowRight className="ml-4" size={28} />
            </button>
        </div>
      </section>

      {/* Credentials Anchor Preview with Background Image */}
      <section id="credentials-anchor" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={EXPERTISE_BG} className="w-full h-full object-cover" alt="Expertise Background" />
          <div className="absolute inset-0 bg-blue-900/90 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight italic">Verified Expertise</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium italic">Explore our full list of professional certifications and academic credentials that power our technical foundation.</p>
            <button 
                onClick={() => { setCurrentView('credentials'); window.scrollTo(0, 0); }}
                className="inline-flex items-center px-10 py-5 bg-white text-blue-900 rounded-2xl font-black shadow-xl hover:bg-blue-50 transition-all uppercase tracking-widest italic"
            >
                View Full Credentials
                <ArrowRight className="ml-3" size={20} />
            </button>
        </div>
      </section>

      {/* Contact Section Preview with Watermark Logo */}
      <section id="contact-anchor" className="relative py-32 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
            <img src={BUSINESS_LOGO} className="w-[800px] h-[800px] object-contain rotate-12" alt="Watermark" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 uppercase tracking-tight italic leading-tight">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-medium">Ready to start your next project? Securing a professional perspective starts with a conversation.</p>
          <button 
            onClick={() => { setCurrentView('inquiry-gateway'); window.scrollTo(0, 0); }}
            className="inline-flex items-center px-12 py-6 bg-orange-500 text-white rounded-2xl font-black text-xl shadow-2xl hover:bg-orange-600 transition-all uppercase tracking-[0.2em] italic border-4 border-white/10"
          >
            Access Inquiry Gateway
            <ArrowUpRight className="ml-4" size={28} />
          </button>
        </div>
      </section>
    </>
  );

  const renderVisionMission = () => (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => setCurrentView('home')}
          className="flex items-center text-blue-900 font-bold mb-12 hover:-translate-x-1 transition-transform group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Home
        </button>

        <div className="text-center mb-24">
          <h1 className="text-5xl lg:text-8xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic leading-none">
            Vision & <span className="text-blue-900">Mission</span>
          </h1>
          <div className="h-2 w-32 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-12 sm:p-20 rounded-[4rem] relative overflow-hidden group border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 p-12 text-blue-100 group-hover:text-blue-200 transition-colors">
              <Eye size={120} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-blue-900 text-white rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
                <Eye size={36} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 uppercase tracking-tight italic">Vision</h2>
              <p className="text-2xl sm:text-3xl text-gray-700 leading-tight font-medium italic">
                To be a trusted, multidisciplinary partner where technical precision, creative expression, and financial insight come together to move people, businesses, and ideas forward.
              </p>
            </div>
          </div>

          <div className="bg-blue-900 p-12 sm:p-20 rounded-[4rem] relative overflow-hidden group shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
            <div className="absolute top-0 right-0 p-12 text-white/5 group-hover:text-white/10 transition-colors">
              <Target size={120} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-orange-500 text-white rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
                <Compass size={36} />
              </div>
              <h2 className="text-4xl font-bold text-white mb-8 uppercase tracking-tight italic">Mission</h2>
              <p className="text-2xl sm:text-3xl text-blue-50 leading-tight font-medium italic">
                To deliver integrated technical, creative, and financial solutions that simplify complexity, maximize value, and support our clients’ success with integrity and precision from a Professional Perspective.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <button 
            onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
            className="inline-flex items-center px-12 py-6 bg-gray-900 text-white rounded-full font-bold text-xl hover:bg-blue-900 transition-all shadow-2xl uppercase tracking-[0.2em] italic group"
          >
            <ArrowLeft className="mr-4 group-hover:-translate-x-2 transition-transform" />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );

  const renderCredentials = () => (
    <div className="min-h-screen bg-white">
      {/* Header with background */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={EXPERTISE_BG} className="w-full h-full object-cover" alt="Expertise Background" />
          <div className="absolute inset-0 bg-blue-900/95"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center text-blue-300 font-bold hover:text-white transition-colors group mb-12"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Home
          </button>
          
          <h1 className="text-5xl lg:text-8xl font-black text-white mb-8 uppercase tracking-tighter italic leading-none">
            Verified <span className="text-blue-400">Expertise</span>
          </h1>
          <div className="h-2 w-32 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Professional certifications and academic excellence that power ProSpective LLC's technical foundation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl p-12 sm:p-16 bg-blue-900 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group mb-24 text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="text-3xl font-bold mb-12 flex items-center justify-start border-b border-white/10 pb-8 uppercase italic tracking-wider">
              <GraduationCap className="mr-5 text-blue-300" size={40} /> 
              Academic Background
            </div>
            <div className="space-y-8 opacity-95 text-xl sm:text-2xl font-medium italic leading-tight">
              <div className="flex items-start">
                <ArrowRight className="mt-1.5 mr-6 text-orange-500 flex-shrink-0" size={24} />
                <span>AutoCAD Career Diploma, Ashworth College</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="mt-1.5 mr-6 text-orange-500 flex-shrink-0" size={24} />
                <span>Engineering Development Program Graduate</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="mt-1.5 mr-6 text-orange-500 flex-shrink-0" size={24} />
                <span>Data Science & Analytics Specialist</span>
              </div>
            </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left max-w-6xl mx-auto">
            {CERTIFICATES.map((cert, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-blue-900/5 group-hover:text-blue-900/10 transition-colors">
                  <Award size={64} />
                </div>
                <div className="w-16 h-16 bg-white text-blue-900 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="font-bold text-2xl text-gray-900 mb-6 italic tracking-tight leading-tight flex-grow">{cert.title}</h4>
                <div className="text-[10px] text-gray-500 flex items-center justify-between mt-auto pt-8 border-t border-gray-200 uppercase tracking-widest font-bold">
                  <span>{cert.issuer}</span>
                  <span className="bg-white px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">{cert.date}</span>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-24 text-center">
          <button 
            onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
            className="inline-flex items-center px-12 py-6 bg-gray-900 text-white rounded-full font-bold text-xl hover:bg-blue-900 transition-all shadow-2xl uppercase tracking-[0.2em] italic group"
          >
            <ArrowLeft className="mr-4 group-hover:-translate-x-2 transition-transform" />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );

  const renderPillars = () => (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => setCurrentView('home')}
          className="flex items-center text-blue-900 font-bold mb-12 hover:-translate-x-1 transition-transform group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Home
        </button>

        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-8xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic leading-none">
            The Five <span className="text-blue-900">Pillars</span>
          </h1>
          <div className="h-2 w-32 bg-orange-500 mx-auto rounded-full mb-10"></div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium italic leading-relaxed">
            Our multidisciplinary focus allows us to provide cutting-edge engineering, artistic storytelling, and strategic financial solutions tailored to your unique perspective.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all text-sm uppercase tracking-widest italic ${
                  activeCategory === cat 
                    ? 'bg-blue-900 text-white shadow-2xl scale-105' 
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className={`relative rounded-[3rem] p-10 shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col group overflow-hidden ${
                service.bgImage && activeCategory === 'All' ? 'lg:col-span-2' : ''
              }`}
            >
              {service.bgImage && (
                <div className="absolute inset-0 z-0">
                  <img src={service.bgImage} alt="Background" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                  <div className="absolute inset-0 bg-blue-950/85 backdrop-blur-[2px]"></div>
                </div>
              )}

              <div className={`relative z-10 flex flex-col h-full ${service.bgImage ? 'text-white' : 'text-gray-900'}`}>
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-12 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${
                  service.bgImage ? 'bg-white/10 backdrop-blur-xl text-white border border-white/20' : 'bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white shadow-lg'
                }`}>
                  {getIcon(service.icon)}
                </div>
                <div className={`text-xs font-black uppercase tracking-[0.3em] mb-6 ${service.bgImage ? 'text-blue-300' : 'text-blue-600'}`}>{service.category} Pillar</div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-8 italic tracking-tighter leading-none">
                  {service.title}
                </h3>
                <p className={`mb-12 text-xl leading-relaxed font-medium italic ${service.bgImage ? 'text-blue-50/90' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-12">
                  {service.details.map((detail, i) => (
                    <div key={i} className={`flex items-start text-lg p-4 rounded-[1.5rem] border transition-all ${
                      service.bgImage ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-gray-100 border-gray-200 hover:border-blue-300'
                    }`}>
                      <div className={`mt-1.5 mr-4 flex-shrink-0 ${service.bgImage ? 'text-blue-300' : 'text-blue-900'}`}>
                        <ArrowRight size={20} strokeWidth={3} />
                      </div>
                      <span className={service.bgImage ? 'text-blue-50' : 'text-gray-800 font-semibold'}>{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto space-y-4 pt-10 border-t border-current/10">
                  {service.id === 'ecommerce' && (
                    <button 
                      onClick={() => {
                        setCurrentView('for-sale');
                        window.scrollTo(0, 0);
                      }}
                      className="w-full inline-flex items-center justify-center py-6 px-8 bg-orange-500 text-white rounded-[2rem] font-black text-lg shadow-2xl hover:bg-orange-600 transition-all group/shop italic uppercase tracking-widest border-4 border-white/10"
                    >
                      <ShoppingBag size={24} className="mr-4 group-hover:scale-110 transition-transform" />
                      Amazon Products
                    </button>
                  )}

                  {service.links ? (
                    <div className="grid gap-4">
                      {service.links.map((link, idx) => (
                        <a 
                          key={idx}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`w-full inline-flex items-center justify-center py-5 px-8 rounded-[1.5rem] font-bold text-base shadow-lg transition-all group/btn italic uppercase tracking-widest ${
                            service.bgImage ? 'bg-white text-blue-900 hover:bg-blue-50' : 'bg-blue-900 text-white hover:bg-blue-800'
                          }`}
                        >
                          {link.label}
                          <ArrowUpRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                      ))}
                    </div>
                  ) : service.ctaLink ? (
                    <a 
                      href={service.ctaLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full py-5 px-8 rounded-[1.5rem] font-bold text-base shadow-lg transition-all group/btn italic uppercase tracking-widest ${
                        service.bgImage ? 'bg-white text-blue-900 hover:bg-blue-50' : 'bg-blue-900 text-white hover:bg-blue-800'
                      }`}
                    >
                      View Samples <ChevronRight className="ml-2" size={24} />
                    </a>
                  ) : (
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeDIF1tN7_3PAG-PuI586FRKZSv0t_Ddr2TD9mTPyEbC6aSMQ/viewform?usp=publish-editor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center py-6 px-8 rounded-[2rem] font-black text-lg shadow-2xl transition-all group/btn italic uppercase tracking-widest ${
                        service.bgImage ? 'bg-white text-blue-900 hover:bg-blue-50' : 'bg-blue-900 text-white hover:bg-blue-800'
                      }`}
                    >
                      INQUIRY PORTAL
                      <ArrowUpRight className="ml-3 w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button 
            onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
            className="inline-flex items-center px-12 py-6 bg-gray-900 text-white rounded-full font-bold text-xl hover:bg-blue-900 transition-all shadow-2xl uppercase tracking-[0.2em] italic group"
          >
            <ArrowLeft className="mr-4 group-hover:-translate-x-2 transition-transform" />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );

  const renderInquiryGateway = () => (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => setCurrentView('home')}
          className="flex items-center text-blue-900 font-bold mb-12 hover:-translate-x-1 transition-transform group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Home
        </button>

        <div className="text-center mb-24">
          <h1 className="text-5xl lg:text-8xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic leading-none">
            Inquiry <span className="text-blue-900">Gateway</span>
          </h1>
          <div className="h-2 w-32 bg-orange-500 mx-auto rounded-full mb-10"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed italic">
            Connecting you directly with the multidisciplinary expertise of ProSpective LLC. Select our portal below to begin your professional journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 rounded-[4rem] p-12 sm:p-20 text-center relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-4 border-blue-800/50">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img src={BUSINESS_LOGO} className="w-full h-full object-contain scale-150 rotate-12 bg-white" alt="Watermark" />
            </div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white text-blue-900 rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Send size={48} />
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-8 uppercase tracking-tighter italic">Secure Your Perspective</h2>
              <p className="text-blue-100 text-xl sm:text-2xl mb-16 leading-relaxed font-medium italic">
                Our specialized intake form ensures we understand your project requirements with the precision it deserves.
              </p>

              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeDIF1tN7_3PAG-PuI586FRKZSv0t_Ddr2TD9mTPyEbC6aSMQ/viewform?usp=publish-editor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-16 py-8 bg-orange-500 text-white rounded-[2.5rem] font-black text-2xl shadow-[0_20px_50px_rgba(249,115,22,0.4)] hover:bg-orange-600 transition-all active:scale-95 group/btn uppercase tracking-[0.1em] italic border-4 border-white/20"
              >
                INQUIRY PORTAL
                <ArrowUpRight className="ml-6 w-8 h-8 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
              </a>

              <div className="mt-16 flex flex-wrap justify-center gap-12 text-blue-200">
                <div className="flex items-center">
                  <ShieldCheck className="mr-3 text-blue-400" size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest italic">Confidential</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="mr-3 text-blue-400" size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest italic">Professional</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="mr-3 text-blue-400" size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest italic">Direct Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <a href="mailto:ProSpective.LLC@gmail.com" className="flex items-center p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center mr-8 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 italic">Email Us</div>
              <div className="text-lg font-bold text-gray-900">ProSpective.LLC@gmail.com</div>
            </div>
          </a>

          <a href="tel:7706480667" className="flex items-center p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center mr-8 group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <div>
              <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 italic">Call Directly</div>
              <div className="text-lg font-bold text-gray-900">770-648-0667</div>
            </div>
          </a>
        </div>

        <div className="mt-24 text-center">
          <button 
            onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
            className="inline-flex items-center px-12 py-6 bg-gray-900 text-white rounded-full font-bold text-xl hover:bg-blue-900 transition-all shadow-2xl uppercase tracking-[0.2em] italic group"
          >
            <ArrowLeft className="mr-4 group-hover:-translate-x-2 transition-transform" />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );

  const renderPrivacyTerms = () => (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setCurrentView('home')}
          className="flex items-center text-blue-900 font-bold mb-12 hover:-translate-x-1 transition-transform group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Home
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tighter italic leading-none">
            Privacy Policy & <span className="text-blue-900">Terms</span>
          </h1>
          <div className="h-2 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="prose prose-blue max-w-none text-gray-700 font-medium italic">
          <section className="mb-20 bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-sm">
            <div className="flex items-center mb-8">
              <Lock className="text-blue-900 mr-4" size={32} />
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight m-0">Privacy Policy</h2>
            </div>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-10">Last Updated: 31JAN2026</p>
            
            <div className="space-y-8 leading-relaxed">
              <p>ProSpective LLC (“Company,” “we,” “our,” or “us”) respects your privacy and is committed to protecting it through this Privacy Policy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services or products.</p>
              <p>By accessing or using our website, you consent to the practices described in this Privacy Policy.</p>
              
              <hr className="border-gray-200" />
              
              <h3 className="text-xl font-bold text-gray-900 uppercase">1. Information We Collect</h3>
              <p>We may collect information about you in a variety of ways, including:</p>
              <div className="pl-6 space-y-4">
                <p><strong>a. Personal Information</strong><br />Personal information you voluntarily provide to us may include: Name, Email address, Phone number, Billing and payment information, Mailing address, Any information submitted through contact forms, service inquiries, or purchases.</p>
                <p><strong>b. Non-Personal Information</strong><br />We may automatically collect non-personal information, including: IP address, Browser type, Device information, Pages visited and time spent on the site, Referring URLs.</p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 uppercase">2. How We Use Your Information</h3>
              <p>We use the information we collect for purposes including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and delivering services and products</li>
                <li>Processing transactions and payments</li>
                <li>Responding to inquiries and customer support requests</li>
                <li>Improving website functionality and user experience</li>
                <li>Sending administrative or promotional communications</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 uppercase">3. Cookies and Tracking Technologies</h3>
              <p>Our website may use cookies, web beacons, and similar tracking technologies to enhance user experience and analyze website performance. Third-party services such as analytics providers may also place cookies on your device. You may adjust your browser settings to refuse cookies; however, some features of the website may not function properly.</p>

              <h3 className="text-xl font-bold text-gray-900 uppercase">4. Sharing of Information</h3>
              <p>We do not sell, rent, or trade your personal information. We may share information with payment processors, technology service providers, and legal authorities if required by law. All third parties are obligated to protect your information.</p>

              <h3 className="text-xl font-bold text-gray-900 uppercase">5. Data Security</h3>
              <p>We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

              <h3 className="text-xl font-bold text-gray-900 uppercase">6. Your Rights and Choices</h3>
              <p>Depending on your jurisdiction, you may have the right to request access, correction, or deletion of your data, or opt out of marketing communications. Requests may be submitted by contacting us via email.</p>

              <h3 className="text-xl font-bold text-gray-900 uppercase">7. Third-Party Websites</h3>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.</p>

              <h3 className="text-xl font-bold text-gray-900 uppercase">8. Changes to This Privacy Policy</h3>
              <p>We reserve the right to modify this Privacy Policy at any time. Changes will be effective immediately upon posting on this page.</p>

              <h3 className="text-xl font-bold text-gray-900 uppercase">9. Contact Information</h3>
              <p>If you have questions or concerns regarding this Privacy Policy, please contact: <br /><strong>Email: ProSpective.LLC@gmail.com</strong></p>
            </div>
          </section>

          <section className="bg-blue-900 p-10 rounded-[3rem] border-4 border-blue-800 shadow-2xl text-blue-50">
            <div className="flex items-center mb-8">
              <Scale className="text-orange-400 mr-4" size={32} />
              <h2 className="text-3xl font-black text-white uppercase tracking-tight m-0">Terms and Conditions</h2>
            </div>
            <p className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-10">Last Updated: 31JAN2026</p>
            
            <div className="space-y-8 leading-relaxed">
              <p>These Terms and Conditions (“Terms”) govern your use of the ProSpective LLC website and any services or products provided by ProSpective LLC (“Company,” “we,” “our,” or “us”). By accessing or using this website, you agree to be bound by these Terms.</p>
              
              <hr className="border-white/10" />
              
              <h3 className="text-xl font-bold text-white uppercase">1. Use of Website</h3>
              <p>You agree to use this website for lawful purposes only and in a manner that does not infringe upon the rights of others or restrict their use of the website.</p>

              <h3 className="text-xl font-bold text-white uppercase">2. Services and Products</h3>
              <p>ProSpective LLC provides professional services and sells products, including but not limited to technical, design, multimedia, financial, and e-commerce-related offerings. All services and products are provided on an “as is” and “as available” basis unless otherwise stated in writing.</p>

              <h3 className="text-xl font-bold text-white uppercase">3. No Professional Guarantees</h3>
              <p>Any information or services provided do not constitute legal, financial, tax, or professional advice unless explicitly stated in a written agreement. We make no guarantees regarding outcomes or results.</p>

              <h3 className="text-xl font-bold text-white uppercase">4. Payments and Refunds</h3>
              <p>All prices are subject to change without notice. Payment terms, refund eligibility, and delivery details will be disclosed at the point of sale or in a separate written agreement.</p>

              <h3 className="text-xl font-bold text-white uppercase">5. Intellectual Property</h3>
              <p>All content on this website, including text, graphics, logos, designs, images, and digital products, is the intellectual property of ProSpective LLC and may not be copied, reproduced, distributed, or exploited without prior written permission.</p>

              <h3 className="text-xl font-bold text-white uppercase">6. User Conduct</h3>
              <p>You agree not to attempt unauthorized access, disrupt functionality, use for fraudulent purposes, or scrape content from the website.</p>

              <h3 className="text-xl font-bold text-white uppercase">7. Limitation of Liability</h3>
              <p>To the fullest extent permitted by law, ProSpective LLC shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website, services, or products.</p>

              <h3 className="text-xl font-bold text-white uppercase">8. Indemnification</h3>
              <p>You agree to indemnify and hold harmless ProSpective LLC from any claims, damages, or expenses arising from your use of the website or violation of these Terms.</p>

              <h3 className="text-xl font-bold text-white uppercase">10. Governing Law</h3>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to conflict of law principles.</p>

              <h3 className="text-xl font-bold text-white uppercase">12. Contact Information</h3>
              <p>For questions regarding these Terms, contact: <br /><strong>Email: ProSpective.LLC@gmail.com</strong></p>
            </div>
          </section>
        </div>

        <div className="mt-24 text-center">
          <button 
            onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
            className="inline-flex items-center px-12 py-6 bg-gray-900 text-white rounded-full font-bold text-xl hover:bg-blue-900 transition-all shadow-2xl uppercase tracking-[0.2em] italic group"
          >
            <ArrowLeft className="mr-4 group-hover:-translate-x-2 transition-transform" />
            Return Home
          </button>
        </div>
      </div>
    </div>
  );

  const renderForSale = () => (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => setCurrentView('home')}
          className="flex items-center text-blue-900 font-bold mb-12 hover:-translate-x-1 transition-transform group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 uppercase tracking-tight italic">AMAZON PRODUCTS</h1>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed italic">
            Exclusive ProSpective LLC branded gear and tailored merchandise. High-quality designs that reflect our commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          {AMAZON_PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2">
              <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.label} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-orange-600 shadow-md border border-orange-100">
                  Amazon Exclusive
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow bg-white border-t border-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors uppercase tracking-tighter italic">
                  {product.label}
                </h3>
                <p className="text-sm text-gray-500 mb-10 font-medium italic">Premium quality product featuring original ProSpective design. Available for immediate shipping.</p>
                
                <div className="mt-auto">
                  <a 
                    href={product.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-5 px-8 bg-blue-900 text-white rounded-[1.5rem] font-bold hover:bg-orange-500 transition-all shadow-xl active:scale-95 group/btn uppercase tracking-widest italic text-sm"
                  >
                    View on Amazon
                    <ArrowUpRight size={18} className="ml-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}>
              <div className="h-14 w-14 overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                <img src={BUSINESS_LOGO} alt="ProSpective LLC Logo" className="h-full w-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold tracking-tight text-blue-900 block leading-tight italic uppercase">ProSpective</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] italic mt-1.5">Professional Services</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }} className="text-gray-500 hover:text-blue-900 font-bold uppercase text-[10px] tracking-widest italic transition-colors">Home</button>
              <button onClick={() => { setCurrentView('vision-mission'); window.scrollTo(0, 0); }} className="text-gray-500 hover:text-blue-900 font-bold uppercase text-[10px] tracking-widest italic transition-colors">Vision & Mission</button>
              <button onClick={() => { setCurrentView('pillars'); window.scrollTo(0, 0); }} className="text-gray-500 hover:text-blue-900 font-bold uppercase text-[10px] tracking-widest italic transition-colors">The Five Pillars</button>
              <button onClick={() => { setCurrentView('credentials'); window.scrollTo(0, 0); }} className="text-gray-500 hover:text-blue-900 font-bold uppercase text-[10px] tracking-widest italic transition-colors">Credentials</button>
              <button onClick={() => { setCurrentView('inquiry-gateway'); window.scrollTo(0, 0); }} className="text-gray-500 hover:text-blue-900 font-bold uppercase text-[10px] tracking-widest italic transition-colors">Inquiry Gateway</button>
              <button 
                onClick={() => { setCurrentView('for-sale'); window.scrollTo(0, 0); }}
                className={`${currentView === 'for-sale' ? 'bg-orange-600' : 'bg-orange-500'} text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg flex items-center uppercase text-[10px] tracking-widest italic ml-4`}
              >
                <ShoppingBag size={14} className="mr-2" />
                Shop Store
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-900 transition-colors p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
            <div className="px-6 pt-4 pb-10 space-y-4">
              <button onClick={() => { setCurrentView('home'); setIsMenuOpen(false); }} className="block w-full text-left py-4 text-xl font-bold text-gray-700 border-b border-gray-50 uppercase tracking-tight italic">Home</button>
              <button onClick={() => { setCurrentView('vision-mission'); setIsMenuOpen(false); }} className="block w-full text-left py-4 text-xl font-bold text-gray-700 border-b border-gray-50 uppercase tracking-tight italic">Vision & Mission</button>
              <button onClick={() => { setCurrentView('pillars'); setIsMenuOpen(false); }} className="block w-full text-left py-4 text-xl font-bold text-gray-700 border-b border-gray-50 uppercase tracking-tight italic">The Five Pillars</button>
              <button onClick={() => { setCurrentView('credentials'); setIsMenuOpen(false); }} className="block w-full text-left py-4 text-xl font-bold text-gray-700 border-b border-gray-50 uppercase tracking-tight italic">Credentials</button>
              <button onClick={() => { setCurrentView('inquiry-gateway'); setIsMenuOpen(false); }} className="block w-full text-left py-4 text-xl font-bold text-blue-900 border-b border-gray-50 uppercase tracking-tight italic">Inquiry Gateway</button>
              <button onClick={() => { setCurrentView('for-sale'); setIsMenuOpen(false); }} className="block w-full text-left py-4 text-xl font-bold text-orange-600 border-b border-gray-50 uppercase tracking-tight italic flex items-center"><ShoppingBag size={20} className="mr-4" />Shop Store</button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {currentView === 'home' ? renderHome() : 
         currentView === 'vision-mission' ? renderVisionMission() : 
         currentView === 'credentials' ? renderCredentials() : 
         currentView === 'pillars' ? renderPillars() : 
         currentView === 'inquiry-gateway' ? renderInquiryGateway() :
         currentView === 'privacy-terms' ? renderPrivacyTerms() :
         renderForSale()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-24 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-14 w-14 bg-white rounded-2xl p-2 shadow-2xl">
                  <img src={BUSINESS_LOGO} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tighter text-white leading-none uppercase italic">ProSpective</span>
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em] mt-2 italic">Professional Services</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed font-medium italic text-lg">
                Precision meets creativity. A synergy of Science, Art, and Finance delivering excellence since 2002.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.3em] mb-10 text-blue-400 italic">Navigation</h4>
              <ul className="space-y-5 text-gray-400 font-bold text-[11px] uppercase tracking-widest italic">
                <li><button onClick={() => { setCurrentView('vision-mission'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors text-left">Vision & Mission</button></li>
                <li><button onClick={() => { setCurrentView('for-sale'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors text-left">Exclusive Boutique</button></li>
                <li><button onClick={() => { setCurrentView('pillars'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors text-left">The Five Pillars</button></li>
                <li><button onClick={() => { setCurrentView('credentials'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors text-left">Verified Credentials</button></li>
                <li><button onClick={() => { setCurrentView('inquiry-gateway'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors text-left uppercase">Inquiry Gateway</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.3em] mb-10 text-blue-400 italic">Core Disciplines</h4>
              <ul className="space-y-5 text-gray-400 font-bold text-[11px] uppercase tracking-widest italic">
                <li>Engineering / Technical</li>
                <li>Cross Media Productions</li>
                <li>Financial Real Estate</li>
                <li>E-Commerce Strategy</li>
                <li>AutoCAD & Spatial Drafting</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.3em] mb-10 text-orange-400 italic underline underline-offset-8 decoration-2">Merchandise</h4>
              <p className="text-gray-400 mb-10 text-base font-medium italic leading-relaxed">
                Secure your official ProSpective LLC gear through our certified Amazon storefront.
              </p>
              <button 
                onClick={() => { setCurrentView('for-sale'); window.scrollTo(0, 0); }} 
                className="block w-full py-5 bg-orange-500 rounded-3xl font-bold text-center hover:bg-orange-600 transition-all shadow-2xl uppercase tracking-[0.2em] text-[10px] italic"
              >
                Shop Store
              </button>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.4em] italic text-center md:text-left">
              &copy; {new Date().getFullYear()} ProSpective LLC. Excellence Delivered with a Professional Perspective.
            </p>
            <div className="flex space-x-12 text-gray-500 text-[11px] font-bold uppercase tracking-[0.5em] italic">
              <button onClick={() => { setCurrentView('privacy-terms'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Privacy Policy & Terms and Conditions</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
