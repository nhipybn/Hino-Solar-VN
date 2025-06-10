import { motion } from 'framer-motion';

const ServiceHero = () => {
  return (
    <section id="services" className="relative bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <div className="container-custom section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            <span className="text-primary">Dịch Vụ</span>
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Dịch vụ toàn diện từ tư vấn đến bảo trì
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;