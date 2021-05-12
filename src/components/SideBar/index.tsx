import { MainSideMenu, NavItem } from '@components/SideBar/styles';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { memo } from 'react';
const SideBar = () => {
  const router = useRouter();
  return (
    <MainSideMenu>
      <div className="logo">
        <img
          src="data:image/png;base64,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"
          alt="Logo"
        />
      </div>
      {/* <NavItem>
        <h2>MENU</h2>
        <ul>
          <li>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"></path>
            </svg>
            About
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"></path>
            </svg>
            Members
          </li>
        </ul>
      </NavItem> */}
      <NavItem>
        <h2>CATEGORY</h2>
        <ul>
          <li className={router.pathname == '/' ? 'active' : ''}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"></path>
            </svg>
            <Link href="/MusicVideo">
              <a>MusicVideo</a>
            </Link>
          </li>
          <li className={router.pathname === '/Promotion' ? 'active' : ''}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"></path>
            </svg>
            <Link href="/Promotion">
              <a>Promotion</a>
            </Link>
          </li>
          <li className={router.pathname === '/Interview' ? 'active' : ''}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"></path>
            </svg>
            <Link href="/Interview">
              <a>Interview</a>
            </Link>
          </li>

          <li className={router.pathname === '/Sketch' ? 'active' : ''}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"></path>
            </svg>
            <Link href="/Sketch">
              <a>Sketch</a>
            </Link>
          </li>

          <li className={router.pathname === '/Advertising' ? 'active' : ''}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.135 20.773v-3.057c0-.78.637-1.414 1.423-1.414h2.875c.377 0 .74.15 1.006.414.267.265.417.625.417 1v3.057c-.002.325.126.637.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.422V9.867c0-.735-.328-1.431-.895-1.902l-6.671-5.29a3.097 3.097 0 00-3.949.072L3.467 7.965A2.474 2.474 0 002.5 9.867v8.702C2.5 20.464 4.047 22 5.956 22h1.916c.68 0 1.231-.544 1.236-1.218l.027-.009z"></path>
            </svg>
            <Link href="/Advertising">
              <a>Advertising</a>
            </Link>
          </li>
        </ul>
      </NavItem>
    </MainSideMenu>
  );
};

export default memo(SideBar);
