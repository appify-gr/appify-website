import { FaApple, FaGooglePlay, FaMobile } from "react-icons/fa";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500 p-4 rounded-full">
              <FaMobile className="text-4xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Download App
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Access Getaways Management on your mobile device
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700">
          {/* App Store Buttons */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* iOS App Store */}
            <div>
              <a
                href="https://apps.apple.com/us/app/getaways-management/id1621862849"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className=" p-3 rounded-full mr-4">
                      <FaApple className="text-2xl text-white" size={30} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Download on the</p>
                      <h3 className="text-xl font-semibold text-white">
                        App Store
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Available for iPhone and iPad
                  </p>
                </div>
              </a>
            </div>

            {/* Google Play Store */}
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.nospipi.GetawaysManagement"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className=" p-3 rounded-full mr-4">
                      <FaGooglePlay className="text-2xl text-white" size={28} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Get it on</p>
                      <h3 className="text-xl font-semibold text-white">
                        Google Play
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Available for Android devices
                  </p>
                </div>
              </a>
            </div>
          </div>
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
