import { 
  Navbar, 
  Hero, 
  PropertyCard, 
  RentalSection, 
  HowWeWork, 
  ServicesGrid, 
  Testimonials, 
  CTASection, 
  AboutUs, 
  Blog, 
  Contact, 
  Footer, 
  FloatingWhatsApp,
  SectionTitle
} from './Components';
import { Property } from './types';

const FEATURED_PROPERTIES: Property[] = [
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
    id: '4',
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
    id: '5',
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

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Featured Properties Section */}
        <section id="propiedades" className="py-24 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SectionTitle 
              title="Propiedades Destacadas" 
              subtitle="Una selección curada de las mejores oportunidades residenciales y comerciales en la Región Metropolitana."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURED_PROPERTIES.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            <div className="mt-16 text-center">
              <button className="btn-gold !py-4 px-12">
                Ver todas las propiedades
              </button>
            </div>
          </div>
        </section>

        <HowWeWork />
        <CTASection />
        <ServicesGrid />
        <Testimonials />
        <AboutUs />
        <RentalSection />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

