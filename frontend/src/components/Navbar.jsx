import { Link } from "react-router-dom";
import { MessageSquare, Settings, User, LogOut } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";

const Navbar = () => {
  const { logout,authUser } = useAuthStore();

  return (
    <header className="bg-base-200 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all">
              <MessageSquare className="w-6 h-6 text-base-content" />
              <h1 className="text-lg font-semibold text-base-content">Chatty</h1>
            </Link>
          </div>

          {/* Right Side Options */}
          <div className="flex items-center gap-3">
            {/* Settings (Always Visible) */}
            <Link
              to="/settings"
              className="flex items-center gap-2 px-4 py-2 text-base-content hover:bg-primary rounded-full transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {/* Profile and Logout (Visible only when authenticated) */}
            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-base-content hover:bg-primary rounded-full transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 text-base-content hover:bg-primary rounded-full transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;