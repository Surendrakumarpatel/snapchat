import ChatCamera from "@/components/ChatCamera"

const ChatPage = () => {
    return (
        <main className="flex flex-grow items-center">
            <div className="bg-chatImage bg-cover bg-right-bottom rounded-lg w-full h-[98%] flex mx-2 items-center justify-center px-6">
                <ChatCamera />
            </div>
        </main>
    );
}

export default ChatPage