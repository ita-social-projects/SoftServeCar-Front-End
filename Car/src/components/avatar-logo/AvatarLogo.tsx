import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { container } from "tsyringe";
import UserService from "../../../api-service/user-service/UserService";
import AvatarLogoStyle from "./AvatarLogoStyle";
import stc from "string-to-color";

const AvatarLogo = (props: any) => {
    const user = props?.user;
    const avatarStyle = [
        AvatarLogoStyle.userAvatar,
        { height: props?.size, width: props?.size }
    ];

    const userService = container.resolve(UserService);

    const [avatar, setAvatar] = useState(
        <ActivityIndicator
            style={AvatarLogoStyle.userAvatar}
            size="large"
            color="#000000"
        />
    );

    useEffect(() => {
        userService
            .getAvatar(Number(user?.id))
            .then((result) => {
                const byteOfImage = JSON.stringify(result.request._response);
                if (byteOfImage !== '""') {
                    setAvatar(
                        <Image
                            source={{
                                uri: "data:image/png;base64," + byteOfImage
                            }}
                            style={avatarStyle}
                        />
                    );
                } else {
                    setAvatar(
                        <View
                            style={[
                                avatarStyle,
                                {
                                    backgroundColor: stc(
                                        user!?.name + " " + user!?.surname
                                    )
                                }
                            ]}
                        >
                            <Text style={AvatarLogoStyle.userAvatarText}>
                                {user!?.name[0] + user!?.surname[0]}
                            </Text>
                        </View>
                    );
                }
            })
            .catch((e) => {
                console.log(e);
                <View
                    style={[
                        avatarStyle,
                        {
                            backgroundColor: stc(
                                user!?.name + " " + user!?.surname
                            )
                        }
                    ]}
                >
                    <Text style={AvatarLogoStyle.userAvatarText}>
                        {user!?.name[0] + user!?.surname[0]}
                    </Text>
                </View>;
            });
    }, []);

    return <View>{avatar}</View>;
};

export default AvatarLogo;
