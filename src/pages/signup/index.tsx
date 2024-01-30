import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "src/components/button/Button";
import TextField from "src/components/input/TextField";
import { Inter } from "next/font/google";
import { useAuth } from "src/hooks";

const inter = Inter({ subsets: ["latin"] });
interface FormValues {
  email: string;
  password: string;
  name: string;
}

export default function Signup() {
  //   const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center ">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative grid justify-items-center gap-6 content-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/textlogo.svg"
          alt="PalmFarm Text Logo"
          width={80}
          height={37}
          priority
        />
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.svg"
          alt="PalmFarm Logo"
          width={138}
          height={37}
          priority
        />
        <>
          <h1>SignupPage</h1>

          <form
            className="flex flex-col space-y-2 p-4"
            // onSubmit={handleSubmit((data) => signup(data))}
          >
            <TextField
              type="email"
              label="email"
              placeholder="nicole@example.com"
              helper={errors.email?.message}
              {...register("email", { required: "이메일을 입력해주세요" })}
            />

            <TextField
              type="password"
              label="password"
              helper={errors.password?.message}
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: { value: 6, message: "최소 6자 이상 가능합니다" },
                maxLength: {
                  value: 15,
                  message: "최대 15자 까지만 가능합니다",
                },
              })}
            />

            <TextField
              label="name"
              helper={errors.name?.message}
              {...register("name", { required: "이름을 입력해주세요" })}
            />

            <Button text="Signup" className="filled-brand-1" />
          </form>
        </>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
