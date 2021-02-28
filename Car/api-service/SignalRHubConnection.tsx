import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import APIConfig from "./APIConfig";

let SignalRHubConnection: HubConnection;

(() => {
    const SignalRubConnectionFunc = new HubConnectionBuilder()
        .withUrl(APIConfig.URL + "signalr/")
        .build();
    SignalRubConnectionFunc!.start();
    SignalRHubConnection = SignalRubConnectionFunc;
})();

export default SignalRHubConnection;
