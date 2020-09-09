import React from 'react'

interface MainLayoutPropsType {
  // todo: any
  page: any
}

export const MainLayout: React.FC<MainLayoutPropsType> = ( {page} ) => {
  return (
    <>
      <header>
      </header>
      <main>
        {page}
      </main>
    </>
  )
}
