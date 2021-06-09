import "./styles/main.scss";
import { Employees } from "./components/employees";
import { Header } from "./components/header";

function App() {
    return (
        <>
            <Header />
            <Employees />;
        </>
    );
}

export default App;
