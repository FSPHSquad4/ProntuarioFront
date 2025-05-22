import AppProvidersWrapper from "./components/wrappers/AppProvidersWrapper";
import AppRouter from "./routes/router";
import "flatpickr/dist/flatpickr.min.css";
import "@/assets/scss/app.scss";
import "@/assets/scss/icons.scss";
function App() {
    return (
        <>
            <AppProvidersWrapper>
                <AppRouter />
            </AppProvidersWrapper>
        </>
    );
}
export default App;
