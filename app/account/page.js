import { auth } from "../_lib/auth";

export const metadata = {
  title: "The Luxury Resorts | Account",
};

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
    </div>
  );
}
