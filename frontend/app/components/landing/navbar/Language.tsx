const Language = () => {
  return (
    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <svg
          className="w-5 h-5 rounded-full me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3900 3900"
        >
          <path fill="#b22234" d="M0 0h7410v3900H0z" />
          <path
            d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
            stroke="#fff"
            strokeWidth="300"
          />
          <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
          <g fill="#fff">
            <g id="d">
              <g id="c">
                <g id="e">
                  <g id="b">
                    <path
                      id="a"
                      d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                    />
                    <use xlinkHref="#a" y="420" />
                    <use xlinkHref="#a" y="840" />
                    <use xlinkHref="#a" y="1260" />
                  </g>
                  <use xlinkHref="#a" y="1680" />
                </g>
                <use xlinkHref="#b" x="247" y="210" />
              </g>
              <use xlinkHref="#c" x="494" />
            </g>
            <use xlinkHref="#d" x="988" />
            <use xlinkHref="#c" x="1976" />
            <use xlinkHref="#e" x="2470" />
          </g>
        </svg>
        English (US)
      </button>
      {/* Dropdown */}
      <div
        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
        id="language-dropdown-menu"
      >
        <ul className="py-2 font-medium" role="none">
          {[
            {
              code: "us",
              label: "English (US)",
              flagColor: ["#bd3d44", "#fff", "#192f5d"],
            },
            {
              code: "de",
              label: "Deutsch",
              flagColor: ["#ffce00", "#000", "#d00"],
            },
            {
              code: "it",
              label: "Italiano",
              flagColor: ["#009246", "#fff", "#ce2b37"],
            },
            {
              code: "cn",
              label: "中文 (繁體)",
              flagColor: ["#de2910", "#ffde00"],
            },
          ].map((language) => (
            <li key={language.code}>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5 rounded-full me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    {language.code === "us" && (
                      <g fillRule="evenodd">
                        <g strokeWidth="1pt">
                          <path
                            fill={language.flagColor[0]}
                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill={language.flagColor[1]}
                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)"
                          />
                        </g>
                        <path
                          fill={language.flagColor[2]}
                          d="M0 0h98.8v70H0z"
                          transform="scale(3.9385)"
                        />
                      </g>
                    )}
                    {language.code === "de" && (
                      <>
                        <path
                          fill={language.flagColor[0]}
                          d="M0 341.3h512V512H0z"
                        />
                        <path
                          fill={language.flagColor[1]}
                          d="M0 0h512v170.7H0z"
                        />
                        <path
                          fill={language.flagColor[2]}
                          d="M0 170.7h512v170.6H0z"
                        />
                      </>
                    )}
                    {language.code === "it" && (
                      <>
                        <path
                          fill={language.flagColor[1]}
                          d="M0 0h512v512H0z"
                        />
                        <path
                          fill={language.flagColor[0]}
                          d="M0 0h170.7v512H0z"
                        />
                        <path
                          fill={language.flagColor[2]}
                          d="M341.3 0H512v512H341.3z"
                        />
                      </>
                    )}
                    {language.code === "cn" && (
                      <>
                        <defs>
                          <path
                            id="a"
                            fill={language.flagColor[1]}
                            d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                          />
                        </defs>
                        <path
                          fill={language.flagColor[0]}
                          d="M0 0h512v512H0z"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="matrix(76.8 0 0 76.8 128 128)"
                          xlinkHref="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-121 142.6 -47) scale(25.5827)"
                          xlinkHref="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-98.1 198 -82) scale(25.6)"
                          xlinkHref="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="rotate(-74 272.4 -114) scale(25.6137)"
                          xlinkHref="#a"
                        />
                        <use
                          width="30"
                          height="20"
                          transform="matrix(16 -19.968 19.968 16 256 230.4)"
                          xlinkHref="#a"
                        />
                      </>
                    )}
                  </svg>
                  {language.label}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        data-collapse-toggle="navbar-language"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-language"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
};
