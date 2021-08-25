import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 250
    },
    content: {
        paddingHorizontal: 50
    },
    image: {
        width: 200,
        height: 200
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 28,
        marginTop: 10,
        marginBottom: 106,
        fontFamily: theme.fonts.title700,
        lineHeight: 40
    },
    containerButtonIcon: {
    }
});