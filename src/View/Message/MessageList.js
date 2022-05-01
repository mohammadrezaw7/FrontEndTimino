import MessageContainer from "./MessageContainer";
import { useSelector } from "react-redux";

export default function MessageList() {
  const userState = useSelector((state) => state.user);
  const activeUser = userState.users.find((item) => item.active);
  return (
    <>
      {activeUser.messages.map((item) => (
        <MessageContainer key={Math.random()} message={item} />
      ))}
    </>
  );
}
