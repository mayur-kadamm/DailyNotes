import React from 'react'

import { NotebookPen, Heart } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="mt-10 border-t border-[#334155] bg-[#0F172A] px-5 py-4 sm:px-8">
      

        {/* Copyright */}
        <div className="flex flex-col gap-2 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between ">
          <p className='flex items-center justify-center'>© {new Date().getFullYear()} DailyNotes. All rights reserved.</p>

          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={15} className="text-emerald-400" />
            <span className="text-emerald-400">for productivity</span>
          </p>
        </div>

     
    </footer>
    </div>
  )
}

export default Footer