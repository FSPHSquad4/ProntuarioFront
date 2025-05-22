import { createContext, useContext, useEffect, useState } from 'react';
import { getUserById } from '@/helpers/data';
const ChatContext = createContext(undefined);
export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext só pode ser usado dentro do ChatProvider');
  }
  return context;
};
export const ChatProvider = ({
  children
}) => {
  const [activeChat, setActiveChat] = useState();
  const [offcanvasStates, setOffcanvasStates] = useState({
    showChatList: true,
    showUserSetting: false,
    showUserProfile: false
  });
  const changeActiveChat = async userId => {
    const user = await getUserById(userId);
    if (user) setActiveChat(user);
  };
  const toggleChatList = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showChatList: !offcanvasStates.showChatList
    });
  };
  const toggleUserProfile = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showUserProfile: !offcanvasStates.showUserProfile
    });
  };
  const toggleUserSetting = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showUserSetting: !offcanvasStates.showUserSetting
    });
  };
  const chatList = {
    open: offcanvasStates.showChatList,
    toggle: toggleChatList
  };
  const chatProfile = {
    open: offcanvasStates.showUserProfile,
    toggle: toggleUserProfile
  };
  const chatSetting = {
    open: offcanvasStates.showUserSetting,
    toggle: toggleUserSetting
  };
  useEffect(() => {
    changeActiveChat('101');
  }, []);
  return <ChatContext.Provider value={{
    chatSetting,
    activeChat,
    changeActiveChat,
    chatList,
    chatProfile
  }}>
      {children}
    </ChatContext.Provider>;
};