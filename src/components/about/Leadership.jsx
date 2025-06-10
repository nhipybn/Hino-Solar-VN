import { motion } from 'framer-motion';

const Leadership = () => {
  const leaders = [
    {
      name: 'Masayasu Hino',
      position: 'Hino Systech Corporation\nChủ tịch kiêm Giám đốc điều hành',
      message: 'Kể từ khi thành lập năm 1950, HINO SYSTECH CORPORATION đã đạt nhiều thành tựu trong tự động hóa quy trình (PA) và nhà máy (FA), đóng góp cho ngành công nghiệp Nhật Bản và quốc tế.',
      
      image: '/img/Mr.Hino.png'
    },
    {
      name: 'Ông Mai Văn Tuyền',
      position: 'Giám đốc điều hành\nHino Systech Việt Nam',
      message: 'Hino Systech Việt Nam, thành lập năm 2015 tại Hà Nội, là chi nhánh Đông Nam Á của tập đoàn Hino Systech Nhật Bản. Chúng tôi cung cấp các giải pháp tự động hóa và phần mềm công nghiệp cho nhiều lĩnh vực.',
      image: '/img/a.Tuyen.jpg'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {leaders.map((leader, index) => (
        <motion.div
          key={leader.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 flex gap-6"
        >
          <img
            src={leader.image}
            alt={leader.name}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
            <p className="text-primary font-medium mb-4 whitespace-pre-line">{leader.position}</p>
            <p className="text-gray-600">{leader.message}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Leadership;