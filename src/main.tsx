import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Fonte embutida no bundle: o jogo não depende de rede para ter a letra certa.
import "@fontsource/fredoka/400.css";
import "@fontsource/fredoka/500.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import "./index.css";

document.addEventListener("contextmenu", (e) => e.preventDefault());

createRoot(document.getElementById("root")!).render(<App />);
