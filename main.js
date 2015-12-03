
// var boxes = document.getElementsByClassName("box")
// console.log(boxes)
var boxes = [document.getElementById("box1A"), document.getElementById("box2A"), document.getElementById("box3A"), document.getElementById("box4A"), document.getElementById("box5A"), document.getElementById("box6A"), document.getElementById("mancalaA"), document.getElementById("box1B"), document.getElementById("box2B"), document.getElementById("box3B"), document.getElementById("box4B"), document.getElementById("box5B"), document.getElementById("box6B"), document.getElementById("mancalaB")]
var board = [4,4,4,4,4,4,0,4,4,4,4,4,4,0]
var playerOne = true;
var stoneImages = ["assets/images/0Stones_Mancala.png", "assets/images/Glassstone01.png", "assets/images/2Stones_Mancala.png", "assets/images/3Stones_Mancala.png", "assets/images/4Stones_Mancala.png", "assets/images/5Stones_Mancala.png", "assets/images/6Stones_Mancala.png", "assets/images/7Stones_Mancala.png", "assets/images/8Stones_Mancala.png", "assets/images/9Stones_Mancala.png", "assets/images/10Stones_Mancala.png", "assets/images/11Stones_Mancala.png"]
var stoneImagesMancala = ["assets/images/0Stones_Mancala.png", "assets/images/Glassstone01.png.png", "assets/images/2StonesInMancala.png", "assets/images/3StonesInMancala.png", "assets/images/4StonesInMancala.png", "assets/images/5StonesInMancala.png", "assets/images/6StonesInMancala.png", "assets/images/7StonesInMancala.png", "assets/images/8StonesInMancala.png", "assets/images/9StonesInMancala.png", "assets/images/10StonesInMancala.png", "assets/images/11Stones_Mancala.png"]


$(".btn").on("click", function() {
	gameInit()
})

function gameInit() {
	for (var i = 0; i < board.length; i++) {
		getImages(i)
	}
}

boxes[0].addEventListener("click", function() {
	var x = board[0]
	getImages(x)
	play(0)
})
boxes[1].addEventListener("click", function() {
	var x = board[1]
	getImages(x) 
	play(1)
})
boxes[2].addEventListener("click", function() { 
	var x = board[2]
	getImages(x)
	play(2)
})
boxes[3].addEventListener("click", function() { 
	var x = board[3]
	getImages(x)
	play(3)
})
boxes[4].addEventListener("click", function() { 
	var x = board[4]
	getImages(x)
	play(4)
})
boxes[5].addEventListener("click", function() { 
	var x = board[5]
	getImages(x)
	play(5)
})
boxes[7].addEventListener("click", function() { 
	var x = board[7]
	getImages(x)
	play(7)
})
boxes[8].addEventListener("click", function() { 
	var x = board[8]
	getImages(x)
	play(8)
})
boxes[9].addEventListener("click", function() { 
	var x = board[9]
	getImages(9)
	play(9)
})
boxes[10].addEventListener("click", function() { 
	var x = board[10]
	getImages(x)
	play(10)
})
boxes[11].addEventListener("click", function() { 
	var x = board[11]
	getImages(x)
	play(11)
})
boxes[12].addEventListener("click", function() {
	var x = board[12]
	getImages(x) 
	play(12)
})
boxes[6].addEventListener("click", function() {
	var x = board[6]
	getImagesManacala(x)
	play(6)
})
boxes[13].addEventListener("click", function() { 
	var x = board[13]
	getImagesManacala(x)
	play(13)
})

	//$(".box").on("click", play)

	//for(var i = 0; i < boxes.length; i++) {
	//boxes.addEventListener("click", play)
	//}
	// var boxes = document.getElementsByClassName("box") [mancalaA, box6A, box5A, box4A, box3A, box2A. box1A, mancalaB, box6B, box5B, box4B, box3B, box2B, box1B]
	// var board = [4,7,4,4,4,4,0,4,4,4,4,4,4,0]

function getImages(num) {
	if (board[num] === 0) {
		boxes[num].src = stoneImages[0]
	} else if (board[num] === 1) {
		boxes[num].src = stoneImages[1]
	} else if (board[num] === 2) {
		boxes[num].src = stoneImages[2]
	} else if (board[num] === 3) {
		boxes[num].src = stoneImages[3]
	} else if (board[num] === 4) {
		boxes[num].src = stoneImages[4]
	} else if (board[num] === 5) {
		boxes[num].src = stoneImages[5]
	} else if (board[num] === 6) {
		boxes[num].src = stoneImages[6]
	} else if (board[num] === 7) {
		boxes[num].src = stoneImages[7]
	} else if (board[num] === 8) {
		boxes[num].src = stoneImages[8]
	} else if (board[num] === 9) {
		boxes[num].src = stoneImages[9]
	} else if (board[num] === 10) {
		boxes[num].src = stoneImages[10]
	} else if (board[num] === 11) {
		boxes[num].src = stoneImages[11]
	}
}

function getImagesManacala(num) {
	if (board[num] === 0) {
		boxes[num].src = stoneImagesMancala[0]
	} else if (board[num] === 1) {
		boxes[num].src = stoneImagesMancala[1]
	} else if (board[num] === 2) {
		boxes[num].src = stoneImagesMancala[2]
	} else if (board[num] === 3) {
		boxes[num].src = stoneImagesMancala[3]
	} else if (board[num] === 4) {
		boxes[num].src = stoneImagesMancala[4]
	} else if (board[num] === 5) {
		boxes[num].src = stoneImagesMancala[5]
	} else if (board[num] === 6) {
		boxes[num].src = stoneImagesMancala[6]
	} else if (board[num] === 7) {
		boxes[num].src = stoneImagesMancala[7]
	} else if (board[num] === 8) {
		boxes[num].src = stoneImagesMancala[8]
	} else if (board[num] === 9) {
		boxes[num].src = stoneImagesMancala[9]
	} else if (board[num] === 10) {
		boxes[num].src = stoneImagesMancala[10]
	} else if (board[num] === 11) {
		boxes[num].src = stoneImagesMancala[11]
	}
}

function play(box) { 
	var stones = board[box];
	if (playerOne && box < 6 && box > -1 ) {
			if (stones === 0) { 
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
			checkAllBoxes()	
	} else if (!playerOne && box < 13 && box > 6 ) {
			var stones = board[box];
			if (stones === 0) { 
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
			stones = 0;
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





