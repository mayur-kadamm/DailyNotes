import React from 'react'
import { NotebookPen, Search } from "lucide-react";

const NavBaar = () => {
  return (
    <div className='bg-[#0F172A] text-[#F1F5F9] flex justify-between border-[#334155] py-5 mx-5 border-b'>
      <div className='flex gap-3'>
          <button className='h-10 w-10 flex justify-center items-center rounded-xl bg-indigo-500'><NotebookPen size={22} /></button>
          <div className=''>
            <h3 className='lg:text-2xl lg:font-bold font-bold lg:-mt-2'>DailyNotes</h3>
            <p className='text-slate-400 lg:text-1'>Your Personal Workplace</p>
          </div>
      </div>
      <div className='flex justify-center items-center'>
        <button ><Search size={20} /></button>
      </div>
    </div>
  )
}

export default NavBaar