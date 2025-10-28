import { auth } from "../_lib/auth";
import NavMenu from "./NavMenu";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-50 text-xl">
      <NavMenu session={session} />
    </nav>
  );
}
