# HTML Tables
Tables are used to view more orgnized data especailly when we have keys and values. If we want to add table to our web page, we can use the HTML tag \<table>. In HTML you should specify the table row by row and cell by cell. To add row we can use the tag \<tr> and to add cell we use the tag \<td> or \<th> if it is a header.  
You can view more powerfull table by deviding the table into three parts: header, body and footer. To Do this we can use the tags \<thead>, \<tbody>, and \<tfoot> for header, body and footer in order.
## HTML table example:
<table>  
    <thead>  
        <tr>  
            <th></th>  
            <th scope="col">Home starter hosting</th>  
            <th scope="col">Premium business hosting</th>  
        </tr>  
    </thead>  
    <tbody>  
        <tr>  
            <th scope="row">Disk space</th>  
            <td>250mb</td>  
            <td>1gb</td>  
        </tr>  
        <tr>  
            <th scope="row">Bandwidth</th>  
            <td>5gb per month</td>  
            <td>50gb per month</td>  
        </tr>  
    </tbody>  
    <tfoot>  
        <tr>  
            <td></td>  
            <td colspan="2">Sign up now and save 10%!</td>  
        </tr>  
    </tfoot>  
</table>  

# JavaScrip Objects: Constructor notaions
We talked about creating JavaScript objects using literal notaion and today we will take about another way to create JavaScript objects which called constructor notaions. Constructor notaions do the same as literal notaion but it differ in which we can use several objects to represent similar things. To declare object using constructor notaions we first use a normal function declration but inside the function we add this. in the start of variables name to inform the browser that this variable is only for the function. This function is a template for the object then we can create objects from it by using the word new.

## Constructor notaions example:
function Hotel (name, rooms, booked) {    
    this.name= name;  
    this.rooms= rooms;  
    this.booked= booked;  
    this.checkAvailability= function() {  
        return this.rooms - this.booked;  
        };  
}  







