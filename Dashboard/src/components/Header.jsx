const Header = () => {
  return (
    <header className="bg-Very-Pale-Blue h-[235px] rounded-b-[20px] pt-8 px-6">
      <h1 className="text-Very-Dark-Blue text-2xl font-bold mb-1">
        Social Media Dashboard
      </h1>
      <p className="text-Dark-Grayish-Blue text-sm font-bold mb-6">
        Total Followers: 23,004
      </p>
      <hr className="bg-black mb-[19px]"/>
      <div className="flex justify-between">
        <p className="text-Dark-Grayish-Blue font-bold">Dark Mode:</p>
        <div>
          <label className="inline-block bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[3px]" htmlFor="dark-mode">  
            <input type="checkbox" id="dark-mode" className="sr-only peer" />
            <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Header
