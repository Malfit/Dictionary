import * as axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const api = {
  // getAllData: (company, employee, dateFrom, dateTo) => 
  //   BASE_CONNECTION.get(correctLink(company, employee, dateFrom, dateTo)),
  // deleteRow: data => BASE_CONNECTION.post('/icomengo2/reject', data),
  // updateRow: data =>  BASE_CONNECTION.post('icomengo2/update/actions', data),
  // //chat 
  // // getConversationsData: employee => instance.get(`/chat/getConversations/${employee}`),
  // getConversationsData: (employee, lastUpdatedTime) => BASE_CONNECTION.get(`/chat/getConversations2/${employee}/${lastUpdatedTime}`),
  // // getMessagesData: (id, employee) => instance.get(`/chat/getMessages/${id}/${employee}`),
  // getMessagesData: (id, employee, lastMessagesUpdate) => BASE_CONNECTION.get(`/chat/getMessages2/${id}/${employee}/${lastMessagesUpdate}`),
  // postNewMessage: (id, message, employee) => BASE_CONNECTION.post('/chat/submitMessage', {
  //   id,
  //   message,
  //   owner: employee
  // }),
  // getAvailableEmployees: (employee, search) => BASE_CONNECTION.post('/chat/availableEmployees', {employee, search}),
  // addNewConversation: (receiver, employee) => BASE_CONNECTION.post("/chat/initChat",  {receiver, employee}),
};

export default api;