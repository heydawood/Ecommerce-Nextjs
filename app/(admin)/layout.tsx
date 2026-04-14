import React from 'react'

const layout = ({children}: { children: React.ReactNode; role: string | null; }) => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}

export default layout