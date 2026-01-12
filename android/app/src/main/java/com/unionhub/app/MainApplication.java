package com.unionhub.app;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactHost;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.react.defaults.DefaultReactHost;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {

        @Override
        public boolean getUseDeveloperSupport() {
          return true;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public ReactHost getReactHost() {
    return DefaultReactHost.getDefaultReactHost(
        getApplicationContext(),
        mReactNativeHost
    );
  }

  @Override
  public void onCreate() {
    super.onCreate();
  }
}
