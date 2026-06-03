import { Routes, Route } from 'react-router-dom';
import DiscoverScreen from './screens/Discover';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DiscoverScreen />} />
    </Routes>
  );
}
