"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Skeleton } from "@/components/ui/skeleton";

import { useState } from "react";
import { Button } from "@/components/ui/button";
function home() {
  const [isClicked, setisClicked] = useState(false);
  const [showContent, setshowContent] = useState(false);

  const handleMode = () => {
    if (isClicked === false) setisClicked(true);
    else setisClicked(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setshowContent(true);
    }, 2000);
  }, []);
  return (
    <div className=" flex  h-screen w-screen">
      <div className={`h-full w-1/3 border-4 border-black `}>
        <div
          className={`flex items-center justify-center h-[10%] w-full ${
            isClicked ? "bg-[#16A349]" : "bg-[#04174F]"
          }`}
        >
          <Input
            className={`  w-[80%] ${
              isClicked ? "bg-white" : "bg-[#324DA5]"
            } border-none `}
            type="text"
            placeholder="Search"
          />
        </div>
        <ScrollArea className="h-[90%] w-full bg-[#0B133F] ">
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">
                  Dheeraj Shetty
                </CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/anime-cartoon-character-vector-illustration_648489-34.jpg"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Shri Harsha</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-2527.jpg?w=360"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Amogh K</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-2527.jpg?w=360"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Amogh K</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-2527.jpg?w=360"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Amogh K</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-2527.jpg?w=360"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Amogh K</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-2527.jpg?w=360"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Amogh K</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-2527.jpg?w=360"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Amogh K</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-2527.jpg?w=360"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Amogh K</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-2527.jpg?w=360"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Amogh K</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-2527.jpg?w=360"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Amogh K</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-2527.jpg?w=360"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Amogh K</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          {showContent ? (
            <Card className={`flex flex-row  h-[72px] w-full border-none rounded-none ${ isClicked?"bg-white text-black hover:bg-gray-300  ":"text-[#e9edef]   bg-[#0B133F] hover:bg-[#1D3072]"}`}>
              <div className=" flex items-center justify-center h-full w-[73px]">
                {" "}
                <Avatar>
                  <AvatarImage
                    className="w-[50px] rounded-full"
                    src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-2527.jpg?w=360"
                    alt="@shadcn"
                  />
                </Avatar>{" "}
              </div>
              <div className="flex justify-between border-[#263C8A] border-b items-center w-full">
                <CardTitle className=" text-[16px] p-1 ">Amogh K</CardTitle>
                <h5 className="p-3 text-[12px] text-[#80909A]">12.00pm</h5>
              </div>
            </Card>
          ) : (
            <div className=" flex items-center pt-[10px] space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
          
        </ScrollArea>
      </div>
      <div className={`h-full w-3/4 `}>
        <div
          className={` flex items-center justify-end h-[10%] w-full ${
            isClicked ? "bg-[#16A349]" : " bg-[#04174F]"
          }`}
        >
          <Switch onClick={handleMode} />
        </div>
        <ScrollArea
          className={`h-[82%] w-full ${
            isClicked ? "bg-[#F5F6FA]" : "bg-[#030D35]"
          }`}
        ></ScrollArea>
        <div className={` flex items-center justify-center h-[8%] w-full ${isClicked?"bg-white  " :"bg-[#04174F]"}`}>
        
          <Input
            className={`  w-[80%] h-[90%] text-white  ${
              isClicked ? "bg-white border border-black" : "bg-[#324DA5] border-none  "
            } `}
            type="text"
            placeholder="Type a message"
          ></Input>
          <Avatar>
            <AvatarImage
              className="w-[60px] pl-4 rounded-full"
              src="https://play-lh.googleusercontent.com/t1oBmuRw5E--FK1qjIGj5cb8AcM-JJlDLF5HBdSWmsMQgx5GNobCqKCUp5WoJJpe3w=w240-h480"
              alt="send-icon"
            />
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default home;
