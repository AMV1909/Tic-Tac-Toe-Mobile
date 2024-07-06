import { View, Text, TouchableOpacity } from "react-native";

interface Props {
    winner: number | false | null;
    resetGame: () => void;
}

export function WinnerModal({ winner, resetGame }: Props) {
    if (winner === null) return null;

    if (winner !== false) {
    }

    return (
        <View className="absolute w-full h-full top-0 flex items-center justify-center bg-black">
            <View className="bg-[#111] h-64 w-64 border-2 border-[#eee] rounded-xl flex-col justify-center items-center opacity-100">
                <Text className="text-white text-2xl font-bold">
                    {winner === false ? "Draw" : `Winner ${winner}`}
                </Text>

                <TouchableOpacity
                    className="border-2 border-white p-4 rounded mt-5"
                    onPress={resetGame}
                    activeOpacity={1}
                >
                    <Text className="text-white text-2xl">Reset Game</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
