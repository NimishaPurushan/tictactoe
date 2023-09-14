function findBestMove(board) {
    let bestMove = -1;
    let bestScore = -Infinity;
    //let board = board2.slice();
    console.log("board--",board)
    // Loop through all empty cells on the board
    for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
            // Try this empty cell with 'O' (the computer's move)
            board[i] = 'O';
            
            // Calculate the score for this move
            const score = minimax(board, 0, false);
            console.log("score--",score,board[i],i)
            // Undo the move
            board[i] = '';
            
            // If the score for this move is better than the best score so far, update it
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    return bestMove;
}

function minimax(board, depth, isMaximizing) {
    const scores = {
        'X': -1, // Player
        'O': 1,  // Computer
        'draw': 0,
    };

    const [result, winningCells] = checkWinner(board);

    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;

        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                const score = minimax(board, depth + 1, false);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }

        return bestScore;
    } else {
        let bestScore = Infinity;

        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                const score = minimax(board, depth + 1, true);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }

        return bestScore;
    }
}


const checkWinner = (board) => {
    // Define winning combinations (rows, columns, diagonals)
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6],            // Diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return [board[a], combo]; 
        }
    }

    if (board.every((square) => square !== null)) {
        return ['draw',null]; // If all squares are filled, it's a draw
    }

    return [null,null]; // No winner yet
};

export {findBestMove, checkWinner};
