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
        'signUpBackground': "url('../public/signup.jpeg')",
        'signInBackground': "url('../public/signin.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
