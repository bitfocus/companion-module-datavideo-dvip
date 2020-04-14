exports.getFeedbacks = function () {

	let feedbacks = {};
	feedbacks['pgm_in'] = {
		label: 'Color for PGM',
		description: 'Set Button colors for PGM Bus',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color',
			id: 'fg',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color',
			id: 'bg',
			default: this.rgb(255, 0, 0),
		},
		{
			type: 'dropdown',
			label: 'Input',
			id: 'pgm_in',
			default: '0',
			choices: this.model.pgm
		}
		],
		callback: (feedback, bank) => {
			if (this.pgm_in_src == feedback.options.pgm_in) {
				return {
					color: feedback.options.fg,
					bgcolor: feedback.options.bg
				};
			}
		}
	}

	feedbacks['pvw_in'] = {
		label: 'Color for PVW',
		description: 'Set Button colors for PVW Bus',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color for PVW state',
			id: 'fg',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color for PVW state',
			id: 'bg',
			default: this.rgb(51, 102, 0),
		},
		{
			type: 'colorpicker',
			label: 'Foreground color for Transition state',
			id: 'fg_trans',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color for Transition state',
			id: 'bg_trans',
			default: this.rgb(255, 56, 0),
		},
		{
			type: 'dropdown',
			label: 'Input',
			id: 'pvw_in',
			default: '0',
			choices: this.model.pvw
		}
		],
		callback: (feedback, bank) => {
			if (this.pvw_in_src == feedback.options.pvw_in) {
				if (this.tbar_state > 0) {
					return {
						color: feedback.options.fg_trans,
						bgcolor: feedback.options.bg_trans,
					};
				} else {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}


		}
	}




	feedbacks['key1_in'] = {
		label: 'Color for Key 1 Aux',
		description: 'Set Button colors for Key 1 Aux Bus',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color',
			id: 'fg',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color',
			id: 'bg',
			default: this.rgb(51, 102, 0),
		},
		{
			type: 'dropdown',
			label: 'Input',
			id: 'key1_in',
			default: '0',
			choices: this.model.key1
		},
		{
			type: 'colorpicker',
			label: 'Foreground color for PGM on state',
			id: 'fg_pgm',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color for PGM on state',
			id: 'bg_pgm',
			default: this.rgb(255, 00, 0),
		},
		],
		callback: (feedback, bank) => {
			if (this.key1_in_src == feedback.options.key1_in) {
				if (this.key1_pgm_state == 1) {
					return {
						color: feedback.options.fg_pgm,
						bgcolor: feedback.options.bg_pgm
					};
				} else {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		}
	}
	if (this.config.modelID != 'se700' && this.config.modelID != 'se650') {
		feedbacks['key2_in'] = {
			label: 'Color for Key 2 Aux',
			description: 'Set Button colors for Key 2 Aux Bus',
			options: [{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(51, 102, 0),
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'key2_in',
				default: '0',
				choices: this.model.key2
			},
			{
				type: 'colorpicker',
				label: 'Foreground color for PGM on state',
				id: 'fg_pgm',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color for PGM on state',
				id: 'bg_pgm',
				default: this.rgb(255, 00, 0),
			},
			],
			callback: (feedback, bank) => {
				if (this.key2_in_src == feedback.options.key2_in) {
					if (this.key2_pgm_state == 1) {
						return {
							color: feedback.options.fg_pgm,
							bgcolor: feedback.options.bg_pgm
						};
					} else {
						return {
							color: feedback.options.fg,
							bgcolor: feedback.options.bg
						};
					}
				}
			}
		}
	} else {
		feedbacks['pip_in'] = {
			label: 'Color for PIP Aux',
			description: 'Set Button colors for PIP Aux Bus',
			options: [{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(51, 102, 0),
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'pip_in',
				default: '0',
				choices: this.model.pip
			},
			{
				type: 'colorpicker',
				label: 'Foreground color for PGM on state',
				id: 'fg_pgm',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color for PGM on state',
				id: 'bg_pgm',
				default: this.rgb(255, 00, 0),
			},
			],
			callback: (feedback, bank) => {
				if (this.pip_in_src == feedback.options.pip_in) {
					if (this.pip_pgm_state == 1) {
						return {
							color: feedback.options.fg_pgm,
							bgcolor: feedback.options.bg_pgm
						};
					} else {
						return {
							color: feedback.options.fg,
							bgcolor: feedback.options.bg
						};
					}
				}
			}
		}
	}

	if (this.config.modelID == 'se3200') {
		feedbacks['key3_in'] = {
			label: 'Color for Key 3 Aux',
			description: 'Set Button colors for Key 3 Aux Bus',
			options: [{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(51, 102, 0),
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'key3_in',
				default: '0',
				choices: this.model.key3
			},
			{
				type: 'colorpicker',
				label: 'Foreground color for PGM on state',
				id: 'fg_pgm',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color for PGM on state',
				id: 'bg_pgm',
				default: this.rgb(255, 00, 0),
			},
			],
			callback: (feedback, bank) => {
				if (this.key3_in_src == feedback.options.key3_in) {
					if (this.key3_pgm_state == 1) {
						return {
							color: feedback.options.fg_pgm,
							bgcolor: feedback.options.bg_pgm
						};
					} else {
						return {
							color: feedback.options.fg,
							bgcolor: feedback.options.bg
						};
					}
				}
			}
		}
		feedbacks['key4_in'] = {
			label: 'Color for Key 4 Aux',
			description: 'Set Button colors for Key 4 Aux Bus',
			options: [{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(51, 102, 0),
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'key4_in',
				default: '0',
				choices: this.model.key4
			},
			{
				type: 'colorpicker',
				label: 'Foreground color for PGM on state',
				id: 'fg_pgm',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color for PGM on state',
				id: 'bg_pgm',
				default: this.rgb(255, 00, 0),
			},
			],
			callback: (feedback, bank) => {
				if (this.key4_in_src == feedback.options.key4_in) {
					if (this.key4_pgm_state == 1) {
						return {
							color: feedback.options.fg_pgm,
							bgcolor: feedback.options.bg_pgm
						};
					} else {
						return {
							color: feedback.options.fg,
							bgcolor: feedback.options.bg
						};
					}
				}
			}
		}

		feedbacks['aux1_in'] = {
			label: 'Color for Aux 1 Bus',
			description: 'Set Button colors for Aux 1 Bus',
			options: [{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(51, 102, 0),
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'aux1_in',
				default: '0',
				choices: this.model.aux1
			}
			],
			callback: (feedback, bank) => {
				if (this.aux1_in_src == feedback.options.aux1_in) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		}

		feedbacks['aux2_in'] = {
			label: 'Color for Aux 2 Bus',
			description: 'Set Button colors for Aux 2 Bus',
			options: [{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(51, 102, 0),
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'aux2_in',
				default: '0',
				choices: this.model.aux2
			}
			],
			callback: (feedback, bank) => {
				if (this.aux2_in_src == feedback.options.aux2_in) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		}
		feedbacks['aux3_in'] = {
			label: 'Color for Aux 3 Bus',
			description: 'Set Button colors for Aux 3 Bus',
			options: [{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(51, 102, 0),
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'aux3_in',
				default: '0',
				choices: this.model.aux1
			}
			],
			callback: (feedback, bank) => {
				if (this.aux3_in_src == feedback.options.aux3_in) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		}

		feedbacks['aux4_in'] = {
			label: 'Color for Aux 4 Bus',
			description: 'Set Button colors for Aux 4 Bus',
			options: [{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(51, 102, 0),
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'aux4_in',
				default: '0',
				choices: this.model.aux1
			}
			],
			callback: (feedback, bank) => {
				if (this.aux4_in_src == feedback.options.aux4_in) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		}
	}
	feedbacks['dsk1_in'] = {
		label: 'Color for DSK 1 Aux',
		description: 'Set Button colors for DSK 1 Aux Bus',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color',
			id: 'fg',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color',
			id: 'bg',
			default: this.rgb(51, 102, 0),
		},
		{
			type: 'dropdown',
			label: 'Input',
			id: 'dsk1_in',
			default: '0',
			choices: this.model.dsk1
		},
		{
			type: 'colorpicker',
			label: 'Foreground color for PGM on state',
			id: 'fg_pgm',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color for PGM on state',
			id: 'bg_pgm',
			default: this.rgb(255, 00, 0),
		},
		],
		callback: (feedback, bank) => {
			if (this.dsk1_in_src == feedback.options.dsk1_in) {
				if (this.dsk1_pgm_state == 1) {
					return {
						color: feedback.options.fg_pgm,
						bgcolor: feedback.options.bg_pgm
					};
				} else {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		}
	}
	if (this.config.modelID != 'se700' && this.config.modelID != 'se650') {
		feedbacks['dsk2_in'] = {
			label: 'Color for DSK 2 Aux',
			description: 'Set Button colors for DSK 2 Aux Bus',
			options: [{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(51, 102, 0),
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'dsk2_in',
				default: '0',
				choices: this.model.dsk2
			},
			{
				type: 'colorpicker',
				label: 'Foreground color for PGM on state',
				id: 'fg_pgm',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color for PGM on state',
				id: 'bg_pgm',
				default: this.rgb(255, 00, 0),
			},
			],
			callback: (feedback, bank) => {
				if (this.dsk2_in_src == feedback.options.dsk2_in) {
					if (this.dsk2_pgm_state == 1) {
						return {
							color: feedback.options.fg_pgm,
							bgcolor: feedback.options.bg_pgm
						};
					} else {
						return {
							color: feedback.options.fg,
							bgcolor: feedback.options.bg
						};
					}
				}
			}
		}

	}

	feedbacks['trans_current'] = {
		label: 'Color for current transition',
		description: 'Set Button colors for current transition selection.',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color',
			id: 'fg',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color',
			id: 'bg',
			default: this.rgb(51, 102, 0),
		},
		{
			type: 'dropdown',
			label: 'Input',
			id: 'trans',
			default: '0',
			choices: [
				{ id: '0', label: 'Mix' },
				{ id: '1', label: 'Wipe' },
				{ id: '2', label: 'Clip' },
				{ id: '3', label: 'DVE Trans' },
			]
		}
		],
		callback: (feedback, bank) => {
			if (this.trans_current == feedback.options.trans) {
				return {
					color: feedback.options.fg,
					bgcolor: feedback.options.bg
				};
			}
		}
	}

	feedbacks['tbar_state'] = {
		label: 'Color for T Bar transition',
		description: 'Set Button colors for when transition is running.',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color',
			id: 'fg',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color',
			id: 'bg',
			default: this.rgb(255, 56, 0),
		}
		],
		callback: (feedback, bank) => {
			if (this.tbar_state > 0) {
				return {
					color: feedback.options.fg,
					bgcolor: feedback.options.bg
				};
			}
		}
	}


	feedbacks['dsk_tbar_state'] = {
		label: 'Color for T Bar DSK transition',
		description: 'Set Button colors for when DSK transition is running.',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color',
			id: 'fg',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color',
			id: 'bg',
			default: this.rgb(255, 56, 0),
		}
		],
		callback: (feedback, bank) => {
			if (this.dsk_tbar_state > 0) {
				return {
					color: feedback.options.fg,
					bgcolor: feedback.options.bg
				};
			}
		}
	}
	if (this.config.modelID != 'se700' && this.config.modelID != 'se650') {
		feedbacks['audio_src'] = {
			label: 'Color for current audio source',
			description: 'Set Button colors for current audio source',
			options: [{
				type: 'colorpicker',
				label: 'Foreground color',
				id: 'fg',
				default: '16777215'
			},
			{
				type: 'colorpicker',
				label: 'Background color',
				id: 'bg',
				default: this.rgb(51, 102, 0),
			},
			{
				type: 'dropdown',
				label: 'Input',
				id: 'audio_src',
				default: '0',
				choices: this.model.audio_src
			}
			],
			callback: (feedback, bank) => {
				if (this.audio_src == feedback.options.audio_src) {
					return {
						color: feedback.options.fg,
						bgcolor: feedback.options.bg
					};
				}
			}
		}
	}

	feedbacks['curr_user'] = {
		label: 'Color for currently loaded user',
		description: 'Set Button colors for currently loaded user',
		options: [{
			type: 'colorpicker',
			label: 'Foreground color',
			id: 'fg',
			default: '16777215'
		},
		{
			type: 'colorpicker',
			label: 'Background color',
			id: 'bg',
			default: this.rgb(51, 102, 0),
		},
		{
			type: 'number',
			label: 'User 1-999',
			id: 'userid',
			default: '1',
			min: 1,
			max: 999,
		}
		],
		callback: (feedback, bank) => {
			if (this.curr_user == feedback.options.userid) {
				return {
					color: feedback.options.fg,
					bgcolor: feedback.options.bg
				};
			}
		}
	}

	return feedbacks;

}