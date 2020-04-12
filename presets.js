exports.getPresets = function () {
	var presets = [

		{
			category: 'pgm-bus',
			label: 'In 1 PGM',
			bank: {
				style: 'text',
				text: 'In 1',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'switch_pgm',
				options: {
					switchpgm: '1'
				}
			}],
			feedbacks: [{
				type: 'pgm_in',
				options: {
					pgm_in: '1'
				}
			}],
		},
		{
			category: 'pvw-bus',
			label: 'In 1 PVW',
			bank: {
				style: 'text',
				text: 'In 1',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'switch_pvw',
				options: {
					switchpvw: '1'
				}
			}],
			feedbacks: [{
				type: 'pvw_in',
				options: {
					pvw_in: '1'
				}
			}],

		},
		{
			category: 'transition',
			label: 'Mix',
			bank: {
				style: 'text',
				text: 'Mix',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '4'
				}
			}],
			feedbacks: [{
				type: 'trans_current',
				options: {
					trans: '0'
				}
			}],
		},
		{
			category: 'transition',
			label: 'Wipe',
			bank: {
				style: 'text',
				text: 'Wipe',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '5'
				}
			}],
			feedbacks: [{
				type: 'trans_current',
				options: {
					trans: '1'
				}
			}],
		},
		{
			category: 'transition',
			label: 'Clip',
			bank: {
				style: 'text',
				text: 'Clip',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '6'
				}
			}],
			feedbacks: [{
				type: 'trans_current',
				options: {
					trans: '2'
				}
			}],
		},
		{
			category: 'transition',
			label: 'DVE',
			bank: {
				style: 'text',
				text: 'DVE',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '15'
				}
			}],
			feedbacks: [{
				type: 'trans_current',
				options: {
					trans: '3'
				}
			}],
		},
		{
			category: 'transition',
			label: 'Auto',
			bank: {
				style: 'text',
				text: 'Auto',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '0'
				}
			}],
			feedbacks: [{
				type: 'tbar_state'
			}],
		},
		{
			category: 'transition',
			label: 'Cut',
			bank: {
				style: 'text',
				text: 'Cut',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '1'
				}
			}]
		},
		{
			category: 'transition',
			label: 'DSK Auto',
			bank: {
				style: 'text',
				text: 'DSK Auto',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '2'
				}
			}],
			feedbacks: [{
				type: 'dsk_tbar_state'
			}],
		},
		{
			category: 'transition',
			label: 'DSK Cut',
			bank: {
				style: 'text',
				text: 'DSK Cut',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'trans',
				options: {
					trans: '3'
				}
			}]
		},
		{
			category: 'audio',
			label: 'External',
			bank: {
				style: 'text',
				text: 'External',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'audio_src',
				options: {
					audio_src: '0'
				}
			}],
			feedbacks: [{
				type: 'audio_src',
				options: {
					audio_src: '0'
				}
			}],

		},
		{
			category: 'audio',
			label: 'Follow',
			bank: {
				style: 'text',
				text: 'Follow',
				size: '18',
				color: this.rgb(255, 255, 255),
				bgcolor: this.rgb(0, 0, 0),

			},
			actions: [{
				action: 'audio_src',
				options: {
					audio_src: '1'
				}
			}],
			feedbacks: [{
				type: 'audio_src',
				options: {
					audio_src: '1'
				}
			}],

		},

	];

	return presets;
}