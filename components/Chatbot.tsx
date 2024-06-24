import { useState } from "react";
import { MessageSquare, Send } from "react-feather";

import class1 from "@/public/mascots/class1.png";
import class2 from "@/public/mascots/class2.png";
import class3 from "@/public/mascots/class3.png";
import class4 from "@/public/mascots/class4.png";
import class5 from "@/public/mascots/class5.png";
import { chat } from "@/server/chatbot";
import toast from "react-hot-toast";

export default function Chatbot({ classNum }: { classNum: number }) {
  const [showChat, setShowChat] = useState<boolean>(false);

  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessage] = useState<
    {
      message: string;
      type: "user" | "bot";
    }[]
  >([
    {
      message: "How can I help you today?",
      type: "bot",
    },
  ]);

  const classes = [class1, class2, class3, class4, class5];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setMessage((prev) => [...prev, { message: input, type: "user" }]);
    setInput("");

    await addChat();
  };

  const addChat = async () => {
    const modelResponse = await chat(messages[messages.length - 1].message);
    if (modelResponse) {
      setMessage((prev) => [...prev, { message: modelResponse, type: "bot" }]);
      setLoading(false);
    } else return toast.error("Error fetching response");
  };

  return (
    <div className="fixed bottom-10 right-10">
      <button
        className="p-4 rounded-full transition-all shadow-md bg-indigo-500 text-white hover:bg-indigo-600"
        onClick={() => setShowChat(!showChat)}
      >
        <MessageSquare />
      </button>

      {showChat && (
        <div className="absolute right-0 bottom-16 rounded-lg h-96 bg-gray-50 shadow-lg w-96">
          <div className="px-2 h-12 flex items-center w-full bg-indigo-500 rounded-t-lg text-white font-medium">
            Chatbot
          </div>
          <ul className="w-full flex-1 flex flex-col gap-2 p-2 py-auto h-72 overflow-y-auto">
            {messages.map((msg, i) =>
              i === messages.length - 1 && loading ? (
                <li
                  key={i}
                  className="bg-gray-200 text-gray-500 p-1 rounded w-fit ml-auto"
                >
                  Loading...
                </li>
              ) : (
                <li
                  key={i}
                  className={`text-sm ${
                    msg.type === "bot"
                      ? "bg-gray-200"
                      : "bg-indigo-500 text-white ml-auto"
                  } p-1 rounded w-fit`}
                >
                  {msg.message}
                </li>
              )
            )}
          </ul>
          <form
            onSubmit={async (e) => {
              await handleSubmit(e);
            }}
            className="w-full flex flex-row items-center gap-2 px-2 h-12"
          >
            <input
              placeholder="Message"
              className="w-full p-1 rounded bg-gray-200"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              name="message"
              id="message"
              required
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-gray-200 p-2 rounded hover:bg-gray-300"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
