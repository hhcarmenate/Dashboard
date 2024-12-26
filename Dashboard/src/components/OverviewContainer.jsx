import data from '../../data/data.json'
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

const { overview } = data

const convertNumberToK = (number) => { 
    if (number >= 10000) {
        return (number/1000).toFixed(0) + 'k'
    } else {
        return number
    }
}  


const OverviewContainer = () => {

  return (
    <section className='-mt-6 h-[100%] max-w-[1440px] flex flex-wrap justify-center gap-4 px-4'>
          { 
              overview.map((item) => (
               item.audience = convertNumberToK(item.audience), 
                  
                <OverviewCard
                      key={item.id}
                      {...item}
                />
              )
            )
          }
    </section>
  )
}

const OverviewTodayContainer = () => { 
    return (
        <section className=''>
            <h2 className='text-2xl font-bold text-Very-Dark-Blue  dark:text-Light-Grayish-Blue mb-[27px] ml-8'>Overview Today</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 px-4 card-container">
                { 
                    data["overview-today"].map((item) => (
                        item.stats = convertNumberToK(item.stats),
                        <OverviewTodayCard
                            key={item.id}
                            {...item}
                        />   
                    )
                )
                }
            </div>
        </section>
    )
}

export { OverviewContainer, OverviewTodayContainer }

