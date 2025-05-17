
import { SkipProvider } from './context/getSkip';
import SelectSkip from './pages/selectSkip';

export default function App() {
  return (
    <SkipProvider>
      <SelectSkip />
    </SkipProvider>
  );
}
