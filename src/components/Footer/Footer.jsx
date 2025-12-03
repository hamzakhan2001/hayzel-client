import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "./../../assets/hayzel-logo.png";

export default function Footer() {
  return (
    <footer className="bg-deepNavyBlue text-white py-16 px-10 sm:px-12 h-auto w-full md:px-14 lg:px-20 xl:px-28 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Branding + CTA */}
        <div className="flex flex-col">
          <img src={logo} alt="logo" className="mb-5 w-40 sm:w-48 md:w-52" />

          <p className="text-md mb-6 leading-relaxed">
            We help businesses grow online with data-driven digital marketing.
          </p>

          <a
            href="mailto:info@hayzeltech.com?subject=Free%20Consultation%20Request&body=Hi%20HayzelX%20Technologies%2C%0D%0A%0D%0AI%20am%20interested%20in%20your%20digital%20marketing%20services.%20Please%20contact%20me%20at%20your%20earliest%20convenience."
            className="font-lato cursor-pointer px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#0077b6] hover:from-[#0077b6] hover:to-[#00b4d8] transition-all duration-300 shadow-lg w-fit"
          >
            Get Free Consultation
          </a>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-vibrantBlue">Brand Management</a></li>
            <li><a href="#services" className="hover:text-vibrantBlue">Email Marketing</a></li>
            <li><a href="#services" className="hover:text-vibrantBlue">SEO & SEM</a></li>
            <li><a href="#services" className="hover:text-vibrantBlue">Content Marketing</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-2">
            Hayzel Technologies, Defense Avenue, DHA Phase 1, near Foundation University Islamabad, Pakistan
          </p>
          <p className="text-sm mb-2">+971 4 444 1444</p>
          <p className="text-sm mb-3">info@hayzeltech.com</p>

          <div className="flex gap-5 text-lg">
            <a href="https://www.facebook.com/HayzelTech" target="_blank" className="hover:text-vibrantBlue"><FaFacebookF /></a>
            <a href="https://www.instagram.com/hayzel.technologies/?hl=en" target="_blank" className="hover:text-vibrantBlue"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/hayzeltechnologies" target="_blank" className="hover:text-vibrantBlue"><FaLinkedinIn /></a>
            <a href="https://x.com/HayzelTech" target="_blank" className="hover:text-vibrantBlue"><FaXTwitter /></a>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Location</h3>
          <div className="rounded-lg overflow-hidden w-full h-40 shadow-lg">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446013.135544638!2d70.01480240000001!3d32.49282141957981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed0070635ee1%3A0x1fa59f69026b3653!2sHayzel%20Technologies!5e0!3m2!1sen!2s!4v1756135835201!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-300 text-sm mt-10 border-t border-gray-700 pt-4">
        © 2025 Hayzel Technologies. All rights reserved.
      </div>
    </footer>
  );
}
