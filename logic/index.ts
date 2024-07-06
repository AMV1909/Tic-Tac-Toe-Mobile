import { WINNER_COMBOS } from "../constants";

const checkEndGame = (board: number[]) => {
    return board.every((cell) => cell !== null) ? false : null;
};

export const checkWinner = (boardToCheck: number[]) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;

        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a];
        }
    }

    return checkEndGame(boardToCheck);
};
