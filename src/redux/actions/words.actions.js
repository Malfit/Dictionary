import api from '../../api/api';
// import { 
//   formDataForDeleteSending, formDataForUpdateSending
// } from '../../utils/Helpers/reportActions/formDataForSending';
// import {
//   getCheckInOutIdFromResponse
// } from '../../utils/Helpers/reportActions/getCheckInOutIdFromResponse';

// export const DISABLE_PRINTABLE_MOD = 'DISABLE_PRINTABLE_MOD';
// export const SET_REQUEST_PARAMS = 'SET_REQUEST_PARAMS';
// export const GET_ALL_DATA_SUCCESS = 'GET_ALL_DATA_SUCCESS';
// export const GET_ALL_DATA_FAIL = 'GET_ALL_DATA_FAIL';
// export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
// export const GET_USER_DATA_FAIL = 'GET_USER_DATA_FAIL';
// export const UPDATE_ROW_SUCCESS = 'UPDATE_ROW_SUCCESS';
// export const UPDATE_ROW_FAIL = 'UPDATE_ROW_FAIL';
// export const DELETE_ROW_SUCCESS = 'DELETE_ROW_SUCCESS';
// export const DELETE_ROW_FAIL = 'DELETE_ROW_FAIL';
// export const SET_PRINTABLE_MODE_SUCCESS = 'SET_PRINTABLE_MODE_SUCCESS';
// export const DISABLE_SCROLL_VIEW = 'DISABLE_SCROLL_VIEW';
// export const SET_EXCLUDED_DATES = 'SET_EXCLUDED_DATES';


// export const getAllData = (company, employee, dateFrom, dateTo) => dispatch => {
//   api.getAllData(company, employee, dateFrom, dateTo).then((response) => {
//     dispatch({
//       type: GET_ALL_DATA_SUCCESS,
//       payload: {
//         data: response.data,
//         employee,
//       }
//     })
//   }).catch((err) => {
//     console.log(err)
//     dispatch({
//       type: GET_ALL_DATA_FAIL,
//       payload: err,
//     });
//   });
// };

// export const updateRow = (checkInData, checkOutData, updateData) => dispatch => {
//   const data = formDataForUpdateSending(checkInData, checkOutData, updateData)
//   const { checkInTimeStamp, idCheckIn } = checkInData;
//   const { checkOutTimeStamp, idCheckOut } = checkOutData;

//   api.updateRow(data).then(({ data }) => {
//     const result = getCheckInOutIdFromResponse(data, checkInTimeStamp, checkOutTimeStamp, idCheckIn, idCheckOut);
//     const [checkInId , checkOutId] = result;
//     dispatch({
//       type: UPDATE_ROW_SUCCESS,
//         payload: {
//           date: updateData.date,
//           code: updateData.code,
//           checkInId,
//           checkOutId,
//           checkInTimeStamp,
//           checkOutTimeStamp 
//         }
//       })
//     }).catch((err) => {
//     console.log(err)
//     dispatch({
//       type: UPDATE_ROW_FAIL,
//       payload: err,
//     });
//   });
// };

// export const deleteRow = (checkInId, checkOutId, reason, scrollDate) => dispatch => {
//   const data = formDataForDeleteSending(checkInId, checkOutId, reason);
  
//   api.deleteRow(data).then(() => {
//     dispatch({
//       type: DELETE_ROW_SUCCESS,
//       payload: {
//         deletedCheckInId: checkInId,
//         deletedCheckOutId: checkOutId,
//         scrollDate,
//       }
//     })
//   }).catch((err) => {
//     console.log(err)
//     dispatch({
//       type: DELETE_ROW_FAIL,
//       payload: err,
//     });
//   });
// };

