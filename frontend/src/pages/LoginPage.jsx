import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    login(formData);
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      {/* Modal-like Container */}
      <div className="bg-base-200 p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-base-content" />
            </div>
            <h1 className="text-base-content text-2xl font-semibold">Welcome Back</h1>
            <p className="text-base-content/70">Sign in to your account</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content font-medium">Email</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-base-content/70" />
              </div>
              <input
                type="email"
                className="input input-bordered w-full bg-base-200 text-base-content pl-10 placeholder-base-content/70"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content font-medium">Password</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-base-content/70" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full bg-base-200 text-base-content pl-10 placeholder-base-content/70"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-base-content/70" />
                ) : (
                  <Eye className="h-5 w-5 text-base-content/70" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                Loading...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        <div className="text-center mt-6 text-base-content/70">
          Don't have an account?{" "}
          <Link to="/signup" className="link link-primary">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;