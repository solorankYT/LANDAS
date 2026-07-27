'use client'
import { Head, Link, usePage } from '@inertiajs/react';
import {
  GraduationCap,
  Clock,
  Award,
  CheckCircle,
  Menu,
  X,
  ChevronRight,
  FileText,
} from 'lucide-react'
import { useState } from 'react';
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { dashboard, login } from '@/routes';




interface NavLinkProps {
  href: string
  children: ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
    >
      {children}
    </a>
  )
}

interface StepProps {
  number: number
  title: string
  description: string
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
        {number}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2 text-sm">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

interface ChecklistItemProps {
  text: string
}

function ChecklistItem({ text }: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <p className="text-gray-700">{text}</p>
    </div>
  )
}

interface DocumentItemProps {
  icon: ReactNode
  text: string
}

function DocumentItem({ icon, text }: DocumentItemProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex-shrink-0 text-primary">{icon}</div>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  )
}

export default function LandasLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { auth } = usePage().props;

  return (


    <div className="min-h-screen bg-white">
        <Head title="Welcome" />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">LANDAS</h1>
                <p className="text-xs text-gray-600">Mandaluyong CLC</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#requirements">Requirements</NavLink>
              <NavLink href="#apply">How to Apply</NavLink>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                {/* <Link
                                    href={register()}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link> */}
                            </>
                        )}


              <Button
                size="sm"
                onClick={() => (window.location.href = '/register')}
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <div className="flex flex-col gap-3 py-3">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#requirements">Requirements</NavLink>
                <NavLink href="#apply">How to Apply</NavLink>
                <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-gray-200">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => (window.location.href = '/login')}
                  >
                    Sign In
                  </Button>
                  <Button
                    size="sm"
                    className="w-full"
                    onClick={() => (window.location.href = '/register')}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
                Start Your ALS Journey Today
              </h1>
              <p className="text-lg text-gray-700 mb-8 text-balance">
                Apply for the Alternative Learning System program at Mandaluyong
                Community Learning Center. Free enrollment, flexible learning, and a
                path to your Functional Literacy Certificate.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={() => (window.location.href = '/register')}
                >
                  Apply Now
                </Button>
                <Button
                  
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById('about')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Learn More
                </Button>
              </div>
            </div>
            {/* Illustration placeholder */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                <img src="/image/graduation.jpg" alt="Graduation Illustration" className="w-3/4 h-auto rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ALS Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is ALS?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The Alternative Learning System is a government program designed to provide
              educational opportunities for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Free Education"
              description="ALS is a government program that provides free non-formal education for out-of-school youth and adults"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="Flexible Schedule"
              description="Learn at your own pace with modules designed around your schedule and lifestyle"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="Earn a Certificate"
              description="Pass the Accreditation & Equivalency (A&E) test and earn a certificate equivalent to elementary or secondary education"
            />
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section id="requirements" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Can Apply?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Check if you meet the basic eligibility requirements for the ALS program.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <ChecklistItem text="Out-of-school youth aged 15 and above" />
              <ChecklistItem text="Adults who did not finish elementary or high school" />
              <ChecklistItem text="Residents of Mandaluyong City" />
              <ChecklistItem text="Willing to attend ALS sessions at the CLC" />

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Not sure if you qualify?</span> Apply
                  anyway and our coordinators will assess your eligibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section id="apply" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Follow these simple steps to start your ALS journey with us.
            </p>
          </div>

          {/* Desktop Steps */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 mb-12">
            <Step
              number={1}
              title="Create an Account"
              description="Register using your email address"
            />
            <div className="flex items-start justify-center pt-6 text-primary">
              <ChevronRight className="w-6 h-6" />
            </div>
            <Step
              number={2}
              title="Fill Out the Form"
              description="Complete your applicant profile and personal information"
            />
            <div className="flex items-start justify-center pt-6 text-primary">
              <ChevronRight className="w-6 h-6" />
            </div>
            <Step
              number={3}
              title="Upload Requirements"
              description="Submit required documents for verification"
            />
            <div className="col-span-5 flex justify-center">
              <div className="w-1 h-8 bg-gray-300" />
            </div>
            <Step
              number={4}
              title="Wait for Approval"
              description="Our coordinators will review your application"
            />
            <div className="flex items-start justify-center pt-6 text-primary">
              <ChevronRight className="w-6 h-6" />
            </div>
            <Step
              number={5}
              title="Access Materials"
              description="Once approved, access ALS modules"
            />
          </div>

          {/* Mobile Steps */}
          <div className="md:hidden space-y-4">
            {[
              {
                n: 1,
                title: 'Create an Account',
                desc: 'Register using your email address',
              },
              {
                n: 2,
                title: 'Fill Out the Form',
                desc: 'Complete your applicant profile',
              },
              {
                n: 3,
                title: 'Upload Requirements',
                desc: 'Submit required documents',
              },
              {
                n: 4,
                title: 'Wait for Approval',
                desc: 'Our coordinators will review',
              },
              {
                n: 5,
                title: 'Access Materials',
                desc: 'Once approved, access ALS modules',
              },
            ].map((step) => (
              <div key={step.n}>
                <Step
                  number={step.n}
                  title={step.title}
                  description={step.desc}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => (window.location.href = '/register')}
            >
              Start Your Application
            </Button>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You&apos;ll Need
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Prepare these documents for your application.
            </p>
          </div>

          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <DocumentItem icon={<FileText className="w-5 h-5" />} text="PSA Birth Certificate" />
            <DocumentItem
              icon={<FileText className="w-5 h-5" />}
              text="Valid Government ID (or barangay certificate)"
            />
            <DocumentItem
              icon={<FileText className="w-5 h-5" />}
              text="1x1 or 2x2 ID photo"
            />
            <DocumentItem
              icon={<FileText className="w-5 h-5" />}
              text="Proof of residence (barangay clearance or utility bill)"
            />
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <span className="font-semibold">💡 Tip:</span> All documents will be
              uploaded digitally. No need to submit physical copies initially.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to take the next step?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Registration is free and only takes a few minutes. Start your journey to
            educational success today.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => (window.location.href = '/register')}
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-semibold text-white mb-1">LANDAS App</p>
              <p className="text-sm">© 2025 Mandaluyong Community Learning Center</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="/login"
                className="hover:text-white transition-colors"
              >
                Sign In
              </a>
              <a
                href="/register"
                className="hover:text-white transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  )
}
