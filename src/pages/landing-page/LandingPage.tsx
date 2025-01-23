import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-white">
        <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                  A social media for learners
                </p>
                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                  Connect & learn from the experts
                </h1>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Grow your career fast with right mentor.
                </p>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  Join for free
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>

                <p className="mt-5 text-gray-600">
                  Already joined us?{" "}
                  <a
                    href="#"
                    title=""
                    className="text-black transition-all duration-200 hover:underline"
                  >
                    Log in
                  </a>
                </p>
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-10 mx-auto sm:px-6 lg:px-8 max-w-7xl sm:py-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Integrate with apps
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/gmail-logo.png"
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">Gmail</p>
                      <p className="mt-px text-sm text-gray-600">
                        Direct Integration
                      </p>
                    </div>
                    <svg
                      className="hidden w-5 h-5 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png"
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">Slack</p>
                      <p className="mt-px text-sm text-gray-600">
                        Direct Integration
                      </p>
                    </div>
                    <svg
                      className="block w-6 h-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/shopify-logo.png"
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        Shopify
                      </p>
                      <p className="mt-px text-sm text-gray-600">
                        Direct Integration
                      </p>
                    </div>
                    <svg
                      className="hidden w-5 h-5 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/intercom-logo.png"
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        Intercom
                      </p>
                      <p className="mt-px text-sm text-gray-600">
                        Direct Integration
                      </p>
                    </div>
                    <svg
                      className="hidden w-5 h-5 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/twitter-logo.png"
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        Twitter
                      </p>
                      <p className="mt-px text-sm text-gray-600">
                        Direct Integration
                      </p>
                    </div>
                    <svg
                      className="hidden w-5 h-5 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png"
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">Sketch</p>
                      <p className="mt-px text-sm text-gray-600">
                        Direct Integration
                      </p>
                    </div>
                    <svg
                      className="hidden w-5 h-5 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="#"
                title=""
                className="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
              >
                {" "}
                Check all 1,593 applications{" "}
              </a>
            </div>
          </div>
          <section className="py-10 bg-gray-50 sm:py-16 lg:py-17">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
                <div>
                  <img
                    className="object-contain w-auto mx-auto h-14"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="object-contain w-auto mx-auto h-14"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-2.png"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="object-contain w-auto mx-auto h-14"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="object-contain w-auto mx-auto h-14"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-4.png"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="object-contain w-auto mx-auto h-14"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-5.png"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    className="object-contain w-auto mx-auto h-14"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-6.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
