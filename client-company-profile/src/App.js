// App.js
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/pages/LoadingScreen';
import { Pages } from './components/pages/Pages';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './dist/css/main.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Contoh penggunaan useEffect untuk mensimulasikan proses loading.
    const fakeAPICall = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    // Panggil fakeAPICall di sini atau ganti dengan panggilan API yang sesungguhnya.
    fakeAPICall();

    // Inisialisasi AOS dan refresh setelah komponen di-mount.
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          {/* Konten aplikasi Anda di sini setelah proses loading selesai */}
          <Pages />
        </div>
      )}
    </div>
  );
}

export default App;
