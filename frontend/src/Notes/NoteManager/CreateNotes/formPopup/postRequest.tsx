import axios from "axios";

function postRequest(
    title: FormDataEntryValue | null,
    note: FormDataEntryValue | null
) {
    axios
        .post("", {
            title: title,
            content: note,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default postRequest;
