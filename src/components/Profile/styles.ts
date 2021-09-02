import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        alignSelf: 'flex-end',
        alignContent: 'space-between',
        justifyContent: 'space-between',
    },
    user: {
        flexDirection: 'row',
        // alignItems: 'center',
        // alignSelf: 'center',
        // alignContent: 'center',
        // justifyContent: 'center',
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
    }
});