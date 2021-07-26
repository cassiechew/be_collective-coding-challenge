import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FileView } from './containers/Files';
import './App.scss';

function App() {
  let numFiles = 0;
  let fileSize = 0;
  return (
    <div className="container">
      <Header className="container__header" title="File Viewer" />
      <FileView />
      <Footer numFiles={numFiles} fileSize={fileSize} />

    </div>
  );
}

export default App;
