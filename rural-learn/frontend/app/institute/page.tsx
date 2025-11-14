'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BookOpenIcon,
  PencilSquareIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const instituteNavItems = [
  { href: '/institute/student-enrollment', label: 'Student enrollment' },
  { href: '/institute/test-conduction', label: 'Test conduction' },
  { href: '/institute/performance-analysis', label: 'Performance analysis' },
  { href: '/institute/paper-generation', label: 'Paper generate' },
  { href: '/institute/study-material', label: 'Study material' },
  { href: '/institute/notes-generation', label: 'Notes generate' },
  { href: '/institute/exam-conduct', label: 'Exam conduct' }
]

const features = [
  {
    slug: 'student-enrollment',
    title: 'Student Enrollment',
    description: 'Digitally enroll rural students, maintain attendance, and build institute-wise student records.',
    icon: UserGroupIcon,
    accent: 'from-emerald-500/10 to-emerald-500/30'
  },
  {
    slug: 'test-conduction',
    title: 'Test Conduction',
    description: 'Plan and conduct secure online/offline tests with clear timetables and rules.',
    icon: ClipboardDocumentListIcon,
    accent: 'from-sky-500/10 to-sky-500/30'
  },
  {
    slug: 'performance-analysis',
    title: 'Performance Analysis',
    description: 'Track class-wise and subject-wise performance with easy-to-read insights.',
    icon: ChartBarIcon,
    accent: 'from-violet-500/10 to-violet-500/30'
  },
  {
    slug: 'paper-generation',
    title: 'Paper Generation',
    description: 'Generate balanced question papers with difficulty levels and blueprints.',
    icon: DocumentTextIcon,
    accent: 'from-amber-500/10 to-amber-500/30'
  },
  {
    slug: 'study-material',
    title: 'Study Material',
    description: 'Provide chapter-wise notes, worksheets, and reference links for every subject.',
    icon: BookOpenIcon,
    accent: 'from-rose-500/10 to-rose-500/30'
  },
  {
    slug: 'notes-generation',
    title: 'Notes Generation',
    description: 'Auto-generate simple language notes from videos and topics using AI.',
    icon: PencilSquareIcon,
    accent: 'from-teal-500/10 to-teal-500/30'
  },
  {
    slug: 'exam-conduct',
    title: 'Exam Conduct',
    description: 'Manage full exam cycles – schedule, invigilation, anti-cheating, and reports.',
    icon: ShieldCheckIcon,
    accent: 'from-indigo-500/10 to-indigo-500/30'
  }
]

export default function InstitutePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated background orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-primary-500/30 blur-3xl"/>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl"/>
      </div>

      <header className="border-b border-white/5 bg-slate-950/60 backdrop-blur-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <AcademicCapIcon className="h-8 w-8 text-primary-400" />
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Rural Learn</p>
              <p className="text-base font-semibold text-white">Institute Panel</p>
            </div>
          </Link>
          <Link
            href="/dashboard"
            className="text-xs sm:text-sm px-4 py-2 rounded-full border border-white/10 text-slate-200 hover:bg-white/5 transition"
          >
            Back to student view
          </Link>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-3">
          <nav className="border-t border-white/10 pt-3 overflow-x-auto">
            <div className="flex gap-2 sm:gap-3 text-[11px] sm:text-xs">
              {instituteNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/10 text-slate-200 hover:bg-primary-500/30 hover:border-primary-400/60 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Hero */}
        <section className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            >
              Smart
              <span className="bg-gradient-to-r from-primary-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent"> Institute</span>
              <br />
              Operations for Rural Schools
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-slate-300 max-w-xl mb-6"
            >
              Manage enrollment, tests, question papers, and performance analysis from one beautiful, simple
              interface – designed especially for low-resource rural institutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/institute/student-enrollment"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 text-sm font-medium shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition transform hover:-translate-y-0.5"
              >
                Start with Student Enrollment
              </Link>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live analytics, AI-assisted notes & exam tools included.
              </div>
            </motion.div>
          </div>

          {/* Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-72 sm:h-80 lg:h-96"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/20 via-sky-500/10 to-violet-500/20 border border-white/10 backdrop-blur-xl" />

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-4 right-12 top-6 bg-slate-950/70 border border-white/10 rounded-2xl p-4 flex items-center justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Today7s overview</p>
                <p className="text-sm font-semibold">128 students active</p>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-1 text-xs bg-emerald-500/15 text-emerald-300 px-2 py-1 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  92% attendance
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-8 right-4 top-32 bg-slate-950/80 border border-white/10 rounded-2xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-slate-300">Performance snapshot</p>
                <span className="text-[10px] px-2 py-1 rounded-full bg-primary-500/20 text-primary-200">Rural Grade 10</span>
              </div>
              <div className="flex items-end gap-2 h-20">
                {[65, 78, 54, 88, 72].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="w-full bg-gradient-to-t from-primary-500 to-sky-400"
                        style={{ height: `${value}%`, minHeight: '10%' }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-400">S{index + 1}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-3 bottom-6 w-40 bg-slate-950/80 border border-emerald-400/30 rounded-2xl p-3"
            >
              <p className="text-[11px] text-slate-300 mb-2">Upcoming exam</p>
              <p className="text-xs font-semibold mb-1">Science Unit Test</p>
              <p className="text-[11px] text-slate-400 mb-2">Tomorrow • 10:00–11:00 AM</p>
              <div className="flex items-center justify-between text-[10px] text-slate-300">
                <span>Anti-cheat: ON</span>
                <span className="text-emerald-300">Auto submit</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Feature grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold">Institute tools</h2>
            <p className="text-xs sm:text-sm text-slate-300">Built for low bandwidth and shared devices in villages.</p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <Link key={feature.slug} href={`/institute/${feature.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5 cursor-pointer"
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 hover:opacity-60 transition-opacity`} />

                  <div className="relative flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-slate-900/80 flex items-center justify-center border border-white/10">
                      <feature.icon className="h-6 w-6 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-white">{feature.title}</h3>
                      <p className="text-[11px] sm:text-xs text-slate-300">Tap to open detailed module</p>
                    </div>
                  </div>

                  <p className="relative text-xs sm:text-sm text-slate-200 mb-3 line-clamp-3">
                    {feature.description}
                  </p>

                  <div className="relative flex items-center justify-between text-[11px] text-slate-300">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      Institute ready
                    </span>
                    <span className="opacity-80">Open module →</span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
