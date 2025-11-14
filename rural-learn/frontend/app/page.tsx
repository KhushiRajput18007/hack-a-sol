'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  HeartIcon,
  RocketLaunchIcon,
  CheckIcon,
  ArrowRightIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const AnimatedBlob = ({ delay = 0 }) => (
  <motion.div
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 4, delay, repeat: Infinity }}
    className="absolute opacity-20"
  >
    <div className="w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl" />
  </motion.div>
)

const FloatingIcon = ({ icon: Icon, delay = 0, className = '' }: { icon: React.ComponentType<{ className?: string }>, delay?: number, className?: string }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity }}
    className={className}
  >
    <Icon className="h-16 w-16" />
  </motion.div>
)

const Counter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let start = 0
    const increment = end / (duration * 1000 / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration])

  return <span>{count}</span>
}

export default function HomePage() {
  const [userType, setUserType] = useState<'student' | 'teacher' | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: LightBulbIcon,
      title: 'AI-Powered Learning',
      description: 'Get personalized content and explanations powered by Gemini AI',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Mock Test Prediction',
      description: 'Predict exam performance with 50% accuracy across JEE, NEET, CLAT, CAT',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Career Roadmaps',
      description: 'Clear path from basics to advanced with AI-generated roadmaps',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Teacher Collaboration',
      description: 'Personalized content adapted to teaching styles',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: HeartIcon,
      title: 'Mental Health Support',
      description: 'Stress management and motivation tracking',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: AcademicCapIcon,
      title: 'Progress Tracking',
      description: 'Track growth with meaningful milestones and achievements',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const benefits = [
    'Access quality education from anywhere',
    'Learn at your own pace with AI tutors',
    'Get real-time feedback on your progress',
    'Connect with top educators globally',
    'Prepare for competitive exams effectively',
    'Build a personalized learning path'
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Student, Chhattisgarh',
      text: 'Rural Learn changed my life! I was able to prepare for JEE despite being in a remote village. The AI tutor explained concepts in Hindi perfectly!',
      avatar: '👩‍🎓'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Teacher, MP',
      text: 'As a single-teacher school instructor, this platform helps me manage 40+ students efficiently. The personalized content saves me hours of preparation.',
      avatar: '👨‍🏫'
    },
    {
      name: 'Ananya Patel',
      role: 'Student, Rural Area',
      text: 'The mock tests predicted my NEET score accurately! I felt confident going into the exam. Highly recommended for rural students!',
      avatar: '👩‍⚕️'
    }
  ]

  const faqs = [
    {
      q: 'Is there a free trial?',
      a: 'Yes, we offer 7 days of free access to explore all features. No credit card required!'
    },
    {
      q: 'What internet speed is required?',
      a: 'Our platform works on 2G networks! Perfect for rural areas with limited connectivity.'
    },
    {
      q: 'Can I download content offline?',
      a: 'Absolutely! Download courses and access them offline anytime, anywhere.'
    },
    {
      q: 'Do you support regional languages?',
      a: 'Yes! We support Hindi, Marathi, Gujarati, and more with AI-powered translations.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="min-h-screen text-slate-50 overflow-hidden">
      {/* Header */}
      <header className="bg-slate-900/60 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity }}>
                <AcademicCapIcon className="h-8 w-8 text-cyan-400" />
              </motion.div>
              <span className="text-2xl font-bold text-gradient">Rural Learn</span>
            </motion.div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Login
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/auth/register" className="btn-primary">
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Animated Background */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <AnimatedBlob delay={0} />
        <AnimatedBlob delay={2} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-300 text-sm font-medium">
                  🚀 Transforming Rural Education
                </span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Bridging the{' '}
                <span className="text-gradient">Education Gap</span>
                {' '}in Rural India
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-slate-300 mb-8 max-w-2xl">
                AI-powered education platform ensuring learning continuity for remote villages. From personalized courses to career guidance, we're transforming rural education.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setUserType('student')}
                  className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    userType === 'student'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 scale-105'
                      : 'bg-white/10 text-slate-200 border-2 border-white/20 hover:border-cyan-500/50 hover:bg-white/20'
                  }`}
                >
                  👨‍🎓 I'm a Student
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setUserType('teacher')}
                  className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    userType === 'teacher'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                      : 'bg-white/10 text-slate-200 border-2 border-white/20 hover:border-purple-500/50 hover:bg-white/20'
                  }`}
                >
                  👨‍🏫 I'm a Teacher
                </motion.button>
              </motion.div>

              {userType && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={userType === 'teacher' ? '/institute' : `/auth/register?type=${userType}`}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300"
                  >
                    {userType === 'teacher'
                      ? 'Open Institute Panel'
                      : 'Start Learning Now'}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              )}

              <motion.div variants={itemVariants} className="flex gap-6 mt-8 pt-8 border-t border-white/10">
                {[
                  { icon: '📱', text: 'Works on 2G networks' },
                  { icon: '🌍', text: '6+ languages' },
                  { icon: '✨', text: 'AI-powered' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm text-slate-400">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 md:h-full min-h-96"
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                <FloatingIcon icon={LightBulbIcon} delay={0} className="text-yellow-400" />
                <FloatingIcon icon={StarIcon} delay={0.5} className="text-purple-400 justify-end" />
                <FloatingIcon icon={ArrowTrendingUpIcon} delay={1} className="text-cyan-400" />
                <FloatingIcon icon={SparklesIcon} delay={1.5} className="text-pink-400 justify-end" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: 'Students Helped', value: 2500, suffix: '+' },
              { label: 'Active Schools', value: 150, suffix: '+' },
              { label: 'Success Rate', value: 50, suffix: '%' },
              { label: 'Teachers', value: 300, suffix: '+' }
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  <Counter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-slate-50 mb-4">
              Powerful Features for <span className="text-gradient">Everyone</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to ensure quality education reaches every corner of rural India
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl blur" style={{ backgroundImage: `linear-gradient(to right, var(--color-1), var(--color-2))` }} />
                  <div className={`relative card bg-gradient-to-br ${feature.color}/10 hover:${feature.color}/20 border border-white/10 group-hover:border-white/30`}>
                    <motion.div
                      animate={{ rotate: hoveredCard === index ? 10 : 0 }}
                      className={`inline-block p-4 bg-gradient-to-br ${feature.color} rounded-2xl mb-4`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-gradient transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: hoveredCard === index ? 0 : -10, opacity: hoveredCard === index ? 1 : 0 }}
                      className="mt-4 flex items-center text-cyan-400 font-medium"
                    >
                      Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl p-8 border border-white/10 backdrop-blur">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold mb-4 text-slate-50">Why Choose Rural Learn?</h3>
                <p className="text-slate-300 mb-8">
                  We're not just an app. We're a movement to democratize quality education in India.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group cursor-pointer"
                >
                  <div className="flex-shrink-0 pt-1">
                    <CheckIcon className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-slate-200 group-hover:text-slate-50 transition-colors">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-slate-50 mb-4">
              What <span className="text-gradient">Students & Teachers</span> Say
            </h2>
            <p className="text-xl text-slate-300">Real stories from real people in rural India</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card group hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{testimonial.avatar}</span>
                  <div>
                    <h4 className="font-bold text-slate-50">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic mb-4">"{testimonial.text}"</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-slate-50 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                variants={itemVariants}
                className="group card cursor-pointer"
              >
                <summary className="flex items-center justify-between font-bold text-slate-50 hover:text-cyan-400 transition-colors select-none">
                  {faq.q}
                  <motion.div
                    animate={{ rotate: [0, 180] }}
                    className="group-open:rotate-180 transition-transform"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                  </motion.div>
                </summary>
                <p className="mt-4 text-slate-300">{faq.a}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-bold text-slate-50 mb-6"
          >
            Ready to Transform Your <span className="text-gradient">Educational Journey?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 mb-8"
          >
            Join thousands of students and teachers already experiencing the power of personalized, AI-driven education
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/auth/register"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
              >
                Start Free 7-Day Trial
                <SparklesIcon className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/auth/login"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl border-2 border-white/20 hover:border-cyan-500/50 transition-all"
              >
                Sign In
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/90 border-t border-slate-800 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <AcademicCapIcon className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold">Rural Learn</span>
              </div>
              <p className="text-slate-400">Empowering rural education through technology</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-slate-50">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-slate-50">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-slate-50">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400">
            <p>© 2024 Rural Learn. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}