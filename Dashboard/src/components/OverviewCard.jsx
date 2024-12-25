
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
    Youtube: youtubeLogo
}

const networkColors = {
    Facebook: 'bg-facebook',
    Twitter: 'bg-twitter',
    Instagram: 'bg-Instagram-gradient',
    Youtube: 'bg-youtube'
}



export const OverviewCard = ({ user, audience, audienceType, network, today, isUp }) => {
  return (
      <article className="bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[6px] mx-auto overflow-hidden text-center">
          <div className={`${networkColors[network]} h-[4px] mb-8` }></div>
          <div className="flex items-center justify-center gap-2 ">
            <img src={networkLogo[network]} alt={`Logo ${network}`} />
            <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
          </div>
          
          <p className='text-[56px] font-bold text-Very-Dark-Blue'>{audience}</p>
          <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs'>{audienceType}</p>
          <div className={`flex items-center justify-center gap-1 mt-4 ${ isUp ? 'text-lime-green' : 'text-bright-red' }`}>
              <img src={isUp ? iconUp : iconDown } alt="Arrow" />
              <p className='text-xs font-bold'>{today} today</p>
          </div>
    </article>
  )
}
