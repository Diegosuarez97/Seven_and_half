Seven and half Game
Designed with HTML, CSS, and JavaScript

For the JavaScript implementation of the game, we can divide it into various parts.
First, we have the cards: we created three arrays—one with the numbers/characters of the cards, another with the images corresponding to the suits, and a third for the final deck.

Initially, we used a for loop to create all the card types we needed. Then, with another for loop and the Math.random function, we shuffled the cards to ensure they appear in random order.

We used some loops and conditionals to ensure the user always inputs a name and a starting amount of money before accessing the game.

Start Screen:
It consists of the game title and two input fields (labels) to enter the player's name and money. To start the game, the player must click the "Play" button.

Game Start:
Once inside the game, the player must start a round and place a bet first. If they don't, an alert will pop up, preventing the game from continuing until the button is pressed.

After placing a valid bet, the game begins by drawing a new card, which will automatically appear on the player's board. If the player wishes to "stand," they simply need to press the button for that action. Once the "stand" button is clicked, a message will notify whether the player has won, tied, or lost against the dealer. Subsequently, the dealer's cards will be displayed, and the bet amount will either be added to or subtracted from the player's total money, as applicable.

For gameplay, we used a simple loop to allow drawing cards until the score reaches 7.5 or the player chooses to stand. The dealer follows the same process during its turn. To prevent drawing cards after the turn ends, we implemented a boolean to mark the start and end of the round, controlled by the "New Round" button.

Finally, if the "End Game" button is pressed, an alert will appear, bidding farewell to the player and returning them to the start screen.

Design:
We opted for a custom interface, choosing a black background to create a casino ambiance. For the header, we used a flexbox layout, adding two PNG images created in Illustrator at the start and end, leaving space in the middle for the title. The title was built using layers (z-index), and the labels and buttons were given a neon-like effect when clicked.

Game Styles (CSS):

The font used is Barlow Condensed, which adds a modern and minimalistic touch.
Most elements use responsive units (vw/vh) to ensure adaptability to different screen sizes.
The game board is designed to resemble a padded casino table, with two card containers (flexbox) for each player inside.
Cards:
The card design is fixed, with a dark background and a light border with shadows to create a glowing effect. The internal designs are PNGs vectorized in Illustrator, and the internal numbers adjust their color to match the illustration using a switch statement.

Buttons:
The buttons were sourced from uiverse.io, as we wanted a glowing effect when clicked.

Money Box:
The money container includes an animated coin. Initially, the coin's design was also sourced from Uiverse, but we modified it slightly to better match the game's aesthetic.

Development Experience:
At first, we faced challenges controlling when players could interact with buttons, ensuring they couldn't act without starting a round or placing a bet. We also struggled with interface adjustments, particularly in ensuring alerts and conditionals functioned smoothly. During development, we discovered that using absolute values in calculations helped reduce errors, making the implementation of game rules more straightforward.

Areas for Improvement:

We realized we could simplify the code by adding the color directly as a property in the card vector, avoiding the need to call an additional function for every card generation.
We could enhance win conditions control and add more dynamic animations for card appearances to improve the user's experience.
