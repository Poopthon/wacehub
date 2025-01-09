import { useEffect, useState } from 'react'
import { Card, CardHeader } from '@nextui-org/react'
import TeamMember from '../composables/teamMember'
import teamMembersData from '../data/teammembers.json'

interface TeamMember {
  name: string
  role: string
  bio: string
  avatar: string
}

function preloadImages(urls: string[]) {
  urls.forEach(url => {
    const img = new Image()
    img.src = url
  })
}

const team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    setTeamMembers(teamMembersData)
    const avatarUrls = teamMembersData.map(member => member.avatar)
    preloadImages(avatarUrls)
  }, [])

  return (
    <section id='team' className='scroll-mt-28 mb-28 px-4'>
      <div className='max-w-6xl mx-auto grif grif-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
        {teamMembersData.map((feature, index) => (
          <Card
            key={index}
            className='bg-white rounded-lg p-5 flex flex-col items-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'
          >
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center text-center'>
              {feature.avatar}
              <p className='text-lg font-bold mt-4 text-gray-900'>{feature.name}</p>
              <small className='text-gray-400'>{feature.role}</small>
              <p className="text-lg font-light mt-4 text-gray-600">{feature.bio}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default team
