import * as React from 'react'
import styled from 'styled-components'
import TeamCard from 'components/Common/TeamCard'

const variables = {
  color: '#0062ff',
  crossSize: 15
}

const TeamsWrapper = styled.div`
  border: 1px solid #e2e2ea;
  border-radius: 23px;
  margin: 35px 0 20px 0;
  display: flex;
  flex-direction: column;
  padding: 5px;
`
const TeamsTitle = styled.span`
  font-size: 16px;
  letter-spacing: 0.1px;
  color: #696974;
  padding: 15px 20px;
`
const Teams = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const NewTeam = styled.div`
  width: 400px;
  min-width: 250px;
  height: 140px;
  border: 2px dashed #d5d5dc;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NewTeamButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 38px;
  background-color: white;
  border: none;
  position: relative;
  outline: none;
  cursor: not-allowed;
`
const Cross = styled.div`
  width: ${variables.crossSize}px;
  height: ${variables.crossSize}px;
  :before,
  :after {
    position: absolute;
    left: 50%;
    content: '';
    height: ${variables.crossSize}px;
    width: 2px;
    background-color: ${variables.color};
  }
  :before {
    transform: rotate(90deg);
  }
  :after {
    transform: rotate(180deg);
  }
`

const teamCardData = [
  {
    id: 0,
    avatar: require('assets/images/team1.png'),
    name: 'Sebo Studio',
    users: [
      {
        size: 32,
        name: 'KA',
        color: '',
        avatar: require('assets/images/james.png')
      },
      {
        size: 32,
        name: 'KA',
        color: '',
        avatar: require('assets/images/james.png')
      }
    ]
  },
  {
    id: 1,
    avatar: require('assets/images/team1.png'),
    name: 'Iconspace Team',
    users: [
      {
        size: 32,
        name: 'KA',
        color: '',
        avatar: require('assets/images/james.png')
      },
      {
        size: 32,
        name: 'KA',
        color: '',
        avatar: require('assets/images/james.png')
      }
    ]
  }
]

interface IUserProps {
  size: number
  name: string
  color: string
  avatar: string
}

interface ITeamCardProps {
  id: number
  avatar: string
  name: string
  users: IUserProps[]
}

const teamCards = teamCardData.map((card: ITeamCardProps) => (
  <TeamCard key={card.id} {...card} />
))

const ContentTeams = () => {
  return (
    <TeamsWrapper>
      <TeamsTitle>Teams</TeamsTitle>
      <Teams>
        {teamCards}
        <NewTeam>
          <NewTeamButton>
            <Cross />
          </NewTeamButton>
        </NewTeam>
      </Teams>
    </TeamsWrapper>
  )
}

export default ContentTeams