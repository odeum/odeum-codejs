import React from 'react'
import Quill from './Editors/Quill'
import TinyMceEditor from './Editors/TinyMCE'
import DraftEditor from './Editors/Draft'
export const renderQuill = ({ input, label, type, meta: { touched, error } }) => {
	return (<div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
		<label style={{ width: '150px', padding: "30px 20px 50px 20px" }}>
			{label}
		</label>

		<Quill {...input} label={label} style={{ height: '160px', width: '100%' }} />
		{touched &&
			error &&
			<span>
				{error}
			</span>}

	</div>
	)
}
export const renderDefault = ({ input, label, type, meta: { touched, error } }) => {
	return (<div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
		<label style={{ width: '150px', padding: "30px 20px 50px 20px" }}>
			{label}
		</label>
		<textarea {...input} type={type} placeholder={label} style={{ height: '160px', width: '100%' }} />
		{touched &&
			error &&
			<span>
				{error}
			</span>}

	</div>
	)
}
export const renderTinyMCE = ({ input, label, type, meta: { touched, error } }) => {
	return (<div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
		<label style={{ width: '150px', padding: "30px 20px 50px 20px" }}>
			{label}
		</label>
		<TinyMceEditor {...input} label={label} style={{ height: '160px', width: '100%' }} />
		{touched &&
			error &&
			<span>
				{error}
			</span>}

	</div>
	)
}
export const renderDraft = ({ input, label, type, meta: { touched, error } }) => {
	return (<div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
		<label style={{ width: '150px', padding: "30px 20px 50px 20px" }}>
			{label}
		</label>
		<DraftEditor {...input} label={label} style={{ height: '160px', width: '100%' }} />
		{touched &&
			error &&
			<span>
				{error}
			</span>}

	</div>
	)
}