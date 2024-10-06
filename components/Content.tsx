"use client"

import * as React from "react"
import { useRouter } from 'next/navigation'
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Content(){
    const router = useRouter()
    return (
        <div className="flex flex-col items-center space-y-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl self-center">
                Nội dung chính
            </h1>
            <div className="flex w-full text-center space-x-6 px-4">
                <Card className="w-1/3 py-8 hover:scale-110 transition-all hover:shadow-lg" onClick={() => {router.push('/layout')}}>
                    <CardHeader>
                        <CardTitle>01</CardTitle>
                        <CardDescription className="font-bold">Routing and Navigation</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-1/3 py-8 hover:scale-110 transition-all hover:shadow-lg"  onClick={() => {router.push('/styling')}}>
                    <CardHeader>
                        <CardTitle>02</CardTitle>
                        <CardDescription className="font-bold">Styling</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-1/3 py-8 hover:scale-110 transition-all hover:shadow-lg" onClick={() => {router.push('/components')}}>
                    <CardHeader>
                        <CardTitle>03</CardTitle>
                        <CardDescription className="font-bold">Components</CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <div className="flex w-full text-center space-x-6 px-4">
                <Card className="w-1/3 py-8 hover:scale-110 transition-all hover:shadow-lg" onClick={() => {router.push('/client-and-server')}}>
                    <CardHeader>
                        <CardTitle>04</CardTitle>
                        <CardDescription className="font-bold">Client & Server</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-1/3 py-8 hover:scale-110 transition-all hover:shadow-lg" onClick={() => {router.push('/server-action')}}>
                    <CardHeader>
                        <CardTitle>05</CardTitle>
                        <CardDescription className="font-bold">Server Action</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-1/3 py-8 hover:scale-110 transition-all hover:shadow-lg" onClick={() => {router.push('/caching')}}>
                    <CardHeader>
                        <CardTitle>06</CardTitle>
                        <CardDescription className="font-bold">Caching</CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <div className="flex w-full text-center space-x-6 px-4 items-center justify-center">
            <Card className="w-1/3 py-8 hover:scale-110 transition-all hover:shadow-lg">
                    <CardHeader>
                        <CardTitle>07</CardTitle>
                        <CardDescription className="font-bold">Middleware</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}