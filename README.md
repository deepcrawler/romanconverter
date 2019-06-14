# romanconverter

This is a simple Integer to Roman number format converter which written by JavaScript and Nodejs.

## Roman Numbers:
Roman numerals are a numeric system that originated in ancient Rome and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages. Numbers in this system are represented by combinations of letters from the Latin alphabet. Modern usage employs seven symbols, each with a fixed integer value:

Symbol	I	V	X	L	C	D	M
Value	1	5	10	50	100	500	1,000
The use of Roman numerals continued long after the decline of the Roman Empire. From the 14th century on, Roman numerals began to be replaced in most contexts by the more convenient Arabic numerals; however, this process was gradual, and the use of Roman numerals persists in some minor applications to this day.

One place they are often seen is on clock faces. For instance, on the clock of Big Ben (designed in 1852), the hours from 1 to 12 are written as:

I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII
The notations IV and IX can be read as "one before five" (4) and "one before ten" (9). On most Roman numeral clock faces, however, 4 is traditionally written IIII.

Other common uses include year numbers on monuments and buildings and copyright dates on the title screens of movies and television programs. MCM, signifying "a thousand, and a hundred less than another thousand", means 1900, so 1912 is written MCMXII. For this century, MM indicates 2000. Thus the current year is MMXIX.

## Files:
app/roman.js: It's implementation of Integer to Roman converter. 
It returns empty string for negative numbers, zero, no integer values, string values, and other none-convertible to integer values.
test/test.js: It includes unit tests of int/roman converter

## Usage:
1- `const roman = require("{Path}/roman.js");`
2- `roman.romanize({INT Value});`
