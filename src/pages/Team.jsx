import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";

const Team = () => {
  return (
    <div className="min-h-screen flex bg-background text-foreground">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        
        <main className="p-6">
          <h1>Team</h1>
        </main>
      </div>
    </div>
  );
};

export default Team;