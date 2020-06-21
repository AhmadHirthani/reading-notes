 # Images
Most of web pages contain images. One image can be useful more than a lot of words. In HTML we can easily add images using the tag \<img> with the mandatory attribution src which tells the browser where to find the image. We can manipulate some of image properties using html, but the best practice is to use CSS. We can use image as background for any HTML element by setting the property background-image. Background images can appear just once or be repeated across the background of the box.

## Image example
HTML file:  
\<img src="pic_trulli.jpg" alt="Italian Trulli">

CSS file:
img {  
  border: 1px solid #ddd;  
  border-radius: 4px;  
  padding: 5px;  
  width: 150px;// edit image size.  
  float: left;// align image to left.  
}

# Practical Information
## Search engine optimization
Search engine optimization (SEO) it a big topic and we need books to cover it but in this notes we will try to understand it. SEO is a way that we use to let our website appears in the top of the search results returned to users by search engine if our site contain the needed information. SEO is often split into two areas:

### on-page techniques
The idea on this area of SEO is to collect the common keywords that users search for and add it inside your html's text. Search engines rely very heavily on the text that is in your pages so it is important that the terms people are going to search for are in text. 

### off-page techniques
In this area of SEO, search engine rely on the count of links to your page in the other websites to rank your site. 


## Using analytics to understand visitors
Studying user’s behavior is important to refine your website and increase visitors count. There is a free service from google called **Google Analytics**. To use Google Analytics you should sign up in Google Analytics to have your account then Google Analytics will provide you with a code called tracking code. you should put this code before the \</head> closing tag. Tracking code does not change anything of the appearance. Every time someone loads a page of your site, the tracking code sends data to the Google servers where it is stored. To get these information you should use a web based interface that Google provides.

## Putting your site on the web
To publish your site on the web, you should have two important thing: Domain and Host. Domain is like an address for your page. For example www.mypage.com or www.mypage.ps. Host is the space you will push your site on it. Host also include the service you need for your site such as the server services. You should pay money for Domain and Host.
