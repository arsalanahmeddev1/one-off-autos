import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SocketProvider } from './components/sockets/SocketContext'; 


createRoot(document.getElementById("root")!).render(<SocketProvider><App /></SocketProvider>);
