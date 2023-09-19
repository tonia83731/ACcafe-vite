# ACcafe' Website

ACcafe is a Online Food Ordering platform.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Project development before create by react + vite : https://github.com/tonia83731/sideproject_ACcafe.git


## Introduction

This project is available on mobile, tablet and desktop.

* Homepage
  * Users are available to view the newest information through banner.
  * Users are available to search for shop contact information at "Contact Us" section
* Menupage
  * User could see all the product information in Menupage
    * User could see product in both card and list mode
    * User could search items through search bar
  * Users could click on "Add to Cart" button to add items into the Shopping bag
  * Users could click on "Add Wish" button to add items into the Wish list
  * User could plus/minus the items at "Shopping Bat" section
  * The Order Summary will include total price, tax and devliery price
  * The users must fill in "Recipient Info." to submit their order
  * By hovering the like and bag icon on header, user could view their wishlist and bagitem
* NewsPage
  * User could see all the news in the NewsPage
  * User could filter the news by clicking on the button group
  * By clicking on the news list title, the screen will popup for further information

## Demo Page Link
https://tonia83731.github.io/ACcafe-vite/


## Demo Feature (Desktop)
1. HomePage: #HomeBanner, #ContactUs
2. 1 MenuPage: Product show by grid and #ShoppingBag
2. 2 MenuPage: Product show by list
3. Wish list show by hover
4. Bag lsit show by hover
5. NewsPage: NewsList and could filter through button group
6. NewsPage: News modal to show detail information

![Alt text](src/assets/img/rm_Desktop.png)

## Demo Feature (Mobile)
1. HomePage:　#HomeBanner
2. Hamburger Navbar, click to show
3. HomePage: #ContactUs, Footer
4. 1 MenuPage: Product show by grid
4. 2 MenuPage: Product show by list
5. MenuPage: #ShoppingBag
6. 1 Wish list show by hover
6. 2 Bag lsit show by hover
7. NewsPage: NewsList and could filter through button group
8. NewsPage: News modal to show detail information

![Alt text](src/assets/img/rm_Tablet.png)

## Develp Environment and Tools

* node.js @16.15.0
* react @18.2.0
* react-router-dom @6.14.2
* tailwind @3.3.3
* sweetalert2 @11.7.20
* vite-plugin-svgr @3.2.0

## Getting Start

1. Clone the project to local, enter:

```
git clone https://github.com/tonia83731/ACcaf--vite.git
```

2. Go into the project(cd), later enter to install npm:

```
npm install
```

3. Start the project by enter:

```
npm start
```

4. If you wish to end the project, enter:

```
ctrl + c
```

## For Future Development

This is for future development, will not include in current project

* User can storage their wishlist and baglist and save for next open



<!-- deploy github page: https://www.youtube.com/watch?v=XhoWXhyuW_I -->
<!-- deploy github page with react router dom: https://www.youtube.com/watch?v=uEEj2c3_ydg -->
