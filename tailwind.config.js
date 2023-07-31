/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          100: "#373D20",
          80: "rgb(55, 61, 32, .8)",
          60: "rgb(55, 61, 32, .6)",
          40: "rgb(55, 61, 32, .4)",
          20: "rgb(55, 61, 32, .2)",
        },
        gold: {
          100: "#717744",
          80: "rgb(113, 119, 68, .8)",
          60: "rgb(113, 119, 68, .6)",
          40: "rgb(113, 119, 68, .4)",
          20: "rgb(113, 119, 68, .2)",
        },
        grullo: {
          100: "#ABAC7F",
          80: "rgb(171, 172, 127, .8)",
          60: "rgb(171, 172, 127, .6)",
          40: "rgb(171, 172, 127, .4)",
          20: "rgb(171, 172, 127, .2)",
        },
        white: {
          100: "#FEFEFE",
          80: "rgb(254, 254, 254, .8)",
          60: "rgb(254, 254, 254, .6)",
          40: "rgb(254, 254, 254, .4)",
          20: "rgb(254, 254, 254, .2)",
        },
        black: {
          100: "#080808",
          80: "rgb(8, 8, 8, .8)",
          60: "rgb(8, 8, 8, .6)",
          40: "rgb(8, 8, 8, .4)",
          20: "rgb(8, 8, 8, .2)",
          5: "rgb(8, 8, 8, .05)",
        },
        "christmas-red": "#B11E31",
        success: "#3DD598",
        warning: "#FFC542",
        error: "#FC5A5A",
        beige: "#E8D9CD",
      },
      backgroundImage: {
        "main-banner":
          "url('https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        "left-top-banner":
          "url('https://images.unsplash.com/photo-1514845994104-1be22149278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        "right-bottom-banner":
          "url('https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        "contact-us-banner-mobile":
          "url('https://images.unsplash.com/photo-1621593446047-4db277eef303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
        "contact-us-banner":
          "url('https://images.unsplash.com/photo-1511667282954-8957078364a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80')",
        "news-banner":
          "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80')",
      },
      screens: {
        tablet: "600px",
        breakpoint: "720px",
        breakpoint2: "850px",
        desktop: "900px",
        breakpoint4:"1080px",
        breakpoint3: "1100px"
      },
      gridTemplateRows: {
        "banner-4": "repeat(4, minmax(80px, 1fr))",
        "banner-2": "200px 1fr",
        "banner-3": "200px 100px 1fr",
      },
    },
  },
  plugins: [],
};
