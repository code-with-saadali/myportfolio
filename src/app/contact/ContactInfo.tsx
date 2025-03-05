// components/ContactInfo.tsx
'use client';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export const ContactInfo = () => {
  const contacts = [
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      info: "contact@example.com",
      link: "mailto:contact@example.com"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Location",
      info: "New York, USA"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Phone",
      info: "+1 234 567 890",
      link: "tel:+1234567890"
    }
  ];

  return (
    <motion.div
      className="p-8 border border-white/10 rounded-xl bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Contact Information
      </h2>
      
      <div className="space-y-6">
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="p-3 bg-white/5 rounded-lg text-cyan-400">
              {contact.icon}
            </div>
            <div>
              <h3 className="text-gray-400 mb-1">{contact.title}</h3>
              {contact.link ? (
                <a
                  href={contact.link}
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  {contact.info}
                </a>
              ) : (
                <p className="text-white">{contact.info}</p>
              )}
            </div>
            
          </motion.div>
          
        ))}
      </div>
    </motion.div>
  );
};