import { Story, Meta } from '@storybook/react'
import Connection from '.'
import { ILevelsEntity } from '../../types'

export default {
  title: 'Connection',
  component: Connection
} as Meta

function startLevel(level: string) {}

const levelsMock: ILevelsEntity[] = [
  {
    level: 1,
    startLevelFunction: startLevel
  }
]

export const Default: Story = () => <Connection levels={levelsMock} />
