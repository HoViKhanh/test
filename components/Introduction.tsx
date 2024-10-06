import Image from "next/image";
import {Button} from "@/components/ui/button";
import { FaAngleDoubleDown } from "react-icons/fa";

export function Introduction() {
    return (
        <div className="flex flex-col items-center space-y-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl self-center">
          What is NextJS ?
        </h1>
        <p className="leading-7 max-w-4xl text-md text-center">
          Next.js là một framework dựa trên React. Nó được tạo ra bởi Vercel (trước đây là Zeit) 
          và là mã nguồn mở. Next.js đơn giản hóa quá trình xây dựng các ứng dụng React bằng cách 
          cung cấp một cấu trúc và một bộ tính năng sẵn sàng ngay từ ban đầu.
        </p>
        <Image
          src="/nextjs_intro.png"
          width={800}
          height={700}
          alt="Screenshot of nextjs"
          className="w-full h-full shadow-xl rounded-2xl"
        />
      </div>
    )
}