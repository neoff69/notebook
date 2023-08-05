import { NotePopupProps } from "../../NotesList";
import { Buttons } from "../CreateNotes/formPopup/Buttons";
import { useState } from "react";
import axios from "axios";

function postRequest(
    title: FormDataEntryValue | null,
    note: FormDataEntryValue | null,
    setRefreshApi: React.Dispatch<React.SetStateAction<number>>,
    id: string
) {
    axios
        .put(`http://127.0.0.1:8000/notes/${id}/`, {
            title: title,
            content: note,
        })
        .then(function () {
            setRefreshApi((oldNbr) => {
                return oldNbr + 1;
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

function handleSubmit(e: any, props: NotePopupProps) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const title = formData.get("title");
    const note = formData.get("note");
    if (title === "" || note === "") {
        alert("Both fields must be filled out");
        return;
    }
    if (title && title.length > 50) {
        alert("Title too long");
        return;
    }
    postRequest(
        title,
        note,
        props.noteProps.setRefreshApi,
        props.noteProps.note.id
    );
    props.setNotePopup(false);
}

function NoteContent(props: NotePopupProps) {
    const [title, setTitle] = useState(props.noteProps.note.title);
    const [content, setContent] = useState(props.noteProps.note.content);

    return (
        <>
            {" "}
            <input
                className=" text-center outline-none"
                type="text"
                name="title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            ></input>
            <textarea
                className="mt-12 mx-28 h-full overflow-auto outline-none"
                name="note"
                id=""
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                }}
            ></textarea>
        </>
    );
}

function NotePopup(props: NotePopupProps): JSX.Element {
    if (props.notePopup === false) return <></>;
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-40">
                <div className="fixed inset-0 bg-black opacity-50"></div>

                <div className="z-50 w-3/4 h-3/4 bg-white rounded-xl">
                    <form
                        className=" text-4xl pt-8 flex flex-col h-full relative"
                        onSubmit={(e) => handleSubmit(e, props)}
                    >
                        <NoteContent {...props} />
                        <Buttons setPopup={props.setNotePopup} />
                    </form>
                </div>
            </div>
        </>
    );
}

export default NotePopup;
