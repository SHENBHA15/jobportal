import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent } from "react";
import { FLogin } from "@/actions/auth/index";
import { useRouter } from "next/router";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await FLogin(email, password);
            // console.log("Login response: ", response);
            if (response) {
                console.log("Login Successful");
                router.push('/dash');
            } else {
                console.error("Login Failed");
            }
        } catch (error) {
            console.error("Login Failed");
        }
    };


    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignUpClick = () => {
        router.push('/signuppage'); 
    };

    const handleForgotPassword = () => {
        router.push('/forgotpasspage'); 
    };

    return (
        <div className="bg-white drop-shadow-2xl font-montserrat rounded-lg max-w-md mx-auto sm:p-6 md:p-8 lg:p-10">

            <h1 className="text-gray-950 font-montserrat font-bold text-lg sm:text-xl md:text-2xl">Login</h1>

            <div className="mt-5">
                <Label className="font-montserrat font-semibold">Email ID / Username</Label>
                <Input
                    onChange={handleEmailChange} value={email}
                    type="email"
                    placeholder="Enter Email ID / Username"
                    className="font-montserrat font-semibold mt-2"
                    required
                />
            </div>

            <div className="mt-5">
                <Label className="font-montserrat font-semibold mt-5">Password</Label>
                <Input
                    onChange={handlePasswordChange} value={password}
                    type="password"
                    placeholder="Enter Password"
                    className="font-montserrat font-semibold mt-2"
                    required
                />
            </div>

            <div className="mt-2 right-0 w-full">
                <Button
                    onClick={handleForgotPassword}
                    className="bg-transparent text-blue-500 font-montserrat font-normal ml-52 text-sm md:text-base 
                    hover:bg-transparent hover:text-blue-500">
                    Forgot Password?
                </Button>
            </div>

            <div className="flex items-center justify-center mt-10">
                <Button
                    onClick={handleLogin}
                    className="font-montserrat font-semibold w-full text-md bg-blue-500 py-2 md:py-3 lg:py-4">
                    Login
                </Button>
            </div>

            <div className="flex items-center justify-center mt-3">
                <a href="#" className="text-blue-500 font-montserrat text-sm md:text-base">Use OTP to Login</a>
            </div>

            <div className="flex flex-col items-center justify-center mt-1">
                <p className="px-4 text-gray-700 font-montserrat">Or</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-3">
                <Button
                    className="hover:text-white hover:border-black text-lg font-montserrat font-semibold w-full
                    rounded-full text-black border-2 bg-transparent border-blue-500 drop-shadow-2xl py-2 md:py-3 lg:py-4">
                    <img src="/images/googleicon.jpg/" className="pr-3" width={45} height={45} alt="Google Icon" />
                    Sign in with Google
                </Button>

                <div className="mt-3 text-blue-500">
                    <Button className="bg-transparent hover:bg-transparent text-blue-500 " onClick={handleSignUpClick}>
                        New User? Sign Up
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
