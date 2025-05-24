import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FutureCard from '../components/FutureCard';

const FutureTechnology: React.FC = () => {
  const futureCards = [
    {
      title: 'Artificial Intelligence',
      description: 'From reactive machines to theory of mind AI, artificial intelligence continues to evolve. Current applications include narrow AI like ChatGPT and face recognition, while research progresses toward general AI capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Robotics',
      description: 'Modern robots combine sensors, actuators, and controllers to perform complex tasks. From industrial automation to household helpers, robotics is transforming how we work and live.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Digital Education',
      description: 'Online learning platforms and tools are revolutionizing education through synchronous, asynchronous, and blended learning approaches, making education more accessible and flexible.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'E-Learning Platforms',
      description: 'From LMS systems to educational content platforms, technology is creating new ways to learn and teach, though challenges like the digital divide must be addressed.',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section id="future" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="The Future of Technology"
          subtitle="Exploring emerging technologies and their potential impact on society"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {futureCards.map((card, index) => (
            <div key={index} className="fade-in-section opacity-0">
              <FutureCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-800 p-8 rounded-lg fade-in-section opacity-0">
          <h3 className="text-2xl font-bold mb-6 text-center">Ethical Considerations in Technology</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-xl font-semibold mb-2">Accountability</h4>
              <p className="text-gray-300">
                Being responsible for AI and robotics systems' actions and outcomes, including addressing unintended consequences.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-xl font-semibold mb-2">Integrity</h4>
              <p className="text-gray-300">
                Maintaining transparency in AI capabilities and preventing bias in automated systems to ensure fair treatment.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-xl font-semibold mb-2">Mindfulness</h4>
              <p className="text-gray-300">
                Considering the broader impact of technology on society, including effects on employment, privacy, and social structures.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 p-8 rounded-lg fade-in-section opacity-0">
          <h3 className="text-2xl font-bold mb-6 text-center">Digital Divide Challenges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Key Issues</h4>
              <ul className="space-y-3 text-gray-300">
                <li>• Geographic disparities in internet access</li>
                <li>• Economic barriers to technology adoption</li>
                <li>• Educational technology gaps</li>
                <li>• Infrastructure limitations</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Solutions</h4>
              <ul className="space-y-3 text-gray-300">
                <li>• Government broadband initiatives</li>
                <li>• Educational support programs</li>
                <li>• Public-private partnerships</li>
                <li>• Community technology centers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTechnology;