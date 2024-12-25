import data from '../../data/data.json'
import { OverviewCard } from './OverviewCard'

const { overview } = data


const OverviewContainer = () => {
  return (
    <section>
          { 
              overview.map((item) => (
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

export default OverviewContainer
