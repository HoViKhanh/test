import React from "react";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import { MdCached } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

export default function Home() {
    // Move the content rendering to the return statement
    return (
        <div className="h-screen w-screen p-8 flex flex-col min-h-screen overflow-auto mb-36">
            <div className="w-3/5 h-screen flex-col self-center space-y-3">
                <div className="flex items-center justify-center text-xl font-bold space-x-2">
                    <p>6. Caching</p>
                    <MdCached/>
                </div>
                <ReactMarkdown className={`text-lg`}>
                    **Next.js** cải thiện hiệu suất ứng dụng và giảm chi phí bằng cách lưu trữ các html renders và data requests.
                </ReactMarkdown>
                <ReactMarkdown className={`text-lg`}>
                    Mặc định, **Next.js** sẽ lưu trữ càng nhiều càng tốt để cải thiện hiệu suất và giảm chi phí. 
                    Điều này có nghĩa là các route được render 
                    tĩnh và các yêu cầu dữ liệu được lưu trữ trừ khi bạn chọn không lưu trữ.
                    Đó cũng là lý do cơ chế cache trong **Next.js** được gọi là **aggressive caching**
                </ReactMarkdown>
                <Image
                    src="/caching-overview.png"
                    className="w-full border-2 h-full shadow-md"
                    width={1000} height={1000} alt="Caching overview"
                />
                <p className={`text-lg font-semibold`}>
                    Request Memoization
                </p>
                <p className={`text-lg`}>
                    <b>Next.js</b> mở rộng fetch API để tự động memoize (lưu trữ tạm thời) các yêu cầu có cùng URL và các tùy chọn. 
                    Điều này có nghĩa là bạn có thể gọi một hàm fetch cho cùng một dữ liệu ở nhiều nơi trong cây thành phần React mà chỉ thực thi một lần.
                </p>
                <Image
                    src="/deduplicated-fetch-requests.png"
                    className="w-full border-2 h-96 shadow-md"
                    width={1000} height={1000} alt="Duplicate Request on Route"
                />
                <p className={`text-lg font-semibold`}>
                    Data Cache
                </p>
                <ReactMarkdown className={`text-lg`}>
                    Trong **Next.js**, có một tính năng tích hợp sẵn gọi là Data Cache. Tính năng này giữ lại kết quả của các fetch request qua các yêu cầu máy chủ đến và từ khi triển khai ứng dụng.
                    Điều này có thể thực hiện được vì **Next.js** mở rộng chức năng của fetch API gốc. 
                    Khi có một yêu cầu đến từ máy chủ, **Next.js** cho phép thiết lập các cài đặt cache cho riêng từng yêu cầu, 
                    đảm bảo rằng dữ liệu được lấy được lưu trữ tạm thời một cách liên tục và hiệu quả.
                </ReactMarkdown>
                <Image
                    src="/data-cache.png"
                    className="w-full border-2 h-96 shadow-md"
                    width={1000} height={1000} alt="Data Cache"
                />
                <p className={`text-lg font-semibold`}>
                     Sự khác biệt giữa Data Cache và Request Memoization:
                </p>
                <p className={`text-lg`}>
                    <b>1. Tính Bền vững:</b>
                    <br/>
                    - Data Cache: Bền vững qua các yêu cầu đến và triển khai.
                    <br/>
                    - Request Memoization: Chỉ tồn tại trong suốt thời gian của một yêu cầu.
                    <br/>
                    <b>2. Phạm vi Tối ưu hóa:</b>
                    <br/>
                    - Data Cache: Giảm số lượng yêu cầu được thực hiện đến nguồn dữ liệu gốc.
                    <br/>
                    - Request Memoization: Giảm số lượng yêu cầu trùng lặp trong cùng một lượt render, tối ưu hóa lưu lượng mạng giữa máy chủ render và Data Cache của máy chủ
                    <br/>
                </p>
                <p className={`text-lg font-semibold`}>
                     Full Route Cache
                </p>
                <ReactMarkdown className={`text-lg`}>
                    **Next.js** tự động render và lưu trữ các route tại thời điểm xây dựng. 
                    Điều này tối ưu hóa cho phép server phục vụ route đã được lưu trữ thay vì render trên máy chủ cho mỗi yêu cầu, 
                    dẫn đến việc tải trang nhanh hơn.
                </ReactMarkdown>
                <Image
                    src="/full-route-cache.png"
                    className="w-full border-2 h-96 shadow-md"
                    width={1000} height={1000} alt="Full Route Cache"
                />
                <p className={`text-lg font-semibold`}>
                    Router Cache
                </p>
                <ReactMarkdown className={`text-lg`}>
                    **Next.js** có một bộ nhớ lưu trữ dữ liệu của React Server Component Payload trong suốt phiên của người dùng. 
                    Dữ liệu này được phân chia theo từng đoạn route riêng lẻ và gọi là Router Cache hay thường được biết tới là Client-side Cache.
                </ReactMarkdown>
                <Image
                    src="/router-cache.png"
                    className="w-full border-2 h-full shadow-md"
                    width={1000} height={1000} alt="Router Cache"
                />
                <p className={`text-lg font-semibold`}>
                     Sự khác biệt giữa Full Route Cache và Router Cache:
                </p>
                <p className={`text-lg`}>
                    <b>1. Tính Bền vững:</b>
                    <br/>
                    - Router Cache: Tạm thời lưu trữ dữ liệu React Server Component Payload trong trình duyệt trong suốt phiên của người dùng.
                    <br/>
                    - Full Route Cache: Lưu trữ vĩnh viễn dữ liệu React Server Component Payload và HTML trên máy chủ qua nhiều yêu cầu của người dùng.
                    <br/>
                    <b>2. Phạm vi Nội dung Đã Cache:</b>
                    <br/>
                    - Full Route Cache: Chỉ cache các route được render tĩnh.
                    <br/>
                    - Router Cache: Áp dụng cho cả các route được render tĩnh và động.
                    <br/>
                </p>
                <div className="flex py-8 justify-between">
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent">
                        <FaBackward className="w-5 h-5"/>
                        <a href="/server-action">Trước đó (Server Action)</a>
                    </Button>
                    <Button className="p-6 text-black bg-transparent min-w-64 flex space-x-3 hover:bg-transparent" disabled>
                        <a>Kết thúc</a>
                        <FaForward className="w-5 h-5"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
