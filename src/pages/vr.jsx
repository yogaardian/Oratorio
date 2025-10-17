import React from 'react';
import { useParams } from 'react-router-dom'; // 1. Impor useParams
import { destinations } from '../data/destinations'; // 2. Impor "pusat data" Anda

// Impor komponen layout Anda
import VrHeroSection from '../components/vr-page/herosectionvr';
import VrStepsSection from '../components/vr-page/stepsectionvr';
import Footer from '../components/all-page/footer-page/footer';

const VrPage = () => {
    // 3. Ambil ID dari URL (misal: "candi-borobudur")
    const { destinationId } = useParams();

    // 4. Cari data destinasi yang sesuai berdasarkan ID
    const destinationData = destinations[destinationId];

    // 5. Jika data tidak ditemukan, tampilkan pesan error
    if (!destinationData) {
        return <h1>Destinasi VR tidak ditemukan!</h1>;
    }

    // 6. Render komponen layout dan KIRIM data yang ditemukan sebagai props
    return (
        <div>
            <VrHeroSection data={destinationData} />
            <VrStepsSection data={destinationData} />
            <Footer />
        </div>
    );
};

export default VrPage;