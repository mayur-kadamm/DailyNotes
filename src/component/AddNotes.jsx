import React, { use, useState } from 'react'

const AddNotes = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, setTask] = useState([]);
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];

    copyTask.push({ title, detail });
    setTask(copyTask);

    const now = new Date().toLocaleString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    setDate(now);


    setTitle('');
    setDetail('');
  }

  // here delete function
  const deleteNote = (idx) =>{
   
    const copyTask = [...task];
      copyTask.splice(idx,1);
      setTask(copyTask);

  }

  return (
    <div
      className='
        lg:flex
        pt-5
        justify-between
        overflow-y-auto
        scrollbar-none
        h-screen
        bg-[#0F172A]
        text-[#F1F5F9]
      '
    >

      {/* ====================here is Add Notes Code================================= */}
      <div
        className='
          flex-1/2
          text-[#E2E8F0]
        '
      >

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className='
            flex
            flex-col
            gap-4
            px-5
          '
        >

          <h3 className=' text-2xl lg:text-4xl lg:font-bold '>
            Add Notes
          </h3>

          <input
            type="text"
            placeholder='Enter New Heading...'
            className='
              border
              border-[#334155]
              p-2
              placeholder:text-slate-400
              rounded-xl
              bg-[#1E293B]
              text-slate-100
            '
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            placeholder='Enter your task....'
            className='
              border
              border-[#334155]
              placeholder:text-slate-400
              rounded-xl
              lg:h-50
              h-20
              p-2
              bg-[#1E293B]
              text-slate-100
            '
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          >
          </textarea>

          <button
            className='
              bg-indigo-500
              text-white
              active:scale-95
              active:bg-indigo-500
              hover:bg-indigo-600
              lg:text-2xl
              rounded-2xl
              font-bold
            '
          >
            + Add Notes
          </button>
        </form>
      </div>

      {/* ====================here is Recent Notes Code================================= */}
      <div
        className='
          flex
          flex-col
          gap-2
          px-5
          flex-1/2
          max-[1025px]:border-t
          max-[1025px]:mx-5
          max-  [1025px]:border-[#334155]
          max-[1025px]:mt-5
          lg:overflow-y-auto
          lg:scrollbar-hide
         
        '
      >
        <h3 className='text-slate-100 text-2xl lg:text-4xl  lg:font-bold '>
          Recent Task
        </h3>

        <div className='flex flex-wrap gap-4 mt-5'>
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className='
                  lg:min-h-70
                  min-h-50
                  lg:mb-5
                  w-full
                  hover:scale-101
                  max-[905px]:w-screen
                  hover:z-10
                  border
                  border-[#334155]
                  rounded-2xl
                  hover:shadow-xl
                  hover:shadow-indigo-500/20
                  relative
                  flex
                  justify-between
                  flex-col
                  bg-[#1E293B]
                 
                '
              >
              
                <h3 className='p-8 font-bold text-[#615FFF] text-2xl leading-tight'>
                  {elem.title}
                </h3>

                <p className='px-8 leading-tight font-medium text-gray-500 mb-4'>
                  {elem.detail}
                </p>
               {date && <p className="m-4 text-green-800">{date}</p>}
                <button onClick={()=>{
                  deleteNote(idx)
                }} className='absolute bottom-3 right-4 w-20
                                   rounded font-bold bg-red-800 
                                   active:scale-95 hover:opacity-90 
                                   active:opacity-60
                                   '
                            >
                    Delete
                </button>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AddNotes