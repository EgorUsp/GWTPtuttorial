package com.projectname.project.client.resources;

import com.google.gwt.core.client.GWT;
import com.gwtplatform.mvp.client.com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector;

public class com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment {
  public void memberInject_Key$type$com$projectname$project$client$resources$AppResources$_annotation$$none$$(com.projectname.project.client.resources.AppResources injectee) {
    
  }
  
  public void memberInject_Key$type$com$projectname$project$client$resources$ResourceLoader$_annotation$$none$$(com.projectname.project.client.resources.ResourceLoader injectee) {
    
  }
  
  
  /**
   * Binding for com.projectname.project.client.resources.AppResources declared at:
   *   Implicit GWT.create binding for com.projectname.project.client.resources.AppResources
   */
  public com.projectname.project.client.resources.AppResources get_Key$type$com$projectname$project$client$resources$AppResources$_annotation$$none$$() {
    Object created = GWT.create(com.projectname.project.client.resources.AppResources.class);
    assert created instanceof com.projectname.project.client.resources.AppResources;
    com.projectname.project.client.resources.AppResources result = (com.projectname.project.client.resources.AppResources) created;
    
    memberInject_Key$type$com$projectname$project$client$resources$AppResources$_annotation$$none$$(result);
    
    return result;
    
  }
  
  private com.projectname.project.client.resources.ResourceLoader singleton_Key$type$com$projectname$project$client$resources$ResourceLoader$_annotation$$none$$ = null;
  
  public com.projectname.project.client.resources.ResourceLoader get_Key$type$com$projectname$project$client$resources$ResourceLoader$_annotation$$none$$() {
    
    if (singleton_Key$type$com$projectname$project$client$resources$ResourceLoader$_annotation$$none$$ == null) {
    com.projectname.project.client.resources.ResourceLoader result = com$projectname$project$client$resources$ResourceLoader_com$projectname$project$client$resources$ResourceLoader_methodInjection(get_Key$type$com$projectname$project$client$resources$AppResources$_annotation$$none$$());
    memberInject_Key$type$com$projectname$project$client$resources$ResourceLoader$_annotation$$none$$(result);
    
        singleton_Key$type$com$projectname$project$client$resources$ResourceLoader$_annotation$$none$$ = result;
    }
    return singleton_Key$type$com$projectname$project$client$resources$ResourceLoader$_annotation$$none$$;
    
  }
  
  public com.projectname.project.client.resources.ResourceLoader com$projectname$project$client$resources$ResourceLoader_com$projectname$project$client$resources$ResourceLoader_methodInjection(com.projectname.project.client.resources.AppResources _0) {
    return new com.projectname.project.client.resources.ResourceLoader(_0);
  }
  
  
  /**
   * Field for the enclosing injector.
   */
  private final com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector injector;
  public com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment(com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector injector) {
    this.injector = injector;
  }
  
  public void initializeEagerSingletons() {
    // Eager singleton bound at:
    //   Implicit binding for com.projectname.project.client.resources.ResourceLoader
    get_Key$type$com$projectname$project$client$resources$ResourceLoader$_annotation$$none$$();
    
  }
  
}
