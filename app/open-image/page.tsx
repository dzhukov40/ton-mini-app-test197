import ImageViewer from "@/app/components/ImageViewer";

export default function Home() {
    return (
        <div>
            <head>
                <title>Simple Image Viewer</title>
                <meta name="description" content="A simple image viewer created with Next.js"/>
                <link rel="icon" href="/favicon.ico"/>
            </head>

            <div>
                <ImageViewer/>
            </div>

        </div>
    );
}
