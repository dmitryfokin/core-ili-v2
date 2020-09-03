import React from 'react'

interface MainLayoutPropsType {
  // todo: any
  page: any
}

export const MainLayout: React.FC<MainLayoutPropsType> = ( {page} ) => {
  return (
    <>
      <header>
        <h5>header section</h5>
      </header>
      <main>
        <h5>main section</h5>
        {page}
      </main>
    </>
  )
}
