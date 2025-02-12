// App.tsx
import Nav from "./components/general/Nav";
import Router from "./router";

function App() {
  return (
    <div className="flex min-h-screen bg-zinc-900 text-zinc-50 gap-4">
      <div className="w-64 bg-zinc-800 p-4">
        <Nav />
      </div>
      <div className="flex-1 p-6">
        <Router />
      </div>
    </div>
  );
}

export default App;