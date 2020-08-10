# EJS PARTIALS
## What is the problem?
As you know, sometimes we need to put a static layout in our website such as navbar or footer. In the normal case we will copy pase its code to each page. This way will cuase code redundancy and it is hard to modify since you should loop over all the files to do one change.

## What is the solution?
EJS partial is a native EJS, that means we can use it directly without additional installation, which is a simple way to overcome the code's redundancy. It allows us to write the html code one time then use it as much as we need and whenever we want to do changes, we only change on time on the source file.

## How to use EJS partial
What making EJS partial useful is the easy of using it. To use EJS partial you only want to create new file containing the static content, then declare this file in the prooper place in another file

## EJS partial example
### index.ejs file
#### `<body>`
#### `<nav></nav>`
#### `<main></main>`
#### `<footer>`
#### `<%- include footer.ejs %>`
#### `</footer>`
#### `</body>`

### footer.ejs file
#### `<h3>Copyright 2020<h3>`
