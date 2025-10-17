import React from 'react';
import { useParams } from 'react-router-dom';
import { destinations } from '../data/destinations'; // Impor data terpusat

// Impor komponen layout Anda
import HeroSection from '../components/ar-page/herosection';
import StepsSection from '../components/ar-page/stepsection'; 
import Footer from '../components/all-page/footer-page/footer';

const ArPage = () => {
    // 1. Ambil ID dari URL (misal: "candi-borobudur")
    const { destinationId } = useParams();

    // 2. Cari data destinasi yang sesuai berdasarkan ID
    const destinationData = destinations[destinationId];

    // Jika data tidak ditemukan, tampilkan pesan error
    if (!destinationData) {
        return <h1>Destinasi tidak ditemukan!</h1>;
    }

    // 3. Render komponen layout dan KIRIM data sebagai props
    return (
        <div>
            <HeroSection data={destinationData} />
            <StepsSection data={destinationData} />
            <Footer />
        </div>
    );
};

export default ArPage;