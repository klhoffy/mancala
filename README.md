#Project 1: Mancala Game
_Description:_ Mancala is a two player game where each player tries to get as many stones into their mancala in order to win. The board is divided into two mancalas and six boxes for each player. The players move their stones into respective boxes to get them in their mancala. The game ends when one side of the board is free of stones and whomever has the most stones in their mancala wins.
![Mancala Game Board](https://raw.githubusercontent.com/klhoffy/mancala/master/reference/mancala.png "Mancala Game Board")
##Site Map
![Site Map](https://raw.githubusercontent.com/klhoffy/mancala/master/reference/mancala_SM01.png "Site Map")
##Wireframes
###Initial Game Play
![Initial Game Play](https://raw.githubusercontent.com/klhoffy/mancala/master/reference/mancala_WF01.png "Initial Game Play")

The game starts with 4 stones in each box so each player starts with 24 stones. When they choose a box they must move each stone in that box to the next boxes. For instance if they start with 4 in box 2A then one stone will go into 3A, then 4A, then 5A and end in 6A. That will end their turn. This will continue until one player has cleared all their boxes. The players stones can move into their opponents boxes and mancala.
###Player ends move in their Mancala
![End in Mancala Move 1](https://raw.githubusercontent.com/klhoffy/mancala/master/reference/mancala_WF02.png "End in Mancala Move 1")
![End in Mancala Move 2](https://raw.githubusercontent.com/klhoffy/mancala/master/reference/mancala_WF03.png "End in Mancala Move 2")

If the player ends their turn by placing their last stone into their mancala, then the player gets to take another turn.
###Player ends their move where the other Player doesn't have any stones in their box
![End in Open Spot Move 1](https://raw.githubusercontent.com/klhoffy/mancala/master/reference/mancala_WF04.png "End in Open Spot Move 1")
![End in Open Spot Move 2](https://raw.githubusercontent.com/klhoffy/mancala/master/reference/mancala_WF05.png "End in Open Spot Move 2")
![End in Open Spot Move 3](https://raw.githubusercontent.com/klhoffy/mancala/master/reference/mancala_WF06.png "End in Open Spot Move 3")

If player A ends their turn by placing their last stone in an empty box on their side, they will take all the stones in the corresponding box of Player B and add it to their mancala as well as that one stone.
###Game Play Ends
![Game Play Ends](https://raw.githubusercontent.com/klhoffy/mancala/master/reference/mancala_WF07.png "Game Play Ends")

Once one player has cleared all their boxes on their side, the game play ends and both players' mancalas are added up. Whomever has the most stones in their mancala wins the game.
