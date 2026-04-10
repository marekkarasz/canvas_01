This is very small project learning about html canvas which in return i will learn more about javaScript.
Few things to note here is that i made this code dynaminc, in other words i set the position of each draw function dynamicaly using canvas.width for x coordinates
and canvas.height for the y coordinates so that if i change the size of my canvas the draw objects will stay the same. 
I also saved the size of the rectangle into variable so i can change the size in the variable itself instead of hard coding it. 
That brings me to another part, with all this set up i can easily change size of the rectangle and position it in the centre using simple math:
x value - rect size / 2, and y value - rect size / 2. 
I also set the colors of the rect before i draw it. Its important to always set your style of desired object before you draw it!
