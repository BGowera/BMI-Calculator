I made this simple BMI program as a way to get more comfortable with Bootstrap and Javascript event listeners
What i learned:

ON THE FUNCTIONAL SIDE
1) The importance of scope when declaring input variables ie if you call input.value outside a function (that is to say-in the global scope) the inputs will read as empty
2)The difference between ParseInt() and ParseFloat()-unnecessary headaches are bound to ensue if you forget that an integer is a whole number
3)How to validate if an input is empty(this took way more time than i'd have liked)
4)Event listener for enter key(don't forget its e.key==='Enter' not just e)

ON THE UI SIDE
1) This cool little trick that changes the top nav properties on scroll
2)Reinforced the importance of CSS specifity (through trying to style over Bootstrap's insanely specific rules)
3)That accordion dropdown on the FAQ(should remember to learn how to do this without Bootstrap)
