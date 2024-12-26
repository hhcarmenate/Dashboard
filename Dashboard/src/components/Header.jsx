import { useState, useEffect } from 'react'
const Header = () => {

  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => { 
    setDarkMode(!darkMode)
  }

  useEffect(() => { 
    const body = document.querySelector('body')
    body.classList.toggle('dark')
  }, [darkMode])

  
  return (
    <header className="w-screen bg-Very-Pale-Blue dark:bg-Very-Dark-Blue-Top-BG-Pattern h-[235px] rounded-b-[20px] pt-8 px-6 ">
      <h1 className="text-Very-Dark-Blue text-2xl font-bold mb-1 dark:text-Very-Pale-Blue">
        Social Media Dashboard
      </h1>
      <p className="text-Dark-Grayish-Blue text-sm font-bold mb-6 dark:text-Desaturated-Blue">
        Total Followers: 23,004
      </p>
      <hr className="bg-black mb-[19px]"/>
      <div className="flex justify-between">
        <p className="text-Dark-Grayish-Blue font-bold dark:text-Desaturated-Blue">Dark Mode:</p>
        <div>
          <label className="inline-block bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[3px] relative" htmlFor="dark-mode">
            <input type="checkbox" onClick={handleClick} id="dark-mode" className="sr-only peer" />
            <div className="peer-checked:bg-Toggle-gradient w-full h-full z-1 rounded-full absolute top-0 left-0"></div>
            <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue z-2 rounded-full peer-checked:translate-x-[24px] dark:bg-Dark-Desaturated-Blue transition-all"></div>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Header
