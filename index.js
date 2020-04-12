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
        this.disconnect_packet = Buffer.from([0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x10, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]);

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
        this.dsk1_pgm_state;
        this.dsk1_pvw_state;
        this.trans_current;
        this.tbar_state;
        this.dsk_tbar_state;
        this.audio_src;

        Object.assign(this, {...actions});
        Object.assign(this, {...presets});
        Object.assign(this, {...feedbacks});
        Object.assign(this, {...variables});
        Object.assign(this, {...choices});

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
                userid.writeUInt32LE(options.userid, 0);
                cmd = Buffer.from([0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, userid[0], userid[1], 0x00, 0x00, 0x01, 0x00, 0x08, 0x00, 0x01, 0x00, 0x00, 0x00]);
                break;
            case 'saveuser':
                uuserid.writeUInt32LE(options.userid, 0);
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
        }

        if (cmd !== undefined) {
            if (this.socket !== undefined && this.socket.connected) {
                //Calculate packet length and prepend
                //Add 4 bytes to include pack size value
                cmdsize = Buffer.byteLength(cmd) + 4;
                pktsize.writeUInt32LE(cmdsize, 0);
                cmd = Buffer.concat([pktsize, cmd], cmdsize);
                //console.log("Send: ", cmd);
                this.socket.send(cmd);
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
            value: 'This module will control a Datavideo vision mixer. Port 5001 can be used if a physical control panel is not connected.'
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
            id: 'port',
            label: 'Port',
            width: 4,
            choices: this.CHOICES_PORT,
            default: '5005',
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

        if (this.config.port === undefined) {
            this.config.port = 5005;
        }

        if (this.config.host) {
            this.config.port_cmd = parseInt(this.config.port) + 1;
            this.socket = new tcp(this.config.host, this.config.port_cmd);
            this.socket_realtime = new tcp(this.config.host, this.config.port);

            this.socket.on('status_change', (status, message) => {
                this.status(status, message);
            });

            this.socket.on('error', (err) => {
                debug('Network error', err);
                this.log('error', 'Network error: ' + err.message);
            });

            this.socket.on('connect', () => {
                debug('Connected');
                this.socket.send(this.null_packet);
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

            this.socket_realtime.on('data', (buffer) => {
                //Send the null packet when we recieve a packet
                this.socket_realtime.send(this.null_packet);

                //If it's not a null packet check what is inside
                if (!buffer.equals(this.null_packet) && !buffer.equals(this.null_packet_cmd)) {
                //    console.log('Receive Realtime: ', buffer);
                    let pos;
                    let element;

                    //All the feedback handling is below
                    //3200 PGM and PREVIEW BUS
                    if (this.config.modelID == 'se3200') {
                        pos = buffer.indexOf('94000200', 0, "hex")
                        if (pos > -1) {
                            //console.log('PGM to', buffer[pos + 4]);
                            this.pgm_in_src = buffer[pos + 4];
                            this.checkFeedbacks('pgm_in');
                            element = this.model.pgm.find(element => element.id === this.pgm_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('pgm_in', element.label);
                            }
                        }
                        pos = buffer.indexOf('95000200', 0, "hex")
                        if (pos > -1) {
                            //console.log('PVW to', buffer[pos + 4]);
                            this.pvw_in_src = buffer[pos + 4];
                            this.checkFeedbacks('pvw_in');
                            element = this.model.pvw.find(element => element.id === this.pvw_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('pvw_in', element.label);
                            }
                        }
                    } else {
                        //1200,700,650 PGM AND PREVIEW INPUT
                        pos = buffer.indexOf('56000200', 0, "hex")
                        if (pos > -1) {
                            //console.log('PGM to', buffer[pos + 4]);
                            this.pgm_in_src = buffer[pos + 4];
                            this.checkFeedbacks('pgm_in');
                            element = this.model.pgm.find(element => element.id === this.pgm_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('pgm_in', element.label);
                            }

                        }
                        pos = buffer.indexOf('57000200', 0, "hex")
                        if (pos > -1) {
                            //console.log('PVW to', buffer[pos + 4]);
                            this.pvw_in_src = buffer[pos + 4];
                            this.checkFeedbacks('pvw_in');
                            element = this.model.pvw.find(element => element.id === this.pvw_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('pvw_in', element.label);
                            }
                        }
                    }
                    //ALL MODEL KEY 1
                    pos = buffer.indexOf('14000200', 0, "hex")
                    if (pos > -1) {
                        //console.log('KEY 1 to', buffer[pos + 4]);
                        this.key1_in_src = buffer[pos + 4];
                        this.checkFeedbacks('key1_in');
                        element = this.model.key1.find(element => element.id === this.key1_in_src.toString());
                        if (element !== undefined) {
                            this.setVariable('key1_in', element.label);
                        }
                    }
                    //ALL MODEL KEY 2/PIP
                    pos = buffer.indexOf('32000200', 0, "hex")
                    if (pos > -1) {

                        this.key2_in_src = buffer[pos + 4];
                        //console.log('KEY 2 to', buffer[pos + 4]);
                        if (this.config.modelID != 'se700' && this.config.modelID != 'se650') {
                            this.key2_in_src = buffer[pos + 4];
                            this.checkFeedbacks('key2_in');
                            element = this.model.key2.find(element => element.id === this.key2_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('key2_in', element.label);
                            }
                        } else {
                            //console.log('PIP to', buffer[pos + 4]);
                            this.pip_in_src = buffer[pos + 4];
                            this.checkFeedbacks('pip_in');
                            element = this.model.pip.find(element => element.id === this.pip_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('pip_in', element.label);
                            }
                        }
                    }
                    //DSK 1 FOR SE1200, SE700 ETC
                    if (!this.config.modelID != 'se3200') {
                        pos = buffer.indexOf('5c000200', 0, "hex")
                        if (pos > -1) {
                            //console.log('DSK 1 to', buffer[pos + 4]);
                            this.dsk1_in_src = buffer[pos + 4];
                            this.checkFeedbacks('dsk1_in');
                            element = this.model.dsk1.find(element => element.id === this.dsk1_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('dsk1_in', element.label);
                            }
                        }
                        //DSK 2 FOR SE1200, SE700 ETC
                        pos = buffer.indexOf('6e000200', 0, "hex")
                        if (pos > -1) {
                            //console.log('DSK 2 to', buffer[pos + 4]);
                            this.dsk2_in_src = buffer[pos + 4];
                            this.checkFeedbacks('dsk2_in');
                            element = this.model.dsk2.find(element => element.id === this.dsk2_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('dsk2_in', element.label);
                            }
                        }
                    } else {
                        //3200 DSK1
                        pos = buffer.indexOf('9a000200', 0, "hex")
                        if (pos > -1) {
                            //console.log('DSK 1 to', buffer[pos + 4]);
                            this.dsk1_in_src = buffer[pos + 4];
                            this.checkFeedbacks('dsk1_in');
                            element = this.model.dsk1.find(element => element.id === this.dsk1_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('dsk1_in', element.label);
                            }
                        }


                        //3200 DSK2
                        pos = buffer.indexOf('ac000200', 0, "hex")
                        if (pos > -1) {
                            //console.log('DSK 2 to', buffer[pos + 4]);
                            this.dsk2_in_src = buffer[pos + 4];
                            this.checkFeedbacks('dsk2_in');
                            element = this.model.dsk2.find(element => element.id === this.dsk2_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('dsk2_in', element.label);
                            }
                        }

                        //3200 KEY 3
                        pos = buffer.indexOf('50000200', 0, "hex")
                        if (pos > -1) {
                            //console.log('KEY 3 to', buffer[pos + 4]);
                            this.key3_in_src = buffer[pos + 4];
                            this.checkFeedbacks('key3_in');
                            element = this.model.key3.find(element => element.id === this.key3_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('key3_in', element.label);
                            }
                        }
                        //3200 KEY 4
                        pos = buffer.indexOf('6e000200', 0, "hex")
                        if (pos > -1) {
                            //console.log('KEY 4 to', buffer[pos + 4]);
                            this.key4_in_src = buffer[pos + 4];
                            this.checkFeedbacks('key4_in');
                            element = this.model.key4.find(element => element.id === this.key4_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('key4_in', element.label);
                            }
                        }
                        //3200 Aux1
                        pos = buffer.indexOf('00000500', 0, "hex")
                        if (pos > -1) {
                            //console.log('AUX 1 to', buffer[pos + 4]);
                            this.aux1_in_src = buffer[pos + 4];
                            this.checkFeedbacks('aux1_in');
                            element = this.model.aux1.find(element => element.id === this.aux1_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('aux1_in', element.label);
                            }
                        }
                        //3200 Aux2
                        pos = buffer.indexOf('01000500', 0, "hex")
                        if (pos > -1) {
                            //console.log('AUX 2 to', buffer[pos + 4]);
                            this.aux2_in_src = buffer[pos + 4];
                            this.checkFeedbacks('aux2_in');
                            element = this.model.aux2.find(element => element.id === this.aux2_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('aux2_in', element.label);
                            }
                        }
                        //3200 Aux3
                        pos = buffer.indexOf('02000500', 0, "hex")
                        if (pos > -1) {
                            //console.log('AUX 3 to', buffer[pos + 4]);
                            this.aux3_in_src = buffer[pos + 4];
                            this.checkFeedbacks('aux3_in');
                            element = this.model.aux3.find(element => element.id === this.aux3_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('aux3_in', element.label);
                            }
                        }
                        //3200 Aux4
                        pos = buffer.indexOf('03000500', 0, "hex")
                        if (pos > -1) {
                            //console.log('AUX 4 to', buffer[pos + 4]);
                            this.aux4_in_src = buffer[pos + 4];
                            this.checkFeedbacks('aux4_in');
                            element = this.model.aux4.find(element => element.id === this.aux4_in_src.toString());
                            if (element !== undefined) {
                                this.setVariable('aux4_in', element.label);
                            }
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
                    //Key 1 State PGM
                    pos = buffer.indexOf('13000200', 0, "hex")
                    if (pos > -1) {
                        this.key1_pgm_state = buffer.readInt16LE(pos + 4);
                        this.setVariable('key1_pgm_state', this.key1_pgm_state);
                    }
                    //Key 1 State PVW
                    pos = buffer.indexOf('50000200', 0, "hex")
                    if (pos > -1) {
                        this.key1_pvw_state = buffer.readInt16LE(pos + 4);
                        this.setVariable('key1_pvw_state', this.key1_pvw_state);
                    }

                    //Key 2 State PGM
                    pos = buffer.indexOf('31000200', 0, "hex")
                    if (pos > -1) {
                        this.key2_pgm_state = buffer.readInt16LE(pos + 4);
                        this.setVariable('key2_pgm_state', this.key2_pgm_state);
                    }
                    //Key 2 State PVW
                    pos = buffer.indexOf('51000200', 0, "hex")
                    if (pos > -1) {
                        this.key2_pvw_state = buffer.readInt16LE(pos + 4);
                        this.setVariable('key2_pvw_state', this.key2_pvw_state);
                    }

                    //DSK 1 State PGM
                    pos = buffer.indexOf('5b000200', 0, "hex")
                    if (pos > -1) {
                        this.dsk1_pgm_state = buffer.readInt16LE(pos + 4);
                        this.setVariable('dsk1_pgm_state', this.dsk1_pgm_state);
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
                    }
                    //DSK 2 State PVW
                    pos = buffer.indexOf('80000200', 0, "hex")
                    if (pos > -1) {
                        this.dsk2_pvw_state = buffer.readInt16LE(pos + 4);
                        this.setVariable('dsk2_pvw_state', this.dsk2_pvw_state);
                    }
                    ////BUTTON STATES/////

                    //TBAR STATE

                    pos = buffer.indexOf('01000200', 0, "hex")
                    if (pos > -1) {
                        this.tbar_state = buffer.readInt32LE(pos + 4);
                        //console.log("tbar:", this.tbar_state);
                        this.checkFeedbacks('tbar_state');
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
                        pos = buffer.indexOf('0000000000000600', 0, "hex")
                        if (pos > -1) {
                            this.audio_src = buffer.readInt16LE(pos + 8);
                            //console.log("audio src:", this.audio_src);
                            element = this.model.audio_src.find(element => element.id === this.audio_src.toString());
                            if (element !== undefined) {
                                this.setVariable('audio_src', element.label);
                            }
                            this.checkFeedbacks('audio_src');
                        }
                    }
                }
            });

            // if we get any data, display it to stdout
            this.socket.on('data', (buffer) => {
                //if (!buffer.equals(this.null_packet) && !buffer.equals(this.null_packet_cmd)) {
                //console.log('Receive CMD: ', buffer);
                //}
                //Reply with the null packet
                if (buffer.equals(this.null_packet_cmd)) {
                    this.socket.send(this.null_packet_cmd);
                } else {
                    this.socket.send(this.null_packet);
                }

            });

        }
    }


    updateConfig(config) {
        var resetConnection = false;

        if (this.config.host != config.host || this.config.port != config.port || this.config.modelID != config.modelID) {
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
            console.log('Connection reset after update. Port: ', config.port);
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