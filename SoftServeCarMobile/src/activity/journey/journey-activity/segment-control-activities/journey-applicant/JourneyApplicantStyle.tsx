import { Platform, StyleSheet } from "react-native";

export const JourneyApplicantStyle = StyleSheet.create({

    mainContainer:{
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    topContainer: {
        height: 116,
        paddingLeft: 20,
        paddingTop: 36,
        flexDirection: 'row',
    },

    userAvatar: {
        width: 56,
        height: 56,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#EEEEEE'
    },

    userInformation: {
        marginLeft: 15,
        fontFamily: Platform.OS === "ios" ? 'Proxima Nova' : 'Proxima-Nova-Reg.ttf',
        fontWeight: 'bold'
    },

    userName: {
        lineHeight: 21,
        fontFamily: Platform.OS === "ios" ? 'Proxima Nova' : 'Proxima-Nova-Reg.ttf',
        fontSize: 18,
        marginBottom: 8,
        fontWeight: 'bold'
    },

    userAdditionalData: {
        lineHeight: 14,
        fontSize: 14,
        opacity: 0.5,
        fontFamily: Platform.OS === "ios" ? 'Proxima Nova' : 'Proxima-Nova-Reg.ttf',
        marginBottom: 8
    },

    buttonContainer: {
        alignItems: 'flex-end',
        paddingRight: 17,
        paddingBottom: 24,
    },

    button: {
        height:36,
        width: 139,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#000000",
        borderWidth: 2,
        borderStyle: "solid",
    },

    buttonText: {
        fontFamily: Platform.OS === "ios" ? 'Proxima Nova' : 'Proxima-Nova-Reg.ttf',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },

    separator: {
        height: 1,
        backgroundColor: '#F2F2F2'
    },

    bottomContainer: {
        backgroundColor: '#FFFFFF',
        paddingRight: 24,
        paddingLeft: 24,
        paddingTop: 13,
    },

    positionContainer: {
        flexDirection: 'row',
        paddingBottom: 16,
    },

    locationContainer: {
        flexDirection: 'row',
    },

    detailsText: {
        fontFamily: Platform.OS === "ios" ? 'Open Sans' : 'OpenSans-Regular.ttf',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },

    positionText: {
        flex :133,
        fontFamily: Platform.OS === "ios" ? 'Open Sans' : 'OpenSans-Regular.ttf',
        fontWeight: 'bold',
        fontSize: 13,
        color: 'black',
        paddingTop: 16,
    },

    locationText: {
        flex: 133,
        fontFamily: Platform.OS === "ios" ? 'Open Sans' : 'OpenSans-Regular.ttf',
        fontWeight: 'bold',
        fontSize: 13,
        color: 'black',
    },

    positionData: {
        flex: 194,
        fontFamily: Platform.OS === "ios" ? 'Open Sans' : 'OpenSans-Regular.ttf',
        fontSize: 13,
        lineHeight: 18,
        color: '#414045',
        paddingTop: 16,
    },

    locationData: {
        flex: 194,
        fontFamily: Platform.OS === "ios" ? 'Open Sans' : 'OpenSans-Regular.ttf',
        fontWeight: 'bold',
        fontSize: 13,
        color: '#02A2CF',
    },
});

