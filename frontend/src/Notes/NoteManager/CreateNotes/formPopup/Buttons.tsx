import { FormProps } from "../CreateNotes/CreateNotes";

export function Buttons(props: FormProps): JSX.Element {
    const handleCloseClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        props.setFormPopup(false);
    };

    return (
        <div className="flex justify-between px-28 py-12">
            <button type="button" onClick={handleCloseClick}>
                <img
                    className="h-12 justify-end content-end"
                    src=" /img/remove.png"
                    alt="Close"
                />
            </button>
            <button type="button">
                <img
                    className="h-12 justify-end content-end"
                    src=" /img/refresh.png"
                    alt="Refresh"
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
