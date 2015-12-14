# kata
kata coding exercise or practice
There is a doc folder for each exercise, containing kata description and usage in readme.txt file.

KataYahtzee
==========
Run all tests
mvn test

Run Test report
==============
mvn surefire-report:report

Executing Game with a give roll and a catetory
mvn exec:java -Dexec.mainClass=kata.yahtzee.App -Dexec.args="6,1,6,6,6 fourkind"
mvn exec:java -Dexec.mainClass=kata.yahtzee.App -Dexec.args="5,2,5,4,6 pair"
mvn exec:java -Dexec.mainClass=kata.yahtzee.App -Dexec.args="6,6,6,6,6 yahtzee"
mvn exec:java -Dexec.mainClass=kata.yahtzee.App -Dexec.args="4,1,4,3,4 threekind"


valid categories are

fours
Ones, Twos, Threes, Fours, Fives, Sixes: The player scores the sum of the dice that reads one, two, three, four, five or six, respectively. For example,1, 1, 2, 4, 4 placed on "fours" gives 8 points.

Pair
The player scores the sum of the two highest matching dice. For example, 3, 3, 3, 4, 4 placed on "pair" gives 8.

TwoPairs
If there are two pairs of dice with the same number, the player scores the sum of these dice. If not, the player scores 0. For example, 1, 1,2, 3, 3 placed on "two pairs" gives 8. 		

threekind
Three of a kind: If there are three dice with the same number, the player scores the sum of these dice. Otherwise, the player scores 0. For example, 3, 3, 3, 4, 5 places on "three of a kind" gives 9.

fourkind
Four of a kind: If there are four dice with the same number, the player scores the sum of these dice. Otherwise, the player scores 0. For example, 2, 2, 2, 2, 5 places on "four of a kind" gives 8.

house
Full house: If the dice are two of a kind and three of a kind, the player scores the sum of all the dice. For example, 1,1,2,2,2 placed on "full house" gives 8. 4,4,4,4,4 is not "full house".

small
Small straight: If the dice read 1,2,3,4,5, the player scores 15 (the sum of all the dice), otherwise 0.

yahtzee
Yahtzee: If all dice are the have the same number, the player scores 50 points, otherwise 0.
