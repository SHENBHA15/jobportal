import { useState, ChangeEvent } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/config/firebase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleResetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset email sent! Please check your inbox.");
            setError(null);
        } catch (error) {
            console.error('Error sending password reset email:', error);
            setMessage(null);
            setError("Failed to send password reset email. Please try again.");
        }
    };

    const handleBackToLogin = () => {
        router.push('/'); // Adjust the path if needed
    };

    return (
        <div className="bg-white drop-shadow-2xl font-montserrat rounded-lg max-w-md mx-auto sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-gray-950 font-montserrat font-bold text-lg sm:text-xl md:text-2xl">Forgot Password</h1>

            <div className="mt-5">
                <Label className="font-montserrat font-semibold">Email Address</Label>
                <Input
                    onChange={handleEmailChange}
                    value={email}
                    type="email"
                    placeholder="Enter your email"
                    className="font-montserrat font-semibold mt-2"
                    required
                />
            </div>

            <div className="flex items-center justify-center mt-10">
                <Button
                    onClick={handleResetPassword}
                    className="font-montserrat font-semibold w-full text-md bg-blue-500 py-2 md:py-3 lg:py-4"
                >
                    Send Password Reset Email
                </Button>
            </div>

            {message && <p className="mt-4 text-green-500 font-montserrat">{message}</p>}
            {error && <p className="mt-4 text-red-500 font-montserrat">{error}</p>}

            <div className="flex items-center justify-center mt-4">
                <Button
                    onClick={handleBackToLogin}
                    className="font-montserrat font-semibold w-full text-md bg-transparent text-blue-500 hover:text-white py-2 md:py-3 lg:py-4">
                    Back to Login
                </Button>
            </div>
        </div>
    );
};

export default ForgotPassword;
