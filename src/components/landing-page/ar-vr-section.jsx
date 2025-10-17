import React from "react";
import "./ar-vr-section.css";
import arImage from "../../assets/images/ar.png";
import vrImage from "../../assets/images/vr.png";
import useScrollAnimation from '../../animations/hooks/useScrollAnimation';

function ARVRSection() {
    // 2. Panggil hook untuk mendapatkan ref
    const sectionRef = useScrollAnimation();

    return (
        // 3. Pasang ref ke elemen section utama
        <section ref={sectionRef} className="arvr-section">
            <div className="arvr-block">
                {/* Kiri atas: AR Image */}
                {/* 4. Tambahkan class animasi ke setiap elemen */}
                <div className="arvr-image animate-on-scroll stagger-1" style={{ gridArea: "imageAR" }}>
                    <img src={arImage} alt="Augmented Reality" />
                </div>

                {/* Kanan atas: VR Spec */}
                <div className="arvr-content animate-on-scroll stagger-2" style={{ gridArea: "contentVR" }}>
                    <div className="arvr-spec">
                        <h3 className="arvr-title">Virtual Reality</h3>
                        <p className="arvr-desc">
                            Masuk dan jelajahi situs bersejarah seolah-olah Anda benar-benar
                            berada di sana dalam lingkungan 360°.
                        </p>
                    </div>
                    <div className="arvr-spec">
                        <h4>Spesification</h4>
                        <p>
                            Desktop atau Smartphone <br />
                            Browser Modern (Chrome/Safari) <br />
                            <strong>Headset VR</strong> (Untuk Pengalaman Terbaik)
                        </p>
                    </div>
                </div>

                {/* Kiri bawah: AR Spec */}
                <div className="arvr-content animate-on-scroll stagger-3" style={{ gridArea: "contentAR" }}>
                    <div className="arvr-spec">
                        <h3 className="arvr-title">Augmented Reality</h3>
                        <p className="arvr-desc">
                            Menghadirkan situs, artefak dan tempat bersejarah langsung ke
                            ruang digital Anda melalui perangkat digital Anda.
                        </p>
                    </div>
                    <div className="arvr-spec">
                        <h4>Spesification</h4>
                        <p>
                            Desktop atau Smartphone <br />
                            Browser Modern Chrome/Safari <br />
                            <strong>Tanpa Perlu Instalasi Aplikasi Berat!</strong>
                        </p>
                    </div>
                </div>

                {/* Kanan bawah: VR Image */}
                <div className="arvr-image animate-on-scroll stagger-4" style={{ gridArea: "imageVR" }}>
                    <img src={vrImage} alt="Virtual Reality" />
                </div>
            </div>

            {/* CTA BUTTON */}
            <div className="arvr-cta animate-on-scroll stagger-5">
                <button>Rasakan Pengalaman Menggunakan AR dan VR Sekarang!</button>
            </div>
        </section>
    );
}

export default ARVRSection;