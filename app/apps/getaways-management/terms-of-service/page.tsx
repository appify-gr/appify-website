const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-300 text-lg">For Getaways Management</p>
          <p className="text-gray-400 text-sm mt-2">
            Last updated: June 6, 2025
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700">
          {/* Introduction */}
          <div className="mb-10">
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Welcome to{" "}
              <span className="font-semibold text-white">
                Getaways Management
              </span>
              . These Terms of Service (&ldquo;Terms&rdquo;) govern your access
              to and use of the Getaways Management mobile application (the
              &ldquo;App&rdquo;), operated by{" "}
              <span className="font-semibold text-white">APPIFY P.C.</span>{" "}
              (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;).
            </p>
            <div className="bg-blue-900 border-l-4 border-blue-500 p-4">
              <p className="text-gray-300">
                By accessing or using the App, you agree to be bound by these
                Terms. If you do not agree, please do not use the App.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Eligibility
            </h2>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <p className="text-gray-300 leading-relaxed">
                You must be an authorized employee, contractor, or partner of an
                organization using the Getaways Management App. Unauthorized
                access or use is strictly prohibited.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              Use of the App
            </h2>
            <p className="text-gray-300 mb-4">
              You agree to use the App solely for legitimate, professional
              purposes related to your role in the organization. You may not:
            </p>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Use the App for any illegal, unauthorized, or fraudulent
                  activities
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Share your login credentials with others
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Attempt to gain unauthorized access to other users&rsquo; data
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  Interfere with the operation of the App or attempt to
                  reverse-engineer any part of it
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
              User Accounts
            </h2>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <p className="text-gray-300 leading-relaxed">
                To use the App, you may need to create an account or log in
                through your organization. You are responsible for maintaining
                the confidentiality of your login information and for all
                activities that occur under your account.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              Data and Content
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <p className="text-gray-300 leading-relaxed mb-4">
                  All data you input into the App (e.g., bookings, staff
                  assignments, schedules) must be accurate and relevant to your
                  work. We reserve the right to monitor usage and remove or
                  restrict content that violates these Terms.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We do not claim ownership of the data you or your organization
                  provides but may use anonymized data to improve our services.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                5
              </span>
              Intellectual Property
            </h2>
            <div className="bg-yellow-900 border-l-4 border-yellow-500 p-6 border border-yellow-700">
              <p className="text-gray-300 leading-relaxed">
                All content, code, trademarks, and intellectual property in the
                App are owned by or licensed to us. You may not copy, reproduce,
                or distribute any part of the App without our written
                permission.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                6
              </span>
              Updates and Availability
            </h2>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <p className="text-gray-300 leading-relaxed">
                We may update the App at any time to improve functionality or
                security. We are not responsible for temporary downtime, data
                loss, or feature unavailability.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                7
              </span>
              Termination
            </h2>
            <div className="bg-red-900 border-l-4 border-red-500 p-6 border border-red-700">
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to suspend or terminate your access to the
                App at any time, with or without notice, if you violate these
                Terms or if your access is no longer authorized by your
                organization.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                8
              </span>
              Limitation of Liability
            </h2>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <p className="text-gray-300 leading-relaxed">
                To the fullest extent permitted by law, we are not liable for
                any indirect, incidental, special, or consequential damages,
                including data loss or service interruptions, arising from your
                use of the App.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                9
              </span>
              Indemnification
            </h2>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify and hold us harmless from any claims,
                losses, damages, liabilities, and expenses (including legal
                fees) arising out of your misuse of the App or violation of
                these Terms.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                10
              </span>
              Governing Law
            </h2>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by the laws of{" "}
                <span className="font-semibold text-white">
                  [Insert Country or Region, e.g., Greece or the European Union]
                </span>
                , without regard to conflict of law principles. Any disputes
                will be resolved in the competent courts of{" "}
                <span className="font-semibold text-white">[Insert City]</span>.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                11
              </span>
              Changes to the Terms
            </h2>
            <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
              <p className="text-gray-300 leading-relaxed">
                We may modify these Terms at any time. Updates will be made
                available within the App or via email. Continued use after
                changes means you accept the updated Terms.
              </p>
            </div>
          </section>

          {/* Section 12 - Contact */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                12
              </span>
              Contact Us
            </h2>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-8 border border-gray-600">
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have any questions or concerns about these Terms, please
                contact us at:
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
