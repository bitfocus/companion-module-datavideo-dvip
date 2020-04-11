## Companion Datavideo DVIP Module

Work in progress module to control Datavideo vision mixers, with feedback.

This module attempts to implement the realtime DVIP protocol to listen to changes while using the command protocol to send control commands to the vision mixer.  
More documentation on the DVIP specification is here: https://github.com/BB21B/datavideo-dvip-docs

Currently supports:  
SE-650  
SE-700  
SE-1200MU  
SE-3200  

Please add an issue for other Datavision vision mixers you would like to see added or any feedback you have.


**Available commands**

* Switch PGM and PVW bus input
* Switch Key, DSK, Aux bus input
* Transition Controls
* Fade to Black
* Keyer Controls
* Audio Controls
* Output Controls
* User Load/User Save
* Streamer Controls


**Available feedback**
* Current PGM and PVW Bus input feedback
* Current Key, DSK, Aux Bus input feedback
* T Bar and DSK T Bar transition active indication
* Currently selected transition type