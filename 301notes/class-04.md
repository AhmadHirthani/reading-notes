# What Is a Regular Expression?
When search starts, it was restricted to some rules which decrease search benefits. At that time you were supposed to write a word with the same writing as the article or you will not find the needed article. Thanks to regular expression and many other technologies search process becomes easier. A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for. A regular expression can be a single character, or a more complicated pattern. Regular expressions can be used to perform all types of text search and text replace operations. The best practice to understand regular expressions is by examples and practicing on it so we will have many examples. As you see in winword search and replace process are correlated the same as it is in regular expression.
To start with regular expression let us start with this example. The result of this example is the position of the first character of the word Palestine.  

**var str = "I really want to visit Palestine";**  
**var n = str.search("Palestine ");**  

But what if we don’t know the exact writing of Palestine or we only know that it starts with Pal. In this case the pre example will return nothing. So that we can use regular expression. In regular expression we write ``/Palestine/ Modifier`` instead of `` "Palestine" ``. Modifier is optional and it takes one of three values i, g and m. `/Palestine/` called the pattern which is a description for the string. Inside the pattern you can provide the string’s content such as character, number or symbol and the quantity of each one of them.  

## Modifier description:  
### I: Perform case-insensitive matching 	
### g: Perform a global match (find all matches rather than stopping after the first match)  
### m: Perform multiline matching  

## Example1:
### var str = "Visit W3Schools";  
### var patt1 = /w3schools/i;  
### var result = str.match(patt1);  
In past example the result will match because we used i modifier to identify case-insensitive matching.

## Regular Expression Patterns:
**Brackets** are used to find a range of characters:
### [abc]:	Find any of the characters between the brackets	 
### [0-9]:	Find any of the digits between the brackets	 
### (x|y):	Find any of the alternatives separated with |  

## Example2:
### var str = "re, green, red, green, gren, gr, blue, yellow";  
### var patt1 = /(red|green)/g;  
### var result = str.match(patt1);  
In past example the result will be ``green,red,green`` because we told the compiler that we want red or green with modifier g which means find all matches rather than stopping after the first match

**Metacharacters** are characters with a special meaning:
### \d:	Find a digit  
### \s:	Find a whitespace character  
### \b:	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b  
### \uxxxx:	Find the Unicode character specified by the hexadecimal number xxxx  

## Example3:
### var str = "Give 100%!";  
### var patt1 = /\d/g;  
### var result = str.match(patt1);  
In past example the result will be ``1,0,0`` because we told the compiler that we want any numbers with modifier g which means find all matches rather than stopping after the first match.

**Quantifiers** define quantities:
### n+: Matches any string that contains at least one n  
### n*: Matches any string that contains zero or more occurrences of n  
### n?: Matches any string that contains zero or one occurrences of n  

## Example4:
### var str = "Hellooo World! Hello W3Schools!"; 
### var patt1 = /o+/g;
### var result = str.match(patt1);
In past example the result will be ``ooo,o,o,oo`` because we told the compiler that we want to search for at least one "o" with modifier g which means find all matches rather than stopping after the first match.
	


