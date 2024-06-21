'use client';

import { useState, ChangeEvent } from 'react';

const ImageViewer: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target && event.target.result) {
                    setImageSrc(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <h1>Simple Image Viewer</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <div id="image-container">
                {imageSrc && <img src={imageSrc} alt="Chosen Image" />}
            </div>
        </div>
    );
};

export default ImageViewer;
