
import { auth } from "@/auth";
import LoginUser from "@/components/auth/SignInUser";

const SignInPage = async () => {
  const session = await auth();
  
  return (
    <div>
      <LoginUser session={session} />
    </div>
  );
};

export default SignInPage;
