import React, { useContext, useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import NotificationsService from "../../../api-service/notifications-service/NotificationsService";
import Notification from "../../../models/Notification";
import AuthContext from "../../components/auth/AuthContext";
import NotificationComponent from "./NotificationComponent";
import NotificationStyle from "./NotificationStyle";
import SignalRHubConnection from "../../../api-service/SignalRHubConnection";

const Notifications = (props: any) => {
    const { user } = useContext(AuthContext);
    const [notifications, setNotifications] = useState<Array<Notification>>([]);
    console.log("-",3000);
    console.log(SignalRHubConnection);
    console.log("!",3000);
    const [unreadNotificationsNumber, setUnreadNotificationsNumber] = useState(
        NotificationsService.getUnreadNotificationsNumber(user!.id)
    );



    const refreshNotification = () => {
        NotificationsService.getNotifications(Number(user?.id)).then((res) => {
            if (res.data) {
                setNotifications(res.data);
            }
        });
    };

    useEffect(() => {
        refreshNotification();
    }, [unreadNotificationsNumber]);

    useEffect(() => {
        SignalRHubConnection.on("sendToReact", refreshNotification);
        SignalRHubConnection.on(
            "updateUnreadNotificationsNumber",
            setUnreadNotificationsNumber
        );
        props.navigation.addListener("focus", refreshNotification);
        return () => {
            props.navigation.removeListener("focus", refreshNotification);
        };
    }, []);

    return (
        <FlatList
            style={NotificationStyle.headerContainer}
            data={notifications}
            keyExtractor={(item, key) => "" + key + item}
            renderItem={({ item }) => <NotificationComponent item={item} />}
        />
    );
};

export default Notifications;
