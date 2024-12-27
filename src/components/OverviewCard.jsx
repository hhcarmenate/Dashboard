
import facebookLogo from '../assets/images/icon-facebook.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';
import iconUp from '../assets/images/icon-up.svg';
import iconDown from '../assets/images/icon-down.svg';

const networkLogo = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo
}

const networkColors = {
    Facebook: 'bg-facebook',
    Twitter: 'bg-twitter',
    Instagram: 'bg-Instagram-gradient',
    YouTube: 'bg-youtube'
}



export const OverviewCard = ({ user, audience, audienceType, network, today, isUp }) => {
  return (
      <article className="bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[6px] mx-auto overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125">
          <div className={`${networkColors[network]} h-[4px] mb-8` }></div>
          <div className="flex items-center justify-center gap-2">
            <img src={networkLogo[network]} alt={`Logo ${network}`} />
            <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
          </div>
          
          <p className='text-[56px] font-bold text-Very-Dark-Blue dark:text-white'>{audience}</p>
          <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6'>{audienceType}</p>
          <div className={`flex items-center justify-center gap-1 ${ isUp ? 'text-lime-green' : 'text-bright-red' }`}>
              <img src={isUp ? iconUp : iconDown } alt="Arrow" />
              <p className='text-xs font-bold'>{today} Today</p>
          </div>
    </article>
  )
}

export const OverviewTodayCard = ({ stats, statsType, network, porcentage, isUp }) => { 
    return (
        <article className='bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue w-[326px] h-[125px] rounded-[6px] flex flex-col justify-between items-center p-[27px] hover:brightness-95 cursor-pointer hover:dark:brightness-125 mb-4'>
            <div className='w-full flex justify-between items-center gap-4'>
                <p className="text-Dark-Grayish-Blue text-md font-bold">{ statsType }</p>
                <img src={networkLogo[network]} alt="" />
            </div>
            <div className='w-full flex justify-between items-center'>
                <p className='text-Dark-Desaturated-Blue font-bold text-4xl dark:text-Light-Grayish-Blue'>{stats}</p>
                <div className={`flex items-center justify-center gap-1 ${isUp ? 'text-lime-green' : 'text-bright-red'}`}>
                    <img src={isUp ? iconUp : iconDown} alt="Arrow" />
                    <p className='text-xs font-bold'>{porcentage} %</p>
                </div>
            </div>
            
        </article>
    )
}
