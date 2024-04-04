import { auth, signIn, signOut } from "../auth"
import Visits from "./visits";

export default async function MainButton() {
  const session = await auth();
  if (session) {
    const tmp = session?.user?.email as string
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <Visits email={tmp}/>
        <form 
          action={async () => {
            'use server'
            await signOut()
          }}
        >
          <button>Sign out</button>
        </form>
      </>
    )
  }
  
  return (
    <>
      Not signed in <br />
      <form 
        action={async () => {
          'use server'
          await signIn()
        }}
      >
        <button>Sign in</button>
      </form>
    </>
  )
}