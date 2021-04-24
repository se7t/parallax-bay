import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      mainHue: string;
      callToAction: string;
      primaryText: string;
      secondaryText: string;
      tertiaryText: string;
      accent: string;
      card: string;
      background: string;
    };
  }
}
