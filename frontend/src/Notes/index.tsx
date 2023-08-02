import NoteList from "./NotesList";
import CreateNotes from "./NoteManager/CreateNotes/CreateNotes";

function Body() {
    return (
        <main className="p-10  min-h-screen border-8 border-stone-500">
            <div className="p-10 w-full min-h-screen bg-stone-300 rounded-lg">
                <header className="flex">
                    <h1 className="text-gray-800 text-4xl w-1/2 font-sans m-2 text-center">
                        My personal Notebook
                    </h1>
                    <CreateNotes />
                </header>
                <NoteList />
            </div>
        </main>
    );
}

export default Body;
