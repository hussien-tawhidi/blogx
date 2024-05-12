import { auth } from "@/auth";
import RegisterUser from "@/components/auth/RegisterUser";

const RegisterUsePage = async () => {
  const session = await auth();
  return (
    <div>
      <RegisterUser session={session} />
    </div>
  );
};

export default RegisterUsePage;
