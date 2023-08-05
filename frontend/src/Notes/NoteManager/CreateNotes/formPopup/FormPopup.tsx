import { FormProps } from "../CreateNotes";
import { Buttons } from "./Buttons";
import postRequest from "./postRequest";

function handleSubmit(e: any, props: FormProps) {
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
    postRequest(title, note, props.setRefreshApi);
    props.setFormPopup(false);
}

function Input(): JSX.Element {
    return (
        <>
            {" "}
            <input
                className=" text-center outline-none"
                type="text"
                name="title"
                placeholder="Write the title of the note"
            />
            <textarea
                name="note"
                id=""
                className="mt-12 mx-28 outline-none h-full"
                placeholder="Write the content of the note"
            ></textarea>
        </>
    );
}

function Form(props: FormProps): JSX.Element {
    return (
        <form
            onSubmit={(e) => handleSubmit(e, props)}
            className=" text-4xl pt-8 flex flex-col h-full"
            action=""
        >
            <Input />
            <Buttons setPopup={props.setFormPopup} />
        </form>
    );
}

export function FormPopup(props: FormProps): JSX.Element {
    if (props.formPopup === true) {
        return (
            <div className="fixed inset-0 flex items-center justify-center z-40">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="z-50 w-3/4 h-3/4 bg-white rounded-xl">
                    <Form {...props} />
                </div>
            </div>
        );
    } else return <></>;
}
