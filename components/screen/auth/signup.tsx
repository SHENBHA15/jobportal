import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent } from "react";
import { FSignUp } from "@/actions/auth";
import { useRouter } from "next/router";

const SignUpPage = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const router = useRouter();

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await FSignUp(name, email, password);
        } catch (error) {
            console.error(error);
        }
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleLoginClick = () => {
        router.push('/');
    };

    return (
        <div className="bg-white drop-shadow-2xl font-montserrat rounded-lg max-w-md mx-auto sm:p-6 md:p-8 lg:p-10">

            <h1 className="text-gray-950 font-montserrat font-bold text-lg sm:text-xl md:text-2xl">Sign Up</h1>

            <div className="mt-5">
                <Label className="font-montserrat font-semibold">Name</Label>
                <Input
                    onChange={handleNameChange} value={name}
                    type="text"
                    placeholder="Enter Your Name"
                    className="font-montserrat font-semibold mt-1.5 w-full"
                    required
                />
            </div>

            <div className="mt-5">
                <Label className="font-montserrat font-semibold">Email ID / Username</Label>
                <Input
                    onChange={handleEmailChange} value={email}
                    type="email"
                    placeholder="Enter Email ID / Username"
                    className="font-montserrat font-semibold w-full"
                    required
                />
            </div>

            <div className="mt-5">
                <Label className="font-montserrat font-semibold">Password</Label>
                <Input
                    onChange={handlePasswordChange} value={password}
                    type="password"
                    placeholder="Enter Password"
                    className="font-montserrat font-semibold w-full"
                    required
                />
            </div>

            <div className="mt-5">
                <Label className="font-montserrat font-semibold">Confirm Password</Label>
                <Input
                    onChange={handleConfirmPasswordChange} value={confirmPassword}
                    type="password"
                    placeholder="Confirm Password"
                    className="font-montserrat font-semibold mt-2 w-full"
                    required
                />
            </div>

            <div className="flex items-center justify-center mt-5">
                <Button
                    onClick={handleSignUp}
                    className="font-montserrat font-semibold w-full text-md bg-blue-500">
                    Sign Up
                </Button>
            </div>

            <div className="flex items-center justify-center mt-3">
                <a href="#" className="text-blue-500 font-montserrat">Use OTP to Sign Up</a>
            </div>

            <div className="flex flex-col items-center justify-center mt-2">
                <p className="px-4 text-gray-700 font-montserrat">Or</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-2">
                <Button
                    className="hover:text-white hover:border-black text-lg font-montserrat font-semibold w-full rounded-full
                     text-black border-2 bg-transparent border-blue-500 drop-shadow-2xl flex items-center justify-center">
                    <img src="/images/googleicon.jpg/" className="pr-3" width={48} height={48} alt="Google Icon" />
                    Sign up with Google
                </Button>

                <div className="mt-3 text-blue-500">
                    <Button className="bg-transparent hover:bg-transparent text-blue-500 font-medium font-montserrat">
                        <a onClick={handleLoginClick}>Already have an account? Login</a>
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
