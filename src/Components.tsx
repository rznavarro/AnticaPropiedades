import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  Search, 
  Users, 
  Clock, 
  Key, 
  ShieldCheck, 
  Gavel, 
  TrendingUp, 
  Home,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Property, Review, NavLink } from './types';

// --- DATA ---

const NAVIGATION: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Penthouse Exclusivo en Vitacura',
    operation: 'Venta',
    type: 'Departamento',
    price: 'UF 22.500',
    m2: 240,
    bedrooms: 4,
    bathrooms: 4,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    location: 'Vitacura, Región Metropolitana'
  },
  {
    id: '2',
    title: 'Casa Provenzal en Lo Barnechea',
    operation: 'Venta',
    type: 'Casa',
    price: 'UF 35.000',
    m2: 450,
    bedrooms: 5,
    bathrooms: 5,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    location: 'Lo Barnechea, Región Metropolitana'
  },
  {
    id: '3',
    title: 'Oficina Boutique en El Golf',
    operation: 'Arriendo',
    type: 'Oficina',
    price: 'UF 85',
    m2: 120,
    bedrooms: 0,
    bathrooms: 2,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    location: 'Las Condes, Región Metropolitana'
  },
  {
    id: '4',
    title: 'Departamento Moderno en Providencia',
    operation: 'Arriendo',
    type: 'Departamento',
    price: '$1.200.000',
    m2: 85,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000',
    location: 'Providencia, Región Metropolitana'
  },
  {
    id: '5',
    title: 'Casa Estilo Mediterráneo en Chicureo',
    operation: 'Venta',
    type: 'Casa',
    price: 'UF 18.900',
    m2: 320,
    bedrooms: 4,
    bathrooms: 4,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000',
    location: 'Colina, Región Metropolitana'
  },
  {
    id: '6',
    title: 'Sitio Industrial en Lampa',
    operation: 'Venta',
    type: 'Local/Industrial',
    price: 'UF 45.000',
    m2: 5000,
    bedrooms: 0,
    bathrooms: 0,
    imageUrl: 'https://images.unsplash.com/photo-1582449002821-ec4c502c5ee5?auto=format&fit=crop&q=80&w=1000',
    location: 'Lampa, Región Metropolitana'
  },
];

const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Carolina Jiménez',
    rating: 5,
    text: 'Excelente servicio. Encontraron el departamento perfecto para mi familia en menos de un mes. Muy profesionales.',
    avatarUrl: 'https://i.pravatar.cc/150?u=carolina'
  },
  {
    id: '2',
    name: 'Ricardo Soto',
    rating: 5,
    text: 'La asesoría legal fue fundamental para cerrar la venta de mi casa. Antica Propiedades superó mis expectativas.',
    avatarUrl: 'https://i.pravatar.cc/150?u=ricardo'
  },
  {
    id: '3',
    name: 'María Paz Valdés',
    rating: 5,
    text: 'Transparencia y rapidez. Gestionaron el arriendo de mi oficina de manera impecable. 100% recomendados.',
    avatarUrl: 'https://i.pravatar.cc/150?u=mariapaz'
  },
];

// --- COMPONENTS ---

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-navbar py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center font-serif font-bold text-dark text-xl">A</div>
          <span className="font-serif text-2xl font-bold tracking-tight text-white hidden sm:block">ANTICA <span className="font-light text-gold text-sm align-super font-sans">PROPIEDADES</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-white/80 hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/56944681615" className="btn-gold !py-2 !px-4 text-sm whitespace-nowrap">
            <MessageCircle size={18} />
            <span className="hidden sm:inline text-[#25D366] font-bold">WhatsApp Directo</span>
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 right-0 bg-dark-bg border-b border-white/10 p-8 shadow-2xl md:hidden"
        >
          <div className="flex justify-between items-center mb-8">
            <span className="font-serif text-xl font-bold">ANTICA</span>
            <button onClick={() => setMobileMenuOpen(false)}><X /></button>
          </div>
          <div className="flex flex-col gap-6">
            {NAVIGATION.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70 active:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl px-4 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
        >
          <ShieldCheck size={14} /> Corredores certificados ACOP
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl mb-6 font-bold text-white leading-tight"
        >
          Tu próxima propiedad en la <span className="text-gold italic font-light font-serif">Región Metropolitana</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light"
        >
          Ventas y arriendos con asesoría personalizada. Más de 500 propiedades gestionadas con éxito.
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-panel p-2 md:p-6 rounded-lg shadow-2xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 text-left"
        >
          <div className="p-3 md:px-6">
            <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1">Operación</label>
            <select className="bg-transparent text-white w-full outline-none font-medium text-sm border-none appearance-none cursor-pointer">
              <optgroup className="bg-dark">
                <option value="venta">Venta</option>
                <option value="arriendo">Arriendo</option>
              </optgroup>
            </select>
          </div>
          <div className="p-3 md:px-6 md:border-l border-white/10">
            <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1">Propiedad</label>
            <select className="bg-transparent text-white w-full outline-none font-medium text-sm border-none appearance-none cursor-pointer">
              <optgroup className="bg-dark">
                <option value="depto">Departamento</option>
                <option value="casa">Casa</option>
                <option value="oficina">Oficina</option>
                <option value="local">Local</option>
              </optgroup>
            </select>
          </div>
          <div className="p-3 md:px-6 md:border-l border-white/10">
            <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1">Ubicación</label>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gold" />
              <input type="text" placeholder="Lo Barnechea, Vitacura..." className="bg-transparent text-white w-full outline-none font-medium text-sm placeholder:text-white/20" />
            </div>
          </div>
          <button className="btn-gold !h-12 w-full !rounded-sm">
            <Search size={18} />
            <span>Buscar</span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16"
        >
          {[
            { value: '500+', label: 'Propiedades' },
            { value: '10 Años', label: 'Experiencia' },
            { value: '1k+', label: 'Clientes' }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-2xl font-serif font-bold text-gold mb-1 group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const SectionTitle = ({ title, subtitle, centered = true, dark = true }: { title: string; subtitle?: string; centered?: boolean; dark?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-dark'}`}>{title}</h2>
    {subtitle && <p className={`max-w-2xl text-lg ${centered ? 'mx-auto' : ''} ${dark ? 'text-white/50' : 'text-dark/60'}`}>{subtitle}</p>}
    <div className={`h-1 w-20 bg-gold mt-6 ${centered ? 'mx-auto' : ''}`} />
  </div>
);

export const PropertyCard = ({ property }: { property: Property, key?: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="property-card flex flex-col h-full"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
      <span className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm border border-white/10">
        {property.operation}
      </span>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="text-[10px] text-gold uppercase tracking-widest mb-1 font-semibold">{property.type}</div>
      <h3 className="text-xl font-bold mb-2 line-clamp-1">{property.title}</h3>
      <div className="flex items-center gap-1 text-white/50 text-xs mb-4">
        <MapPin size={12} /> {property.location}
      </div>
      <div className="text-2xl font-serif text-gold font-bold mb-6">{property.price}</div>
      
      <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4 mt-auto">
        <div className="text-center">
          <div className="text-xs font-bold text-white mb-1">{property.m2} m²</div>
          <div className="text-[9px] uppercase text-white/30 tracking-wider">Superficie</div>
        </div>
        <div className="text-center border-x border-white/5">
          <div className="text-xs font-bold text-white mb-1">{property.bedrooms}</div>
          <div className="text-[9px] uppercase text-white/30 tracking-wider">Dorm.</div>
        </div>
        <div className="text-center">
          <div className="text-xs font-bold text-white mb-1">{property.bathrooms}</div>
          <div className="text-[9px] uppercase text-white/30 tracking-wider">Baños</div>
        </div>
      </div>

      <button className="w-full mt-6 py-3 text-xs font-bold uppercase tracking-widest border border-gold/30 text-gold hover:bg-gold hover:text-dark transition-all rounded-sm">
        Ver detalles
      </button>
    </div>
  </motion.div>
);

export const RentalSection = () => (
  <section id="arriendos" className="py-24 bg-dark-accent">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionTitle 
        title="Oportunidades en Arriendo" 
        subtitle="Unidades residenciales y locales comerciales en las mejores ubicaciones de Santiago."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROPERTIES.filter(p => p.operation === 'Arriendo').map((p, idx) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
      <div className="mt-16 text-center">
        <button className="btn-outline">
          Ver todos los arriendos <ChevronRight size={18} />
        </button>
      </div>
    </div>
  </section>
);

export const HowWeWork = () => (
  <section className="py-24 bg-dark overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionTitle 
        title="¿Cómo trabajamos contigo?" 
        subtitle="Nuestro proceso está diseñado para brindarte seguridad y tranquilidad en cada etapa." 
        dark={true} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <MessageCircle className="text-gold" />, title: 'Conversamos', text: 'Nos cuentas qué buscas o qué quieres vender. Definimos tus objetivos.' },
          { icon: <TrendingUp className="text-gold" />, title: 'Asesoramos', text: 'Presentamos opciones que se ajustan para tu perfil y analizamos el mercado.' },
          { icon: <Clock className="text-gold" />, title: 'Visitamos', text: 'Coordinamos visitas y brindamos acompañamiento profesional en terreno.' },
          { icon: <CheckCircle2 className="text-gold" />, title: 'Cerramos', text: 'Gestionamos toda la documentación legal y trámites para un cierre exitoso.' }
        ].map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/5"
          >
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-gold flex items-center justify-center rounded-sm text-dark font-serif font-bold text-lg shadow-lg">
              {idx + 1}
            </div>
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const ServicesGrid = () => (
  <section id="servicios" className="py-24 bg-dark-bg">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionTitle 
        title="Nuestros Servicios" 
        subtitle="Soluciones inmobiliarias integrales para personas y empresas." 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: <Building2 />, title: 'Corretaje de ventas', text: 'Estrategias de marketing premium para vender tu propiedad al mejor precio.' },
          { icon: <Home />, title: 'Arriendo y administración', text: 'Nos encargamos de todo: selección de arrendatarios y cobranza.' },
          { icon: <Gavel />, title: 'Tasación de propiedades', text: 'Informes comerciales precisos basados en el mercado actual.' },
          { icon: <ShieldCheck />, title: 'Asesoría legal', text: 'Redacción de promesas, escrituras y estudio de títulos profesional.' },
          { icon: <TrendingUp />, title: 'Inversión inmobiliaria', text: 'Buscamos oportunidades con alta plusvalía para tu capital.' },
          { icon: <Users />, title: 'Propiedades para empresas', text: 'Búsqueda de oficinas, locales y bodegas industriales.' }
        ].map((service, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-dark border border-white/5 rounded-sm flex items-start gap-6 hover:border-gold/30 transition-all cursor-default"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gold/10 text-gold rounded-full">
              {service.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/40 text-sm">{service.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Testimonials = () => (
  <section className="py-24 bg-dark">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionTitle 
        title="Lo que dicen nuestros clientes" 
        subtitle="Antica Propiedades cuenta con reseñas verificadas que avalan nuestra trayectoria." 
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review) => (
          <motion.div 
            key={review.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-lg border border-white/10 relative"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-white/70 italic mb-8 font-light leading-relaxed">"{review.text}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <img src={review.avatarUrl} alt={review.name} className="w-10 h-10 rounded-full border border-gold/30" />
              <div>
                <div className="text-sm font-bold">{review.name}</div>
                <div className="text-[10px] text-gold uppercase tracking-wider">Cliente Verificado</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const CTASection = () => (
  <section className="py-20 relative overflow-hidden bg-gold">
    <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">¿Tienes una propiedad para vender o arrendar?</h2>
      <p className="text-dark/70 text-lg mb-10 max-w-2xl mx-auto font-medium italic">Tasación gratuita y sin compromiso. Tenemos compradores esperando.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto bg-dark text-white px-8 py-4 rounded-full font-bold hover:bg-dark-bg transition-all shadow-xl">
          Quiero tasación gratuita
        </button>
        <button className="w-full sm:w-auto border-2 border-dark text-dark px-8 py-4 rounded-full font-bold hover:bg-dark hover:text-white transition-all flex items-center justify-center gap-2">
          <MessageCircle size={20} /> Hablar por WhatsApp
        </button>
      </div>
    </div>
    
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-dark/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
  </section>
);

export const AboutUs = () => (
  <section id="nosotros" className="py-24 bg-dark-bg">
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:flex items-center gap-16">
      <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
        <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb81?auto=format&fit=crop&q=80&w=1000" 
            alt="Antica Team" 
            className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold -z-10 rounded-lg" />
        <div className="absolute top-12 left-12 p-6 bg-dark/90 backdrop-blur-md border border-white/10 rounded-lg z-20">
          <div className="text-4xl font-serif font-bold text-gold">10</div>
          <div className="text-[10px] uppercase tracking-widest text-white/50">Años de trayectoria</div>
        </div>
      </div>
      
      <div className="lg:w-1/2">
        <span className="text-gold font-bold text-sm tracking-widest uppercase mb-4 block">Sobre Nosotros</span>
        <h2 className="text-5xl font-bold mb-8">Somos Antica Propiedades</h2>
        <div className="space-y-6 text-white/60 leading-relaxed text-lg font-light">
          <p>
            Nacimos con la visión de profesionalizar el corretaje de propiedades en la Región Metropolitana, 
            combinando tecnología, marketing de alto impacto y una asesoría legal rigurosa.
          </p>
          <p>
            Nuestro compromiso no termina en la firma. Acompañamos a nuestros clientes en cada paso 
            del proceso, asegurando que su patrimonio esté protegido y que cada negociación 
            alcance su máximo potencial.
          </p>
        </div>
        
        <div className="mt-12">
          <div className="text-white/40 text-xs uppercase tracking-widest mb-6">Certificaciones y Alianzas</div>
          <div className="flex flex-wrap gap-8 items-center opacity-70 grayscale contrast-125">
            <div className="bg-white/10 px-4 py-2 rounded text-white font-bold text-xl border border-white/10 tracking-tighter">ACOP</div>
            <div className="h-6 w-px bg-white/20" />
            <div className="bg-white/10 px-4 py-2 rounded text-white flex items-center gap-2 text-sm border border-white/10">
              <ShieldCheck className="text-gold" /> REGISTRO NACIONAL
            </div>
          </div>
        </div>
        
        <button className="btn-gold !w-auto mt-12 !py-4">
          Conoce nuestro equipo
        </button>
      </div>
    </div>
  </section>
);

export const Blog = () => (
  <section className="py-24 bg-dark">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionTitle 
        title="Consejos Inmobiliarios" 
        subtitle="Información clave para comprar, vender o arrendar tu propiedad de forma inteligente."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: 'Cómo preparar tu propiedad para vender más rápido', 
            cat: 'Guía de Venta',
            img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600'
          },
          { 
            title: 'Documentos necesarios para arrendar en Chile en 2024', 
            cat: 'Arriendos',
            img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600'
          },
          { 
            title: '¿Conviene más comprar o arrendar en Santiago?', 
            cat: 'Inversión',
            img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600'
          }
        ].map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-gold text-dark text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
                {post.cat}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">{post.title}</h3>
            <p className="text-white/40 text-sm line-clamp-2 mb-4 leading-relaxed">
              Descubre las claves del mercado inmobiliario actual en la capital y toma decisiones informadas para tu patrimonio.
            </p>
            <span className="text-gold text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 group-active:translate-x-1 transition-transform">
              Leer más <ChevronRight size={14} />
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Contact = () => (
  <section id="contacto" className="py-24 bg-dark-accent text-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold mb-6">Contáctanos hoy</h2>
          <p className="text-white/50 text-lg mb-12 font-light">
            Estamos listos para asesorarte. Agenda una reunión virtual o 
            visítanos en nuestras oficinas para conversar sobre tu próximo proyecto.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-full shadow-sm">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <div className="font-bold">Llámanos</div>
                <div className="text-white/50">+56 9 4468 1615</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-full shadow-sm">
                <Mail size={20} className="text-gold" />
              </div>
              <div>
                <div className="font-bold">Escríbenos</div>
                <div className="text-white/50">contacto@anticapropiedades.cl</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-full shadow-sm">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <div className="font-bold">Oficina Central</div>
                <div className="text-white/50">Santiago, Región Metropolitana, Chile</div>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-12 bg-[#25D366] text-white p-6 rounded-lg flex items-center justify-center gap-4 hover:opacity-90 transition-all shadow-xl font-bold text-xl">
            <MessageCircle size={32} />
            Escríbenos por WhatsApp
          </button>
        </div>
        
        <div className="glass-panel p-8 md:p-12 rounded-xl shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Nombre Completo</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-gold text-white transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Teléfono</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-gold text-white transition-colors" />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-gold text-white transition-colors" />
            </div>
            
            <div>
              <label className="block text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Mensaje</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-gold text-white transition-colors"></textarea>
            </div>
            
            <button className="btn-gold w-full !rounded-lg !py-5">
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="py-20 bg-dark-bg border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <a href="#inicio" className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center font-serif font-bold text-dark text-lg">A</div>
            <span className="font-serif text-xl font-bold tracking-tight text-white">ANTICA</span>
          </a>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Tu corredora de confianza en la Región Metropolitana. Especialistas en propiedades premium y asesoría integral.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all">
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-white/10 rounded-full" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-8">Links de Interés</h4>
          <ul className="space-y-4 text-sm text-white/40">
            {NAVIGATION.map(link => (
              <li key={link.label}><a href={link.href} className="hover:text-gold transition-colors">{link.label}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-8">Servicios</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li>Venta de Propiedades</li>
            <li>Administración</li>
            <li>Asesoría Legal</li>
            <li>Tasaciones</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-8">Certificación</h4>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="font-serif font-bold text-2xl text-gold mb-2">ACOP</div>
            <p className="text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
              Corredores certificados. Profesionalismo garantizado por las normativas vigentes.
            </p>
          </div>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/20 text-[10px] uppercase tracking-widest">
          © 2024 Antica Propiedades. Corredor de propiedades en Santiago, Región Metropolitana.
        </p>
        <div className="text-white/20 text-[10px] uppercase tracking-widest flex items-center gap-8">
          <a href="#" className="hover:text-gold">Privacidad</a>
          <a href="#" className="hover:text-gold">Términos</a>
        </div>
      </div>
    </div>
  </footer>
);

export const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/56944681615" 
    className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MessageCircle size={32} />
    <span className="absolute right-full mr-4 bg-white text-dark px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      ¿Hablamos por WhatsApp?
    </span>
  </a>
);
