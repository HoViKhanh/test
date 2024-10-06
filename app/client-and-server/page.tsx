"use client"

import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button";
import { BiServer } from "react-icons/bi";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

export default function Home() {

    // Move the content rendering to the return statement
    return (
        <div className="h-screen w-screen p-8 flex flex-col min-h-screen overflow-auto mb-36">
            <div className="w-3/5 h-full flex-col self-center space-y-3 items-center">
                <div className="flex items-center justify-center text-xl font-bold space-x-2">
                    <p>4. Client and Server Component</p>
                    <BiServer/>
                </div>
                <ReactMarkdown className={`text-lg`}>
                    Ở **Next.js**, các thành phần được chia thành hai dạng là *Client Component* và *Server Component*. Khi các thành phần được định nghĩa trong project
                    sẽ được mặc định là một *Server Component*.
                </ReactMarkdown>
                <p className="text-lg font-semibold underline">
                    Client Component:
                </p>
                <p className="text-lg">
                    Client Component: Đây là các thành phần (components) được render trên phía client (trình duyệt) sau khi trang đã được tải và hiển thị cho người dùng. Client Components thường chứa mã JavaScript tương tác với DOM (Document Object Model) của trình duyệt, và có thể thực hiện các thay đổi trên giao diện người dùng mà không cần tải lại toàn bộ trang. 
                    Ví dụ: các thành phần tương tác người dùng như nút bấm, biểu mẫu, hiển thị danh sách.
                </p>
                <p className="text-lg">
                    Để sử dụng Client Components, ta có thể thêm chỉ thị <code className="bg-slate-950 text-white rounded-md px-1">"use client"</code> của React ở đầu tệp tin, đặt trước các lệnh import.
                </p>
                <Image
                    src="/useclient.png"
                    className="w-full border-2 shadow-md"
                    width={1000} height={1000} alt="use client"
                />
                <p className="text-lg font-semibold underline">
                    Server Component:
                </p>
                <p className="text-lg">
                    Server Component: Đây là các thành phần được render trước trên máy chủ (server) trước khi được gửi đến trình duyệt của người dùng. Server Components thường chứa mã JavaScript chạy trên máy chủ, có thể truy cập vào dữ liệu cần thiết từ cơ sở dữ liệu hoặc các nguồn dữ liệu khác, và trả về nội dung đã được render cho trình duyệt. 
                </p>
                <Image
                    src="/fetch-response.png"
                    className="w-full border-2 shadow-md"
                    width={1000} height={1000} alt="use server"
                />
                <p className="text-lg font-semibold underline">
                    Client and Server Component
                </p>
                
                <p className="text-lg">
                    Sự phân biệt giữa Client Components và Server Components trong Next.js giúp tối ưu hóa hiệu suất và trải nghiệm người 
                    dùng bằng cách sử dụng các kỹ thuật như Server-side Rendering (SSR) và Static Site Generation (SSG) 
                    để tạo ra các ứng dụng web động đáp ứng nhanh chóng.
                </p>
                <div className="flex py-8 justify-between">
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent">
                        <FaBackward className="w-5 h-5"/>
                        <a href="/components">Trước đó (Components)</a>
                    </Button>
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent">
                        <a href="/server-action">Tiếp theo (Server action)</a>
                        <FaForward className="w-5 h-5"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
