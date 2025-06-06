import { FaCode, FaCog, FaUsers, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-800/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-500 p-2 rounded-lg">
                <FaCode className="text-white text-xl" />
              </div>
              <span className="text-white text-2xl font-bold">APPify</span>
            </div>
            <div className="flex space-x-6">
              <Link
                prefetch={true}
                href="#services"
                className="text-gray-300 hover:text-white"
              >
                Services
              </Link>
              <Link
                prefetch={true}
                href="#about"
                className="text-gray-300 hover:text-white"
              >
                About
              </Link>
              <Link
                prefetch={true}
                href="#contact"
                className="text-gray-300 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Enterprise Software
            <span className="block text-blue-400">Solutions</span>
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            We create unique and tailor-made enterprise software solutions that
            transform your business operations and drive growth
          </p>
        </div>

        {/* Services Section */}
        <section id="services" className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FaCode className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Custom Development
              </h3>
              <p className="text-gray-300">
                Tailored software solutions built from the ground up to meet
                your specific business requirements and workflow needs.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FaCog className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                System Integration
              </h3>
              <p className="text-gray-300">
                Seamlessly connect your existing systems and processes with new
                solutions for improved efficiency and data flow.
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FaUsers className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Enterprise Solutions
              </h3>
              <p className="text-gray-300">
                Scalable enterprise-grade applications designed to grow with
                your business and support complex organizational structures.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                About Appify
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We are a software company specializing in creating unique,
                tailor-made enterprise software solutions. Our team combines
                technical expertise with deep business understanding to deliver
                solutions that truly make a difference in how organizations
                operate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Our Approach
                </h3>
                <p className="text-gray-300 mb-4">
                  We believe every business is unique, which is why we
                  don&rsquo;t offer one-size-fits-all solutions. Instead, we
                  work closely with our clients to understand their specific
                  challenges and create software that addresses their exact
                  needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Our Expertise
                </h3>
                <p className="text-gray-300 mb-4">
                  With years of experience in enterprise software development,
                  we have the technical skills and business acumen to tackle
                  complex projects and deliver results that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-12 border border-blue-800">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Let&rsquo;s discuss your project and how we can create the
                perfect software solution for your business
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-blue-100">
                    <span className="font-semibold">Email:</span>
                    <a
                      href="mailto:info@app-ify.com"
                      className="text-blue-300 hover:text-blue-200 ml-2 underline"
                    >
                      info@app-ify.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-blue-100">
                    <span className="font-semibold">Phone:</span>
                    <Link
                      prefetch={true}
                      href="tel:+306947813200"
                      className="text-blue-300 hover:text-blue-200 ml-2"
                    >
                      +306947813200
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="bg-blue-500 p-1 rounded">
              <FaCode className="text-white text-sm" />
            </div>
            <span className="text-gray-300 font-semibold">Appify</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Enterprise Software Solutions
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <Link
              prefetch={true}
              href="/apps/getaways-management/privacy-policy"
              className="text-gray-400 hover:text-gray-300 text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              href="/apps/getaways-management/terms-of-service"
              prefetch={true}
              className="text-gray-400 hover:text-gray-300 text-sm"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Appify. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
