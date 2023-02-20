import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    basicWidth: string;

    color: {
      "green-100": string;
      "green-200": string;
      sub: string;
    };

    fontSize: {
      title: string;
      text: string;
    };
  }
}
