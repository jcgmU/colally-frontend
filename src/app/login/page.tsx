import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form className="space-y-4" action="/api/login" method="post">
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input id="email" name="email" type="email" required className="border p-2" />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" required className="border p-2" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Entrar</button>
      </form>
    </div>
  )
}
