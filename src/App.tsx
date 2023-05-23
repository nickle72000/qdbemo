import './App.css';
import AppRouter from './Router';
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return  <QueryClientProvider client={queryClient}><AppRouter /></QueryClientProvider>;
}

export default App;
