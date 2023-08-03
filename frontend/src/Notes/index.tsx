import NoteList from "./NotesList";
import CreateNotes from "./NoteManager/CreateNotes/CreateNotes";
import { useState } from "react";

export type PropsRefresh = {
    refreshApi: number;
    setRefreshApi: React.Dispatch<React.SetStateAction<number>>;
};

function Body() {
    const [refreshApi, setRefreshApi] = useState(0);

    let props: PropsRefresh = {
        refreshApi: refreshApi,
        setRefreshApi: setRefreshApi,
    };
    return (
        <main className="p-10  min-h-screen border-8 border-stone-500">
            <div className="p-10 w-full min-h-screen bg-stone-300 rounded-lg">
                <header className="flex">
                    <h1 className="text-gray-800 text-4xl w-1/2 font-sans m-2 text-center">
                        My personal Notebook
                    </h1>
                    <CreateNotes {...props} />
                </header>
                <NoteList {...props} />
            </div>
        </main>
    );
}

export default Body;
