import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FileView } from './containers/Files';

import { useState } from 'react';
import './App.scss';

function App() {
  const [numFiles, setNumFiles] = useState(0);
  const [fileSize, setFileSize] = useState(0);

  return (
    <div className="container__app">
      <Header className="container__header" title="File Viewer" />
      <FileView setParentNumFiles={setNumFiles} setParentFileSize={setFileSize} />
      <Footer numFiles={numFiles} fileSize={fileSize} />

    </div>
  );
}

export default App;
