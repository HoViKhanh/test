import React from "react";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import { GrTransaction } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

export default function Home() {
    // Move the content rendering to the return statement
    return (
        <div className="h-screen w-screen p-8 flex flex-col min-h-screen overflow-auto mb-36">
            <div className="w-3/5 h-screen flex-col self-center space-y-3">
                <div className="flex items-center justify-center text-xl font-bold space-x-2">
                    <p>5. Server Action</p>
                    <GrTransaction/>
                </div>
                <ReactMarkdown className={`text-lg`}>
                    Trong **Next.js**, Server Action là khái niệm chỉ các hành động được thực hiện trên máy chủ (server) của ứng dụng web trước khi nội dung được gửi đến trình duyệt của người dùng. 
                    Điều này thường bao gồm các xử lý dữ liệu, truy vấn cơ sở dữ liệu, hoặc các tác vụ phức tạp khác mà cần sự can thiệp của máy chủ để xử lý.
                </ReactMarkdown>
                <div className="flex items-center space-x-2">
                    <Image
                        src="/server-action.png"
                        className="w-1/2 border-2 h-96 shadow-md"
                        width={600} height={600} alt="Server action"
                    />
                    <Image
                        src="/server-api.png"
                        className="w-1/2 border-2 h-96 shadow-md"
                        width={600} height={600} alt="Server API"
                    />
                </div>
                <ReactMarkdown className={`text-lg`}>
                    Một trong những lí do chính trong việc sử dụng server action trong **Next.js** là để giải quyết việc bất đồng bộ trong
                    phát triển ứng dụng
                </ReactMarkdown>
                <Image
                    src="/frontendbefore.jpg"
                    className="w-full border-2 h-96 shadow-md"
                    width={1000} height={1000} alt="Building Frontend before backend"
                />
                <p className={`text-lg`}>
                    <b>1. Phát triển backend và frontend cùng một lúc:</b> Với Next.js, bạn có thể phát triển cả phần backend và frontend của ứng dụng trong cùng một dự án. Bằng cách sử dụng Server Action, bạn có thể tạo và quản lý các API endpoint, xử lý dữ liệu, và thậm chí triển khai logic kinh doanh trên máy chủ, 
                    tất cả đều được tích hợp vào cùng một ứng dụng Next.js.
                    <br/>
                    <b>2. Thuận tiện trong việc phát triển đồng thời:</b> Bằng cách phát triển backend và frontend trong cùng một dự án, bạn có thể dễ dàng truy cập và sử dụng các thành phần từ cả hai phía một cách linh hoạt. Điều này giúp tăng hiệu suất phát triển.
                </p>
                <div className="flex py-8 justify-between">
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent">
                        <FaBackward className="w-5 h-5"/>
                        <a href="/client-and-server">Trước đó (Client & Server)</a>
                    </Button>
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent">
                        <a href="/caching">Tiếp theo (Caching)</a>
                        <FaForward className="w-5 h-5"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
