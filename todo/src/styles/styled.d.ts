import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    basicWidth: string;

    color: {
      "green-100": string;
      "green-200": string;
      "green-300": string;
    };

    fontSize: {
      title: string;
      text: string;
    };
  }
}
