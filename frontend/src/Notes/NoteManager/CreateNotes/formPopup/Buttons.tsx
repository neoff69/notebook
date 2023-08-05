import { FormProps } from "../CreateNotes";

export function Buttons({
    setPopup,
}: {
    setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
    const handleCloseClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setPopup(false);
    };

    return (
        <div className="flex justify-center gap-60 px-28 py-12 bg-white ">
            <button type="button" onClick={handleCloseClick}>
                <img
                    className="h-12 justify-end content-end"
                    src=" /img/remove.png"
                    alt="Close"
                />
            </button>
            <button type="submit">
                <img
                    className="h-12 justify-end content-end"
                    src=" /img/validate.png"
                    alt="Validate"
                />
            </button>
        </div>
    );
}
