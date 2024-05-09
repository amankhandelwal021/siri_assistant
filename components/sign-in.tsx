
import { signIn } from "../app/auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
        <div className="bg-[#8136f9be] hover:bg-[#a46ef9e6] cursor-pointer duration-300 flex items-center space-x-3 text-white px-4 py-2 rounded-md">
      <button type="submit" className="text-sm font-sans font-semibold tracking-wider">Sign Up</button></div>
    </form>
  )
} 