import React from "react";
import ReactDOM from "react-dom/client";
import "../build/style.css";
import Body from "./Notes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <main className="min-h-screen">
            <Body />
        </main>
    </React.StrictMode>
);
