import Foundation
import UXCam
import Capacitor
/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(UXCamPlugin)
public class UXCamPlugin: CAPPlugin {
    @objc func startWithKey(_ call: CAPPluginCall) {
        let UXCamKey = call.getString("key") ?? ""
        if UXCamKey.count == 0 {
            print("missing api key")
        }
        let type = "capacitor"
        let buildIdentifier = call.getString("appVariant") ?? nil
        UXCam.pluginType(type, version: "0.1")
        UXCam.optIntoSchematicRecordings()
        UXCam.start(withKey: UXCamKey, buildIdentifier: buildIdentifier)
        call.success()
    }
    @objc func startNewSession(_ call: CAPPluginCall) {
        UXCam.startNewSession()
        call.success()
    }
    @objc func stopSessionAndUploadData(_ call: CAPPluginCall) {
        UXCam.stopSessionAndUploadData()
        call.success()
    }
    @objc func tagScreenName(_ call: CAPPluginCall) {
        let screenName = call.getString("screenName") ?? ""
        UXCam.tagScreenName(screenName)
        call.success()
    }
    @objc func setAutomaticScreenNameTagging(_ call: CAPPluginCall) {
        let enableAutomaticNameTagging = call.getBool("enableAutomaticNameTagging") ?? true
        UXCam.setAutomaticScreenNameTagging(enableAutomaticNameTagging)
        call.success()
    }
    @objc func setUserIdentity(_ call: CAPPluginCall) {
        let name = call.getString("name") ?? ""
        UXCam.setUserIdentity(name)
        call.success()
    }
    @objc func setUserProperty(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""
        let value = call.getString("value") ?? ""
        if key.count > 0 && value.count>0 {
            UXCam.setUserProperty(key, value: value)
        }
        call.success()
    }
    @objc func setSessionProperty(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""
        let value = call.getString("value") ?? ""
        if key.count > 0 && value.count>0 {
            UXCam.setSessionProperty(key, value: value)
        }
        call.success()
    }
    @objc func isRecording(_ call: CAPPluginCall) {
        let response = UXCam.isRecording()
        call.success(["result": response])
    }
    @objc func pauseScreenRecording(_ call: CAPPluginCall) {
        UXCam.pauseScreenRecording()
        call.success()
    }
    @objc func resumeScreenRecording(_ call: CAPPluginCall) {
        UXCam.resumeScreenRecording()
        call.success()
    }
    @objc func optOutOverall(_ call: CAPPluginCall) {
        UXCam.optOutOverall()
        call.success()
    }
    @objc func optOutOfSchematicRecordings(_ call: CAPPluginCall) {
        UXCam.optOutOfSchematicRecordings()
        call.success()
    }
    @objc func optIntoSchematicRecordings(_ call: CAPPluginCall) {
        UXCam.optIntoSchematicRecordings()
        call.success()
    }
    @objc func optInOverall(_ call: CAPPluginCall) {
        UXCam.optInOverall()
        call.success()
    }
    @objc func optInSchematicRecordingStatus(_ call: CAPPluginCall) {
        let response = UXCam.optInSchematicRecordingStatus()
        call.success(["result": response])
    }
    @objc func cancelCurrentSession(_ call: CAPPluginCall) {
        UXCam.cancelCurrentSession()
        call.success()
    }
    @objc func allowShortBreak(_ call: CAPPluginCall) {
        UXCam.allowShortBreak(forAnotherApp: true)
        call.success()
    }
    @objc func deletePendingUploads(_ call: CAPPluginCall) {
        UXCam.deletePendingUploads()
        call.success()
    }
    @objc func occludeAllTextView(_ call: CAPPluginCall) {
        UXCam.occludeAllTextFields(true)
        call.success()
    }
    @objc func occludeRectsOnNextFrame(_ call: CAPPluginCall) {
        let rects = call.getArray("rects", [NSNumber].self) ?? []
        UXCam.occludeRects(onNextFrame: rects)
        call.success()
    }
}
