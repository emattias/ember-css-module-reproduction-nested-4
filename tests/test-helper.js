import Application from 'ember-css-module-reproduction/app';
import config from 'ember-css-module-reproduction/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
