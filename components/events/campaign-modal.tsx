"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check, XCircle } from "lucide-react"
import { Campaign } from "@/lib/data"
import { cn } from "@/lib/utils"

interface CampaignModalProps {
    campaign: Campaign
    onClose: () => void
}

export function CampaignModal({ campaign, onClose }: CampaignModalProps) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        occupancy: "Single",
        travellers: 1,
        specialRequests: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const message = `*Booking Inquiry for ${campaign.title}*
Occupancy: ${formData.occupancy}
Travellers: ${formData.travellers}
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Special Requests: ${formData.specialRequests || "None"}`

        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${campaign.whatsappNumber.replace(/\s+/g, "")}?text=${encodedMessage}`

        window.open(whatsappUrl, "_blank")
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 0,
        }).format(amount)
    }

    const hasPricing = campaign.pricing.singleOccupancy > 0
    const hasDetails = campaign.includes.length > 0

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Panel */}
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                className="relative flex h-full max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-background md:flex-row"
            >
                {/* Close Button - Mobile */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md md:hidden"
                >
                    <X className="h-6 w-6" />
                </button>

                {/* Left Panel: Image */}
                <div className="relative h-[40vh] w-full shrink-0 md:h-full md:w-[42%]">
                    <Image
                        src={campaign.teaserImage || "/placeholder.svg"}
                        alt={campaign.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Panel: Content */}
                <div className="relative flex flex-1 flex-col overflow-y-auto p-6 md:w-[58%] md:p-10">
                    {/* Close Button - Desktop */}
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 hidden text-muted-foreground transition-colors hover:text-foreground md:block"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <div className="flex flex-col gap-8">
                        {/* Header Area */}
                        <div>
                            <span className="inline-flex rounded-full bg-[#087767]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#087767]">
                                {campaign.tag}
                            </span>
                            <h2 className="font-display mt-4 text-3xl font-medium leading-tight md:text-5xl">
                                {campaign.title}
                            </h2>
                            <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5">{campaign.dateRange}</span>
                                <span className="h-1 w-1 rounded-full bg-border" />
                                <span>{campaign.duration}</span>
                            </div>
                        </div>

                        {/* Pricing Section */}
                        <div>
                            {hasPricing ? (
                                <div className="flex flex-col gap-3">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">From</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="rounded-2xl border border-border bg-card p-4">
                                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Single Occupancy</p>
                                            <p className="mt-1 font-display text-xl font-medium">
                                                {campaign.pricing.currency} {formatCurrency(campaign.pricing.singleOccupancy)}
                                            </p>
                                        </div>
                                        <div className="rounded-2xl border border-border bg-card p-4">
                                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Double Occupancy</p>
                                            <p className="mt-1 font-display text-xl font-medium">
                                                {campaign.pricing.currency} {formatCurrency(campaign.pricing.doubleOccupancy)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="inline-flex rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
                                    Details Coming Soon
                                </div>
                            )}
                        </div>

                        {/* Inclusions / Exclusions */}
                        {hasDetails && (
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h4 className="font-display text-lg font-medium">Package Includes</h4>
                                    <ul className="mt-4 space-y-3">
                                        {campaign.includes.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm leading-tight text-muted-foreground">
                                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#087767]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-display text-lg font-medium">Package Excludes</h4>
                                    <ul className="mt-4 space-y-3">
                                        {campaign.excludes.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm leading-tight text-muted-foreground">
                                                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        <hr className="border-border" />

                        {/* Booking Form */}
                        <div className="pb-4">
                            <h4 className="font-display text-2xl font-medium">Secure Your Spot</h4>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Fill out the form below to start your booking process via WhatsApp.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                                <div className="grid gap-5 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[#087767] focus:ring-1 focus:ring-[#087767]"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[#087767] focus:ring-1 focus:ring-[#087767]"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-5 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                                        <input
                                            required
                                            type="tel"
                                            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[#087767] focus:ring-1 focus:ring-[#087767]"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Travellers</label>
                                        <input
                                            required
                                            type="number"
                                            min="1"
                                            className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[#087767] focus:ring-1 focus:ring-[#087767]"
                                            value={formData.travellers}
                                            onChange={(e) => setFormData({ ...formData, travellers: parseInt(e.target.value) })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Occupancy Preference</label>
                                    <div className="flex gap-6">
                                        {["Single", "Double"].map((opt) => (
                                            <label key={opt} className="flex cursor-pointer items-center gap-2 text-sm">
                                                <input
                                                    type="radio"
                                                    name="occupancy"
                                                    checked={formData.occupancy === opt}
                                                    onChange={() => setFormData({ ...formData, occupancy: opt })}
                                                    className="h-4 w-4 border-border text-[#087767] focus:ring-[#087767]"
                                                />
                                                {opt} Occupancy
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Special Requests</label>
                                    <textarea
                                        rows={3}
                                        className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[#087767] focus:ring-1 focus:ring-[#087767]"
                                        value={formData.specialRequests}
                                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#ED7D21] py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Book via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
