/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chillax : ["chillax" ,"sans-serif"],
        panchang : ["panchang" ,"sans-serif"]
      },
      backgroundImage: {
        image: "url('src/assets/LandingPage-img/imgmotor.webp')",
      },
      colors :{
        'myWhite' : "#F8F8FF",
        "myBlack" : "#10100E",
        "myRed" : '#ED1D24',
        "myGrey" : '#E4E1E5'
      }
    },
  }
};
