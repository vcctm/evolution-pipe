import { Story, Meta } from '@storybook/react'
import Map from '.'

export default {
  title: 'Map',
  component: Map
} as Meta

export const Default: Story = () => <Map map={''} />
