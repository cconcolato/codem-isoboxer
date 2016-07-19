// ISO/IEC 14496-12:2015 - 8.6.15 Producer Reference Time Box
ISOBox.prototype._boxParsers['prft'] = function() {
	this._parseFullBox();
	this.reference_track_ID = this._readUint(32);
	// read as two separate 32-bits fields instead of a single 64-bits field to avoid JS 64-bit issues
	this.ntp_timestamp_sec = this._readUint(32);
	this.ntp_timestamp_frac = this._readUint(32);
	if (this.version == 0) {
		this.media_time = this._readUint(32);
	} else {
		this.media_time = this._readUint(64);
	}
};

