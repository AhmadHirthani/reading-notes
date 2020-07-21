
# Mustache and Flexbox


## Mustache
Mustache is a simple web template system. It is available for many programming languages including JavaScript and Java. Mustache is described as a logic-less template engine because it does not have any explicit control flow statements such as if and else conditionals or for loops. Looping and conditional evaluation can be achieved using section tags processing lists and lambdas. mustache.js is an implementation of the mustache template system in JavaScript.
### How to download Mustache
We can use Mustache in two ways: downloading the file mustache.js from here [press to download](https://github.com/janl/mustache.js/blob/master/mustache.js) then add it to our application or using the CDN by pasting this line the head of the html file
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.0.1/mustache.js" integrity="sha512-lVOhRiSNKsseQXm0MgoEOV7efl7ET2+iBw5tRgKsX2BPA2LlkW2WUCsSYVwrrujEsbqNf+tN70z5pEnpnUtqUg==" crossorigin="anonymous"></script>
```

Example:
```
//########## Rendering a List of Values in a Template  

    var myData = [  
            {  
                "name": "Joe Smith",  
                "phone": "(212) 555-1212",  
                "accountNumber": "123456",  
                "title": "East Coast Sales"  
            },  
            {  
                "name": "Sue Frost",  
                "phone": "(212) 555-3131",  
                "accountNumber": "654321",  
                "title": "West Coast Sales"  
            },  
            {  
                "name": "Jim Murphy",  
                "phone": "(212) 555-4545",  
                "accountNumber": "987654",  
                "title": "International Sales"  
            }  
        ];  

    $.each(myData,function(index,item){

        var html = ''
                + '<div class="dataItem">'
                    + '<p><b>{{name}}:</b> {{title}}</p>'
                + '</div>';

        $('body').append(Mustache.render(html,item));
    });
```

## Flexbox
It is a method in CSS that we can can use to organiza space distribution between items and powerful alignment capabilities. It is easy to use it and with Flexbox, CSS becomes easier. We can use Flexbox setting some css properties for both container and child element.

### Flexboxfroggy explains the following in this order:
Flexboxfroggy explains the following in this order:

justify-content: horizontal displacement and space-between/around.
align-items: for vertical displacement and stretch.
flex-direction: row/-reverse, column/-reverse for respective direction flow.
order: int to change its relative position among siblings by int.
align-self: for individual displacement with same input as align-items.
flex-wrap: to either squeeze everything inside a single line with nowrap or wrap/-reverse for multiple lines.
flex-flow: combines flex-direction and flex-wrap with input separated by spaces flex-flow: column wrap.
align-content: flex-start looks similar to align-items but is more about the spaces between the content and tries to fit it all as needed.

visually inside a container are more options to control each flex item.
flex-grow: 4; & flex-shrink: 3; defines that that item should take up 4 more times or 3 less times of space relative to other items inside its parent, if they were all defined with flex-grow: 1; or as default.
flex-basis: |auto helps define the basis of grow or shrink, if its zero it wont be affected.
Shorthand for the three is:

.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}

