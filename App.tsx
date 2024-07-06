import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { TURNS } from "./constants";
import { Square } from "./components/Square";
import { checkWinner } from "./logic";
import { WinnerModal } from "./components/WinnerModal";

export default function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.O);
    const [winner, setWinner] = useState<number | false | null>(0);

    useEffect(() => {
        setWinner(checkWinner(board));
    }, [board]);

    const updateBoard = (index: number) => {
        if (board[index] || winner) return;

        setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
        setBoard([...board.slice(0, index), turn, ...board.slice(index + 1)]);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
    };

    return (
        <SafeAreaView className="flex-1 bg-primary items-center justify-start">
            <Text className="text-white mt-10 text-4xl font-bold">
                Tic Tac Toe
            </Text>

            <TouchableOpacity
                className="rounded border-2 border-light px-2 py-3 mt-6 focus:bg-white"
                onPress={resetGame}
            >
                <Text className="text-white font-bold text-sm">Reset Game</Text>
            </TouchableOpacity>

            <View className="flex flex-row flex-wrap justify-center mt-6">
                {board.map((_, index) => (
                    <Square key={index} index={index} updateBoard={updateBoard}>
                        <Text className="text-5xl font-bold text-white hover:text-black mt-3 p-3">
                            {board[index]}
                        </Text>
                    </Square>
                ))}
            </View>

            <View className="flex-row mt-4">
                <Square
                    isSelected={turn === TURNS.X}
                    otherStyles="border-transparent w-[70px] h-[70px]"
                >
                    <Text className="text-white text-6xl mt-3 pt-1 font-bold">
                        {TURNS.X}
                    </Text>
                </Square>

                <Square
                    isSelected={turn === TURNS.O}
                    otherStyles="border-transparent w-[70px] h-[70px]"
                >
                    <Text className="text-white text-6xl mt-3 pt-1 font-bold">
                        {TURNS.O}
                    </Text>
                </Square>
            </View>

            <WinnerModal winner={winner} resetGame={resetGame} />

            <StatusBar style="dark" />
        </SafeAreaView>
    );
}
