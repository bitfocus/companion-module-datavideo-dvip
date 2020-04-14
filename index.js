const tcp = require('../../tcp');
const instance_skel = require('../../instance_skel');
var actions = require('./actions');
var presets = require('./presets');
var feedbacks = require('./feedbacks');
var variables = require('./variables');
var choices = require('./choices');
let debug;
let log;

class instance extends instance_skel {

	constructor(system, id, config) {
		super(system, id, config)

		this.null_packet = Buffer.from([0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
		this.null_packet_cmd = Buffer.from([0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00]);
		this.null_packet_cmd = Buffer.from([0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00]);
		this.filter_packet = Buffer.from([0x08, 0x00, 0x00, 0x00, 0x30, 0x4e, 0x13, 0x00]);
		this.disconnect_packet = Buffer.from([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x10, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]);
		this.get_audio_src_packet = Buffer.from([0x0c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x06, 0x00]);

		this.cur_input_request = 0;
		this.input_names = [];

		this.pgm_in_src;
		this.pvw_in_src;
		this.key1_in_src;
		this.key2_in_src;
		this.key3_in_src;
		this.key4_in_src;
		this.pip_in_src;
		this.dsk1_in_src;
		this.dsk2_in_src;
		this.aux1_in_src;
		this.aux2_in_src;
		this.aux3_in_src;
		this.aux4_in_src;
		this.me_dur;
		this.dsk_dur;
		this.ftb_dur;
		this.key1_pgm_state;
		this.key1_pvw_state;
		this.key2_pgm_state;
		this.key2_pvw_state;
		this.key3_pgm_state;
		this.key3_pvw_state;
		this.key4_pgm_state;
		this.key4_pvw_state;
		this.pip_pgm_state;
		this.pip_pvw_state;
		this.dsk1_pgm_state;
		this.dsk1_pvw_state;
		this.dsk2_pgm_state;
		this.dsk2_pvw_state;
		this.trans_current;
		this.tbar_state;
		this.dsk_tbar_state;
		this.audio_src;
		this.curr_user;

		Object.assign(this, {
			...actions,
			...feedbacks,
			...presets,
			...choices,
			...variables
		});

		this.CONFIG_MODEL = {
			se1200mu: {
				id: 'se1200mu',
				label: 'SE-1200MU',
				pgm: this.CHOICES_SWITCH_PGM_1200,
				pvw: this.CHOICES_SWITCH_PVW_1200,
				key1: this.CHOICES_SWITCH_KEY1_1200,
				key2: this.CHOICES_SWITCH_KEY2_1200,
				dsk1: this.CHOICES_SWITCH_DSK1_1200,
				dsk2: this.CHOICES_SWITCH_DSK2_1200,
				hdmi1: this.CHOICES_SWITCH_HDMI1_1200,
				sdi1: this.CHOICES_SWITCH_SDI1_1200,
				sdi2: this.CHOICES_SWITCH_SDI2_1200,
				trans: this.CHOICES_TRANS_1200,
				ftb: this.CHOICES_FTB_1200,
				keyer: this.CHOICES_KEYER_1200,
				streamer: this.CHOICES_STREAMER_1200,
				audio: this.CHOICES_AUDIO_1200,
				audio_src: this.CHOICES_AUDIO_SRC_1200,
				inputs: this.CHOICES_INPUTS_1200,
			},
			se3200: {
				id: 'se3200',
				label: 'SE-3200',
				pgm: this.CHOICES_SWITCH_PGM_3200,
				pvw: this.CHOICES_SWITCH_PVW_3200,
				key1: this.CHOICES_SWITCH_KEY1_3200,
				key2: this.CHOICES_SWITCH_KEY2_3200,
				key3: this.CHOICES_SWITCH_KEY3_3200,
				key4: this.CHOICES_SWITCH_KEY4_3200,
				dsk1: this.CHOICES_SWITCH_DSK1_3200,
				dsk2: this.CHOICES_SWITCH_DSK2_3200,
				aux1: this.CHOICES_SWITCH_AUX1_3200,
				aux2: this.CHOICES_SWITCH_AUX2_3200,
				aux3: this.CHOICES_SWITCH_AUX3_3200,
				aux4: this.CHOICES_SWITCH_AUX4_3200,
				hdmi1: this.CHOICES_SWITCH_HDMI1_3200,
				hdmi2: this.CHOICES_SWITCH_HDMI2_3200,
				hdmi3: this.CHOICES_SWITCH_HDMI3_3200,
				sdi1: this.CHOICES_SWITCH_SDI1_3200,
				sdi2: this.CHOICES_SWITCH_SDI2_3200,
				trans: this.CHOICES_TRANS_3200,
				ftb: this.CHOICES_FTB_3200,
				keyer: this.CHOICES_KEYER_3200,
				streamer: this.CHOICES_STREAMER_1200,
				logo: this.CHOICES_LOGO_3200,
				audio: this.CHOICES_AUDIO_3200,
				audio_src: this.CHOICES_AUDIO_SRC_3200,
				inputs: this.CHOICES_INPUTS_3200,
			},
			se700: {
				id: 'se700',
				label: 'SE-700',
				pgm: this.CHOICES_SWITCH_PGM_700,
				pvw: this.CHOICES_SWITCH_PVW_700,
				key1: this.CHOICES_SWITCH_KEY1_700,
				pip: this.CHOICES_SWITCH_PIP_700,
				dsk1: this.CHOICES_SWITCH_DSK1_700,
				sdi1: this.CHOICES_SWITCH_SDI1_700,
				sdi2: this.CHOICES_SWITCH_SDI2_700,
				hdmi1: this.CHOICES_SWITCH_HDMI1_700,
				trans: this.CHOICES_TRANS_700,
				ftb: this.CHOICES_FTB_1200,
				keyer: this.CHOICES_KEYER_700,
				audio: this.CHOICES_AUDIO_700,
				inputs: this.CHOICES_INPUTS_700,
			},
			se650: {
				id: 'se650',
				label: 'SE-650',
				pgm: this.CHOICES_SWITCH_PGM_700,
				pvw: this.CHOICES_SWITCH_PVW_700,
				key1: this.CHOICES_SWITCH_KEY1_700,
				pip: this.CHOICES_SWITCH_PIP_700,
				dsk1: this.CHOICES_SWITCH_DSK1_700,
				sdi1: this.CHOICES_SWITCH_SDI1_650,
				hdmi1: this.CHOICES_SWITCH_HDMI1_650,
				trans: this.CHOICES_TRANS_700,
				ftb: this.CHOICES_FTB_1200,
				keyer: this.CHOICES_KEYER_700,
				inputs: this.CHOICES_INPUTS_700,
			},

		};

		this.CHOICES_MODEL = Object.values(this.CONFIG_MODEL);
		// Sort alphabetical
		this.CHOICES_MODEL.sort(function (a, b) {
			var x = a.label.toLowerCase();
			var y = b.label.toLowerCase();
			if (x < y) { return -1; }
			if (x > y) { return 1; }
			return 0;
		});

		if (this.config.modelID !== undefined) {
			this.model = this.CONFIG_MODEL[this.config.modelID];
		} else {
			this.config.modelID = 'se1200mu';
			this.model = this.CONFIG_MODEL['se1200mu'];
		}

	}

	actions(system) {
		this.setActions(this.getActions());
	}

	action(action) {
		let cmd;
		let element
		let id = action.action
		let options = action.options;
		let userid = Buffer.alloc(4);
		let pktsize = Buffer.alloc(4);
		let frames = Buffer.alloc(4);
		let cmdsize;
		let name;
		let input = Buffer.alloc(4);
		let name_size = Buffer.alloc(4);
		let input_name_cmd;

		const lf = '\u000a';

		switch (id) {
			case 'switch_pgm':
				element = this.model.pgm.find(element => element.id === options.switchpgm);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_pvw':
				element = this.model.pvw.find(element => element.id === options.switchpvw);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_pip':
				element = this.model.pip.find(element => element.id === options.switchpip);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_key1':
				element = this.model.key1.find(element => element.id === options.switchkey1);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_key2':
				element = this.model.key2.find(element => element.id === options.switchkey2);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_key3':
				element = this.model.key3.find(element => element.id === options.switchkey3);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_key4':
				element = this.model.key4.find(element => element.id === options.switchkey4);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_dsk1':
				element = this.model.dsk1.find(element => element.id === options.switchdsk1);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_dsk2':
				element = this.model.dsk2.find(element => element.id === options.switchdsk2);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_aux1':
				element = this.model.aux1.find(element => element.id === options.switchaux1);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_aux2':
				element = this.model.aux2.find(element => element.id === options.switchaux2);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_aux3':
				element = this.model.aux3.find(element => element.id === options.switchaux3);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_aux4':
				element = this.model.aux4.find(element => element.id === options.switchaux4);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_hdmi1':
				element = this.model.hdmi1.find(element => element.id === options.switchhdmi1);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_hdmi2':
				element = this.model.hdmi2.find(element => element.id === options.switchhdmi2);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_hdmi3':
				element = this.model.hdmi3.find(element => element.id === options.switchhdmi3);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_sdi1':
				element = this.model.sdi1.find(element => element.id === options.switchsdi1);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'switch_sdi2':
				element = this.model.sdi2.find(element => element.id === options.switchsdi2);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'trans':
				element = this.model.trans.find(element => element.id === options.trans);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'ftb':
				element = this.model.ftb.find(element => element.id === options.ftb);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'keyer':
				element = this.model.keyer.find(element => element.id === options.keyer);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'loaduser':
				userid.writeUInt16LE(options.userid, 0);
				cmd = Buffer.from([0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, userid[0], userid[1], 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]);
				break;
			case 'saveuser':
				userid.writeUInt16LE(options.userid, 0);
				cmd = Buffer.from([0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, userid[0], userid[1], 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x02, 0x00, 0x00, 0x00]);
				break;
			case 'streamer':
				element = this.model.streamer.find(element => element.id === options.streamer);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'trans_durations':
				frames.writeUInt32LE(options.frames, 0);
				cmd = Buffer.from([0x01, 0x00, 0x00, 0x00, options.trans, 0x00, 0x07, 0x00, frames[0], frames[1], frames[2], frames[3]]);
				break;
			case 'logo':
				element = this.model.logo.find(element => element.id === options.logo);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'audio':
				element = this.model.audio.find(element => element.id === options.audio);
				if (element !== undefined) {
					cmd = element.cmd;
				}
			case 'audio_src':
				element = this.model.audio_src.find(element => element.id === options.audio_src);
				if (element !== undefined) {
					cmd = element.cmd;
				}
				break;
			case 'send_hex':
				cmd = Buffer.from(options.hex.toString(), "hex");
				break;
			case 'set_input_name':
				name = Buffer.from(options.name.toString(), "utf16le");
				input.writeUInt32LE(options.input, 0);
				//Send only characters for the name size not the number of bytes as it expects 16bit unicode values
				name_size.writeUInt32LE(name.length / 2, 0);
				input_name_cmd = Buffer.from([0x0a, 0x00, 0x00, 0x00, input[0], 0x00, 0x00, 0x00]);
				cmd = Buffer.concat([input_name_cmd, name_size, name]);

				break;
		}

		if (cmd !== undefined) {
			if (this.socket !== undefined && this.socket.connected) {
				//Calculate packet length and prepend
				//Add 4 bytes to include pack size value
				cmdsize = Buffer.byteLength(cmd) + 4;
				pktsize.writeUInt32LE(cmdsize, 0);
				cmd = Buffer.concat([pktsize, cmd]);
				//console.log("Send: ", cmd);

				this.socket.send(cmd);
				//Update input names on change
				if (id == 'set_input_name' || id == 'load_user') {
					if (this.cur_input_request == 0) {
						this.getInputNames(null);
					}
				}

			} else {
				debug('Socket not connected :(');
			}

		}
	}

	// Return config fields for web config
	config_fields() {

		return [{
			type: 'text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'This module will control a Datavideo vision mixer.'
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'IP Address',
			width: 6,
			default: '192.168.1.101',
			regex: this.REGEX_IP
		},
		{
			type: 'dropdown',
			id: 'modelID',
			label: 'Model',
			width: 6,
			choices: this.CHOICES_MODEL,
			default: 'se1200mu'
		}
		]
	}

	// When module gets deleted
	destroy() {
		if (this.socket !== undefined) {
			this.socket.send(this.disconnect_packet);
			this.socket.destroy();
		}
		if (this.socket_realtime !== undefined) {
			this.socket_realtime.send(this.disconnect_packet);
			this.socket_realtime.destroy();
		}
		debug('destroy', this.id);
	}

	init() {
		debug = this.debug;
		log = this.log;
		this.init_feedbacks();
		this.init_variables();
		this.initTCP();
		this.init_presets();
		this.actions();
	}

	processSourceAssignment(fbID, varID, state, choices) {
		this.checkFeedbacks(fbID);
		let element = choices.find(element => element.id === state.toString());
		if (element !== undefined) {
			this.setVariable(varID, element.label);

			let input = this.model.inputs.find(element => element.id === state.toString());
			if (input !== undefined) {
				this.setVariable(varID + '_name', this.input_names[element.id]);
			} else {
				this.setVariable(varID + '_name', element.label);
			}
		}
	}

	getInputNames(inputName) {
		let maxInputs = this.model.inputs.length;
		let input = Buffer.alloc(4);
		let lastInput;

		if (inputName == null) {
			//Grab input 1
			this.socket.send(Buffer.from([0x0c, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00]));
			this.cur_input_request = 2;

		} else if (this.cur_input_request > 1) {
			//request current input name
			lastInput = this.cur_input_request - 1;
			//console.log("input: ", lastInput);
			//console.log("input name:", inputName);
			this.setVariable('in' + lastInput.toString() + '_name', inputName);
			this.input_names[lastInput] = inputName;
			if (this.cur_input_request != 0 && this.cur_input_request <= maxInputs) {
				input.writeInt32LE(this.cur_input_request);
				this.socket.send(Buffer.from([0x0c, 0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00, input[0], 0x00, 0x00, 0x00]));
			}

			if (this.cur_input_request <= maxInputs) {
				this.cur_input_request++;
			} else if (this.cur_input_request > maxInputs) {
				this.cur_input_request = 0;
			}

		}

	}

	initTCP() {
		if (this.socket !== undefined) {
			this.socket.send(this.disconnect_packet);
			this.socket.destroy();
			delete this.socket;
		}

		if (this.socket_realtime !== undefined) {
			this.socket_realtime.send(this.disconnect_packet);
			this.socket_realtime.destroy();
			delete this.socket_realtime;
		}

		if (this.socket_request !== undefined) {
			this.socket_request.destroy();
			delete this.socket_reqest;
		}

		if (this.config.port === undefined) {
			this.config.port = 5005;
		}


		if (this.config.host) {

			//Automatic Port selection
			this.socket_request = new tcp(this.config.host, 5009);

			this.socket_request.on('status_change', (status, message) => {
				this.status(status, message);
			});

			this.socket_request.on('error', (err) => {
				debug('Network error', err);
				this.log('error', 'Network error: ' + err.message);
			});

			this.socket_request.on('connect', () => {
				debug('Connected');
				this.socket_request.send(Buffer.from([0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0xaa, 0x55]));
			});


			this.socket_request.on('data', (buffer) => {
				this.socket_request.destroy();

				this.config.port = buffer.readInt16LE(4);
				//console.log("Available Port ", this.config.port);
				this.config.port_cmd = parseInt(this.config.port) + 1;
				this.socket = new tcp(this.config.host, this.config.port_cmd);
				this.socket_realtime = new tcp(this.config.host, this.config.port);



				this.socket.on('status_change', (status, message) => {
					this.status(status, message);
				});

				this.socket.on('error', (err) => {
					debug('Network error', err);
					this.log('error', 'Network error: ' + err.message);
					//Request new port if the command socket has an error
					this.initTCP();
				});

				this.socket.on('connect', () => {
					debug('Connected');
					this.socket.send(this.null_packet);
					//Get input names
					this.getInputNames(null);
					//Get current audio source
					this.socket.send(this.get_audio_src_packet);
				});
				this.socket_realtime.on('status_change', (status, message) => {
					this.status(status, message);
				});

				this.socket_realtime.on('error', (err) => {
					debug('Network error', err);
					this.log('error', 'Network error: ' + err.message);
				});

				this.socket_realtime.on('connect', () => {
					debug('Connected');
					this.socket_realtime.send(this.null_packet);
				});

				//Command socket data recieve
				this.socket.on('data', (buffer) => {
					let pos;

					//Reply with the null packet
					if (buffer.equals(this.null_packet_cmd)) {
						this.socket.send(this.null_packet_cmd);
					} else if (buffer.equals(this.null_packet)) {
						this.socket.send(this.null_packet);
					} else {
						//console.log('Receive CMD: ', buffer);
						//Input name
						//Slight downside is that the return packet does not included the request input number
						//So I have made a way for it to loop through. No updates are sent to clients when other clients update the name either so we have to manually check it.
						//This is also done when set_input_name action is ran.
						if (this.cur_input_request != 0) {
							pos = buffer.indexOf('03000000', 0, "hex")
							if (pos > -1) {
								let name;
								name = buffer.slice(pos + 8, buffer.length);
								this.getInputNames(name.toString('utf16le'));

							}
						}
						//Grab names again on this packet
						pos = buffer.indexOf('08000000010000000800000001000000', 0, "hex")
						if (pos > -1) {
							if (this.cur_input_request == 0) {
								this.getInputNames(null);
							}

						}

						//Audio Source
						if (!this.config.modelID != 'se650' && !this.config.modelID != 'se700') {
							pos = buffer.indexOf('0100000000000600', 0, "hex")
							if (pos > -1) {
								this.audio_src = buffer.readInt16LE(pos + 8);
								this.processSourceAssignment('audio_src', 'audio_src', this.audio_src, this.model.audio_src);
							}
						}

					}

				});

				this.socket_realtime.on('data', (buffer) => {
					//Send the null packet when we recieve a packet
					this.socket_realtime.send(this.null_packet);

					//If it's not a null packet check what is inside
					if (!buffer.equals(this.null_packet) && !buffer.equals(this.null_packet_cmd) && !buffer.equals(this.filter_packet)) {
						//	console.log('Receive Realtime: ', buffer);
						let pos;
						let element;

						//User memory change
						pos = buffer.indexOf('00000800', 0, "hex")
						if (pos > -1) {
							this.curr_user = buffer.readInt32LE(pos + 4);

							this.checkFeedbacks('curr_user');
							this.setVariable('curr_user', this.curr_user);
							//Update input names because user has changed
							if (this.cur_input_request == 0) {
								this.getInputNames(null);
							}

							//Request the audio src on user change
							this.socket.send(this.get_audio_src_packet);
						}

						//Update input names on user switch
						//pos = buffer.indexOf('0000304e1300', 0, "hex")
						//if (pos > -1) {
						//	if(this.cur_input_request == 0){
						//		this.getInputNames(null);
						//	}
						//}


						//All the feedback handling is below
						//3200 PGM and PREVIEW BUS
						if (this.config.modelID == 'se3200') {
							pos = buffer.indexOf('94000200', 0, "hex")
							if (pos > -1) {
								this.pgm_in_src = buffer[pos + 4];
								this.processSourceAssignment('pgm_in', 'pgm_in', this.pgm_in_src, this.model.pgm);
							}
							pos = buffer.indexOf('95000200', 0, "hex")
							if (pos > -1) {
								//console.log('PVW to', buffer[pos + 4]);
								this.pvw_in_src = buffer[pos + 4];
								this.processSourceAssignment('pvw_in', 'pvw_in', this.pvw_in_src, this.model.pvw);
							}
						} else {
							//1200,700,650 PGM AND PREVIEW INPUT
							pos = buffer.indexOf('56000200', 0, "hex")
							if (pos > -1) {
								//console.log('PGM to', buffer[pos + 4]);
								this.pgm_in_src = buffer[pos + 4];
								this.processSourceAssignment('pgm_in', 'pgm_in', this.pgm_in_src, this.model.pgm);

							}
							pos = buffer.indexOf('57000200', 0, "hex")
							if (pos > -1) {
								//console.log('PVW to', buffer[pos + 4]);
								this.pvw_in_src = buffer[pos + 4];
								this.processSourceAssignment('pvw_in', 'pvw_in', this.pvw_in_src, this.model.pvw);
							}
						}

						//ALL MODEL KEY 1
						pos = buffer.indexOf('14000200', 0, "hex")
						if (pos > -1) {
							//console.log('KEY 1 to', buffer[pos + 4]);
							this.key1_in_src = buffer[pos + 4];
							this.processSourceAssignment('key1_in', 'key1_in', this.key1_in_src, this.model.key1);

						}
						//ALL MODEL KEY 2/PIP
						pos = buffer.indexOf('32000200', 0, "hex")
						if (pos > -1) {

							this.key2_in_src = buffer[pos + 4];
							//console.log('KEY 2 to', buffer[pos + 4]);
							if (this.config.modelID != 'se700' && this.config.modelID != 'se650') {
								this.key2_in_src = buffer[pos + 4];
								this.processSourceAssignment('key2_in', 'key2_in', this.key2_in_src, this.model.key2);
							} else {
								//console.log('PIP to', buffer[pos + 4]);
								this.pip_in_src = buffer[pos + 4];
								this.processSourceAssignment('pip_in', 'pip_in', this.pip_in_src, this.model.pip);
							}
						}
						//DSK 1 FOR SE1200, SE700 ETC
						if (!this.config.modelID != 'se3200') {
							pos = buffer.indexOf('5c000200', 0, "hex")
							if (pos > -1) {
								//console.log('DSK 1 to', buffer[pos + 4]);
								this.dsk1_in_src = buffer[pos + 4];
								this.processSourceAssignment('dsk1_in', 'dsk1_in', this.dsk1_in_src, this.model.dsk1);
							}
							//DSK 2 FOR SE1200, SE700 ETC
							pos = buffer.indexOf('6e000200', 0, "hex")
							if (pos > -1) {
								//console.log('DSK 2 to', buffer[pos + 4]);
								this.dsk2_in_src = buffer[pos + 4];
								this.processSourceAssignment('dsk2_in', 'dsk2_in', this.dsk2_in_src, this.model.dsk2);

							}
						} else {
							//3200 DSK1
							pos = buffer.indexOf('9a000200', 0, "hex")
							if (pos > -1) {
								//console.log('DSK 1 to', buffer[pos + 4]);
								this.dsk1_in_src = buffer[pos + 4];
								this.processSourceAssignment('dsk1_in', 'dsk1_in', this.dsk1_in_src, this.model.dsk1);
							}


							//3200 DSK2
							pos = buffer.indexOf('ac000200', 0, "hex")
							if (pos > -1) {
								//console.log('DSK 2 to', buffer[pos + 4]);
								this.dsk2_in_src = buffer[pos + 4];
								this.processSourceAssignment('dsk2_in', 'dsk2_in', this.dsk2_in_src, this.model.dsk2);
							}

							//3200 KEY 3
							pos = buffer.indexOf('50000200', 0, "hex")
							if (pos > -1) {
								//console.log('KEY 3 to', buffer[pos + 4]);
								this.key3_in_src = buffer[pos + 4];
								this.processSourceAssignment('key3_in', 'key3_in', this.key3_in_src, this.model.key3);
							}
							//3200 KEY 4
							pos = buffer.indexOf('6e000200', 0, "hex")
							if (pos > -1) {
								//console.log('KEY 4 to', buffer[pos + 4]);
								this.key4_in_src = buffer[pos + 4];
								this.processSourceAssignment('key4_in', 'key4_in', this.key4_in_src, this.model.key4);
							}
							//3200 Aux1
							pos = buffer.indexOf('00000500', 0, "hex")
							if (pos > -1) {
								//console.log('AUX 1 to', buffer[pos + 4]);
								this.aux1_in_src = buffer[pos + 4];
								this.processSourceAssignment('aux1_in', 'aux1_in', this.aux1_in_src, this.model.aux1);
							}
							//3200 Aux2
							pos = buffer.indexOf('01000500', 0, "hex")
							if (pos > -1) {
								//console.log('AUX 2 to', buffer[pos + 4]);
								this.aux2_in_src = buffer[pos + 4];
								this.processSourceAssignment('aux2_in', 'aux2_in', this.aux2_in_src, this.model.aux2);
							}
							//3200 Aux3
							pos = buffer.indexOf('02000500', 0, "hex")
							if (pos > -1) {
								//console.log('AUX 3 to', buffer[pos + 4]);
								this.aux3_in_src = buffer[pos + 4];
								this.processSourceAssignment('aux3_in', 'aux3_in', this.aux3_in_src, this.model.aux3);

							}
							//3200 Aux4
							pos = buffer.indexOf('03000500', 0, "hex")
							if (pos > -1) {
								//console.log('AUX 4 to', buffer[pos + 4]);
								this.aux4_in_src = buffer[pos + 4];
								this.processSourceAssignment('aux4_in', 'aux4_in', this.aux4_in_src, this.model.aux4);

							}
						}
						//GET CURRENT TRANS
						//FOR SE3200
						if (this.config.modelID == 'se3200') {
							pos = buffer.indexOf('96000200', 0, "hex")
							if (pos > -1) {
								this.trans_current = buffer[pos + 4];
								this.checkFeedbacks('trans_current');
							}
						} else {
							//FOR OTHERS
							pos = buffer.indexOf('58000200', 0, "hex")
							if (pos > -1) {
								this.trans_current = buffer[pos + 4];
								this.checkFeedbacks('trans_current');
							}
						}

						//GET ME/DSK/FTB FRAME DURATION
						//ME
						pos = buffer.indexOf('03000700', 0, "hex")
						if (pos > -1) {
							this.me_dur = buffer.readInt32LE(pos + 4);
							this.setVariable('me_dur', this.me_dur);
						}
						//DSK
						pos = buffer.indexOf('08000700', 0, "hex")
						if (pos > -1) {
							this.dsk_dur = buffer.readInt32LE(pos + 4);
							this.setVariable('dsk_dur', this.dsk_dur);
						}
						//FTB
						pos = buffer.indexOf('0d000700', 0, "hex")
						if (pos > -1) {
							this.ftb_dur = buffer.readInt32LE(pos + 4);
							this.setVariable('ftb_dur', this.ftb_dur);
						}

						////BUTTON STATES/////
						if (this.config.modelID != 'se3200') {
							//Button states for 1200 700 650
							//Key 1 State PGM
							pos = buffer.indexOf('13000200', 0, "hex")
							if (pos > -1) {
								this.key1_pgm_state = buffer.readInt16LE(pos + 4);
								this.setVariable('key1_pgm_state', this.key1_pgm_state);
								this.checkFeedbacks('key1_in');
							}
							//Key 1 State PVW

							pos = buffer.indexOf('50000200', 0, "hex")
							if (pos > -1) {
								this.key1_pvw_state = buffer.readInt16LE(pos + 4);
								this.setVariable('key1_pvw_state', this.key1_pvw_state);
							}

							//Key 2 State PGM / PIP
							pos = buffer.indexOf('31000200', 0, "hex")
							if (pos > -1) {
								if (this.config.modelID == 'se650' || this.config.modelID == 'se700') {
									this.pip_pgm_state = buffer.readInt16LE(pos + 4);
									this.setVariable('pip_pgm_state', this.pip_pgm_state);
									this.checkFeedbacks('pip_in');
								} else {
									this.key2_pgm_state = buffer.readInt16LE(pos + 4);
									this.setVariable('key2_pgm_state', this.key2_pgm_state);
									this.checkFeedbacks('key2_in');
								}
							}
							//Key 2 State PVW / PIP
							pos = buffer.indexOf('51000200', 0, "hex")
							if (pos > -1) {
								if (this.config.modelID == 'se650' || this.config.modelID == 'se700') {
									this.pip_pvw_state = buffer.readInt16LE(pos + 4);
									this.setVariable('pip_pvw_state', this.pip_pvw_state);
								}else{
									this.key2_pvw_state = buffer.readInt16LE(pos + 4);
									this.setVariable('key2_pvw_state', this.key2_pvw_state);
								}

							}

							//DSK 1 State PGM
							pos = buffer.indexOf('5b000200', 0, "hex")
							if (pos > -1) {
								this.dsk1_pgm_state = buffer.readInt16LE(pos + 4);
								this.setVariable('dsk1_pgm_state', this.dsk1_pgm_state);
								this.checkFeedbacks('dsk1_in');
							}
							//DSK 1 State PVW
							pos = buffer.indexOf('7f000200', 0, "hex")
							if (pos > -1) {
								this.dsk1_pvw_state = buffer.readInt16LE(pos + 4);
								this.setVariable('dsk1_pvw_state', this.dsk1_pvw_state);
							}

							//DSK 2 State PGM
							pos = buffer.indexOf('6d000200', 0, "hex")
							if (pos > -1) {
								this.dsk2_pgm_state = buffer.readInt16LE(pos + 4);
								this.setVariable('dsk2_pgm_state', this.dsk2_pgm_state);
								this.checkFeedbacks('dsk2_in');
							}
							//DSK 2 State PVW
							pos = buffer.indexOf('80000200', 0, "hex")
							if (pos > -1) {
								this.dsk2_pvw_state = buffer.readInt16LE(pos + 4);
								this.setVariable('dsk2_pvw_state', this.dsk2_pvw_state);
							}
						} else {
							//Button states for 3200
							//Key 1 State PGM
							pos = buffer.indexOf('13000200', 0, "hex")
							if (pos > -1) {
								this.key1_pgm_state = buffer.readInt16LE(pos + 4);
								this.setVariable('key1_pgm_state', this.key1_pgm_state);
								this.checkFeedbacks('key1_in');
							}
							//Key 1 State PVW

							pos = buffer.indexOf('8c000200', 0, "hex")
							if (pos > -1) {
								this.key1_pvw_state = buffer.readInt16LE(pos + 4);
								this.setVariable('key1_pvw_state', this.key1_pvw_state);
							}

							//Key 2 State PGM
							pos = buffer.indexOf('31000200', 0, "hex")
							if (pos > -1) {
								this.key2_pgm_state = buffer.readInt16LE(pos + 4);
								this.setVariable('key2_pgm_state', this.key2_pgm_state);
								this.checkFeedbacks('key2_in');
							}
							//Key 2 State PVW
							pos = buffer.indexOf('8d000200', 0, "hex")
							if (pos > -1) {
								this.key2_pvw_state = buffer.readInt16LE(pos + 4);
								this.setVariable('key2_pvw_state', this.key2_pvw_state);
							}

							//Key 3 State PGM
							pos = buffer.indexOf('4f000200', 0, "hex")
							if (pos > -1) {
								this.key3_pgm_state = buffer.readInt16LE(pos + 4);
								this.setVariable('key3_pgm_state', this.key3_pgm_state);
								this.checkFeedbacks('key3_in');
							}
							//Key 3 State PVW
							pos = buffer.indexOf('8e000200', 0, "hex")
							if (pos > -1) {
								this.key3_pvw_state = buffer.readInt16LE(pos + 4);
								this.setVariable('key3_pvw_state', this.key3_pvw_state);
							}

							//Key 4 State PGM
							pos = buffer.indexOf('6d000200', 0, "hex")
							if (pos > -1) {
								this.key4_pgm_state = buffer.readInt16LE(pos + 4);
								this.setVariable('key4_pgm_state', this.key4_pgm_state);
								this.checkFeedbacks('key4_in');
							}
							//Key 4 State PVW
							pos = buffer.indexOf('8f000200', 0, "hex")
							if (pos > -1) {
								this.key4_pvw_state = buffer.readInt16LE(pos + 4);
								this.setVariable('key4_pvw_state', this.key4_pvw_state);
							}
							//DSK 1 State PGM
							pos = buffer.indexOf('5b000200', 0, "hex")
							if (pos > -1) {
								this.dsk1_pgm_state = buffer.readInt16LE(pos + 4);
								this.setVariable('dsk1_pgm_state', this.dsk1_pgm_state);
								this.checkFeedbacks('dsk1_in');
							}
							//DSK 1 State PVW
							pos = buffer.indexOf('7f000200', 0, "hex")
							if (pos > -1) {
								this.dsk1_pvw_state = buffer.readInt16LE(pos + 4);
								this.setVariable('dsk1_pvw_state', this.dsk1_pvw_state);
							}

							//DSK 2 State PGM
							pos = buffer.indexOf('6d000200', 0, "hex")
							if (pos > -1) {
								this.dsk2_pgm_state = buffer.readInt16LE(pos + 4);
								this.setVariable('dsk2_pgm_state', this.dsk2_pgm_state);
								this.checkFeedbacks('dsk2_in');
							}
							//DSK 2 State PVW
							pos = buffer.indexOf('80000200', 0, "hex")
							if (pos > -1) {
								this.dsk2_pvw_state = buffer.readInt16LE(pos + 4);
								this.setVariable('dsk2_pvw_state', this.dsk2_pvw_state);
							}
						}
						////BUTTON STATES/////

						//TBAR STATE

						pos = buffer.indexOf('01000200', 0, "hex")
						if (pos > -1) {
							this.tbar_state = buffer.readInt32LE(pos + 4);
							//console.log("tbar:", this.tbar_state);
							this.checkFeedbacks('tbar_state');
							this.checkFeedbacks('pvw_in')
						}
						//DSK Auto T Bar
						pos = buffer.indexOf('81000200', 0, "hex")
						if (pos > -1) {
							this.dsk_tbar_state = buffer.readInt32LE(pos + 4);
							//console.log("tbar:", this.tbar_state);
							this.checkFeedbacks('dsk_tbar_state');
						}

						//Audio Source
						if (!this.config.modelID != 'se650' && !this.config.modelID != 'se700') {
							//Only on whole packet because I'm getting false hits.
							//Currently it doesn't seem to send audio source on connect
							pos = buffer.indexOf('100000000000000000000600', 0, "hex")
							if (pos > -1) {
								this.audio_src = buffer.readInt16LE(pos + 12);
								this.processSourceAssignment('audio_src', 'audio_src', this.audio_src, this.model.audio_src);
							}
						}

					}
				});

			});

		}
	}


	updateConfig(config) {
		var resetConnection = false;

		if (this.config.label != config.label || this.config.host != config.host || this.config.port != config.port || this.config.modelID != config.modelID) {
			resetConnection = true;
		}

		this.config = config;
		this.model = this.CONFIG_MODEL[config.modelID];

		if (resetConnection === true || this.socket === undefined) {
			this.actions();
			this.init_variables();
			this.init_feedbacks();
			this.initTCP();
			this.init_presets();
			console.log('Connection reset after update.');
		}
	}

	init_feedbacks() {
		this.setFeedbackDefinitions(this.getFeedbacks());
	}

	init_presets() {
		this.setPresetDefinitions(this.getPresets());
	}

	init_variables() {
		this.setVariableDefinitions(this.getVariables());
	};

}


exports = module.exports = instance;