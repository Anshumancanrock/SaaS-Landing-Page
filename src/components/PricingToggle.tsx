"use client"

import { cn } from "@/lib/utils"

interface PricingToggleProps {
    value: "monthly" | "yearly"
    onChange: (value: "monthly" | "yearly") => void
}

export default function PricingToggle({ value, onChange }: PricingToggleProps) {
    return (
        <div className="inline-flex items-center bg-gray-100 rounded-md p-1">
            <button
                onClick={() => onChange("monthly")}
                className={cn(
                    "px-6 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
                    value === "monthly" ? "bg-black text-white shadow-sm" : "bg-gray-100 text-gray-700 hover:text-gray-900",
                )}
            >
                Monthly
            </button>
            <button
                onClick={() => onChange("yearly")}
                className={cn(
                    "px-6 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
                    value === "yearly" ? "bg-black text-white shadow-sm" : "bg-gray-100 text-gray-700 hover:text-gray-900",
                )}
            >
                Yearly
            </button>
        </div>
    )
}
