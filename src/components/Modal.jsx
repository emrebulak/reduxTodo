import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import ActionTypes from '../store/actionTypes';

const Modal = ({ item, setIsOpen }) => {
    const ref = useRef(null);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        if (ref.current.value === "") {
            return;
        }
        const newItem = {
            ...item,
            title: ref.current.value,
            created_at: new Date().toLocaleDateString()
        }

        dispatch({ type: ActionTypes.UPDATE, payload: newItem })
        setIsOpen(false);
    }


    return (
        <div className='bg-gray-500 bg-opacity-50 w-screen h-screen absolute top-0 flex justify-center items-center'>
            <div className='border p-2 w-1/3 flex flex-col gap-5 items-start justify-center opacity-100 bg-slate-100 text-black rounded-md'>
                <div className='border-b w-full'>
                    <h2>Todo Güncelle</h2>
                </div>

                <div className='mb-8 w-full flex flex-col gap-2'>
                    <input ref={ref} defaultValue={item.title} type="text" className="w-full p-2 border rounded-md" placeholder='Başlık...' />

                </div>

                <div className="flex justify-end gap-5 w-full text-white">
                    <button onClick={handleUpdate} className="py-1 px-5 bg-[#2980b9] rounded-md hover:brightness-90 transition duration-300 font-semibold">Kaydet</button>
                    <button onClick={() => setIsOpen(false)} className="py-1 px-5 bg-[#c0392b] rounded-md hover:brightness-90 transition duration-300 font-semibold">İptal</button>
                </div>


            </div>
        </div>
    )
}

export default Modal