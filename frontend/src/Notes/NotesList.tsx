import axios from "axios";
import { useState, useEffect } from "react";
import { PropsRefresh } from ".";
import { DeleteNotes } from "./NoteManager/DeleteNotes/DeleteNotes";
import NotePopup from "./NoteManager/NotePopup/NotePopup";

export type Props = {
    note: any;
    setRefreshApi: React.Dispatch<React.SetStateAction<number>>;
};

export type NotePopupProps = {
    noteProps: Props;
    notePopup: boolean;
    setNotePopup: React.Dispatch<React.SetStateAction<boolean>>;
};

function getAllNotes(refreshApi: number): any {
    const [allNotes, setAllNotes] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/notes/")
            .then(function (response) {
                setAllNotes(() => response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [refreshApi]);
    return allNotes;
}

function Note(props: Props): JSX.Element {
    const [notePopup, setNotePopup] = useState(false);
    let notePopupProps: NotePopupProps = {
        noteProps: props,
        notePopup: notePopup,
        setNotePopup: setNotePopup,
    };

    return (
        <div className="m-1 flex">
            <div
                onClick={() => setNotePopup(true)}
                className="relative bg-stone-100 w-full rounded-lg flex justify-center items-center space-x-8 hover:bg-blue-100"
            >
                <img
                    src="/img/sticky-notes.png"
                    alt="Note image"
                    className="h-1/4"
                />
                <h3 className=" text-xl">{props.note.title}</h3>
                <DeleteNotes {...props} />
                <NotePopup {...notePopupProps} />
            </div>
        </div>
    );
}

function NoteList(propsRefresh: PropsRefresh): JSX.Element {
    const allNotes = getAllNotes(propsRefresh.refreshApi);
    let index: number = 0;
    return (
        <div className="py-10 flex justify-center h-full">
            <div className=" w-full bg-stone-200 rounded-lg grid grid-cols-4">
                {allNotes.map((note: any) => {
                    index += 1;
                    let props: Props = {
                        note: note,
                        setRefreshApi: propsRefresh.setRefreshApi,
                    };
                    return <Note key={index} {...props} />;
                })}
            </div>
        </div>
    );
}

export default NoteList;
