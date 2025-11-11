import { FaLinkedinIn, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111] text-gray-300 pt-16 pb-10 relative overflow-hidden">

    
      {/* CONTENT WRAPPER */}
      <div className="relative mx-auto max-w-7xl px-6">

        {/* TOP TEXT */}
        <h2 className="text-center text-2xl font-semibold tracking-wide mb-6">
          GET CONNECTED WITH US
        </h2>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-5 mb-10">
          <FaLinkedinIn className="w-6 h-6 hover:text-white transition" />
          <FaFacebookF className="w-6 h-6 hover:text-white transition" />
          <FaTwitter className="w-6 h-6 hover:text-white transition" />
          <FaYoutube className="w-6 h-6 hover:text-white transition" />
        </div>

        {/* DIVIDER LINE */}
        <div className="w-full border-t border-gray-700 mb-10"></div>

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* COMPANY */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">About Rizonn</a></li>
              <li><a href="#" className="hover:text-white">Awards</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* NEWS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">News & Events</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Blogs</a></li>
            </ul>
          </div>

          {/* CUSTOMER STORIES */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Stories</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            </ul>
          </div>

          {/* SUBSCRIPTION BOX */}
          <div>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your E-mail Address"
                className="w-full px-4 py-3 bg-[#222] text-gray-200 rounded-l focus:outline-none text-sm"
              />
              <button className="px-6 bg-white text-black font-semibold rounded-r text-sm">
                SUBMIT
              </button>
            </div>

            <p className="text-gray-400 text-xs mt-4 leading-relaxed">
              Sign up to receive Rizonn marketing emails. You can modify your
              subscription or unsubscribe at any time.
            </p>

            <p className="text-gray-400 text-xs mt-4 leading-relaxed">
              21076 Lake Parkway, Suite 106, Lake Forest, CA 92630
            </p>
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <div className="mt-12 text-center text-xs text-gray-500">
          <a href="#" className="hover:text-white">Web Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
}
