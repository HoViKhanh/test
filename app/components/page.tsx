"use client"

import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import { BiSolidComponent } from "react-icons/bi";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

export default function Home() {

    const [components, setComponents] = useState<JSX.Element[]>([]);

    const handleSpawnClick = () => {
        setComponents([...components, <Button className="p-8 min-w-82 bg-orange-500">
                                            I am new button
                                        </Button>]);
    }

    // Move the content rendering to the return statement
    return (
        <div className="h-screen w-screen p-8 flex flex-col min-h-screen overflow-auto mb-36">
            <div className="w-3/5 h-screen flex-col self-center space-y-3">
                <div className="flex items-center justify-center text-xl font-bold space-x-2">
                    <p>3. Components</p>
                    <BiSolidComponent/>
                </div>
                <ReactMarkdown className={`text-lg`}>
                    Component trong **Next.js** là các phần tử trừu tượng hóa code và UI để tạo thành các phần của ứng dụng web. 
                    Chúng giúp tổ chức mã và tạo ra các phần giao diện có thể tái sử dụng, giảm bớt sự phức tạp của mã và tăng cường khả năng bảo trì của ứng dụng. 
                </ReactMarkdown>
                <Image
                    src="/component-navbar.png"
                    className="w-full border-2 shadow-md"
                    width={1000} height={1000} alt="Tailwind Image"
                />
                <p className="text-lg">
                    Các component trong <b>Next.js</b> có thể là các trang, header, footer hoặc bất kỳ thành phần nào cần được tái sử dụng trên nhiều trang.
                </p>
                <p className="text-lg font-semibold">
                    Demo
                </p>
                <div className="w-full h-96 border-dotted border-4 p-4 space-x-3 space-y-3 overflow-hidden">
                    <Button className="p-8 w-auto min-w-82 ml-3 mt-3" onClick={handleSpawnClick}>
                        Spawn a new Button
                    </Button>
                    {components}
                </div>
                <div className="flex py-8 justify-between">
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent">
                        <FaBackward className="w-5 h-5"/>
                        <a href="/styling">Trước đó (Styling)</a>
                    </Button>
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent">
                        <a href="/client-and-server">Tiếp theo (Client & Server)</a>
                        <FaForward className="w-5 h-5"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
