//$(document).ready() {

	var board = [4,4,4,4,4,4,0,4,4,4,4,4,4,0]
	var playerOne = true;
	var playerOne
	
	//var playerOne; //= board[0,1,2,3,4,5,6] //can only use these spots
	//var playerTwo; //= board[7,8,9,10,11,12,13] //can only use these spots
	// var players = ["playerOne", "playerTwo"]

	// it finally works!
	function play(box) { 
		if (box === 6 || box === 13) {
			alert("you cant take a stone from the mancala!")
		} else {
			var stones = board[box];
			if (box === 0) { 
				alert("there's nothing there")
			} else {
				// if (playerOne = true) {
				// 	board[box] = board[0] && board[1] && board[2] && board[3] && board[4] && board[5]
				// } else {
				// 	board[box] = board[7] && board[8] && board[9] && board[10] && board[11] && board[12]
				// }
				for (var i = 0; i <= stones; i++) {
					board[(box + i) % 14] +=1
				}
			}
			board[box] = 0;
			console.log(board)
			checkAllBoxes()
			
		}
	}

	// works
	function playerTurn() {
		playerOne = !playerOne
		console.log(playerOne)
		

	}


	// it works
	function checkAllBoxes() {
		if (board[0] === 0 && board[1] === 0 && board[2] === 0 && board[3] === 0 && board[4] === 0 && board[5] === 0) {
			chooseWinner()
			console.log("A cleared")
		} else if (board[7] === 0 && board[8] === 0 && board[9] === 0 && board[10] === 0 && board[11] === 0 && board[12] === 0) {
			chooseWinner()
			console.log("B cleared")
		} else {
			playerTurn()
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

	// this works
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