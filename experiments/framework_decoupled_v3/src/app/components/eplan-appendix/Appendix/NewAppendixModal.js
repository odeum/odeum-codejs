import React from 'react'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose, ModalButtonPanel } from 'framework/components/styles/ModalStyles'
import { FieldLabel, TextInputField } from 'app/styles/'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'
import * as iconname from 'framework/assets/icons'
import Button from 'framework/components/Widgets/Button'

const NewAppendixModal = ({ newAppendixModalIsOpen, closeNewAppendixModal, saveNewAppendix }) => {
	return (
		<div>
			<ModalWindow isOpen={newAppendixModalIsOpen} onRequestClose={closeNewAppendixModal} contentLabel="Tilføj tillæg">
				<ModalHeader>
					<ModalHeaderIcon>
						<Icon icon={iconname.ICON_ADD_CIRCLE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
					</ModalHeaderIcon>
					<ModalHeaderTitle>Tilføj kommuneplan tillæg</ModalHeaderTitle>
					<ModalHeaderClose onClick={(e) => { e.preventDefault(); closeNewAppendixModal() }}>
						<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
					</ModalHeaderClose>
				</ModalHeader>
				<ModalContent>
					<form>
						<FieldLabel for="name">Kommuneplan tillæg navn</FieldLabel>
						<TextInputField type="text" name="name" />
						<br />
						<FieldLabel for="number">Kommuneplan tillæg nummer</FieldLabel>
						<TextInputField type="text" name="number" />
						<br />
						<FieldLabel for="numFrames">Antal kommuneplan rammer</FieldLabel>
						<TextInputField type="text" name="numFrames" />
						<br />
						<br />
					</form>
					<ModalButtonPanel>
						<Button onClick={saveNewAppendix} icon={iconname.ICON_ADD_CIRCLE} size={18}>Opret nyt tillæg</Button>
					</ModalButtonPanel>
				</ModalContent>
			</ModalWindow>
		</div>
	)
}

export default NewAppendixModal