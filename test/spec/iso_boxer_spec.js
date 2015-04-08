var ISOBoxer = require('../../dist/iso_boxer.js');

describe('ISOBoxer', function() {
  it('should parse a buffer', function() {
    // Sample 'ftyp' box (20 bytes)
    var arrayBuffer = new Uint8Array([ 0x00, 0x00, 0x00, 0x14, 0x66, 0x74, 0x79, 0x70, 0x69, 0x73, 0x6f, 0x6d, 0x00, 0x00, 0x00, 0x01, 0x69, 0x73, 0x6f, 0x6d ]).buffer;
    var parsedFile = ISOBoxer.parseBuffer(arrayBuffer);
    var box = parsedFile.boxes[0];
    
    expect(parsedFile.boxes.length).toEqual(1);
    expect(box.type).toEqual('ftyp');
    expect(box.size).toEqual(20);
    expect(box.major_brand).toEqual('isom');
    expect(box.minor_versions).toEqual(1);
    expect(box.compatible_brands).toEqual(['isom']);
  })
  
  it('should convert a simple dataView to a string', function() {
    var arrayBuffer = new Uint8Array([0x74, 0x65, 0x73, 0x74, 0x20, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67]).buffer;
    var dataView = new DataView(arrayBuffer);
    expect(ISOBoxer.Utils.dataViewToString(dataView)).toEqual('test string')
  })
})