/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.proto.Move');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Move = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Move, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.Move.displayName = 'proto.proto.Move';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Move.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Move.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Move} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Move.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, 0),
    speed: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Move}
 */
proto.proto.Move.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Move;
  return proto.proto.Move.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Move} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Move}
 */
proto.proto.Move.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDirection(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Move.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Move.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Move} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Move.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSpeed();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 direction = 1;
 * @return {number}
 */
proto.proto.Move.prototype.getDirection = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.proto.Move.prototype.setDirection = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 speed = 2;
 * @return {number}
 */
proto.proto.Move.prototype.getSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.Move.prototype.setSpeed = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};

