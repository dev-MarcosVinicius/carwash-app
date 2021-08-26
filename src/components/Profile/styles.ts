import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
    user: {
        flexDirection: 'row',
        alignSelf:'center',
        marginLeft: 40,
        marginRight: 50
    },
    greeating: {
        fontFamily: theme.fonts.text400,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6
    },
    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    }
});