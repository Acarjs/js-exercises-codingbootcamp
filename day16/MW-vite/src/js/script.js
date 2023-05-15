import listOfMessages from './data.json';
import { Conversation } from './classes/Conversation.js';

const conversationElement = document.querySelector('.conversation');
const conversation = new Conversation(conversationElement)

listOfMessages.forEach((message, index) => {
  setTimeout(() => {
    conversation.addMessage(message)
  }, 500 * index);
});
