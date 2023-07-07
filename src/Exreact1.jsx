
import { useState } from "react"
export default function Exreact() {

    const original_Students = [
        { id: 1, fullname: "mario rossi", avg: 6, gender: 'm' },
        { id: 2, fullname: "luigi verdi", avg: 4, gender: 'm' },
        { id: 3, fullname: "peach pink", avg: 8, gender: 'f' },
        { id: 4, fullname: "wario rossi", avg: 9, gender: 'm' },
        { id: 5, fullname: "daisy princess", avg: 10, gender: 'f' },
    ]
    const [inp, setInp] = useState('')
    const [filtered, Setfiltered] = useState('')
    const [Students, SetStudents] = useState(original_Students)


    let Lista = Students.map(el => (
        <div >
            {el.gender != 'm' ?
                <div className="bg-pink-400 border border-black">
                    <h1>Id: {el.id} Name: {el.fullname}</h1>
                    <p> Media: {el.avg} Gender:  {el.gender}</p>
                </div>
                :
                <div className="bg-red-400 border border-black">
                    <h1>Id: {el.id} name: {el.fullname}</h1>
                    <p>media: {el.avg} gender: {el.gender}</p></div>}



        </div>
    ))

    function Search() {
        SetStudents(Students.filter(el =>
            el.fullname == inp))
            Setfiltered('')
        if (inp == '') {
          return  Setfiltered('Scrivere il nome completo')
        }
        if(inp != Students.hasOwnProperty(fullname)){
            return Setfiltered('nome non trovato')
        }

    }




    function reset() {
        SetStudents(original_Students)
        Setfiltered('')
    }


    return (

        <div className="flex
         flex-col
          gap-5 justify-center items-center">
            <header>{Lista}</header>

            <input value={inp} onChange={(el) => {
                setInp(el.target.value)
            }} type="text" placeholder="Inserisci Nome..." />
            <button onClick={Search} className="border border-black bg-slate-500">Cerca Studente</button>
            <button onClick={reset} className="border border-black bg-slate-500">Reset</button>
            <div>{filtered}</div>


        </div>




    )
}