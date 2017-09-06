import React from 'react'
// import Modal from 'react-modal'
import 'react-datepicker/dist/react-datepicker.css'
import { ModalWindow, ModalHeader, ModalContent, ModalHeaderIcon, ModalHeaderTitle, ModalHeaderClose, ModalButtonPanel } from 'framework/components/styles/ModalStyles'
import { DropdownSelect, DatePickerStyled } from 'app/styles/EplanStyles'
import { FieldLabel } from 'app/styles/'
import Button from 'framework/components/Widgets/Button'
import * as iconname from 'framework/assets/icons'
import * as colors from 'framework/assets/colors'
import Icon from 'framework/assets/Icon'
import { Flex, Box } from 'grid-styled'
import moment from 'moment'

const statusOptions = [
	{ value: '1', label: 'Kladde' },
	{ value: '2', label: 'Udkast' },
	{ value: '3', label: 'Intern høring' },
	{ value: '4', label: 'Forslag' }
]

function handleStatusChange() {

}

const SettingsModal = ({ configModalIsOpen, closeConfigModal, handleDateChange, saveConfigModal, dates }) => {
/* 	console.log('Dates')
	console.log(dates) */
	function dateChecker(date) {
		var momentDate = moment(date)
		return momentDate._isValid ? momentDate : null
	}
	return (
		<div>
			<ModalWindow isOpen={configModalIsOpen} onRequestClose={closeConfigModal} contentLabel="Indstillinger">
				<ModalHeader>
					<ModalHeaderIcon>
						<Icon icon={iconname.ICON_SETTINGS} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
					</ModalHeaderIcon>
					<ModalHeaderTitle>Indstillinger</ModalHeaderTitle>
					<ModalHeaderClose onClick={(e) => { e.preventDefault(); closeConfigModal() }}>
						<Icon icon={iconname.ICON_CLOSE} size={30} color={colors.MODAL_HEADER_ICON} active={true} />
					</ModalHeaderClose>
				</ModalHeader>
				<ModalContent>
					<form>
						<Flex wrap>
							{/* 							<Box width={[1 / 2]}>
								<FieldLabel for="name">Intern høring start:</FieldLabel>
								<DatePickerStyled selected={dates.date1} onChange={(date) => handleDateChange(date, 'date1')} dateFormat="DD/MM/YYYY" showWeekNumbers />
							</Box> */}
							<Box width={[1 / 2]}>
								<FieldLabel for="name">Vælg fase:</FieldLabel>
								<DropdownSelect
									className="statusSelect"
									name="statusSelect"
									value="one"
									options={statusOptions}
									onChange={handleStatusChange}
									searchable={false}
									clearable={false}
									placeholder="Vælg status"
								/>
							</Box>
						</Flex>
						{dates.map((dateField, index) => (
							<Flex wrap key={index}>
								<Box width={[1 / 2]}>
									<FieldLabel for="name">{dateField.caption}</FieldLabel>
									<DatePickerStyled selected={dateChecker(dateField.value)} onChange={(date) => handleDateChange(date, dateField.id)} dateFormat="DD/MM/YYYY" showWeekNumbers />
								</Box>
							</Flex>
						))}
						{/* 	<Flex wrap>
							<Box width={[1 / 2]}>
								<FieldLabel for="name">Intern høring slut:</FieldLabel>
								<DatePickerStyled selected={dates.date2} onChange={(date) => handleDateChange(date, 'date2')} dateFormat="DD/MM/YYYY" showWeekNumbers />
							</Box>
						</Flex>
						<Flex wrap>
							<Box width={[1 / 2]}>
								<FieldLabel for="name">Forslag:</FieldLabel>                
								<DatePickerStyled selected={dates.date3} onChange={(date) => handleDateChange(date, 'date3')} dateFormat="DD/MM/YYYY" showWeekNumbers />
							</Box>
						</Flex>
						<Flex wrap>
							<Box width={[1 / 2]}>
								<FieldLabel for="name">Offentliggørelse:</FieldLabel>                
								<DatePickerStyled selected={dates.date4} onChange={(date) => handleDateChange(date, 'date4')} dateFormat="DD/MM/YYYY" showWeekNumbers />
							</Box>
						</Flex>
						<Flex wrap>
							<Box width={[1 / 2]}>
								<FieldLabel for="name">Høring start:</FieldLabel>                
								<DatePickerStyled selected={dates.date5} onChange={(date) => handleDateChange(date, 'date5')} dateFormat="DD/MM/YYYY" showWeekNumbers />
							</Box>
						</Flex>
						<Flex wrap>
							<Box width={[1 / 2]}>
								<FieldLabel for="name"> Høring slut:</FieldLabel>               
								<DatePickerStyled selected={dates.date6} onChange={(date) => handleDateChange(date, 'date6')} dateFormat="DD/MM/YYYY" showWeekNumbers />
							</Box>
						</Flex>
						<Flex wrap>
							<Box width={[1 / 2]}>
								<FieldLabel for="name">Vedtagelse:</FieldLabel>                
								<DatePickerStyled selected={dates.date7} onChange={(date) => handleDateChange(date, 'date7')} dateFormat="DD/MM/YYYY" showWeekNumbers />
							</Box>
						</Flex> */}
					</form>
					<ModalButtonPanel>
						<Button onClick={(e) => { e.preventDefault(); saveConfigModal(dates) }} icon={iconname.ICON_CHECK_CIRCLE} size={18}>Gem ændringer</Button>
					</ModalButtonPanel>
				</ModalContent>
			</ModalWindow>
		</div>
	)
}

export default SettingsModal