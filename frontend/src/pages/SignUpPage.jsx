import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      {/* Modal-like Container */}
      <div className="bg-base-200 p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="flex flex-col items-center gap-2">
            <div className="size-12 flex items-center justify-center">
              <MessageSquare className="size-6 text-base-content" />
            </div>
            <h1 className="text-base-content text-2xl font-semibold">
              Create Account
            </h1>
            <p className="text-base-content/70">Get started with your free account</p>
          </div>
        </div>

        {/* Input Field */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content font-medium">
                Full Name
              </span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="size-5 text-base-content/70" />
              </div>
              <input
                type="text"
                className="input input-bordered w-full bg-base-300 text-base-content pl-10 placeholder-base-content/70"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content font-medium">Email</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="size-5 text-base-content/70" />
              </div>
              <input
                type="email"
                className="input input-bordered w-full bg-base-300 text-base-content pl-10 placeholder-base-content/70"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content font-medium">
                Password
              </span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="size-5 text-base-content/70" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full bg-base-300 text-base-content pl-10 placeholder-base-content/70"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-5 text-base-content/70" />
                ) : (
                  <Eye className="size-5 text-base-content/70" />
                )}
              </button>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="btn btn-primary w-full py-2 rounded-full transition"
            disabled={isSigningUp}
          >
            {isSigningUp ? (
              <>
                <Loader2 className="size-5 animate-spin mr-2" />
                Loading...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-6 text-base-content/70">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;