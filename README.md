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
![image](https://github.com/nitin0557/javascripttable/blob/main/assets/c7e50a54-b5b8-4d94-9289-426c66b4a9cd.png)

![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p2.png)





 


Move row Upward functionality on Laptops

![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p3.png)

![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p4.png)


 





 

Move row Downward functionality on Laptops

![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p5.png)
 
![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p6.png)


 




Delete Row functionality


 
![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p7.png)
![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p8.png)



 



Refresh Functionality

 ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p9.png)
![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p10.png)
![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p11.png)
![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p12.png)



 





 
 









Edit functionality

![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p13.png)
![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p14.png)
![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p15.png)



 


 



 

Sorting Columns header functionality on Laptop

Before  Sorting Chemical Name

![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p16.png)



 








After Sorting On Chemical Name



![image](https://github.com/nitin0557/javascripttable/blob/main/assets/p17.png)




















On Mobile Screen 

1.	Add New Row

   ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/m1.png)


 
3.	On Move Row Upward
   
 ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/m2.png)
 ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/m3.png)



  
5.	Move Row Downward
	
    ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/m4.png)
    ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/m5.png)





3.  Sorting Column Header 

  Before and After sorting

  	   ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/mobile6.png)
  	   ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/mobile7.png)

 

4.	Edit ,Save and Refresh row functionality

  	   ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/m8.png)
  	   ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/m9.png)



6.	Delete functionality	
      ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/m10.png)
      ![image](https://github.com/nitin0557/javascripttable/blob/main/assets/m11.png)


   
