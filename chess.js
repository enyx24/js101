const { Chess } = require('chess.js');

const chess = new Chess();

function displayBoard(moveNumber, white, black, currentMove) {
    chess.move(currentMove);

    const board = chess.board();
    console.log(moveNumber);

    if (chess.turn() === 'w') {
        console.log(black + " - " + currentMove);
    } else {
        console.log(black);
    }

    console.log("   +------------------------+");

    for (let rank = 0; rank < 8; rank++) {
        let row = " " + (8 - rank) + " |"; 
        for (let file = 0; file < 8; file++) {
            const piece = board[rank][file];
            if (piece === null) {
                row += " ."; // One space between dot and border
            } else {
                row += " " + getUnicodePiece(piece); // One space between piece and border
            }
            if (file < 7) {
                row += " "; // Two spaces between pieces or dots
            }
        }
        row += " |";
        console.log(row);
    }

    console.log("   +------------------------+");

    // Custom column labels: a  ♝  c  d  e  f  g  h
    console.log("     a  ♝  c  d  e  f  g  h");

    if (chess.turn() === 'b') {
        console.log(white + " - " + currentMove);
    } else {
        console.log(white);
    }
}

function getUnicodePiece(piece) {
    const pieces = {
        'p': '♙', 'r': '♖', 'n': '♘', 'b': '♗', 'q': '♕', 'k': '♔',
        'P': '♟', 'R': '♜', 'N': '♞', 'B': '♝', 'Q': '♛', 'K': '♚'
    };
    return piece.color === 'w' ? pieces[piece.type] : pieces[piece.type.toUpperCase()];
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    const lines = input.trim().split('\n');

    // Extract player names
    const whitePlayer = lines.find(line => line.includes('White')).match(/"([^"]+)"/)[1];
    const blackPlayer = lines.find(line => line.includes('Black')).match(/"([^"]+)"/)[1];

    // Join lines of moves, removing newlines within moves
    const moveSectionStart = lines.findIndex(line => line.match(/^\d+\./));
    const moveLines = lines.slice(moveSectionStart).join(' ').replace(/\s+/g, ' ');
    const movesArray = moveLines.replace(/\d+\.\s+/g, '').split(/\s+/);

    let moveCount = 2;
    for (let i = 0; i < movesArray.length - 1; i++) {
        moveCount++;
        displayBoard(parseInt(moveCount / 2), whitePlayer, blackPlayer, movesArray[i]);
    }

    // Handle game result
    const gameResult = movesArray[movesArray.length - 1];
    if (gameResult === "1-0") {
        console.log("WHITE WIN");
    } else if (gameResult === "0-1") {
        console.log("BLACK WIN");
    } else {
        console.log("DRAW");
    }
});

process.stdin.resume();
