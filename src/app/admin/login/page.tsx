import LoginForm from "./LoginForm";

export const metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-[380px] rounded-lg bg-white p-8 shadow-sm ring-1 ring-black/5">
        <h1 className="mb-1 text-center text-lg font-bold text-primary">S.E.A.T.S Career</h1>
        <p className="mb-6 text-center text-xs text-muted">Admin sign in</p>
        <LoginForm />
      </div>
    </div>
  );
}
