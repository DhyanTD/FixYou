package com.dhyan_td.FixYou

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class InstalledAppsPackage : TurboReactPackage() {

    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return if (name == NativeInstalledAppsSpec.NAME) {
            InstalledAppsModule(reactContext)
        } else {
            null
        }
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            val name = NativeInstalledAppsSpec.NAME
            mapOf(
                name to ReactModuleInfo(
                    name,   
                    name,   
                    false, 
                    false, 
                    false,
                    true 
                )
            )
        }
    }
}
