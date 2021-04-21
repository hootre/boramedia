import { VFC } from 'react';
import { MainHeader, MobileMainHeader, MobileNavBtn, NavIconItem, MobileNavIconItem } from './styles';
interface Props {
  onMouseClick: (e: React.MouseEvent<HTMLElement>) => void;
  onMobileMouseClick: (e: React.MouseEvent<HTMLElement>) => void;
  mobileBtn: boolean;
}
const Top: VFC<Props> = ({ onMouseClick, onMobileMouseClick, mobileBtn }) => {
  return (
    <>
      <MainHeader>
        <ul>
          <img
            src="data:image/png;base64,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"
            alt="Logo"
          />
          <li className="nav_btn" onClick={onMouseClick}>
            Main
          </li>
          <li className="nav_btn" onClick={onMouseClick}>
            About
          </li>
          <li className="nav_btn" onClick={onMouseClick}>
            Projects
          </li>
          <li className="nav_btn" onClick={onMouseClick}>
            Contact
          </li>
        </ul>
        <NavIconItem>
          <a href="https://github.com/hootre">
            <svg aria-hidden="true" height="40" viewBox="0 0 24 24" width="40">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
            </svg>
          </a>
        </NavIconItem>
      </MainHeader>
    </>
  );
};
export default Top;
