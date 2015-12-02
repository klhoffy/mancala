//$(document).ready() {

	var board = [4,4,2,4,0,4,0,4,4,4,4,4,4,0]
	var playerOne = true;

	function play(box) { 
		if (playerOne && box < 6 && box > -1 ) {
			if (box === 6 || box === 13) {
				alert("you cant take a stone from the mancala!")
			} else {
				var stones = board[box];
				if (board[box] === 0) { 
					alert("there's nothing there")
				} else {
					for (var i = 0; i <= stones; i++) {
						board[(box + i) % 14] +=1
						if (box + i + stones === 6) {
						playerOne = false
						// } else if (board[box + i] + stones === 1) {
						// 	isOpposite()
						// 	console.log(box)
						// }
					}
				}
				board[box] = 0;
				console.log(board)
				checkAllBoxes()	
			} 
		} else if (!playerOne && box < 13 && box > 6 ) {
			if (box === 6 || box === 13) {
				alert("you cant take a stone from the mancala!")
			} else {
				var stones = board[box];
				if (board[box] === 0) { 
					alert("there's nothing there")
				} else {
					for (var i = 0; i <= stones; i++) {
						board[(box + i) % 14] +=1
						if (box + i + stones === 13) {
						playerOne = true
						}
					}
				}
				board[box] = 0;
				console.log(board)
				checkAllBoxes()
			}
		}
	}

	// works
	function playerTurn() {
		playerOne = !playerOne
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

	// function isOpposite(box) {
	// 	if (board[box] === 0) {
	// 		return board[12]
	// 		console.log(board[12])
	// 	} else if (box === 1) {
	// 		return board[11]
	// 	} else if (box === 2) {
	// 		return board[10]
	// 	} else if (box === 3) {
	// 		return board[9]
	// 	} else if (box === 4) {
	// 		return board[8]
	// 	} else if (box === 5) {
	// 		return board[7]
	// 	}
	// }


//}