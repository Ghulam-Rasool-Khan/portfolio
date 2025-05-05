import Image from "next/image";
import { assets } from "../../../assets/assets";

function Footer({isDarkMode}) {
  return (
    <div className="mt-20">
      <div className="text-center">
        {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-36 mx-auto mb-2" /> */}
        <p className="w-36 mx-auto mb-2 text-3xl font-semibold">GR.Khan</p>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          aanarang456@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 dark:border-t dark:border-white">
        <p>© 2025 GR.Khan. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li><a href="https://github.com/Ghulam-Rasool-Khan">Github</a></li>
          <li><a href="#contact">LinkdIn</a></li>
          <li><a href="#contact">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}
export default Footer;