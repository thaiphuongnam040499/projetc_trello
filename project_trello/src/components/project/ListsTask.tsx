import React, { useState, useEffect, useLayoutEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createList, findAllList } from '../../redux/reducer/listSlice';
// import CardDetail from './CardDetail';
// import ModalCard from './ModalCard';
// import { List } from '../../types/list.type';
// import CreateCard from './CreateCard';
// import { useLocation } from 'react-router-dom';
// import { RootState } from '../../redux/store';

// const initialState: List = {
//   id: '',
//   name: '',
//   boardId: '',
// };

// export default function Lists() {
//   const dispatch = useDispatch();

//   const location = useLocation();

//   const stateBoard = location.state;

//   // const [showInput, setShowInput] = useState(false);

//   const [showCreateList, setShowCreateList] = useState(false);

//   const handleShowInput = () => {
//     setShowCreateList(true);
//   };

//   //table
//   const [list, setList] = useState<List>(initialState);

//   const handleCreateList = (e: any) => {
//     e.preventDefault();
//     dispatch(createList(list));
//   };

//   useEffect(() => {
//     dispatch(findAllList());
//   }, []);

//   useEffect(() => {
//     setList({
//       id: '',
//       name: '',
//       boardId: stateBoard.boardId,
//     });
//   }, []);

//   const lists = useSelector((state: RootState) => state.list).list;

//   // table

//   return (
//     <div className="d-flex">
//       {lists &&
//         lists.map((list: List) => {
//           if (list.boardId === stateBoard.boardId) {
//             return (
//               <form
//                 key={list.id}
//                 className="border rounded mt-3 ms-3 bg-white list"
//               >
//                 <div className="mb-3 d-flex justify-content-between">
//                   <label
//                     htmlFor="exampleInputEmail1"
//                     className="form-label ms-2 mt-2"
//                   >
//                     {list.name}
//                   </label>
//                   <div className="dropdown">
//                     <button
//                       className="btn btn-light "
//                       type="button"
//                       id="dropdownMenuButton1"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       <i className="bi bi-three-dots"></i>
//                     </button>
//                     <ul
//                       className="dropdown-menu"
//                       aria-labelledby="dropdownMenuButton1"
//                     >
//                       <li className="text-center">
//                         <p>Thao tác</p>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Thêm thẻ
//                         </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Sao chép danh sách
//                         </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Di chuyển danh sách
//                         </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Theo dõi
//                         </a>
//                       </li>
//                       <hr className="my-2" />
//                       <li className="dropdown-item">
//                         <p>Tự động hóa</p>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Khi thêm thẻ vào danh sách...
//                         </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Hằng ngày sắp xếp danh sách theo...
//                         </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Thứ hai hàng tuần sắp xếp danh sách theo...
//                         </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Tạo quy tắc
//                         </a>
//                       </li>
//                       <hr className="my-2" />
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Di chuyển tất cả thẻ trong danh sách này...
//                         </a>
//                       </li>
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Lưu trữ tất cả thẻ trong danh sách này...
//                         </a>
//                       </li>
//                       <hr className="my-2" />
//                       <li>
//                         <a className="dropdown-item" href="#">
//                           Lưu trữ danh sách này...
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <CardDetail list={list} />
//                 <CreateCard list={list} />
//               </form>
//             );
//           }
//         })}

//       <div className="mt-5 ms-3">
//         {showCreateList ? (
//           <div className="p-2 bg-white create-list">
//             <input
//               onChange={(e) =>
//                 setList((prev) => ({ ...prev, name: e.target.value }))
//               }
//               placeholder="Nhập tiêu đề danh sách"
//               className="border rounded w-100 input-create-list"
//               value={list.name}
//             />
//             <div>
//               <button
//                 onClick={handleCreateList}
//                 className="btn btn-primary mt-2 "
//               >
//                 Thêm danh sách
//               </button>
//               <button
//                 onClick={() => setShowCreateList(false)}
//                 className="btn btn-light"
//               >
//                 <i className="bi bi-x-lg"></i>
//               </button>
//             </div>
//           </div>
//         ) : (
//           <button
//             onClick={handleShowInput}
//             type="submit"
//             className="btn btn-light w-100 text-start"
//           >
//             <i className="bi bi-plus-lg mx-2"></i>
//             Thêm dang sách khác
//           </button>
//         )}
//       </div>
//       <ModalCard />
//     </div>
//   );
// }
