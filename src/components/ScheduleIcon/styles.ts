import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
    container: {
        width: 64,
        height: 64,
        borderRadius: 8,
        backgroundColor: 'transparent',//theme.colors.heading,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        overflow: 'hidden'
    },
    image: {
        width: 64,
        height: 64,
    }
});