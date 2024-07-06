import { ReactNode } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
    children: ReactNode;
    isSelected?: boolean;
    updateBoard?: (index: number) => void;
    index?: number;
    otherStyles?: string;
}

export function Square({
    children,
    isSelected,
    updateBoard,
    index,
    otherStyles,
}: Props) {
    return (
        <TouchableOpacity
            className={`w-[100px] h-[100px] border-2 border-light rounded items-center justify-center m-1 ${
                isSelected && "bg-[#09f]"
            } ${otherStyles}`}
            onPress={
                updateBoard && index !== undefined
                    ? () => updateBoard(index)
                    : undefined
            }
            activeOpacity={1}
        >
            {children}
        </TouchableOpacity>
    );
}
