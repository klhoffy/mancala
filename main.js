//$(document).ready() {


	// var board = {
	// 	1A : 4,
	// 	2A : 4,
	// 	3A : 4,
	// 	4A : 4,
	// 	5A : 4,
	// 	6A : 4,
	// 	1B : 4,
	// 	2B : 4,
	// 	3B : 4,
	// 	4B : 4,
	// 	5B : 4,
	// 	6B : 4,
	// 	mancalaA : 0,
	// 	mancalaB : 0
	// }

	var board = [4,4,4,4,4,4,0,4,4,4,4,4,4,0]

	//asssume box is board[x];

	function play(box) {
		stones = box;
		console.log("stones" + stones);
		box = 0;
		console.log("box" + box);
		// for number of seeds = s {
			//box[+1] += 1;
			//... box[+s] += 1;
		//}
		
	}

	function playerTurn() {

	}



	function checkAllBoxes() {
		// if (".boxA" === 0) || (".boxB" === 0) {
		// 	chooseWinner()
		// }
	}

	function moveStones() {
		// drops one stone in each respective box
	}

	function chooseWinner() {
		// if ("#mancalaA" > "#mancalaB") {
		// 	playerA wins
		// } else {
		// 	playerB wins
		// }
	}

	function isOpposite() {
		// box that is directly opposite

	}

	function gameInit() {
		// box = 4 stones
		// mancala = 0 stones
		// playerTurn = playerA

	}

	function storeStonesInBox() {

	}

	function checkBox() {
		// if (box = empty) {
		// 	player takes stones from isOpposite() + 1
		// } else if (last stone = player mancala) {
		// 	playerTurn() again
		// } else {
		// 	player turn over
		// }

	}

//}