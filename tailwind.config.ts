import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signUpBackground': "url('../public/forest_signup.jpeg')",
        'signInBackground': "url('../public/forest_signin.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
