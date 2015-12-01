//$(document).ready() {


	// var board = {
	// 	box1A : 4,
	// 	box2A : 4,
	// 	box3A : 4,
	// 	box4A : 4,
	// 	box5A : 4,
	// 	box6A : 4,
	// 	box1B : 4,
	// 	box2B : 4,
	// 	box3B : 4,
	// 	box4B : 4,
	// 	box5B : 4,
	// 	box6B : 4,
	// 	mancalaA : 0,
	// 	mancalaB : 0
	// }

	var board = [4,4,4,4,4,4,0,4,4,4,4,4,4,0]
	var hole = []
	var turnCount = 0

	//asssume box is board[x];


// stones = value of board[x] = box
// box = the value of the array in board
// then change box = 0
// should now make the value of the array in board to 0

	function play(box) { 
		var stones = board[box];
		console.log("stones" + stones);
		// s = stones; 
		// console.log(s)
		for (var i = 0; i < box.length; i++) {
			return board[box] +=1
			console.log(box)
		}

		//board[box] = s * (board[box] += 1); 
		console.log(board)
		
		//board[box] = 0;
		//console.log("box" + box);
		
		//console.log(board)
		
		// for number of seeds = s {
			//box[+1] += 1;
			//... box[+s] += 1;
		//}
		
	}
	// doesn't work yet
	function playerTurn() {
		if (!this.innerHTML) {
			if (turnCount % 2 === 0) {
				// playerA turn
			} else {
				// playerB turn
			}
		checkAllBoxes(false)
		turnCount++
		}

	}


	//not working yet - need to tell it to go to the next person's turn - playerTurn()
	function checkAllBoxes() {
		if (board[0] === 0 && board[1] === 0 && board[2] === 0 && board[3] === 0 && board[4] === 0 && board[5] === 0) {
			console.log("A cleared")
		} else if (board[7] === 0 && board[8] === 0 && board[9] === 0 && board[10] === 0 && board[11] === 0 && board[12] === 0) {
			console.log("B cleared")
		} else {
			console.log("new player turn")
		}
	} 

	// this function works!
	function chooseWinner() {
		if (board[6] > board[13]) {
			console.log("playerA wins")
		} else if (board[6] < board[13]){
			console.log("playerB wins")
		} else {
			console.log("tie")
		}
	}

	function isOpposite(box) {
		if (box === 0) {
			console.log(board[12])
		} else if (box === 1) {
			return board[11]
		} else if (box === 2) {
			return board[10]
		} else if (box === 3) {
			return board[9]
		} else if (box === 4) {
			return board[8]
		} else if (box === 5) {
			return board[7]
		}

	}



	function checkBoxEmpty() {
		// if (box = empty) {
		// 	player takes stones from isOpposite() + 1
		// } else if (last stone = player mancala) {
		// 	playerTurn() again
		// } else {
		// 	player turn over
		// }

	}

//}