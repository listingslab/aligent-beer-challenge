/**
 * Created by Chris Dorward on 01/03/2017
 * Brewery DB API key: d28a194879ac624eb01e41050ca412e5
 */

import $ from 'jquery';

export default class API {
  constructor() {
    this.proxy = 'http://jqueryresume.com/proxy.php?url=';
    this.apiBaseUrl = 'http://api.brewerydb.com/v2/';
    this.apiKey = '/?key=d28a194879ac624eb01e41050ca412e5';
  }

  getEvents(callBack) {
    $.getJSON(`${this.proxy}${this.apiBaseUrl}events${this.apiKey}`, callBack);
  }

}
