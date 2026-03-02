package com.dhyan_td.FixYou

import android.content.pm.ApplicationInfo
import android.content.pm.PackageManager
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext

class InstalledAppsModule(reactContext: ReactApplicationContext) :
    NativeInstalledAppsSpec(reactContext) {

    override fun getInstalledApps(promise: Promise) {
        try {
            val pm: PackageManager = reactApplicationContext.packageManager
            val packages = pm.getInstalledApplications(PackageManager.GET_META_DATA)

            val result = Arguments.createArray()

            for (appInfo in packages) {
                // Skip system apps — only include user-installed apps
                if (appInfo.flags and ApplicationInfo.FLAG_SYSTEM != 0) {
                    continue
                }

                val appName = pm.getApplicationLabel(appInfo).toString()
                val packageName = appInfo.packageName
                val versionName = try {
                    pm.getPackageInfo(packageName, 0).versionName ?: "unknown"
                } catch (e: PackageManager.NameNotFoundException) {
                    "unknown"
                }

                val map = Arguments.createMap()
                map.putString("appName", appName)
                map.putString("packageName", packageName)
                map.putString("versionName", versionName)

                result.pushMap(map)
            }

            promise.resolve(result)
        } catch (e: Exception) {
            promise.reject("ERROR", "Failed to get installed apps: ${e.message}", e)
        }
    }
}
