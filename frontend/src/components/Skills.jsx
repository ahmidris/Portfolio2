import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Communication', level: 90 },
    { name: 'Teamwork', level: 95 },
    { name: 'Leadership', level: 85 },
  ];

  return (
    <section 
      ref={ref}
      id="skills"
      className="py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 rounded-full border border-primary-200 dark:border-primary-800"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-2 text-xs bg-primary-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4">Tools & Technologies</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {['Git', 'VS Code', 'Figma', 'Webpack', 'Jest', 'GraphQL'].map((tool, index) => (
                  <motion.div
                    key={tool}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-2xl mb-2">
                      {tool === 'Git' && <span>🐙</span>}
                      {tool === 'VS Code' && <span>💻</span>}
                      {tool === 'Figma' && <span>🎨</span>}
                      {tool === 'Webpack' && <span>⚙️</span>}
                      {tool === 'Jest' && <span>🧪</span>}
                      {tool === 'GraphQL' && <span>📊</span>}
                    </div>
                    <span className="text-sm font-medium">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};