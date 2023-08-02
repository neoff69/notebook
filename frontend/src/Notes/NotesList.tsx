import axios from "axios";
import { useState, useEffect } from "react";
import { DeleteNotes } from "./NoteManager/DeleteNotes/DeleteNotes";

export type Props = {
    note: any;
    setDeleteClick: React.Dispatch<React.SetStateAction<number>>;
};

function getAllNotes(deleteClick: number): any {
    const [allNotes, setAllNotes] = useState<any>([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/notes/")
            .then(function (response) {
                setAllNotes(() => response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [deleteClick]);
    return allNotes;
}

function Note(props: Props): JSX.Element {
    return (
        <div className="m-1 flex">
            <a
                href="/"
                className="relative bg-stone-100 w-full rounded-lg flex justify-center items-center space-x-8 hover:bg-blue-100"
            >
                <img
                    src="/img/sticky-notes.png"
                    alt="Note image"
                    className="h-1/4"
                />
                <h3 className=" text-xl">{props.note.title}</h3>
                <DeleteNotes {...props} />
            </a>
        </div>
    );
}

function NoteList(): JSX.Element {
    const [deleteClick, setDeleteClick] = useState(0);
    const allNotes = getAllNotes(deleteClick);
    let index: number = 0;
    return (
        <div className="py-10 flex justify-center h-full">
            <div className=" w-full bg-stone-200 rounded-lg grid grid-cols-4">
                {allNotes.map((note: any) => {
                    index += 1;
                    let props: Props = {
                        note: note,
                        setDeleteClick: setDeleteClick,
                    };
                    return <Note key={index} {...props} />;
                })}
            </div>
        </div>
    );
}

export default NoteList;
