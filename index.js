var tcp           = require('../../tcp');
var udp           = require('../../udp');
var instance_skel = require('../../instance_skel');
var debug;
var log;

function instance(system, id, config) {
	var self = this;

	// super-constructor
	instance_skel.apply(this, arguments);

	self.actions(); // export actions
	self.init_presets();

	return self;
}

instance.prototype.updateConfig = function(config) {
	var self = this;
	self.init_presets();

	if (self.udp !== undefined) {
		self.udp.destroy();
		delete self.udp;
	}

	if (self.socket !== undefined) {
		self.socket.destroy();
		delete self.socket;
	}

	self.config = config;

	self.init_tcp();


};

instance.prototype.init = function() {
	var self = this;

	debug = self.debug;
	log = self.log;
	self.init_presets();

		self.init_tcp();

};


instance.prototype.init_tcp = function() {
	var self = this;

	if (self.socket !== undefined) {
		self.socket.destroy();
		delete self.socket;
	}

	self.status(self.STATE_WARNING, 'Connecting');

	if (self.config.host) {
		self.socket = new tcp(self.config.host, self.config.port);

		self.socket.on('status_change', function (status, message) {
			self.status(status, message);
		});

		self.socket.on('error', function (err) {
			debug("Network error", err);
			self.status(self.STATE_ERROR, err);
			self.log('error',"Network error: " + err.message);
		});

		self.socket.on('connect', function () {
			self.status(self.STATE_OK);
			debug("Connected");
		})

		self.socket.on('data', function (data) {});
	}
};


// Return config fields for web config
instance.prototype.config_fields = function () {
	var self = this;

	return [
		{
			type: 'text',
			id: 'info',
			label: 'Information',
			width: 12,
			value: ''	
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'Target IP',
			width: 6,
			regex: self.REGEX_IP
		},
		{
			type: 'textinput',
			id: 'port',
			label: 'Target Port',
			width: 2,
			default: 5005,
			regex: self.REGEX_PORT
        }
	]
};

// When module gets deleted
instance.prototype.destroy = function() {
	var self = this;

	if (self.socket !== undefined) {
		self.socket.destroy();
	}

	if (self.udp !== undefined) {
		self.udp.destroy();
	}

	debug("destroy", self.id);;
};

instance.prototype.init_presets = function () {
	var self = this;
	var presets = [];

	self.setPresetDefinitions(presets);
}

instance.prototype.actions = function(system) {
	var self = this;

	self.system.emit('instance_actions', self.id, {

			'select_pgm': {
				label: 'Switch PGM Bus',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'id_hex',
						tooltip: 'Select desired program input.',
						choices: [
							{ id:'10000000000000005600020000000000', label:'Black' },
							{ id:'10000000000000005600020001000000', label:'In 1' },
							{ id:'10000000000000005600020002000000', label:'In 2' },
							{ id:'10000000000000005600020003000000', label:'In 3' },
							{ id:'10000000000000005600020004000000', label:'In 4' },
							{ id:'10000000000000005600020005000000', label:'In 5' },
							{ id:'10000000000000005600020006000000', label:'In 6' },
							{ id:'10000000000000005600020011000000', label:'Matte' },
							{ id:'10000000000000005600020012000000', label:'Bars' },
						]
					}
				]
			},
			'select_pvw': {
				label: 'Switch PVW Bus',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'id_hex',
						tooltip: 'Select desired preview input.',
						choices: [
							{ id:'10000000000000005700020000000000', label:'Black' },
							{ id:'10000000000000005700020001000000', label:'In 1' },
							{ id:'10000000000000005700020002000000', label:'In 2' },
							{ id:'10000000000000005700020003000000', label:'In 3' },
							{ id:'10000000000000005700020004000000', label:'In 4' },
							{ id:'10000000000000005700020005000000', label:'In 5' },
							{ id:'10000000000000005700020006000000', label:'In 6' },
							{ id:'10000000000000005700020011000000', label:'Matte' },
							{ id:'10000000000000005700020012000000', label:'Bars' },
						]
					}
				]
			},
			'key_1_aux': {
				label: 'Switch Key 1 Aux Bus',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'id_hex',
						tooltip: 'Select desired Key 1 Aux input.',
						choices: [
							{ id:'10000000000000001400020000000000', label:'Black' },
							{ id:'10000000000000001400020001000000', label:'In 1' },
							{ id:'10000000000000001400020002000000', label:'In 2' },
							{ id:'10000000000000001400020003000000', label:'In 3' },
							{ id:'10000000000000001400020004000000', label:'In 4' },
							{ id:'10000000000000001400020005000000', label:'In 5' },
							{ id:'10000000000000001400020006000000', label:'In 6' },
							{ id:'10000000000000001400020011000000', label:'Matte' },
							{ id:'10000000000000001400020012000000', label:'Bars' },
						]
					}
				]
			},
			'key_2_aux': {
				label: 'Switch Key 2 Aux Bus',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'id_hex',
						tooltip: 'Select desired Key 2 Aux input.',
						choices: [
							{ id:'10000000000000003200020000000000', label:'Black' },
							{ id:'10000000000000003200020001000000', label:'In 1' },
							{ id:'10000000000000003200020002000000', label:'In 2' },
							{ id:'10000000000000003200020003000000', label:'In 3' },
							{ id:'10000000000000003200020004000000', label:'In 4' },
							{ id:'10000000000000003200020005000000', label:'In 5' },
							{ id:'10000000000000003200020006000000', label:'In 6' },
							{ id:'10000000000000003200020011000000', label:'Matte' },
							{ id:'10000000000000003200020012000000', label:'Bars' },
						]
					}
				]
			},
			'dsk_1_aux': {
				label: 'Switch DSK 1 Aux Bus',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'id_hex',
						tooltip: 'Select desired DSK 1 Aux input.',
						choices: [
							{ id:'10000000000000005c00020000000000', label:'Black' },
							{ id:'10000000000000005c00020001000000', label:'In 1' },
							{ id:'10000000000000005c00020002000000', label:'In 2' },
							{ id:'10000000000000005c00020003000000', label:'In 3' },
							{ id:'10000000000000005c00020004000000', label:'In 4' },
							{ id:'10000000000000005c00020005000000', label:'In 5' },
							{ id:'10000000000000005c00020006000000', label:'In 6' },
							{ id:'10000000000000005c00020011000000', label:'Matte' },
							{ id:'10000000000000005c00020012000000', label:'Bars' },
						]
					}
				]
			},
			'dsk_2_aux': {
				label: 'Switch DSK 2 Aux Bus',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'id_hex',
						tooltip: 'Select desired DSK 2 Aux input.',
						choices: [
							{ id:'10000000000000006e00020000000000', label:'Black' },
							{ id:'10000000000000006e00020001000000', label:'In 1' },
							{ id:'10000000000000006e00020002000000', label:'In 2' },
							{ id:'10000000000000006e00020003000000', label:'In 3' },
							{ id:'10000000000000006e00020004000000', label:'In 4' },
							{ id:'10000000000000006e00020005000000', label:'In 5' },
							{ id:'10000000000000006e00020006000000', label:'In 6' },
							{ id:'10000000000000006e00020011000000', label:'Matte' },
							{ id:'10000000000000006e00020012000000', label:'Bars' },
						]
					}
				]
			},
			'trans': {
				label: 'Transition Controls',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'id_hex',
						tooltip: 'Select desired transition.',
						choices: [
							{ id:'10000000000000000000070001000000', label:'Auto' },
							{ id:'10000000000000000000070005000000', label:'Cut' },
							{ id:'10000000000000005800020000000000', label:'Mix' },
							{ id:'10000000000000005800020001000000', label:'Wipe' },
							{ id:'10000000000000005800020002000000', label:'Clip' },
							{ id:'10000000000000000500070001000000', label:'DSK Auto' },
							{ id:'10000000000000000500070005000000', label:'DSK Cut' },
							{ id:'10000000000000005500020001000000', label:'NORM REV ON' },
							{ id:'10000000000000005500020000000000', label:'NORM REV OFF' },
							{ id:'10000000000000005400020001000000', label:'REV ON' },
							{ id:'10000000000000005400020000000000', label:'REV OFF' },
							{ id:'10000000000000005300020001000000', label:'TRANS PVW ON' },
							{ id:'10000000000000005300020000000000', label:'TRANS PVW OFF' },
							{ id:'10000000000000005200020001000000', label:'KEY PRIORITY ON' },
							{ id:'10000000000000005200020000000000', label:'KEY PRIORITY OFF' },

						]
					}
				]
			},
			'ftb': {
				label: 'Fade to Black ',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'id_hex',
						tooltip: '',
						choices: [
							{ id:'10000000000000008500020001000000', label:'FTB ENABLE ON' },
							{ id:'180000000000000085000200000000000a00070000000000', label:'FTB ENABLE OFF' },
							{ id:'10000000000000000a00070001000000', label:'FTB ON' },
							{ id:'10000000000000000a00070001000000', label:'FTB OFF' },
						]
					}
				]
			},
			'key': {
				label: 'Keyer Controls',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'id_hex',
						tooltip: '',
						choices: [
							{ id:'18000000000000005b000200010000007f00020001000000', label:'DSK 1 PGM ON' },
							{ id:'18000000000000005b000200000000007f00020000000000', label:'DSK 1 PGM OFF' },
							{ id:'10000000000000007f00020001000000', label:'DSK 1 PVW ON' },
							{ id:'10000000000000007f00020000000000', label:'DSK 1 PVW OFF' },
							
							{ id:'18000000000000006d000200010000008000020001000000', label:'DSK 2 PGM ON' },
							{ id:'18000000000000006d000200000000008000020000000000', label:'DSK 2 PGM OFF' },
							{ id:'10000000000000008000020001000000', label:'DSK 2 PVW ON' },
							{ id:'10000000000000008000020000000000', label:'DSK 2 PVW OFF' },
							
							{ id:'180000000000000013000200010000005000020001000000', label:'KEY 1 PGM ON' },
							{ id:'180000000000000013000200000000005000020000000000', label:'KEY 1 PGM OFF' },
							{ id:'10000000000000005000020001000000', label:'KEY 1 PVW ON' },
							{ id:'10000000000000005000020000000000', label:'KEY 1 PVW OFF' },
							
							{ id:'180000000000000031000200010000005100020001000000', label:'KEY 2 PGM ON' },
							{ id:'180000000000000031000200000000005100020000000000', label:'KEY 2 PGM OFF' },
							{ id:'10000000000000005100020001000000', label:'KEY 2 PVW ON' },
							{ id:'10000000000000005100020000000000', label:'KEY 2 PVW OFF' },
 
						]
						
					}
				]
			},
			'user': {
				label: 'Load User',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'id_hex',
						tooltip: '',
						choices: [
							{ id:'180000000000000000000800010000000100080001000000', label:'User 1' },
							{ id:'180000000000000000000800020000000100080001000000', label:'User 2' },
							{ id:'180000000000000000000800030000000100080001000000', label:'User 3' },
							{ id:'180000000000000000000800040000000100080001000000', label:'User 4' },
							{ id:'180000000000000000000800050000000100080001000000', label:'User 5' },
							{ id:'180000000000000000000800060000000100080001000000', label:'User 6' },
							{ id:'180000000000000000000800070000000100080001000000', label:'User 7' },
							{ id:'180000000000000000000800080000000100080001000000', label:'User 8' },
							{ id:'180000000000000000000800090000000100080001000000', label:'User 9' },
 
						]
						
					}
				]
			},
			'streamer': {
				label: 'Streamer',
				options: [
					{
						type: 'dropdown',
						label: 'Input',
						id: 'id_hex',
						tooltip: '',
						choices: [
							{ id:'100000000f0000000100000000000000', label:'Streamer Start' },
							{ id:'100000000f0000000200000000000000', label:'Streamer Stop' },
							{ id:'100000000000000002000c0000000000', label:'Full' },
							{ id:'100000000000000002000c0001000000', label:'Half' },
							{ id:'100000000000000002000c0002000000', label:'Quarter' },
							{ id:'100000000000000002000c0003000000', label:'Sixth' },
						]
					}
				]
			},
			'custom': {
				label: 'Custom',
				options: [
					{
						type: 'textinput',
						label: 'Input',
						id: 'id_hex',	
					
					}
				]
			},
	}
	);
}

instance.prototype.action = function(action) {
	var self = this;
	var cmd
	var opt = action.options

	cmd = Buffer.from(action.options.id_hex.toString(), "hex");


		if (cmd !== undefined) {

			debug('sending ',cmd,"to",self.config.host);

			if (self.socket !== undefined && self.socket.connected) {
				self.socket.send(cmd);
			}
			else {
				debug('Socket not connected :(');
			}
		}
	

}

instance_skel.extendedBy(instance);
exports = module.exports = instance;
