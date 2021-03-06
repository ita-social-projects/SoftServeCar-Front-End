import Chat from "../../models/Chat/Chat";
import ChatFilter from "../../models/Chat/ChatFilter";
import CreateChat from "../../models/Chat/CreateChat";
import Message from "../../models/Message";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getChatUrl();

const ChatService = {
    getChat: async (id: number | undefined) => APIService.get<Chat[]>(route + id),

    getCertainChat: async (id: number | undefined, idLastMessage: number | undefined) =>
        APIService.get<Message[]>(route + "chat/" + id + "/" + idLastMessage),

    getFilteredChats: async (filter: ChatFilter) =>
        APIService.post<Chat[]>(route + "filter/", filter),

    addChat: async (data: CreateChat) =>
        APIService.post<CreateChat>(route, data),
};

export default ChatService;
