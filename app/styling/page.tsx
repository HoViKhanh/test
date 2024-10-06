import React from "react";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import { BsStars } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

export default function Home() {
    // Move the content rendering to the return statement
    return (
        <div className="h-screen w-screen p-8 flex flex-col min-h-screen overflow-auto mb-36">
            <div className="w-3/5 h-screen flex-col self-center space-y-3">
                <div className="flex items-center justify-center text-xl font-bold space-x-2">
                    <p>2. Styling</p>
                    <BsStars/>
                </div>
                <ReactMarkdown className={`text-lg`}>
                    **Next.js** được xây dựng và hỗ trợ Tailwind CSS, là một bộ công cụ CSS linh hoạt và mạnh mẽ giúp phát triển giao diện người dùng một cách nhanh chóng và dễ dàng
                </ReactMarkdown>
                <Image
                    src="/tailwind.png"
                    className="w-full border-2 shadow-md"
                    width={1000} height={1000} alt="Tailwind Image"
                />
                <p className="text-lg">
                    Quản lý các lớp riêng lẻ và xử lý từng phần tử một trong HTML khiến việc quản lý các tệp CSS truyền thống trở nên phức tạp, có thể gây ra vấn đề như code ít có khả năng 
                    tái sử dụng và dễ gặp lỗi trên toàn bộ tệp HTML.
                </p>
                <p className="text-lg font-semibold">
                    CSS Truyền thống
                </p>
                <div className="flex items-center space-x-8">
                    <Image
                        src="/css_17.png"
                        className="w-3/4 border-2 shadow-md rounded-2xl h-80"
                        width={400} height={400} alt="css"
                    />
                    <Image
                    src="/clueless-aware.gif"
                    className="h-80 rounded-2xl border-2 p-4"
                    width={200} height={200} alt="Aware"
                    />
                </div>
                <p className="text-lg">
                    Sử dụng Tailwind giúp giải quyết vấn đề này bằng cách quản lý các lớp và xử lý các phần tử HTML trong một tập hợp các class được định nghĩa trước. Điều này giúp tăng khả năng tái sử dụng mã và 
                    giảm thiểu nguy cơ gặp lỗi trên toàn bộ tệp HTML.
                </p>
                <p className="text-lg font-semibold">
                    Tailwind CSS
                </p>
                <div className="flex items-center space-x-8">
                    <Image
                        src="/tailwind-css.png"
                        className="w-3/4 border-2 shadow-md rounded-2xl h-80"
                        width={400} height={400} alt="css"
                    />
                    <Image
                    src="/gigachad-chad.gif"
                    className=" h-80 rounded-2xl"
                    width={200} height={200} alt="Aware"
                    />
                </div>
                <div className="flex py-8 justify-between">
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent">
                        <FaBackward className="w-5 h-5"/>
                        <a href="/layout">Trước đó (Routing and Navigation)</a>
                    </Button>
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent">
                        <a href="/components">Tiếp theo (Components)</a>
                        <FaForward className="w-5 h-5"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
