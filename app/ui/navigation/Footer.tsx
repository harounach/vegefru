import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div>
              <Link href="/" className={`flex items-center gap-4`}>
                <Image
                  src="/images/logo.svg"
                  width={56}
                  height={56}
                  alt="Sunny Coffee Shop"
                  className="h-12 w-12 md:h-14 md:w-14"
                />

                <span className="text-2xl text-white">VegeFru</span>
              </Link>
            </div>

            <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  title="Facebook"
                >
                  <span className="sr-only">Facebook</span>
                  <BsFacebook className="text-2xl" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  title="Instagram"
                >
                  <span className="sr-only">Instagram</span>
                  <BsInstagram className="text-2xl" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  title="Twitter"
                >
                  <span className="sr-only">Twitter</span>
                  <BsTwitterX className="text-2xl" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  title="YoutTube"
                >
                  <span className="sr-only">YoutTube</span>
                  <BsYoutube className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium text-white">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-200 hover:underline">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-200 hover:underline">
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-200 hover:underline">
                    Accounts Review
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-200 hover:underline">
                    Contact
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-200 hover:underline">
                    FAQs
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-200 hover:underline">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-200 hover:underline">
                    Accessibility
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-200 hover:underline">
                    Returns Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-200 hover:underline">
                    Refund Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-200 hover:underline">
                    Hiring Statistics
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2024. VegeFru. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
