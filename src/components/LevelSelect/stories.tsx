import { Story, Meta } from '@storybook/react'
import LevelSelect from '.'
import { ILevelsEntity } from '../../types'

export default {
  title: 'LevelSelect',
  component: LevelSelect
} as Meta

function startLevel(level: string) {
  console.log(level)
}

const levelsMock: ILevelsEntity[] = [
  {
    level: 1,
    startLevelFunction: startLevel
  }
]

export const Default: Story = () => <LevelSelect levels={levelsMock} />
