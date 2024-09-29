Project Documentation
1. Project Overview
Design:
•	Reference Page: Follow the design layout from a specified reference page.
Tools:
•	HTML5: For structuring the content.
•	Bootstrap 5.3.3: For styling and ensuring responsiveness.
•	Webpack: For module bundling.
•	Css: For more flexible and maintainable CSS.
Responsiveness:
•	Ensure that the project works across all device sizes.
Code Quality:
•	Maintain clean, well-structured, and documented code.
2. How to Build the Project
Prerequisites:
•	Install Node.js and npm on your machine.
Steps:
1.	Initialize npm:
npm init -y
2.	Install Dependencies:
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader bootstrap sass sass-loader
3.	Development:
o	Use npm start to start Webpack in development mode.
4.	Production:
o	Use npm run build to build the project for production.
5.	Deployment:
o	Install gh-pages for deploying to GitHub Pages:
npm install gh-pages --save-dev
o	Add the following to your package.json:
"homepage": "https://{gitname}.github.io/{repo-name}",
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
o	Deploy the project:
npm run deploy


3. Features Integrated
1.	Add New Row Functionality.
2.	Move Row Upward Functionality.
3.	Move Row Downward Functionality.
4.	Delete Row Functionality.
5.	Refresh Functionality.
6.	Save Functionality.
7.	Sorting Column header Functionality.
8.	Edit Row functionality.
9.	Double Click on Cell Edit Functionality than Save by using enter and manually save Functionality.
10.	Single Click for Selecting Row
11.	Material ui icons used in toolbar
12.	Responsive across mobile and laptop devices






















Add new Row  functionality on Laptops


 



 


Move row Upward functionality on Laptops


 





 

Move row Downward functionality on Laptops


 


 




Delete Row functionality


 



 



Refresh Functionality

 


 





 
 









Edit functionality


 


 



 

Sorting Columns header functionality on Laptop

Before  Sorting Chemical Name


 








After Sorting On Chemical Name



 



















On Mobile Screen 

1.	Add New Row

 
2.	On Move Row Upward

  
3.	Move Row Downward

        


3: Sorting Column Header 
  Before and After sorting

   





4.	Edit ,Save and Refresh row functionality
    


   


5.	Delete functionality

   
![image](https://github.com/user-attachments/assets/07bf0afe-14dc-44a0-b5e4-7605bbcc694f)
