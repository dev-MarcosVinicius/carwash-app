import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: theme.colors.secondary90,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    }
});