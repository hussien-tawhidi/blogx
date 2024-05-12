import { auth } from "@/auth";
import Profile from "@/components/auth/Profile";
const ProfilePage = async ({ params }: any) => {
  const session = await auth();
  return (
    <div className='flex'>
      <Profile email={session?.user?.email} session={session} />
    </div>
  );
};

export default ProfilePage;
