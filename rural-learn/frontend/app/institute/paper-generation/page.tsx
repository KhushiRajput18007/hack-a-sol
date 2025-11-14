'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  AcademicCapIcon,
  ArrowLeftIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const blueprint = [
  { type: 'Very Short (1 mark)', count: 8 },
  { type: 'Short (2 marks)', count: 6 },
  { type: 'Long (3 marks)', count: 4 },
  { type: 'Case study (4 marks)', count: 2 }
]

const instituteNavItems = [
  { href: '/institute/student-enrollment', label: 'Student enrollment' },
  { href: '/institute/test-conduction', label: 'Test conduction' },
  { href: '/institute/performance-analysis', label: 'Performance analysis' },
  { href: '/institute/paper-generation', label: 'Paper generate' },
  { href: '/institute/study-material', label: 'Study material' },
  { href: '/institute/notes-generation', label: 'Notes generate' },
  { href: '/institute/exam-conduct', label: 'Exam conduct' }
]

export default function PaperGenerationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/70 backdrop-blur-lg sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/institute" className="inline-flex items-center gap-2 text-slate-200 hover:text-white">
            <ArrowLeftIcon className="h-5 w-5" />
            <span className="text-sm">Back to institute</span>
          </Link>
          <div className="flex items-center gap-2">
            <AcademicCapIcon className="h-6 w-6 text-primary-300" />
            <p className="text-sm font-medium text-slate-200">Paper Generation</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-3">
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.4fr)] items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-semibold mb-3"
            >
              Generate balanced question papers in minutes.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-slate-300 text-sm sm:text-base"
            >
              Choose subject, class, language and difficulty mix. Rural Learn can help teachers design blueprints
              which follow state board guidelines and avoid repeated questions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 grid gap-3 text-xs"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-slate-300 mb-1">Subject</p>
                  <div className="rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-slate-200">
                    Mathematics
                  </div>
                </div>
                <div>
                  <p className="text-slate-300 mb-1">Class</p>
                  <div className="rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-slate-200">
                    Class 10
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-slate-300 mb-1">Difficulty mix</p>
                  <div className="rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-slate-200">
                    40% Easy • 40% Medium • 20% Hard
                  </div>
                </div>
                <div>
                  <p className="text-slate-300 mb-1">Language</p>
                  <div className="rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-slate-200">
                    Hindi + English
                  </div>
                </div>
              </div>
              <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary-500 text-[11px] font-medium px-4 py-2 shadow shadow-primary-500/40">
                <SparklesIcon className="h-4 w-4" />
                Generate blueprint with AI
              </button>
            </motion.div>
          </div>

          {/* Animated blueprint card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-primary-500/15 via-slate-900 to-slate-950 p-5 overflow-hidden text-xs"
          >
            <motion.div
              animate={{ rotate: [0, 1.5, -1.5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 right-0 h-32 w-32 rounded-3xl bg-primary-500/40 blur-3xl"
            />

            <div className="relative flex items-center justify-between mb-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-300">Question paper blueprint</p>
                <p className="text-sm text-slate-100">Maths • 80 marks • 3 hours</p>
              </div>
              <Cog6ToothIcon className="h-5 w-5 text-primary-100" />
            </div>

            <div className="space-y-2">
              {blueprint.map((row, index) => (
                <div key={row.type} className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-slate-200">{row.type}</p>
                    <p className="text-[10px] text-slate-400">Understanding + application</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 rounded-full bg-slate-900/80 overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: `${row.count * 10}%` }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                        className="h-full bg-gradient-to-r from-primary-400 via-sky-400 to-emerald-400"
                      />
                    </div>
                    <span className="text-slate-100 text-xs">x{row.count}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-white/20 bg-slate-950/70 px-3 py-2 text-[10px] text-slate-200">
              When linked to the backend, this module can auto-generate PDFs with questions, marking scheme, and
              answer key in both Hindi and English.
            </div>
          </motion.div>
        </section>

        <section className="text-[11px] sm:text-xs text-slate-400 border border-dashed border-white/10 rounded-2xl p-4">
          This page shows the design of the question paper generation system. Institutes can set templates once
          and re-use them for monthly tests or board exam practice papers.
        </section>
      </main>
    </div>
  )
}
