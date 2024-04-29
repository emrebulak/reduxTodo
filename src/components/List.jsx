import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { CgSandClock } from "react-icons/cg";
import { MdDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Modal from "./Modal";
import { useState } from "react";
import ActionTypes from "../store/actionTypes";

const List = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState({});

    const storeState = useSelector((state) => state.todoReducer);
    const dispatch = useDispatch();

    const { DELETE, UPDATE } = ActionTypes;

    const handleDelete = (e, item) => {
        e.stopPropagation();

        Swal.fire({
            title: "Dikkat!",
            text: "Silmek istediğine emin misin ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Evet",
            cancelButtonText: "Hayır"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({ type: DELETE, payload: item.id })
            }
        });

    }

    const handleChange = (item) => {
        const newItem = {
            ...item,
            is_done: !item.is_done
        }

        dispatch({ type: UPDATE, payload: newItem })
    }

    const handleUpdate = (e, item) => {
        e.stopPropagation();
        setIsOpen(true);
        setItem(item);
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">

            <ul className="w-[30%] flex flex-col gap-3">

                {
                    storeState.todos.map((item) =>
                        <li onClick={() => handleChange(item)} key={item.id} className="border p-3 rounded-md cursor-pointer">
                            <div className="flex flex-col gap-2">
                                <h4 className={`flex justify-between ${item.is_done && 'line-through'}`}>{item.title} <span className="flex">{item.is_done ? <MdDone className="text-[#27ae60]" /> : <CgSandClock className="text-yellow-600" />} </span></h4>
                                <h5 className={`${item.is_done && 'line-through'}`}>{item.created_at}</h5>
                            </div>

                            <div className="flex justify-end gap-5">
                                <button onClick={(e) => handleUpdate(e, item)} className="py-2 px-6 bg-[#2980b9] rounded-md hover:brightness-90 transition duration-300 font-semibold" type="submit"><MdEdit className="size-5" /></button>
                                <button onClick={(e) => handleDelete(e, item)} className="py-2 px-6 bg-[#c0392b] rounded-md hover:brightness-90 transition duration-300 font-semibold"><MdDeleteForever className="size-5" /></button>
                            </div>
                        </li>
                    )

                }

                {
                    storeState.todos.length == 0 ? <h1 className="text-center">Henüz bir görev eklenmedi!</h1> : null
                }

            </ul>

            {
                isOpen && <Modal item={item} setIsOpen={setIsOpen} />
            }


        </div>
    )
}

export default List