import Navbar from './components/Navbar';
import ClientWrapper from './components/ClientWrapper';

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <ClientWrapper />
    </div>
  );
}
