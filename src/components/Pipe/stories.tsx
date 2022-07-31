import { Story, Meta } from '@storybook/react'
import { Pipe } from '.'

export default {
  title: 'Pipe',
  component: Pipe
} as Meta

export const Default: Story = () => (
  <Pipe lineIndex={1} pipeIndex={1}>
    L
  </Pipe>
)
