"use client"

import Link from "next/link"
import { FC } from "react"
import { ChatbotUISVG } from "../icons/chatbotui-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href=""
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-1">
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.9} />
      </div>

    </Link>
  )
}
