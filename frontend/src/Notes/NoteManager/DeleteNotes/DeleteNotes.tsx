import axios from "axios";
import { Props } from "../../NotesList";

async function deleteNote(id: any, props: Props) {
    try {
        await axios.delete(`http://127.0.0.1:8000/notes/${id}/`);
        props.setRefreshApi((number) => {
            let newNumber = number + 1;
            return newNumber;
        });
    } catch (error) {
        console.log("Error occurred while deleting the note");
        console.log(error);
    }
}

export function DeleteNotes(props: Props): JSX.Element {
    return (
        <button
            onClick={(e) => {
                deleteNote(props.note.id, props);
                e.preventDefault();
            }}
            className="p-1 h-8 absolute top-0 right-0 hover:h-9"
        >
            <img
                src="/img/remove.png"
                alt="delete"
                className="p-1 h-8 hover:h-9"
            />
        </button>
    );
}
