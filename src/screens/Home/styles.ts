import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%',
        marginBottom: 22
    },
    body: {
        marginTop: 27,
        marginHorizontal: 20,
        borderRadius: 8,
        height: '100%',
        maxHeight: '65%',
        backgroundColor: theme.colors.outview
    },
    matches: {
        borderRadius: 8
    }
});