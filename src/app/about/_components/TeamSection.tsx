"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Turner",
      role: "CEO & Founder",
      image: "/team/alex.jpg",
      bio: "Digital strategist with 12+ years experience scaling tech startups",
      social: {
        linkedin: "#",
        github: "#",
        website: "#"
      }
    },
    {
      name: "Sarah Lin",
      role: "Creative Director",
      image: "/team/sarah.jpg",
      bio: "Award-winning designer focused on user-centered experiences",
      social: {
        linkedin: "#",
        behance: "#",
        website: "#"
      }
    },
    {
      name: "James Carter",
      role: "CTO",
      image: "/team/james.jpg",
      bio: "Full-stack architect specializing in scalable cloud solutions",
      social: {
        linkedin: "#",
        github: "#",
        website: "#"
      }
    },
    {
      name: "Emma Park",
      role: "Lead Developer",
      image: "/team/emma.jpg",
      bio: "Blockchain & AI enthusiast building future-ready solutions",
      social: {
        linkedin: "#",
        github: "#",
        website: "#"
      }
    }
  ];

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Meet Our Innovators
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A diverse team of visionaries passionate about creating digital excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-md:grid-cols-1">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-all"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 h-60">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-purple-400 text-sm">{member.role}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-6">{member.bio}</p>

              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  href={member.social.linkedin}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href={member.social.github}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a 
                  href={member.social.website}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;