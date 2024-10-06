import React from "react";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import { LuLayout } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

export default function Home() {
    // Move the content rendering to the return statement
    return (
        <div className="h-screen w-screen p-8 flex flex-col min-h-screen overflow-auto mb-36">
            <div className="w-3/5 h-screen flex-col self-center space-y-3">
                <div className="flex items-center justify-center text-xl font-bold space-x-2">
                    <p>1. Routing and Navigation</p>
                    <LuLayout/>
                </div>
                <ReactMarkdown className={`text-lg`}>
                    **Next.js** sử dụng bộ định tuyến dựa trên hệ thống tệp trong đó các thư mục được sử dụng để xác định tuyến đường.
                    Mỗi thư mục đại diện cho một đoạn tuyến đường ánh xạ tới một đoạn URL. Để tạo một tuyến lồng nhau, bạn có thể lồng các thư mục vào nhau.
                </ReactMarkdown>
                <Image
                    src="/layout-img-1.png"
                    className="w-full border-2 shadow-md"
                    width={1000} height={1000} alt="Layout Image 1"
                />
                <p className="text-lg">
                    Một tệp <code className="bg-slate-950 text-white rounded-md px-1">page.tsx</code> đặc biệt được sử dụng để làm cho các đoạn tuyến đường có thể truy cập công khai.
                </p>
                <Image
                    src="/layout-img-2.png"
                    className="w-full border-2 shadow-md"
                    width={1000} height={1000} alt="Layout Image 2"
                />
                <p className={`text-lg`}>
                    Ở ví dụ này thì để tạo được đường dẫn <code className="bg-slate-950 text-white rounded-md px-1">\layout</code> thì trong project ta tạo <b>folder layout</b> cùng với một file mang tên <code className="bg-slate-950 text-white rounded-md px-1">page.tsx</code>, khi truy xuất đến đường dẫn <a className="text-blue-700" href="localhost:3000/layout">này</a> thì website sẽ load nội dung của <code className="bg-slate-950 text-white rounded-md px-1">page.tsx</code>
                </p>
                <div className="flex items-center space-x-2">
                    <Image
                        src="/route-1.png"
                        className="w-1/2 border-2 shadow-md"
                        width={500} height={500} alt="Routing Image 1"
                    />
                    <Image
                        src="/route-2.png"
                        className="w-1/2 border-2 shadow-md"
                        width={600} height={600} alt="Routing Image 1"
                    />
                </div>
                <p className="text-lg">
                    <b>Next.js</b> còn có chức năng tạo các định tuyến động bằng cách đặt tên thư mục trong dấu ngoặc vuông: <br/>[tên thư mục]. Ví dụ: [id] hoặc [slug].
                </p>
                <div className="flex items-center space-x-2">
                    <Image
                        src="/dynamic-route-1.png"
                        className="w-1/2 border-2 shadow-md"
                        width={500} height={500} alt="Routing Image 1"
                    />
                    <Image
                        src="/dynamic-route-2.png"
                        className="w-1/2 border-2 shadow-md"
                        width={600} height={600} alt="Routing Image 1"
                    />
                </div>
                <div className="flex py-8 justify-between">
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent" disabled>
                        <FaBackward className="w-5 h-5"/>
                        <a>Bắt đầu</a>
                    </Button>
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent">
                        <a href="/styling">Tiếp theo (Styling)</a>
                        <FaForward className="w-5 h-5"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
