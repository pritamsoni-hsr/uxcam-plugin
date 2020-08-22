import { registerWebPlugin, WebPlugin } from '@capacitor/core';

import { IUXCamPlugin } from './definitions';

export class UXCamPluginWeb extends WebPlugin implements IUXCamPlugin {
  constructor() {
    super({
      name: 'UXCamPlugin',
      platforms: ['ios', 'android'],
    });
  }
  async startWithKey(options: {
    key: string;
    appVariant?: string;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async startNewSession(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async stopSessionAndUploadData(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async stopApplicationAndUploadData(options: {
    occludeAllTextView?: string;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async tagScreenName(options: {
    screenName: string;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async setAutomaticScreenNameTagging(options: {
    enableAutomaticNameTagging: boolean;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async setUserIdentity(options: {
    name: string;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async setUserProperty(options: {
    key: string;
    value: string;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async setSessionProperty(options: {
    key: string;
    value: string;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async isRecording(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<{ result: boolean }> {
    console.warn('started with', options, 'No web version available.');
    return { result: false };
  }
  async pauseScreenRecording(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async resumeScreenRecording(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optOutOverall(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optOutOfSchematicRecordings(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optInOverall(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optIntoSchematicRecordings(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optInOverallStatus(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optInSchematicRecordingStatus(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optIn(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optOut(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optStatus(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optInStatus(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optIntoVideoRecording(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optOutOfVideoRecording(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async optInVideoRecordingStatus(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async cancelCurrentSession(options: {
    isEnabled: boolean;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async resumeShortBreakForAnotherApp(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async getMultiSessionRecord(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async setMultiSessionRecord(options: {
    mulitSession: any;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async deletePendingUploads(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async pendingSessionCount(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async uploadPendingSession(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async logEvent(options: {
    eventName: string;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async logEventWithProperties(options: {
    eventName: string;
    properties: any;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async occludeSensitiveScreen(options: {
    occludeSensitiveScreen: string;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async occludeAllTextView(options: {
    occludeAllTextView: string;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async urlForCurrentUser(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async urlForCurrentSession(options: {
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
  async occludeRectsOnNextFrame(options: {
    rects: any;
    successCallback?: Function;
    errorCallback?: Function;
  }): Promise<void> {
    console.warn('started with', options, 'No web version available.');
  }
}

const UXCamPlugin = new UXCamPluginWeb();

export { UXCamPlugin };

registerWebPlugin(UXCamPlugin);
