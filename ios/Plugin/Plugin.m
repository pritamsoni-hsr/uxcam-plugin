#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(UXCamPlugin, "UXCamPlugin",
           CAP_PLUGIN_METHOD(startWithKey, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(startNewSession, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(stopSessionAndUploadData, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(tagScreenName, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setAutomaticScreenNameTagging, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setUserIdentity, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setUserProperty, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setSessionProperty, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(isRecording, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(pauseScreenRecording, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(resumeScreenRecording, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(optOutOverall, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(optOutOfSchematicRecordings, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(optIntoSchematicRecordings, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(optInOverall, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(optInSchematicRecordingStatus, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(cancelCurrentSession, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(allowShortBreak, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(deletePendingUploads, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(occludeAllTextView, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(occludeRectsOnNextFrame, CAPPluginReturnPromise);
)
