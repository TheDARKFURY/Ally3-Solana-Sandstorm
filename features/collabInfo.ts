import { createSlice } from '@reduxjs/toolkit'

interface collab {
	collabName: string
	LeadName: string
	Description: string
	AdminWallet: string
	ContributionPower: number
}

const initialState: collab = {
	collabName: '',
	LeadName: '',
	Description: '',
	AdminWallet: '',
	ContributionPower: 0,
}

export const CollabInfo = createSlice({
	name: 'collab',
	initialState,
	reducers: {
		addCollabName: (state: collab, action: any) => {
			state.collabName = action.payload
		},
		addLeadName: (state: collab, action: any) => {
			state.LeadName = action.payload
		},
		addDescription: (state: collab, action: any) => {
			state.Description = action.payload
		},
		addAdminWallet: (state: collab, action: any) => {
			state.AdminWallet = action.payload
		},
		addContributionPower: (state: collab, action: any) => {
			state.ContributionPower = action.payload
		},
	},
})

export const { addAdminWallet, addCollabName, addDescription, addLeadName, addContributionPower } =
	CollabInfo.actions

export default CollabInfo.reducer
