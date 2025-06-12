const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg">For Getaways Management</p>
          <p className="text-gray-400 text-sm mt-2">
            Last updated: June 12, 2025
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700">
          {/* Introduction */}
          <div className="mb-10">
            <p className="text-gray-300 leading-relaxed text-lg">
              Getaways Management (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) is committed to protecting your privacy. This
              Privacy Policy describes how your personal information is
              collected, used, and shared when you use our mobile application
              (&ldquo;App&rdquo;).
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Information We Collect
            </h2>
            <p className="text-gray-300 mb-6">
              Depending on your use of the App, we may collect the following
              types of information:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <h3 className="text-xl font-semibold text-white mb-4">
                  a. Personal Information
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Full name
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Email address
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Phone number
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Role or job title (if used for internal team management)
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <h3 className="text-xl font-semibold text-white mb-4">
                  b. Usage Data
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    App usage statistics (e.g., feature usage, screen visits)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Crash logs and performance data
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Device information (e.g., device model, OS version, language
                    settings)
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <h3 className="text-xl font-semibold text-white mb-4">
                  c. Location Data
                </h3>
                <p className="text-gray-300">
                  If enabled and necessary for the app&apos;s functionality
                  (e.g., mapping or tour tracking), we may collect location data
                  even when the app is in the background or closed.
                </p>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <h3 className="text-xl font-semibold text-white mb-4">
                  d. Uploaded Photos
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Photos uploaded through the App become the property of the
                    application and are stored solely for the purpose of
                    application operations.
                  </p>
                  <div className="bg-green-900 border-l-4 border-green-500 p-4">
                    <p className="text-gray-300">
                      <span className="font-semibold text-green-400">
                        Important:
                      </span>{" "}
                      Uploaded photos are not given, sold, or used by anyone
                      outside of the application's intended functionality.
                    </p>
                  </div>
                  <div className="bg-blue-900 border-l-4 border-blue-500 p-4">
                    <p className="text-gray-300">
                      If you upload a picture by mistake, you can contact us at{" "}
                      <span className="font-semibold text-blue-400">
                        info@app-ify.com
                      </span>{" "}
                      to request removal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              How We Use Your Information
            </h2>
            <p className="text-gray-300 mb-4">We use your information to:</p>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Provide and maintain the App
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Improve functionality, performance, and user experience
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Communicate with you regarding updates, features, or support
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Ensure security and prevent misuse
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Comply with legal obligations
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              Data Sharing and Disclosure
            </h2>
            <div className="bg-red-900 border-l-4 border-red-500 p-4 mb-6">
              <p className="text-gray-300 font-semibold">
                We do <span className="text-red-400 font-bold">not</span> sell
                or rent your personal data.
              </p>
            </div>
            <p className="text-gray-300 mb-4">However, we may share it with:</p>
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                <span className="font-semibold text-white">
                  Authorized staff members
                </span>{" "}
                <span className="text-gray-300">within your organization</span>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                <span className="font-semibold text-white">
                  Service providers
                </span>{" "}
                <span className="text-gray-300">
                  (e.g., cloud hosting, analytics tools) under strict
                  confidentiality agreements
                </span>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                <span className="font-semibold text-white">
                  Law enforcement or government agencies
                </span>
                <span className="text-gray-300">, when legally required</span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              Data Security
            </h2>
            <div className="bg-green-900 rounded-lg p-6 border border-green-700">
              <p className="text-gray-300 leading-relaxed">
                We take data security seriously. All information is stored
                securely and access is limited to authorized personnel. We use
                industry-standard encryption and security practices to protect
                your data.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                5
              </span>
              Your Rights
            </h2>
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <div className="bg-gray-700 rounded-lg p-6 mb-4 border border-gray-600">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Access and review the personal information we hold about you
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Request correction or deletion of your data
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Withdraw consent for data collection (subject to the
                  functionality impact)
                </li>
              </ul>
            </div>
            <div className="bg-blue-900 rounded-lg p-4 border border-blue-700">
              <p className="text-gray-300">
                To exercise your rights, contact us at:{" "}
                <span className="font-semibold text-blue-400">
                  info@app-ify.com
                </span>
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                6
              </span>
              Data Retention
            </h2>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <p className="text-gray-300 leading-relaxed">
                We retain personal data only as long as necessary for the
                purposes outlined in this policy or as required by law. Once no
                longer needed, data is securely deleted.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                7
              </span>
              Third-Party Services
            </h2>
            <div className="bg-yellow-900 border-l-4 border-yellow-500 p-6 border border-yellow-700">
              <p className="text-gray-300 leading-relaxed">
                The App may integrate with third-party services (e.g., Firebase,
                Google Maps). These services may collect data under their own
                privacy policies. We recommend reviewing their policies
                separately.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                8
              </span>
              Changes to This Policy
            </h2>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify users of significant changes via in-app notifications or
                email. Continued use of the App after changes indicates your
                agreement with the updated policy.
              </p>
            </div>
          </section>

          {/* Section 9 - Contact */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                9
              </span>
              Contact Us
            </h2>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-8 border border-gray-600">
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy
                or our practices, please contact us at:
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <span className="text-sm font-bold">G</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">
                      Getaways Management
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <span className="text-sm">✉</span>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      <span className="font-semibold">Email:</span>
                      <a
                        href="mailto:info@app-ify.com"
                        className="text-blue-400 hover:text-blue-300 ml-2 underline"
                      >
                        info@app-ify.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <span className="text-sm">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-300">
                      <span className="font-semibold">Phone:</span>
                      <a
                        href="tel:+306947813200"
                        className="text-blue-400 hover:text-blue-300 ml-2"
                      >
                        +306947813200
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            © 2025 Getaways Management. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
