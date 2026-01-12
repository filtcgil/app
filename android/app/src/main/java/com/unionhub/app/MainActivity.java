package com.unionhub.app;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "unionhub";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
      this,
      getMainComponentName(),
      false, // new architecture
      false  // Hermes
    );
  }
}
