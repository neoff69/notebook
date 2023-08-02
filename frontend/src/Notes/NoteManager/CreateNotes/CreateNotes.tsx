import { useState } from "react";
import { FormPopup } from "./formPopup/FormPopup";

export type FormProps = {
    formPopup: boolean;
    setFormPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

function CreateNotes() {
    const [formPopup, setFormPopup] = useState(false);

    let props: FormProps = {
        formPopup: formPopup,
        setFormPopup: setFormPopup,
    };
    return (
        <div
            className="flex bg-stone-100  rounded-xl justify-center content-center hover:bg-blue-100 w-1/2 "
            onClick={() => {
                setFormPopup(true);
            }}
        >
            <h1 className="text-center text-4xl text-gray-800 m-2">
                CREATE NOTES
            </h1>
            <img src="../img/pen.png" alt="" className="h-10 m-2" />
            <FormPopup {...props} />
        </div>
    );
}

export default CreateNotes;
