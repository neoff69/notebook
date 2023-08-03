import { useState } from "react";
import { FormPopup } from "./formPopup/FormPopup";
import { PropsRefresh } from "../..";

export type FormProps = {
    formPopup: boolean;
    setFormPopup: React.Dispatch<React.SetStateAction<boolean>>;
    setRefreshApi: React.Dispatch<React.SetStateAction<number>>;
};

function setProps(
    propsRefresh: PropsRefresh,
    formPopup: boolean,
    setFormPopup: React.Dispatch<React.SetStateAction<boolean>>
): FormProps {
    let props: FormProps = {
        formPopup: formPopup,
        setFormPopup: setFormPopup,
        setRefreshApi: propsRefresh.setRefreshApi,
    };
    return props;
}

function CreateNotes(propsRefresh: PropsRefresh) {
    const [formPopup, setFormPopup] = useState(false);

    let props: FormProps = setProps(propsRefresh, formPopup, setFormPopup);
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
