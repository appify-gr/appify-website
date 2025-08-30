import { FaCode, FaCog, FaUsers } from "react-icons/fa";
import Link from "next/link";
import { ProjectsSwiper } from "./ProjectSwiper.client";

//------------------------------------------------------------------------

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background Logo Behind Heading */}
        <div className="hidden sm:flex absolute inset-0 pointer-events-none items-center justify-center opacity-3 px-10">
          <span
            className="text-gray-300"
            style={{
              fontFamily: "Nasalization, sans-serif",
              fontSize: "15rem",
            }}
          >
            APPIFY
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center">
              <h1
                className="text-4xl md:text-5xl font-medium text-gray-100 mb-6"
                style={{ fontFamily: "Nasalization, sans-serif" }}
              >
                Software Solutions
              </h1>
              <div className="w-16 h-0.5 bg-slate-400 mx-auto mb-8 opacity-60"></div>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                We create unique and tailor-made enterprise software solutions
                that transform your business operations and drive growth
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent "></div>
      </div>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2
              className="text-2xl font-medium text-gray-200 text-center mb-12"
              style={{ fontFamily: "Nasalization, sans-serif" }}
            >
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8">
                <div className="bg-blue-500/20 border border-blue-400/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <FaCode className="text-blue-300 text-lg" />
                </div>
                <h3 className="text-lg font-medium text-gray-200 mb-4">
                  Custom Development
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tailored software solutions built from the ground up to meet
                  your specific business requirements and workflow needs.
                </p>
              </div>

              <div className="p-8">
                <div className="bg-emerald-500/20 border border-emerald-400/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <FaCog className="text-emerald-300 text-lg" />
                </div>
                <h3 className="text-lg font-medium text-gray-200 mb-4">
                  System Integration
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Seamlessly connect your existing systems and processes with
                  new solutions for improved efficiency and data flow.
                </p>
              </div>

              <div className="p-8">
                <div className="bg-violet-500/20 border border-violet-400/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <FaUsers className="text-violet-300 text-lg" />
                </div>
                <h3 className="text-lg font-medium text-gray-200 mb-4">
                  Enterprise Solutions
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Scalable enterprise-grade applications designed to grow with
                  your business and support complex organizational structures.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent "></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2
              className="text-2xl font-medium text-gray-200 text-center mb-12"
              style={{ fontFamily: "Nasalization, sans-serif" }}
            >
              Our Projects
            </h2>
            <ProjectsSwiper />
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent "></div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="p-10">
              <div className="text-center mb-8">
                <h2
                  className="text-2xl font-medium text-gray-200 mb-6"
                  style={{ fontFamily: "Nasalization, sans-serif" }}
                >
                  About APPIFY
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  We are a software company specializing in creating unique,
                  tailor-made enterprise software solutions. Our team combines
                  technical expertise with deep business understanding to
                  deliver solutions that truly make a difference in how
                  organizations operate.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3
                    className="text-lg font-medium text-gray-300 mb-4"
                    style={{ fontFamily: "Nasalization, sans-serif" }}
                  >
                    Our Approach
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    We believe every business is unique, which is why we
                    don&rsquo;t offer one-size-fits-all solutions. Instead, we
                    work closely with our clients to understand their specific
                    challenges and create software that addresses their exact
                    needs.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-medium text-gray-300 mb-4"
                    style={{ fontFamily: "Nasalization, sans-serif" }}
                  >
                    Our Expertise
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    With years of experience in enterprise software development,
                    we have the technical skills and business acumen to tackle
                    complex projects and deliver results that exceed
                    expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="p-10">
              <div className="text-center">
                <h2 className="text-2xl font-medium text-gray-200 mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let&rsquo;s discuss your project and how we can create the
                  perfect software solution for your business
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400">
                      <span className="font-medium text-gray-300">Email:</span>
                      <a
                        href="mailto:info@app-ify.com"
                        className="text-slate-300 hover:text-slate-200 ml-2 underline decoration-slate-500 underline-offset-2 transition-colors duration-200"
                      >
                        info@app-ify.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">
                      <span className="font-medium text-gray-300">Phone:</span>
                      <Link
                        prefetch={true}
                        href="tel:+306947813200"
                        className="text-slate-300 hover:text-slate-200 ml-2 transition-colors duration-200"
                      >
                        +306947813200
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
