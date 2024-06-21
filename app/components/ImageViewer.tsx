'use client';

import { useState, ChangeEvent } from 'react';

const ImageViewer: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImageSrc(event.target.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Simple Image Viewer</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <div id="image-container" style={{ marginTop: '20px' }}>
                {imageSrc && <img src={imageSrc} alt="Chosen Image" style={{ maxWidth: '100%', maxHeight: '80vh' }} />}
            </div>
        </div>
    );
};

export default ImageViewer;