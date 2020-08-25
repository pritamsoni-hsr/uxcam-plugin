package com.syronawomen.plugins.uxcam;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.uxcam.UXCam;

import org.json.JSONArray;


@NativePlugin
public class UXCamPlugin extends Plugin {

    @PluginMethod()
    public void startWithKey(PluginCall call) {
        String UXCamKey = call.getString("key");
        if (UXCamKey == null || UXCamKey.length() == 0) {
            throw new IllegalArgumentException("missing api key");
        }
        UXCam.pluginType("capacitor",  "0.1");
        UXCam.startWithKey(UXCamKey);
        call.success();
    }
    @PluginMethod()
    public void startNewSession(PluginCall call) {
        UXCam.startNewSession();
        call.success();
    }
    @PluginMethod()
    public void stopSessionAndUploadData(PluginCall call) {
        UXCam.stopSessionAndUploadData();
        call.success();
    }
    @PluginMethod()
    public void tagScreenName(PluginCall call) {
        String screenName = call.getString("screenName");
        UXCam.tagScreenName(screenName);
        call.success();
    }
    @PluginMethod()
    public void setAutomaticScreenNameTagging(PluginCall call) {
        boolean enableAutomaticNameTagging = call.getBoolean("enableAutomaticNameTagging", false);
        UXCam.setAutomaticScreenNameTagging(enableAutomaticNameTagging);
        call.success();
    }
    @PluginMethod()
    public void setUserIdentity(PluginCall call) {
        String name = call.getString("name");
        UXCam.setUserIdentity(name);
        call.success();
    }
    @PluginMethod()
    public void setUserProperty(PluginCall call) {
        String key = call.getString("key");
        String value = call.getString("value");
        UXCam.setUserProperty(key, value);
        call.success();
    }
    @PluginMethod()
    public void setSessionProperty(PluginCall call) {
        String key = call.getString("key");
        String value = call.getString("value");
        UXCam.setSessionProperty(key, value);
        call.success();
    }
    @PluginMethod()
    public void isRecording(PluginCall call) {
        boolean response =  UXCam.isRecording();
        JSObject results = new JSObject();
        results.put("result", response);
        call.success(results);
    }
    @PluginMethod()
    public void pauseScreenRecording(PluginCall call) {
        UXCam.pauseScreenRecording();
        call.success();
    }
    @PluginMethod()
    public void resumeScreenRecording(PluginCall call) {
        UXCam.resumeScreenRecording();
        call.success();
    }
    @PluginMethod()
    public void optOutOverall(PluginCall call) {
        UXCam.optOutOverall();
        call.success();
    }
    @PluginMethod()
    public void optOutOfSchematicRecordings(PluginCall call) {
        UXCam.optOutOfVideoRecording();
        call.success();
    }
    @PluginMethod()
    public void optIntoSchematicRecordings(PluginCall call) {
        UXCam.optIntoVideoRecording();
        call.success();
    }
    @PluginMethod()
    public void optInOverall(PluginCall call) {
        UXCam.optInOverall();
        call.success();
    }
    @PluginMethod()
    public void optInSchematicRecordingStatus(PluginCall call) {
        UXCam.optInVideoRecordingStatus();
        call.success();
    }
    @PluginMethod()
    public void cancelCurrentSession(PluginCall call) {
        UXCam.cancelCurrentSession();
        call.success();
    }
    @PluginMethod()
    public void allowShortBreak(PluginCall call) {
        UXCam.allowShortBreakForAnotherApp(true);
        call.success();
    }
    @PluginMethod()
    public void deletePendingUploads(PluginCall call) {
        UXCam.deletePendingUploads();
        call.success();
    }
    @PluginMethod()
    public void occludeAllTextView(PluginCall call) {
        UXCam.occludeAllTextFields(true);
        call.success();
    }
    @PluginMethod()
    public void occludeRectsOnNextFrame(PluginCall call){
        JSONArray rectangles = call.getArray("rects");
        if (rectangles == null || rectangles.length()==0){
            throw new IllegalArgumentException("invalid rects data");
        }
        UXCam.occludeRectsOnNextFrame(rects);
        call.success();
    }
}
