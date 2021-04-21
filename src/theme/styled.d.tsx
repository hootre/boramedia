import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: {
      BACKGROUND_COLOR: string;
      MAINPOINT_COLOR: string;
      LOGOPOINT_COLOR: string;
      TEXT_COLOR: string;
    };
  }
}
