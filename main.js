$(document).ready(function() {

	//var boxes = document.getElementsByClassName("box")
	var board = [4,4,4,4,4,4,0,4,4,4,4,4,4,0]
	var playerOne = true;

	$("#box1A").on("click", function() {
		play(0)
	})
	$("#box2A").on("click", function() { 
		play(1)
	})
	$("#box3A").on("click", function() { 
		play(2)
	})
	$("#box4A").on("click", function() { 
		play(3)
	})
	$("#box5A").on("click", function() { 
		play(4)
	})
	$("#box6A").on("click", function() { 
		play(5)
	})
	$("#box1B").on("click", function() { 
		play(7)
	})
	$("#box2B").on("click", function() { 
		play(8)
	})
	$("#box3B").on("click", function() { 
		play(9)
	})
	$("#box4B").on("click", function() { 
		play(10)
	})
	$("#box5B").on("click", function() { 
		play(11)
	})
	$("#box6B").on("click", function() { 
		play(12)
	})

	$("#mancalaA").on("click", function() { 
		play(6)
	})
	$("#mancalaB").on("click", function() { 
		play(13)
	})

	//$(".box").on("click", play)

	//for(var i = 0; i < boxes.length; i++) {
	//boxes.addEventListener("click", play)
	//}

	function play(box) { 
		//console.log(box)
		if (playerOne && box < 6 && box > -1 ) {
				var stones = board[box];
				if (board[box] === 0) { 
					alert("there's nothing there")
					playerOne = false;
				} else {
					for (var i = 0; i <= stones; i++) {
						board[(box + i) % 14] +=1
						if (board[i] + 1 === 6) {
						playerOne = false
						} else {
							playerOne = true
						}
						// } else if (board[box + i] + stones === 1) {
						// 	isOpposite()
						// 	console.log(box)
						// }
					}
				}
				board[box] = 0;
				console.log(board)
				checkAllBoxes()	
			
		} else if (!playerOne && box < 13 && box > 6 ) {
			// if (box === 6 || box === 13) {
			// 	alert("you cant take a stone from the mancala!")
			// } else {
				var stones = board[box];
				if (board[box] === 0) { 
					alert("there's nothing there")
					playerOne = true
				} else {
					for (var i = 0; i <= stones; i++) {
						board[(box + i) % 14] +=1
						if (board[i] + 1 === 13) {
						playerOne = true
						} else {
							playerOne = false
						}
					}
				}
				board[box] = 0;
				console.log(board)
				checkAllBoxes()
			
		} else if (box === 6 || box === 13) {
			alert("you cant take a stone from the mancala!")
		} else {
			alert("thats not your box")
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


})