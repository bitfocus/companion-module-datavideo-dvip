exports.getActions = function () {

	let actions = {};

	actions['switch_pgm'] = {
		label: 'Switch PGM',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchpgm',
				default: '0',
				choices: this.model.pgm
			}
		]
	};

	actions['switch_pvw'] = {
		label: 'Switch PVW',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchpvw',
				default: '0',
				choices: this.model.pvw
			}
		]
	};
	actions['switch_key1'] = {
		label: 'Switch Key 1 Aux',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchkey1',
				default: '0',
				choices: this.model.key1
			}
		]
	};
	
	if (this.config.modelID != 'se700') {
	actions['switch_key2'] = {
		label: 'Switch Key 2 Aux',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchkey2',
				default: '0',
				choices: this.model.key2
			}
		]
	};
}
	if (this.config.modelID == 'se3200') {
	actions['switch_key3'] = {
		label: 'Switch Key 3 Aux',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchkey3',
				default: '0',
				choices: this.model.key3
			}
		]
	};
}

if (this.config.modelID == 'se3200') {
	actions['switch_aux1'] = {
		label: 'Switch Aux 1',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchaux1',
				default: '0',
				choices: this.model.aux1
			}
		]
	};
}
if (this.config.modelID == 'se3200') {
	actions['switch_aux2'] = {
		label: 'Switch Aux 2',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchaux2',
				default: '0',
				choices: this.model.aux2
			}
		]
	};
}
if (this.config.modelID == 'se3200') {
	actions['switch_aux3'] = {
		label: 'Switch Aux 3',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchaux3',
				default: '0',
				choices: this.model.aux3
			}
		]
	};
}
if (this.config.modelID == 'se3200') {
	actions['switch_aux4'] = {
		label: 'Switch Aux 4',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchaux4',
				default: '0',
				choices: this.model.aux4
			}
		]
	};
}
if (this.config.modelID == 'se3200') {
	actions['switch_key4'] = {
		label: 'Switch Key 4 Aux',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchkey4',
				default: '0',
				choices: this.model.key4
			}
		]
	};
}
if (this.config.modelID == 'se700') {
	actions['switch_pip'] = {
		label: 'Switch PIP Aux',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchpip',
				default: '0',
				choices: this.model.pip
			}
		]
	};
}
	actions['switch_dsk1'] = {
		label: 'Switch DSK 1 Aux',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchdsk1',
				default: '0',
				choices: this.model.dsk1
			}
		]
	};

if (this.config.modelID != 'se700') {
	actions['switch_dsk2'] = {
		label: 'Switch DSK 2 Aux',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'switchdsk2',
				default: '0',
				choices: this.model.dsk2
			}
		]
	};
}
if (this.config.modelID != 'se700') {
		actions['switch_hdmi1'] = {
			label: 'Switch HDMI 1 Output',
			options: [
				{
					type: 'dropdown',
					label: 'Input',
					id: 'switchhdmi1',
					choices: this.model.hdmi1
				}
			]
		};
	}

		if (this.config.modelID == 'se3200') {
			actions['switch_hdmi2'] = {
				label: 'Switch HDMI 2 Output',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'switchhdmi2',
						choices: this.model.hdmi2
					}
				]
			};
		}
		if (this.config.modelID == 'se3200') {
			actions['switch_hdmi3'] = {
				label: 'Switch HDMI 3 Output',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'switchhdmi3',
						choices: this.model.hdmi3
					}
				]
			};
		}

		actions['switch_sdi1'] = {
			label: 'Switch SDI 1 Output',
			options: [
				{
					type: 'dropdown',
					label: 'Input',
					id: 'switchsdi1',
					choices: this.model.sdi1
				}
			]
		};
	
		actions['switch_sdi2'] = {
			label: 'Switch SDI 2 Output',
			options: [
				{
					type: 'dropdown',
					label: 'Input',
					id: 'switchsdi2',
					choices: this.model.sdi2
				}
			]
		};
	
	actions['trans'] = {
		label: 'Transition Controls',
		options: [
			{
				type: 'dropdown',
				label: 'Action',
				id: 'trans',
				default: '0',
				choices: this.model.trans
			}
		]
	};
	actions['ftb'] = {
		label: 'Fade to Black',
		options: [
			{
				type: 'dropdown',
				label: 'Action',
				id: 'ftb',
				default: '0',
				choices: this.model.ftb
			}
		]
	};
	if (this.config.modelID != 'se700') {
	actions['keyer'] = {
		label: 'Keyer Controls',
		options: [
			{
				type: 'dropdown',
				label: 'Action',
				id: 'keyer',
				default: '0',
				choices: this.model.keyer
			}
		]
	};
}
	actions['user'] = {
		label: 'Load User',
		options: [
			{
				type: 'dropdown',
				label: 'Load',
				id: 'user',
				default: '0',
				choices: this.model.user
			}
		]
	};
	if (this.config.modelID != 'se700') {
	actions['streamer'] = {
		label: 'Streamer Options',
		options: [
			{
				type: 'dropdown',
				label: 'Action',
				id: 'streamer',
				default: '0',
				choices: this.model.streamer
			}
		]
	};
}

if (this.config.modelID == 'se3200') {
	actions['logo'] = {
		label: 'Logo Controls',
		options: [
			{
				type: 'dropdown',
				label: 'Input',
				id: 'logo',
				default: '0',
				choices: this.model.logo
			}
		]
	};
}
	return actions
}