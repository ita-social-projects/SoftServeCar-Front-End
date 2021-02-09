import { StyleSheet } from "react-native";
import Font from "../../../components/fonts/Font";

const MyProfileTabsStyle = StyleSheet.create({
    headerStyle: {
        height: 120
    },

    backButtonOpacity: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    backButtonTextView: {
        flexDirection: "column",
        justifyContent: "center"
    },

    buttonText: {
        color: "#02A2CF",
        fontFamily: Font.OpenSans.ExtraBold,
        fontSize: 20,
        fontWeight: "700"
    },

    moreOptionsIcon: {
        paddingRight: 12
    },

    blackButtonText: {
        color: "black"
    },

    headerTitleStyle: {
        fontFamily: Font.OpenSans.ExtraBold,
        fontWeight: "700",
        fontSize: 20
    }
});

export default MyProfileTabsStyle;
