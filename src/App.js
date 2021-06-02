import logo from "./logo.svg";
import "./styles/main.scss";
import { Employees } from "./components/employees";

function App() {
    return (
        <>
            <div className="hero-container container">
                <h1 className="hero-title">
                    The trained shinobi's of tretton37
                </h1>
            </div>
            <Employees />;
        </>
    );
}

export default App;
