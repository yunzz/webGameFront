/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.Move = (function() {

        /**
         * Properties of a Move.
         * @memberof proto
         * @interface IMove
         * @property {number|null} [direction] Move direction
         * @property {number|null} [speed] Move speed
         */

        /**
         * Constructs a new Move.
         * @memberof proto
         * @classdesc Represents a Move.
         * @implements IMove
         * @constructor
         * @param {proto.IMove=} [properties] Properties to set
         */
        function Move(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Move direction.
         * @member {number} direction
         * @memberof proto.Move
         * @instance
         */
        Move.prototype.direction = 0;

        /**
         * Move speed.
         * @member {number} speed
         * @memberof proto.Move
         * @instance
         */
        Move.prototype.speed = 0;

        /**
         * Creates a new Move instance using the specified properties.
         * @function create
         * @memberof proto.Move
         * @static
         * @param {proto.IMove=} [properties] Properties to set
         * @returns {proto.Move} Move instance
         */
        Move.create = function create(properties) {
            return new Move(properties);
        };

        /**
         * Encodes the specified Move message. Does not implicitly {@link proto.Move.verify|verify} messages.
         * @function encode
         * @memberof proto.Move
         * @static
         * @param {proto.IMove} message Move message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Move.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.direction != null && message.hasOwnProperty("direction"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.direction);
            if (message.speed != null && message.hasOwnProperty("speed"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.speed);
            return writer;
        };

        /**
         * Encodes the specified Move message, length delimited. Does not implicitly {@link proto.Move.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Move
         * @static
         * @param {proto.IMove} message Move message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Move.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Move message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Move
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Move} Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Move.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Move();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.direction = reader.int32();
                    break;
                case 2:
                    message.speed = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Move message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Move
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Move} Move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Move.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Move message.
         * @function verify
         * @memberof proto.Move
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Move.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                if (!$util.isInteger(message.direction))
                    return "direction: integer expected";
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            return null;
        };

        /**
         * Creates a Move message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Move
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Move} Move
         */
        Move.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Move)
                return object;
            var message = new $root.proto.Move();
            if (object.direction != null)
                message.direction = object.direction | 0;
            if (object.speed != null)
                message.speed = object.speed | 0;
            return message;
        };

        /**
         * Creates a plain object from a Move message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Move
         * @static
         * @param {proto.Move} message Move
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Move.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.direction = 0;
                object.speed = 0;
            }
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = message.direction;
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = message.speed;
            return object;
        };

        /**
         * Converts this Move to JSON.
         * @function toJSON
         * @memberof proto.Move
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Move.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Move;
    })();

    proto.Attack = (function() {

        /**
         * Properties of an Attack.
         * @memberof proto
         * @interface IAttack
         * @property {number|null} [damage] Attack damage
         * @property {number|null} [skill] Attack skill
         */

        /**
         * Constructs a new Attack.
         * @memberof proto
         * @classdesc Represents an Attack.
         * @implements IAttack
         * @constructor
         * @param {proto.IAttack=} [properties] Properties to set
         */
        function Attack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Attack damage.
         * @member {number} damage
         * @memberof proto.Attack
         * @instance
         */
        Attack.prototype.damage = 0;

        /**
         * Attack skill.
         * @member {number} skill
         * @memberof proto.Attack
         * @instance
         */
        Attack.prototype.skill = 0;

        /**
         * Creates a new Attack instance using the specified properties.
         * @function create
         * @memberof proto.Attack
         * @static
         * @param {proto.IAttack=} [properties] Properties to set
         * @returns {proto.Attack} Attack instance
         */
        Attack.create = function create(properties) {
            return new Attack(properties);
        };

        /**
         * Encodes the specified Attack message. Does not implicitly {@link proto.Attack.verify|verify} messages.
         * @function encode
         * @memberof proto.Attack
         * @static
         * @param {proto.IAttack} message Attack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.damage != null && message.hasOwnProperty("damage"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.damage);
            if (message.skill != null && message.hasOwnProperty("skill"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.skill);
            return writer;
        };

        /**
         * Encodes the specified Attack message, length delimited. Does not implicitly {@link proto.Attack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Attack
         * @static
         * @param {proto.IAttack} message Attack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Attack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Attack message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Attack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Attack} Attack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Attack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.damage = reader.int32();
                    break;
                case 2:
                    message.skill = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Attack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Attack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Attack} Attack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Attack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Attack message.
         * @function verify
         * @memberof proto.Attack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Attack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.damage != null && message.hasOwnProperty("damage"))
                if (!$util.isInteger(message.damage))
                    return "damage: integer expected";
            if (message.skill != null && message.hasOwnProperty("skill"))
                if (!$util.isInteger(message.skill))
                    return "skill: integer expected";
            return null;
        };

        /**
         * Creates an Attack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Attack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Attack} Attack
         */
        Attack.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Attack)
                return object;
            var message = new $root.proto.Attack();
            if (object.damage != null)
                message.damage = object.damage | 0;
            if (object.skill != null)
                message.skill = object.skill | 0;
            return message;
        };

        /**
         * Creates a plain object from an Attack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Attack
         * @static
         * @param {proto.Attack} message Attack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Attack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.damage = 0;
                object.skill = 0;
            }
            if (message.damage != null && message.hasOwnProperty("damage"))
                object.damage = message.damage;
            if (message.skill != null && message.hasOwnProperty("skill"))
                object.skill = message.skill;
            return object;
        };

        /**
         * Converts this Attack to JSON.
         * @function toJSON
         * @memberof proto.Attack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Attack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Attack;
    })();

    proto.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof proto
         * @interface IMessage
         * @property {string|null} [path] Message path
         * @property {proto.IMove|null} [move] Message move
         * @property {proto.IAttack|null} [attack] Message attack
         */

        /**
         * Constructs a new Message.
         * @memberof proto
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {proto.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message path.
         * @member {string} path
         * @memberof proto.Message
         * @instance
         */
        Message.prototype.path = "";

        /**
         * Message move.
         * @member {proto.IMove|null|undefined} move
         * @memberof proto.Message
         * @instance
         */
        Message.prototype.move = null;

        /**
         * Message attack.
         * @member {proto.IAttack|null|undefined} attack
         * @memberof proto.Message
         * @instance
         */
        Message.prototype.attack = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message content.
         * @member {"move"|"attack"|undefined} content
         * @memberof proto.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["move", "attack"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof proto.Message
         * @static
         * @param {proto.IMessage=} [properties] Properties to set
         * @returns {proto.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link proto.Message.verify|verify} messages.
         * @function encode
         * @memberof proto.Message
         * @static
         * @param {proto.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && message.hasOwnProperty("path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.move != null && message.hasOwnProperty("move"))
                $root.proto.Move.encode(message.move, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.attack != null && message.hasOwnProperty("attack"))
                $root.proto.Attack.encode(message.attack, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link proto.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Message
         * @static
         * @param {proto.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 11:
                    message.move = $root.proto.Move.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.attack = $root.proto.Attack.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof proto.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.move != null && message.hasOwnProperty("move")) {
                properties.content = 1;
                {
                    var error = $root.proto.Move.verify(message.move);
                    if (error)
                        return "move." + error;
                }
            }
            if (message.attack != null && message.hasOwnProperty("attack")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.proto.Attack.verify(message.attack);
                    if (error)
                        return "attack." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Message)
                return object;
            var message = new $root.proto.Message();
            if (object.path != null)
                message.path = String(object.path);
            if (object.move != null) {
                if (typeof object.move !== "object")
                    throw TypeError(".proto.Message.move: object expected");
                message.move = $root.proto.Move.fromObject(object.move);
            }
            if (object.attack != null) {
                if (typeof object.attack !== "object")
                    throw TypeError(".proto.Message.attack: object expected");
                message.attack = $root.proto.Attack.fromObject(object.attack);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Message
         * @static
         * @param {proto.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.path = "";
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.move != null && message.hasOwnProperty("move")) {
                object.move = $root.proto.Move.toObject(message.move, options);
                if (options.oneofs)
                    object.content = "move";
            }
            if (message.attack != null && message.hasOwnProperty("attack")) {
                object.attack = $root.proto.Attack.toObject(message.attack, options);
                if (options.oneofs)
                    object.content = "attack";
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof proto.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    return proto;
})();

module.exports = $root;
