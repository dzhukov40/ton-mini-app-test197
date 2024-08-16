'use client';

import { useState } from 'react';

const Translate: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null); // Set error to possibly be null

    const handleTranslate = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch("https://libretranslate.com/translate", {
                method: "POST",
                body: JSON.stringify({
                    q: inputText,
                    source: "auto",
                    target: "ru",
                    format: "text",
                    alternatives: 3,
                    api_key: ""
                }),
                headers: { "Content-Type": "application/json" }
            });

            const data = await res.json();
            if (res.ok) {
                setTranslatedText(data.translations[0].translatedText);
            } else {
                setError(data.error || 'Translation failed');
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Text Translator</h1>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={4}
                cols={50}
                placeholder="Enter text to translate"
            />
            <br />
            <button onClick={handleTranslate} disabled={loading}>
                {loading ? 'Translating...' : 'Translate'}
            </button>
            <div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {translatedText && (
                    <div>
                        <h2>Translated Text:</h2>
                        <p>{translatedText}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Translate;
