"use client"

import { useEffect, useRef, useState } from "react";
import ePub, { Book, Rendition } from "epubjs";
import JSZip from "jszip";

// Ensure JSZip is available globally for epub.js
if (typeof window !== "undefined") {
    (window as any).JSZip = JSZip;
}

interface EpubReaderProps {
    url: string;
    width?: number;
    height?: number;
}

const EpubReader: React.FC<EpubReaderProps> = ({ url, width = 600, height = 400 }) => {
    const areaRef = useRef<HTMLDivElement>(null);
    const [rendition, setRendition] = useState<Rendition | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && areaRef.current) {
            const bookInstance = ePub(url);
            const renditionInstance = bookInstance.renderTo(areaRef.current, { width, height });

            renditionInstance.display().then(() => {
                setRendition(renditionInstance);
            }).catch((error) => {
                console.error("Error displaying EPUB:", error);
            });

            return () => {
                bookInstance.destroy();
            };
        }
    }, [url, width, height]);

    const handleNext = () => {
        if (rendition) {
            rendition.next().catch((error) => console.error("Error navigating to next page:", error));
        } else {
            console.warn("Rendition not initialized yet.");
        }
    };

    const handlePrev = () => {
        if (rendition) {
            rendition.prev().catch((error) => console.error("Error navigating to previous page:", error));
        } else {
            console.warn("Rendition not initialized yet.");
        }
    };

    return (
        <div>
            <div ref={areaRef} id="area" style={{ width, height, border: '1px solid #ccc', marginBottom: '10px' }}></div>
            <div>
                <button onClick={handlePrev} style={{ marginRight: '5px', padding: '10px 20px', cursor: 'pointer' }}>Previous</button>
                <button onClick={handleNext} style={{ padding: '10px 20px', cursor: 'pointer' }}>Next</button>
            </div>
        </div>
    );
};

export default EpubReader;



