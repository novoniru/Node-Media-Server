//
//  Created by Mingliang Chen on 18/3/2.
//  illuspas[a]gmail.com
//  Copyright (c) 2018 Nodemedia. All rights reserved.
//
const EventEmitter = require('events');
const EventAuthorizer = require('./node_event_authorizer');

let sessions = new Map();
let publishers = new Map();
let idlePlayers = new Set();
let nodeEvent = new EventEmitter();
let eventAuthorizer = EventAuthorizer;
let stat = {
  inbytes: 0,
  outbytes: 0,
  accepted: 0
};
module.exports = { sessions, publishers, idlePlayers, nodeEvent, eventAuthorizer, stat };