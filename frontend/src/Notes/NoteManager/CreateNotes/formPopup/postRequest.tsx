import axios from "axios";

function postRequest(
    title: FormDataEntryValue | null,
    note: FormDataEntryValue | null,
    setRefreshApi: React.Dispatch<React.SetStateAction<number>>
) {
    axios
        .post("http://127.0.0.1:8000/notes/", {
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

export default postRequest;
