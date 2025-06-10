import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nhà máy điện mặt trời Tây Ninh',
    capacity: '50MWp',
    description: 'Hệ thống SCADA cho nhà máy điện mặt trời quy mô lớn tại Tây Ninh',
    completionYear: '2024',
    status: 'Vận hành',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Dự án Solar Rooftop Bình Dương',
    capacity: '25MWp',
    description: 'Hệ thống giám sát điện mặt trời áp mái cho khu công nghiệp',
    completionYear: '2024',
    status: 'Vận hành',
    image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Nhà máy điện mặt trời Long An',
    capacity: '75MWp',
    description: 'Triển khai hệ thống SCADA tích hợp AI cho tối ưu hóa năng suất',
    completionYear: '2024',
    status: 'Vận hành',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Dự án Floating Solar Đồng Nai',
    capacity: '30MWp',
    description: 'Hệ thống điện mặt trời nổi với công nghệ giám sát tiên tiến',
    completionYear: '2024',
    status: 'Vận hành',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Nhà máy điện mặt trời Vũng Tàu',
    capacity: '40MWp',
    description: 'Hệ thống SCADA kết hợp với storage battery cho ổn định lưới',
    completionYear: '2024',
    status: 'Vận hành',
    image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Dự án Solar Hybrid Cần Thơ',
    capacity: '20MWp',
    description: 'Tích hợp điện mặt trời với hệ thống diesel tại ĐBSCL',
    completionYear: '2024',
    status: 'Vận hành',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

const FeaturedProjects = () => {
  return (
    <section id="du-an" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-primary">
            Dự án tiêu biểu
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Những dự án điển hình thể hiện năng lực và kinh nghiệm của Hino Systech
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">{project.status}</span>
                  </div>
                  <div className="text-2xl font-bold">{project.capacity}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-primary">
                    <svg className="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>Hoàn thành: {project.completionYear}</span>
                  </div>
                  <button className="text-primary hover:text-secondary transition-colors duration-300 flex items-center gap-1">
                    Chi tiết
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;