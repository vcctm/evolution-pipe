import { ComponentMeta, ComponentStory } from '@storybook/react'
import Modal from '.'

export default {
  title: 'Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})

Primary.args = {
  modalOpen: true
}
