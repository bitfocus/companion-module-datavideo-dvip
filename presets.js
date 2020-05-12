exports.getPresets = function () {

	if (this.model.legacy_dvip) {
		//Legacy DVIP Presets
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
				release_actions: [{
					action: 'trans',
					options: {
						trans: '1'
					}
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
						trans: '2'
					}
				}],
				release_actions: [{
					action: 'trans',
					options: {
						trans: '3'
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
			},
			{
				category: 'transition',
				label: 'Freeze',
				bank: {
					style: 'text',
					text: 'Freeze',
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
				release_actions: [{
					action: 'trans',
					options: {
						trans: '7'
					}
				}],
			},
			{
				category: 'transition',
				label: 'Speed 1',
				bank: {
					style: 'text',
					text: 'Speed 1',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'trans',
					options: {
						trans: '8'
					}
				}],
			},
			{
				category: 'transition',
				label: 'Speed 2',
				bank: {
					style: 'text',
					text: 'Speed 2',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'trans',
					options: {
						trans: '9'
					}
				}],
			},
			{
				category: 'transition',
				label: 'Speed 3',
				bank: {
					style: 'text',
					text: 'Speed 3',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'trans',
					options: {
						trans: '10'
					}
				}],
			},
			{
				category: 'keyer',
				label: 'DSK 1 PGM',
				bank: {
					style: 'text',
					text: 'DSK 1 PGM',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '0'
					}
				}],
				release_actions: [{
					action: 'keyer',
					options: {
						keyer: '1'
					}
				}],
			},
			{
				category: 'keyer',
				label: 'DSK 1 PVW',
				bank: {
					style: 'text',
					text: 'DSK 1 PVW',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '2'
					}
				}],
				release_actions: [{
					action: 'keyer',
					options: {
						keyer: '3'
					}
				}],
			},
			{
				category: 'keyer',
				label: 'PIP 1 PGM',
				bank: {
					style: 'text',
					text: 'PIP 1 PGM',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '4'
					}
				}],
				release_actions: [{
					action: 'keyer',
					options: {
						keyer: '5'
					}
				}],
			},
			{
				category: 'keyer',
				label: 'PIP 1 PVW',
				bank: {
					style: 'text',
					text: 'PIP 1 PVW',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '6'
					}
				}],
				release_actions: [{
					action: 'keyer',
					options: {
						keyer: '7'
					}
				}],
			},
			{
				category: 'keyer',
				label: 'PIP 2 PGM',
				bank: {
					style: 'text',
					text: 'PIP 2 PGM',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '8'
					}
				}],
				release_actions: [{
					action: 'keyer',
					options: {
						keyer: '9'
					}
				}],
			},
			{
				category: 'keyer',
				label: 'PIP 2 PVW',
				bank: {
					style: 'text',
					text: 'PIP 2 PVW',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '10'
					}
				}],
				release_actions: [{
					action: 'keyer',
					options: {
						keyer: '11'
					}
				}],
			},
			{
				category: 'menu',
				label: 'Up ',
				bank: {
					style: 'text',
					text: 'Up',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'menu',
					options: {
						menu: '0'
					}
				}],
				release_actions: [{
					action: 'menu',
					options: {
						menu: '1'
					}
				}],
			},
			{
				category: 'menu',
				label: 'Down ',
				bank: {
					style: 'text',
					text: 'Down',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'menu',
					options: {
						menu: '2'
					}
				}],
				release_actions: [{
					action: 'menu',
					options: {
						menu: '3'
					}
				}],
			},
			{
				category: 'menu',
				label: 'Left ',
				bank: {
					style: 'text',
					text: 'Left',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'menu',
					options: {
						menu: '4'
					}
				}],
				release_actions: [{
					action: 'menu',
					options: {
						menu: '5'
					}
				}],
			},
			{
				category: 'menu',
				label: 'Right ',
				bank: {
					style: 'text',
					text: 'Right',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'menu',
					options: {
						menu: '6'
					}
				}],
				release_actions: [{
					action: 'menu',
					options: {
						menu: '7'
					}
				}],
			},
			{
				category: 'menu',
				label: 'Enter ',
				bank: {
					style: 'text',
					text: 'Enter',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'menu',
					options: {
						menu: '8'
					}
				}],
				release_actions: [{
					action: 'menu',
					options: {
						menu: '9'
					}
				}],
			},
			{
				category: 'menu',
				label: 'Menu ',
				bank: {
					style: 'text',
					text: 'Menu',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'menu',
					options: {
						menu: '10'
					}
				}],
				release_actions: [{
					action: 'menu',
					options: {
						menu: '11'
					}
				}],
			},
			{
				category: 'crosspoint',
				label: 'FS',
				bank: {
					style: 'text',
					text: 'FS',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'crosspoint',
					options: {
						crosspoint: '0'
					}
				}],
				release_actions: [{
					action: 'crosspoint',
					options: {
						crosspoint: '1'
					}
				}],
			},
			{
				category: 'crosspoint',
				label: 'Aux',
				bank: {
					style: 'text',
					text: 'Aux',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'crosspoint',
					options: {
						crosspoint: '2'
					}
				}],
				release_actions: [{
					action: 'crosspoint',
					options: {
						crosspoint: '3'
					}
				}],
			},
			{
				category: 'crosspoint',
				label: 'Video',
				bank: {
					style: 'text',
					text: 'Video',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'crosspoint',
					options: {
						crosspoint: '4'
					}
				}],
				release_actions: [{
					action: 'crosspoint',
					options: {
						crosspoint: '5'
					}
				}],
			},
			{
				category: 'crosspoint',
				label: 'Audio',
				bank: {
					style: 'text',
					text: 'Audio',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'crosspoint',
					options: {
						crosspoint: '6'
					}
				}],
				release_actions: [{
					action: 'crosspoint',
					options: {
						crosspoint: '7'
					}
				}],
			},
			{
				category: 'ftb',
				label: 'FTB',
				bank: {
					style: 'text',
					text: 'FTB',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'ftb',
					options: {
						ftb: '2'
					}
				}],
			},
			{
				category: 'audio-src',
				label: 'Fixed',
				bank: {
					style: 'text',
					text: 'Fixed',
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
				release_actions: [{
					action: 'audio_src',
					options: {
						audio_src: '1'
					}
				}],
			},
			{
				category: 'audio-src',
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
						audio_src: '2'
					}
				}],
				release_actions: [{
					action: 'audio_src',
					options: {
						audio_src: '3'
					}
				}],
			},
			{
				category: 'logo',
				label: 'Logo 1',
				bank: {
					style: 'text',
					text: 'Logo 1',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'logo',
					options: {
						logo: '0'
					}
				}],
				release_actions: [{
					action: 'logo',
					options: {
						logo: '1'
					}
				}],
			},
			{
				category: 'logo',
				label: 'Logo 2',
				bank: {
					style: 'text',
					text: 'Logo 2',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'logo',
					options: {
						logo: '2'
					}
				}],
				release_actions: [{
					action: 'logo',
					options: {
						logo: '3'
					}
				}],
			},
			{
				category: 'logo',
				label: 'Clock',
				bank: {
					style: 'text',
					text: 'Clock',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'logo',
					options: {
						logo: '4'
					}
				}],
				release_actions: [{
					action: 'logo',
					options: {
						logo: '5'
					}
				}],
			},
			{
				category: 'timer',
				label: 'Timer',
				bank: {
					style: 'text',
					text: 'Timer',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'timer',
					options: {
						timer: '0'
					}
				}],
				release_actions: [{
					action: 'timer',
					options: {
						timer: '1'
					}
				}],
			},
			{
				category: 'hdmi1',
				label: 'MS / PGM',
				bank: {
					style: 'text',
					text: 'MS / PGM',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_hdmi1',
					options: {
						switchhdmi1: '1'
					}
				}],
				release_actions: [{
					action: 'switch_hdmi1',
					options: {
						switchhdmi1: '2'
					}
				}],
			},
			{
				category: 'function',
				label: 'F1',
				bank: {
					style: 'text',
					text: 'F1',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'func',
					options: {
						func: '0'
					}
				}],
				release_actions: [{
					action: 'func',
					options: {
						func: '1'
					}
				}],
			},
			{
				category: 'function',
				label: 'F2',
				bank: {
					style: 'text',
					text: 'F2',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'func',
					options: {
						func: '2'
					}
				}],
				release_actions: [{
					action: 'func',
					options: {
						func: '3'
					}
				}],
			},
			{
				category: 'function',
				label: 'F3',
				bank: {
					style: 'text',
					text: 'F3',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'func',
					options: {
						func: '4'
					}
				}],
				release_actions: [{
					action: 'func',
					options: {
						func: '5'
					}
				}],
			},
			{
				category: 'function',
				label: 'F4',
				bank: {
					style: 'text',
					text: 'F4',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'func',
					options: {
						func: '6'
					}
				}],
				release_actions: [{
					action: 'func',
					options: {
						func: '7'
					}
				}],
			},
		];
	} else {

		var presets = [

			{
				category: 'pgm-bus',
				label: 'In 1 PGM',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
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
					text: `$(${this.config.label}:in1_name)`,
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
				category: 'dsk-1-bus',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_dsk1',
					options: {
						switchdsk1: '1'
					}
				}],
				feedbacks: [{
					type: 'dsk1_in',
					options: {
						dsk1_in: '1'
					}
				}],
			},
			{
				category: 'dsk-2-bus',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_dsk2',
					options: {
						switchdsk2: '1'
					}
				}],
				feedbacks: [{
					type: 'dsk2_in',
					options: {
						dsk2_in: '1'
					}
				}],
			},
			{
				category: 'key-1-bus',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_key1',
					options: {
						switchkey1: '1'
					}
				}],
				feedbacks: [{
					type: 'key1_in',
					options: {
						key1_in: '1'
					}
				}],
			},
			{
				category: 'key-2-bus',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_key2',
					options: {
						switchkey2: '1'
					}
				}],
				feedbacks: [{
					type: 'key2_in',
					options: {
						key2_in: '1'
					}
				}],
			},
			{
				category: 'key-3-bus',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_key3',
					options: {
						switchkey3: '1'
					}
				}],
				feedbacks: [{
					type: 'key3_in',
					options: {
						key3_in: '1'
					}
				}],
			},
			{
				category: 'key-4-bus',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_key4',
					options: {
						switchkey4: '1'
					}
				}],
				feedbacks: [{
					type: 'key4_in',
					options: {
						key4_in: '1'
					}
				}],
			},
			{
				category: 'pip-bus',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_pip',
					options: {
						switchpip: '1'
					}
				}],
				feedbacks: [{
					type: 'pip_in',
					options: {
						pip_in: '1'
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
			{
				category: 'audio',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'audio_src',
					options: {
						audio_src: '2'
					}
				}],
				feedbacks: [{
					type: 'audio_src',
					options: {
						audio_src: '2'
					}
				}],

			},
			{
				category: 'user-load',
				label: 'User 1',
				bank: {
					style: 'text',
					text: 'User 1',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'loaduser',
					options: {
						userid: '1'
					}
				}],
				feedbacks: [{
					type: 'curr_user',
					options: {
						userid: '1'
					}
				}],

			},
			{
				category: 'keyer',
				label: 'DSK 1 PGM',
				bank: {
					style: 'text',
					text: 'DSK 1 PGM',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '0'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '0'
					}
				}],

			},
			{
				category: 'keyer',
				label: 'DSK 1 PVW',
				bank: {
					style: 'text',
					text: 'DSK 1 PVW',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '2'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '2',
						bg: this.rgb(51, 102, 0)
					}
				}],

			},
			{
				category: 'keyer',
				label: 'DSK 2 PGM',
				bank: {
					style: 'text',
					text: 'DSK 2 PGM',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '4'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '4'
					}
				}],

			},
			{
				category: 'keyer',
				label: 'DSK 2 PVW',
				bank: {
					style: 'text',
					text: 'DSK 2 PVW',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '6'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '6',
						bg: this.rgb(51, 102, 0)
					}
				}],

			},
			{
				category: 'keyer',
				label: 'Key 1 PGM',
				bank: {
					style: 'text',
					text: 'Key 1 PGM',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '8'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '8'
					}
				}],

			},
			{
				category: 'keyer',
				label: 'Key 1 PVW',
				bank: {
					style: 'text',
					text: 'Key 1 PVW',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '10'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '10',
						bg: this.rgb(51, 102, 0)
					}
				}],

			},
			{
				category: 'keyer',
				label: 'Key 2 PGM',
				bank: {
					style: 'text',
					text: 'Key 2 PGM',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '12'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '12'
					}
				}],

			},
			{
				category: 'keyer',
				label: 'Key 2 PVW',
				bank: {
					style: 'text',
					text: 'Key 2 PVW',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '14'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '14',
						bg: this.rgb(51, 102, 0)
					}
				}],

			},
			{
				category: 'keyer',
				label: 'Key 3 PGM',
				bank: {
					style: 'text',
					text: 'Key 3 PGM',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '16'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '16'
					}
				}],

			},
			{
				category: 'keyer',
				label: 'Key 3 PVW',
				bank: {
					style: 'text',
					text: 'Key 3 PVW',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '18'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '18',
						bg: this.rgb(51, 102, 0)
					}
				}],

			},
			{
				category: 'keyer',
				label: 'Key 4 PGM',
				bank: {
					style: 'text',
					text: 'Key 4 PGM',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '20'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '20'
					}
				}],

			},
			{
				category: 'keyer',
				label: 'Key 4 PVW',
				bank: {
					style: 'text',
					text: 'Key 4 PVW',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '22'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '22',
						bg: this.rgb(51, 102, 0)
					}
				}],

			},
			{
				category: 'keyer',
				label: 'PIP PGM',
				bank: {
					style: 'text',
					text: 'PIP PGM',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '12'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '12'
					}
				}],

			},
			{
				category: 'keyer',
				label: 'PIP PVW',
				bank: {
					style: 'text',
					text: 'PIP PVW',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'keyer',
					options: {
						keyer: '14'
					}
				}],
				feedbacks: [{
					type: 'keyer_state',
					options: {
						keyer: '14',
						bg: this.rgb(51, 102, 0)
					}
				}],

			},
			{
				category: 'transition',
				label: 'Background',
				bank: {
					style: 'text',
					text: 'Background',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'trans_btn',
					options: {
						trans: '40'
					}
				}],
				feedbacks: [{
					type: 'trans_state',
					options: {
						trans: '40'
					}
				}],
			},
			{
				category: 'transition',
				label: 'Prev Trans',
				bank: {
					style: 'text',
					text: 'Prev Trans',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'trans_btn',
					options: {
						trans: '11'
					}
				}],
				feedbacks: [{
					type: 'trans_state',
					options: {
						trans: '11'
					}
				}],
			},
			{
				category: 'transition',
				label: 'Norm Rev',
				bank: {
					style: 'text',
					text: 'Norm Rev',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'trans_btn',
					options: {
						trans: '7'
					}
				}],
				feedbacks: [{
					type: 'trans_state',
					options: {
						trans: '7'
					}
				}],
			},
			{
				category: 'transition',
				label: 'Rev',
				bank: {
					style: 'text',
					text: 'Rev',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'trans_btn',
					options: {
						trans: '9'
					}
				}],
				feedbacks: [{
					type: 'trans_state',
					options: {
						trans: '9'
					}
				}],
			},
			{
				category: 'transition',
				label: 'Key Priority',
				bank: {
					style: 'text',
					text: 'Key Priority',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'trans_btn',
					options: {
						trans: '13'
					}
				}],
				feedbacks: [{
					type: 'trans_state',
					options: {
						trans: '13'
					}
				}],
			},
			{
				category: 'ftb',
				label: 'FTB Enable',
				bank: {
					style: 'text',
					text: 'FTB Enable',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'ftb',
					options: {
						trans: '0'
					}
				}],
				feedbacks: [{
					type: 'ftb_state',
					options: {
						trans: '0'
					}
				}],
			},
			{
				category: 'ftb',
				label: 'FTB',
				bank: {
					style: 'text',
					text: 'FTB',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'ftb',
					options: {
						ftb: '2'
					}
				}],
				feedbacks: [{
					type: 'ftb_state',
					options: {
						ftb: '2'
					}
				}],
			},
			{
				category: 'wipe',
				label: 'Wipe 1',
				bank: {
					style: 'text',
					text: 'Wipe 1',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'set_wipe',
					options: {
						wipe: '1'
					}
				}],
				feedbacks: [{
					type: 'wipe_state',
					options: {
						wipe: '1'
					}
				}],

			},
			{
				category: 'audio',
				label: 'SDI 1 Enable',
				bank: {
					style: 'text',
					text: 'SDI 1 Enable',
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'audio',
					options: {
						audio: '10'
					}
				}],
				feedbacks: [{
					type: 'audio_state',
					options: {
						audio: '10'
					}
				}],

			},
			{
				category: 'aux-1-bus',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_aux1',
					options: {
						switchaux1: '1'
					}
				}],
				feedbacks: [{
					type: 'aux1_in',
					options: {
						aux1_in: '1'
					}
				}],
			},
			{
				category: 'aux-2-bus',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_aux2',
					options: {
						switchaux2: '1'
					}
				}],
				feedbacks: [{
					type: 'aux2_in',
					options: {
						aux2_in: '1'
					}
				}],
			},
			{
				category: 'aux-3-bus',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_aux3',
					options: {
						switchaux3: '1'
					}
				}],
				feedbacks: [{
					type: 'aux3_in',
					options: {
						aux3_in: '1'
					}
				}],
			},
			{
				category: 'aux-4-bus',
				label: 'In 1',
				bank: {
					style: 'text',
					text: `$(${this.config.label}:in1_name)`,
					size: '18',
					color: this.rgb(255, 255, 255),
					bgcolor: this.rgb(0, 0, 0),

				},
				actions: [{
					action: 'switch_aux4',
					options: {
						switchaux4: '1'
					}
				}],
				feedbacks: [{
					type: 'aux4_in',
					options: {
						aux4_in: '1'
					}
				}],
			},
		];
	}

	return presets;
}