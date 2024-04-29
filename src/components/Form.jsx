import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import Swal from 'sweetalert2'
import ActionTypes from "../store/actionTypes";

const Form = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (e.target[0].value === "") {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Lütfen bir görev giriniz!',
            })
        }

        const newTodo = {
            id : v4(),
            title : e.target[0].value,
            is_done : false,
            created_at : new Date().toLocaleDateString()
        }

        dispatch({ type: ActionTypes.ADD, payload: newTodo })

        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className=" flex gap-6 items-center justify-center py-10">
            <div className="flex gap-3 w-1/4">
                <input className="bg-transparent border-b-2 w-full outline-none p-1" type="text" placeholder="Yapılacaklar..." />
            </div>

            <button className="py-1 px-6 bg-[#27ae60] rounded-md hover:brightness-90 transition duration-300 font-semibold" type="submit">Ekle</button>

        </form>
    )
}

export default Form