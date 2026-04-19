import AppRoutes from './routes/AppRoutes';
import ToastViewport from './components/ui/ToastViewport';
import PreviewModal from './components/game/PreviewModal';
import CommandPalette from './components/common/CommandPalette';

function App() {
  return (
    <>
      <AppRoutes />
      <PreviewModal />
      <CommandPalette />
      <ToastViewport />
    </>
  );
}

export default App;
