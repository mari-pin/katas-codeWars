URL: https://www.codewars.com/kata/56747fd5cb988479af000028
Puntuación: 7kyu
obten-caracter-medio.js
Te daran una palabra. Tu trabajo es devolver el caracter de la mitad de la palabra. Si la longitud de la palabra es impar, devuelve el caracter del medio. Si la longitud es par, devuelve los dos caracteres del medio.

Ejemplos:
Kata.getMiddle("test") debe devolver "es"

Kata.getMiddle("testing") debe devolver "t"

Kata.getMiddle("middle") debe devolver "dd"

Kata.getMiddle("A") debe devolver "A"

Entrada
Una palabra (hilera de caracteres) de longitud 0 < str < 1000 (en javascript puede ser que la palabra sea de mas de 1000 caracteres en algunos casos de prueba debido a un error).

Salida
El caracter del medio representado como una hilera de caracteres.

INGLES
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.