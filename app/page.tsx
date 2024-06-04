
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">


        <h1>Test main page :)</h1>
        <button onClick="Telegram.WebApp.showAlert('Hello World!');">Launch Alert</button>
        <button onClick="showPopup();">Launch Popup</button>


        <h1>Buttons</h1>
        <button>Expand Webview</button>
        <button>Toggle Main Button</button>
      </main>
  );
}
