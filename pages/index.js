import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  if(session) {
    return(
      <div>
        Signed in as : {session.user.email} <br />
        <button onClick={() => signOut()}> Sign Out </button>
      </div>
    )
  }
  return (
    <div>
      You are not signed in <br />
      <button onClick={() => signIn()}> Sign In </button>
    </div>
  )
}
