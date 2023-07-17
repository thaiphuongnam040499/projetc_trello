import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { create } from '../../redux/reducer/cardSlice';

// import { Card } from '../../types/card.type';
// interface CardProps {
//   list: Lanes;
// }

// const initialState = {
//   name: '',
//   id: '',
//   listId: '',
// };

// export default function CreateCard({ list }: CardProps) {
//   // task
//   const [card, setCard] = useState<Card>(initialState);
//   console.log(card);

//   const dispatch = useDispatch();

//   const [showInput, setShowInput] = useState({
//     id: '',
//     stat: false,
//   });

//   const handleClick = (id: any) => {
//     setShowInput({
//       id: id,
//       stat: true,
//     });
//   };

//   const handleOffShowInput = (id: any) => {
//     setShowInput({
//       id: id,
//       stat: false,
//     });
//   };

//   useEffect(() => {
//     setCard({
//       name: '',
//       id: '',
//       listId: list.id,
//     });
//   }, []);

//   const handleCreateCard = (e: React.FormEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     dispatch(create(card));
//   };

//   //task

//   return (
//     <div className="ps-2 px-2 mb-2">
//       {showInput.stat && showInput.id === list.id ? (
//         <div>
//           <div>
//             <textarea
//               onChange={(e) =>
//                 setCard((prev: Card) => ({ ...prev, name: e.target.value }))
//               }
//               placeholder="Thêm tiêu đề cho thẻ này"
//               className="border rounded w-100"
//             />
//           </div>
//           <div>
//             <button
//               onClick={(e) => handleCreateCard(e)}
//               className="btn btn-primary"
//             >
//               Thêm thẻ
//             </button>
//             <button onClick={handleOffShowInput} className="btn btn-light">
//               <i className="bi bi-x-lg"></i>
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="d-flex justify-content-between">
//           <button
//             onClick={() => handleClick(list.id)}
//             type="submit"
//             className="btn btn-light w-100 text-start"
//           >
//             <i className="bi bi-plus-lg mx-2"></i>
//             Thêm thẻ
//           </button>
//           <div className="dropdown">
//             <button
//               className="btn btn-light "
//               type="button"
//               id="dropdownMenuButton1"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <i className="bi bi-credit-card-2-front"></i>
//             </button>
//             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//               <li>
//                 <div className="border rounded create-card">
//                   <div className="mb-3 d-flex justify-content-between">
//                     <label
//                       htmlFor="exampleInputEmail1"
//                       className="form-label ms-2 mt-2"
//                     >
//                       Mẫu thẻ
//                     </label>
//                     <div className="dropdown">
//                       <button
//                         className="btn btn-light "
//                         type="button"
//                         id="dropdownMenuButton1"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         <i className="bi bi-three-dots"></i>
//                       </button>
//                       <ul
//                         className="dropdown-menu"
//                         aria-labelledby="dropdownMenuButton1"
//                       >
//                         <li className="text-center">
//                           <p>Thao tác</p>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Thêm thẻ
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Sao chép danh sách
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Di chuyển danh sách
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Theo dõi
//                           </a>
//                         </li>
//                         <hr className="my-2" />
//                         <li className="dropdown-item">
//                           <p>Tự động hóa</p>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Khi thêm thẻ vào danh sách...
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Hằng ngày sắp xếp danh sách theo...
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Thứ hai hàng tuần sắp xếp danh sách theo...
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Tạo quy tắc
//                           </a>
//                         </li>
//                         <hr className="my-2" />
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Di chuyển tất cả thẻ trong danh sách này...
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Lưu trữ tất cả thẻ trong danh sách này...
//                           </a>
//                         </li>
//                         <hr className="my-2" />
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Lưu trữ danh sách này...
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="ps-2 px-2 mb-2">
//                     <button
//                       type="button"
//                       className="btn btn-light border rounded w-100 "
//                       data-bs-toggle="modal"
//                       data-bs-target="#exampleModal"
//                     >
//                       Lập kế hoạch dự án
//                     </button>
//                   </div>
//                   <div className="d-flex align-items-center ps-2 px-2 mb-2">
//                     <button
//                       type="submit"
//                       className="btn btn-light w-100 text-start"
//                     >
//                       <i className="bi bi-plus-lg mx-2"></i>
//                       Thêm thẻ
//                     </button>
//                     <div className="dropdown">
//                       <button
//                         className="btn btn-light "
//                         type="button"
//                         id="dropdownMenuButton1"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                       >
//                         <i className="bi bi-credit-card-2-front"></i>
//                       </button>
//                       <ul
//                         className="dropdown-menu"
//                         aria-labelledby="dropdownMenuButton1"
//                       >
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Action
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Another action
//                           </a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">
//                             Something else here
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
