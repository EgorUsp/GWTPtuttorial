var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.Project;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = 'F9D3D4B7B1E1A5D99C868518D5D09F46';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 'object', $intern_1 = 'java.lang', $intern_2 = 'com.google.gwt.core.client', $intern_3 = 3.141592653589793, $intern_4 = 'com.google.gwt.animation.client', $intern_5 = 'com.google.gwt.user.client', $intern_6 = 'com.google.gwt.aria.client', $intern_7 = 'aria-hidden', $intern_8 = {3:1, 6:1}, $intern_9 = 'com.google.gwt.core.client.impl', $intern_10 = 'fromIndex: ', $intern_11 = 'CSS1Compat', $intern_12 = {3:1}, $intern_13 = {7:1, 9:1, 3:1, 5:1, 4:1}, $intern_14 = 'com.google.gwt.dom.client', $intern_15 = {9:1, 27:1, 3:1, 5:1, 4:1}, $intern_16 = {9:1, 28:1, 3:1, 5:1, 4:1}, $intern_17 = {13:1, 3:1, 5:1, 4:1}, $intern_18 = {9:1, 51:1, 3:1, 5:1, 4:1}, $intern_19 = 'com.google.web.bindery.event.shared', $intern_20 = 'com.google.gwt.event.shared', $intern_21 = 'com.google.gwt.event.dom.client', $intern_22 = 'click', $intern_23 = 'com.google.gwt.event.logical.shared', $intern_24 = {50:1, 3:1, 6:1}, $intern_25 = 'UmbrellaException', $intern_26 = 4194303, $intern_27 = 524288, $intern_28 = 'com.google.gwt.layout.client', $intern_29 = 'div', $intern_30 = 'position', $intern_31 = 'absolute', $intern_32 = 'left', $intern_33 = '0.0px', $intern_34 = 'top', $intern_35 = 'right', $intern_36 = 'bottom', $intern_37 = 'height', $intern_38 = 'com.google.gwt.place.shared', $intern_39 = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment', $intern_40 = 'com.google.gwt.safehtml.shared', $intern_41 = 'com.google.gwt.text.shared.testing', $intern_42 = 'com.google.gwt.uibinder.client', $intern_43 = 16777216, $intern_44 = 33554432, $intern_45 = 67108864, $intern_46 = 'com.google.gwt.user.client.ui', $intern_47 = {21:1, 8:1, 19:1, 18:1, 10:1, 16:1, 15:1}, $intern_48 = {21:1, 8:1, 19:1, 18:1, 31:1, 10:1, 16:1, 15:1}, $intern_49 = {21:1, 8:1, 19:1, 18:1, 31:1, 10:1, 115:1, 16:1, 15:1}, $intern_50 = {21:1, 8:1, 19:1, 18:1, 31:1, 114:1, 10:1, 66:1, 16:1, 15:1}, $intern_51 = {29:1, 3:1, 5:1, 4:1}, $intern_52 = 'safari', $intern_53 = 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (', $intern_54 = 'Expect more errors.', $intern_55 = 'com.gwtplatform.common.client', $intern_56 = 'com.gwtplatform.mvp.client', $intern_57 = {8:1, 10:1, 24:1}, $intern_58 = {10:1}, $intern_59 = {62:1}, $intern_60 = 'com.gwtplatform.mvp.client.presenter.slots', $intern_61 = 'com.gwtplatform.mvp.client.proxy', $intern_62 = {296:1, 30:1, 8:1, 297:1}, $intern_63 = {8:1, 69:1, 63:1}, $intern_64 = "' between them.", $intern_65 = 'Bad parameter: Need exactly one key and one value.', $intern_66 = 'com.gwtplatform.mvp.shared.proxy', $intern_67 = 'com.projectname.project.client.application', $intern_68 = {8:1, 68:1}, $intern_69 = "<span id='", $intern_70 = "'><\/span>", $intern_71 = 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector_fragment/1', $intern_72 = 'com.projectname.project.client.application.home', $intern_73 = {8:1, 68:1, 69:1, 63:1}, $intern_74 = {299:1, 30:1}, $intern_75 = 'com.projectname.project.client.application.launcher', $intern_76 = "'><\/span><br> <span id='", $intern_77 = 'com.projectname.project.client.resources', $intern_78 = 'java.util', $intern_79 = {53:1}, $intern_80 = {12:1}, $intern_81 = {3:1, 25:1}, $intern_82 = '__proto__', $intern_83 = 'com.google.gwt.lang';
var _, com_google_gwt_lang_ModuleUtils_initFnList, com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId = {}, com_google_gwt_lang_CollapsedPropertyHolder_permutationId = -1;
function com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V(){
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_modernizeBrowser__V(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_maybeGetClassLiteralFromPlaceHolder__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(entry){
  return entry instanceof Array?entry[0]:null;
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V(){
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId;
  var createSubclassPrototype = com_google_gwt_lang_JavaClassHierarchySetupUtil_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
  var maybeGetClassLiteralFromPlaceHolder = com_google_gwt_lang_JavaClassHierarchySetupUtil_maybeGetClassLiteralFromPlaceHolder__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
  var prototype = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype);
  if (prototype && !clazz) {
    _ = prototype;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.java_lang_Object_castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.java_lang_Object_typeMarker$ = com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.java_lang_Object__1_1_1clazz$ = clazz);
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(superTypeId){
  var prototypesByTypeId = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId;
  return com_google_gwt_lang_JavaClassHierarchySetupUtil_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(prototypesByTypeId[superTypeId]);
}

function com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(propertyName, propertyValue){
  typeof window === $intern_0 && typeof window['$gwt'] === $intern_0 && (window['$gwt'][propertyName] = propertyValue);
}

function com_google_gwt_lang_ModuleUtils_registerEntry__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}

function com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(errFn, modName, modBase, softPermutationId){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  $moduleName = modName;
  $moduleBase = modBase;
  com_google_gwt_lang_CollapsedPropertyHolder_permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function com_google_gwt_lang_ModuleUtils_ensureModuleInit__V(){
  com_google_gwt_lang_ModuleUtils_initFnList == null && (com_google_gwt_lang_ModuleUtils_initFnList = []);
}

function com_google_gwt_lang_ModuleUtils_addInitFunctions__V(){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function java_lang_Object_Object__V(){
}

function java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, other){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.equals__Ljava_lang_Object_2Z$(other):com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static === other:this$static === other;
}

function java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this$static){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz$:com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz$:com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit;
}

function java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this$static){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this$static):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.hashCode__I$():com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this$static):com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this$static);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(1, null, {}, java_lang_Object_Object__V);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Object_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.getClass__Ljava_lang_Class_2$ = function java_lang_Object_getClass__Ljava_lang_Class_2(){
  return this.java_lang_Object__1_1_1clazz$;
}
;
_.hashCode__I$ = function java_lang_Object_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Object_toString__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this)) + '@' + (java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString__Ljava_lang_String_2$();
}
;
com_google_gwt_lang_Cast_stringCastMap = {3:1, 330:1, 5:1, 2:1};
com_google_gwt_lang_JavaClassHierarchySetupUtil_modernizeBrowser__V();
function com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !!com_google_gwt_lang_Cast_stringCastMap[dstId] || src_0.java_lang_Object_castableTypeMap$ && !!src_0.java_lang_Object_castableTypeMap$[dstId];
}

function com_google_gwt_lang_Cast_charToString__CLjava_lang_String_2(x_0){
  return String.fromCharCode(x_0);
}

function com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(src_0, dstId){
  if (src_0 != null && !com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId)) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  if (src_0 != null && !(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0))) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  if (src_0 != null && !com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0)) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(src_0){
  return !com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0) && com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return src_0 != null && com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId);
}

function com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(src_0){
  return src_0 != null && !com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0){
  return Array.isArray(src_0);
}

function com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(src_0){
  return com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0) && com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'string';
}

function com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  return src_0 == null?null:src_0;
}

function com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(o){
  if (o != null) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return null;
}

var com_google_gwt_lang_Cast_stringCastMap;
function java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static){
  if (this$static.java_lang_Class_typeName != null) {
    return;
  }
  java_lang_Class_initializeNames__Ljava_lang_Class_2V(this$static);
}

function java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static);
  return this$static.java_lang_Class_typeName;
}

function java_lang_Class_Class__V(){
  ++java_lang_Class_nextSequentialId;
  this.java_lang_Class_typeName = null;
  this.java_lang_Class_simpleName = null;
  this.java_lang_Class_packageName = null;
  this.java_lang_Class_compoundName = null;
  this.java_lang_Class_canonicalName = null;
  this.java_lang_Class_typeId = null;
  this.java_lang_Class_arrayLiterals = null;
}

function java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_packageName = packageName;
  clazz.java_lang_Class_compoundName = compoundClassName;
  return clazz;
}

function java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2(packageName, compoundClassName, typeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  return clazz;
}

function java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  clazz.java_lang_Class_modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  clazz.java_lang_Class_modifiers = 2;
  return clazz;
}

function java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClass, dimensions){
  var arrayLiterals = leafClass.java_lang_Class_arrayLiterals = leafClass.java_lang_Class_arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2(dimensions));
}

function java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz){
  if (clazz.isPrimitive__Z()) {
    return null;
  }
  var typeId = clazz.java_lang_Class_typeId;
  var prototype = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId[typeId];
  return prototype;
}

function java_lang_Class_initializeNames__Ljava_lang_Class_2V(clazz){
  if (clazz.isArray__Z()) {
    var componentType = clazz.java_lang_Class_componentType;
    componentType.isPrimitive__Z()?(clazz.java_lang_Class_typeName = '[' + componentType.java_lang_Class_typeId):!componentType.isArray__Z()?(clazz.java_lang_Class_typeName = '[L' + componentType.getName__Ljava_lang_String_2() + ';'):(clazz.java_lang_Class_typeName = '[' + componentType.getName__Ljava_lang_String_2());
    clazz.java_lang_Class_canonicalName = componentType.getCanonicalName__Ljava_lang_String_2() + '[]';
    clazz.java_lang_Class_simpleName = componentType.getSimpleName__Ljava_lang_String_2() + '[]';
    return;
  }
  var packageName = clazz.java_lang_Class_packageName;
  var compoundName = clazz.java_lang_Class_compoundName;
  compoundName = compoundName.split('/');
  clazz.java_lang_Class_typeName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('$', compoundName)]);
  clazz.java_lang_Class_canonicalName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', compoundName)]);
  clazz.java_lang_Class_simpleName = compoundName[compoundName.length - 1];
}

function java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.java_lang_Class_typeId = typeId;
  var prototype = java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz);
  if (!prototype) {
    com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId[typeId] = [clazz];
    return;
  }
  prototype.java_lang_Object__1_1_1clazz$ = clazz;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(92, 1, {}, java_lang_Class_Class__V);
_.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2 = function java_lang_Class_createClassLiteralForArray__ILjava_lang_Class_2(dimensions){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_modifiers = 4;
  dimensions > 1?(clazz.java_lang_Class_componentType = java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(this, dimensions - 1)):(clazz.java_lang_Class_componentType = this);
  return clazz;
}
;
_.getCanonicalName__Ljava_lang_String_2 = function java_lang_Class_getCanonicalName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_canonicalName;
}
;
_.getName__Ljava_lang_String_2 = function java_lang_Class_getName__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this);
}
;
_.getSimpleName__Ljava_lang_String_2 = function java_lang_Class_getSimpleName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_simpleName;
}
;
_.isArray__Z = function java_lang_Class_isArray__Z(){
  return (this.java_lang_Class_modifiers & 4) != 0;
}
;
_.isPrimitive__Z = function java_lang_Class_isPrimitive__Z(){
  return (this.java_lang_Class_modifiers & 1) != 0;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Class_toString__Ljava_lang_String_2(){
  return ((this.java_lang_Class_modifiers & 2) != 0?'interface ':(this.java_lang_Class_modifiers & 1) != 0?'':'class ') + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this) , this.java_lang_Class_typeName);
}
;
_.java_lang_Class_modifiers = 0;
var java_lang_Class_nextSequentialId = 1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Object', 1), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'JavaScriptObject$', 0), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Class_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Class', 92);
function com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2V(this$static){
  if (!this$static.com_google_gwt_animation_client_Animation_isRunning) {
    return;
  }
  this$static.com_google_gwt_animation_client_Animation_element = null;
  this$static.com_google_gwt_animation_client_Animation_isRunning = false;
  this$static.com_google_gwt_animation_client_Animation_isStarted = false;
  if (this$static.com_google_gwt_animation_client_Animation_requestHandle) {
    this$static.com_google_gwt_animation_client_Animation_requestHandle.cancel__V();
    this$static.com_google_gwt_animation_client_Animation_requestHandle = null;
  }
  this$static.com_google_gwt_layout_client_Layout$1_this$01.com_google_gwt_layout_client_Layout_animation = null;
  com_google_gwt_layout_client_Layout_$layout__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this$static.com_google_gwt_layout_client_Layout$1_this$01, 0);
}

function com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2IDLcom_google_gwt_dom_client_Element_2V(this$static, duration, startTime, element){
  com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2V(this$static);
  this$static.com_google_gwt_animation_client_Animation_isRunning = true;
  this$static.com_google_gwt_animation_client_Animation_isStarted = false;
  this$static.com_google_gwt_animation_client_Animation_duration = duration;
  this$static.com_google_gwt_animation_client_Animation_startTime = startTime;
  this$static.com_google_gwt_animation_client_Animation_element = element;
  ++this$static.com_google_gwt_animation_client_Animation_runId;
  com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(this$static.com_google_gwt_animation_client_Animation_callback, com_google_gwt_core_client_JsDate_now__D());
}

function com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2ILcom_google_gwt_dom_client_Element_2V(this$static, duration, element){
  com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2IDLcom_google_gwt_dom_client_Element_2V(this$static, duration, com_google_gwt_core_client_JsDate_now__D(), element);
}

function com_google_gwt_animation_client_Animation_$update__Lcom_google_gwt_animation_client_Animation_2DZ(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.com_google_gwt_animation_client_Animation_runId;
  finished = curTime >= this$static.com_google_gwt_animation_client_Animation_startTime + this$static.com_google_gwt_animation_client_Animation_duration;
  if (this$static.com_google_gwt_animation_client_Animation_isStarted && !finished) {
    progress = (curTime - this$static.com_google_gwt_animation_client_Animation_startTime) / this$static.com_google_gwt_animation_client_Animation_duration;
    com_google_gwt_layout_client_Layout$1_$onUpdate__Lcom_google_gwt_layout_client_Layout$1_2DV(this$static, (1 + Math.cos($intern_3 + progress * $intern_3)) / 2);
    return this$static.com_google_gwt_animation_client_Animation_isRunning && this$static.com_google_gwt_animation_client_Animation_runId == curRunId;
  }
  if (!this$static.com_google_gwt_animation_client_Animation_isStarted && curTime >= this$static.com_google_gwt_animation_client_Animation_startTime) {
    this$static.com_google_gwt_animation_client_Animation_isStarted = true;
    com_google_gwt_layout_client_Layout$1_$onUpdate__Lcom_google_gwt_layout_client_Layout$1_2DV(this$static, (1 + Math.cos($intern_3)) / 2);
    if (!(this$static.com_google_gwt_animation_client_Animation_isRunning && this$static.com_google_gwt_animation_client_Animation_runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.com_google_gwt_animation_client_Animation_isRunning = false;
    this$static.com_google_gwt_animation_client_Animation_isStarted = false;
    this$static.com_google_gwt_layout_client_Layout$1_this$01.com_google_gwt_layout_client_Layout_animation = null;
    com_google_gwt_layout_client_Layout_$layout__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this$static.com_google_gwt_layout_client_Layout$1_this$01, 0);
    return false;
  }
  return true;
}

function com_google_gwt_animation_client_Animation_Animation__Lcom_google_gwt_animation_client_AnimationScheduler_2V(scheduler){
  this.com_google_gwt_animation_client_Animation_callback = new com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V(this);
  this.com_google_gwt_animation_client_Animation_scheduler = scheduler;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(112, 1, {});
_.com_google_gwt_animation_client_Animation_duration = -1;
_.com_google_gwt_animation_client_Animation_isRunning = false;
_.com_google_gwt_animation_client_Animation_isStarted = false;
_.com_google_gwt_animation_client_Animation_runId = -1;
_.com_google_gwt_animation_client_Animation_startTime = -1;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1Animation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'Animation', 112);
function com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(this$static, timestamp){
  com_google_gwt_animation_client_Animation_$update__Lcom_google_gwt_animation_client_Animation_2DZ(this$static.com_google_gwt_animation_client_Animation$1_this$01, timestamp)?(this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_requestHandle = this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_scheduler.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_callback, this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_element)):(this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_requestHandle = null);
}

function com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V(this$0){
  this.com_google_gwt_animation_client_Animation$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(285, 1, {}, com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V);
_.execute__DV = function com_google_gwt_animation_client_Animation$1_execute__DV(timestamp){
  com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(this, timestamp);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1Animation$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'Animation/1', 285);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(328, 1, {});
var com_google_gwt_animation_client_AnimationScheduler_instance;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationScheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'AnimationScheduler', 328);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(87, 1, {87:1});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationScheduler$AnimationHandle_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'AnimationScheduler/AnimationHandle', 87);
function com_google_gwt_animation_client_AnimationSchedulerImplStandard_AnimationSchedulerImplStandard__V(){
}

function com_google_gwt_animation_client_AnimationSchedulerImplStandard_cancelImpl__Lcom_google_gwt_core_client_JavaScriptObject_2V(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function com_google_gwt_animation_client_AnimationSchedulerImplStandard_requestImpl__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_core_client_JavaScriptObject_2(cb, element){
  var callback = $entry(function(){
    var time = com_google_gwt_core_client_JsDate_now__D();
    cb.execute__DV(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(290, 328, {}, com_google_gwt_animation_client_AnimationSchedulerImplStandard_AnimationSchedulerImplStandard__V);
_.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2 = function com_google_gwt_animation_client_AnimationSchedulerImplStandard_requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(callback, element){
  var handle;
  handle = com_google_gwt_animation_client_AnimationSchedulerImplStandard_requestImpl__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_core_client_JavaScriptObject_2(callback, element);
  return new com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_AnimationSchedulerImplStandard$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2V(handle);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplStandard_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'AnimationSchedulerImplStandard', 290);
function com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_AnimationSchedulerImplStandard$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2V(val$handle){
  this.com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_val$handle2 = val$handle;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(291, 87, {87:1}, com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_AnimationSchedulerImplStandard$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2V);
_.cancel__V = function com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_cancel__V(){
  com_google_gwt_animation_client_AnimationSchedulerImplStandard_cancelImpl__Lcom_google_gwt_core_client_JavaScriptObject_2V(this.com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_val$handle2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplStandard$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'AnimationSchedulerImplStandard/1', 291);
function com_google_gwt_animation_client_AnimationSchedulerImplTimer_$cancelAnimationFrame__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2V(this$static, requestId){
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
  this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length == 0 && com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer);
}

function com_google_gwt_animation_client_AnimationSchedulerImplTimer_$updateAnimations__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer$AnimationHandleImpl_12_1classLit, {342:1, 3:1}, 90, this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length, 0, 1);
  curAnimations = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, curAnimations), 342);
  duration = new com_google_gwt_core_client_Duration_Duration__V;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
    com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(requestId.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_callback, duration.com_google_gwt_core_client_Duration_start);
  }
  this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length > 0 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer, java_lang_Math_max__III(16 - (com_google_gwt_core_client_JsDate_now__D() - duration.com_google_gwt_core_client_Duration_start)));
}

function com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V(){
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer = new com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(292, 328, {}, com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V);
_.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2 = function com_google_gwt_animation_client_AnimationSchedulerImplTimer_requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(callback, element){
  var requestId;
  requestId = new com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V(this, callback);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length == 1 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer, 16);
  return requestId;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'AnimationSchedulerImplTimer', 292);
function com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static){
  if (!this$static.com_google_gwt_user_client_Timer_timerId) {
    return;
  }
  ++this$static.com_google_gwt_user_client_Timer_cancelCounter;
  this$static.com_google_gwt_user_client_Timer_isRepeating?com_google_gwt_user_client_Timer_clearInterval__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value):com_google_gwt_user_client_Timer_clearTimeout__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value);
  this$static.com_google_gwt_user_client_Timer_timerId = null;
}

function com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('must be non-negative');
  }
  !!this$static.com_google_gwt_user_client_Timer_timerId && com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static);
  this$static.com_google_gwt_user_client_Timer_isRepeating = false;
  this$static.com_google_gwt_user_client_Timer_timerId = java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(this$static, this$static.com_google_gwt_user_client_Timer_cancelCounter), delayMillis));
}

function com_google_gwt_user_client_Timer_clearInterval__IV(timerId){
  $wnd.clearInterval(timerId);
}

function com_google_gwt_user_client_Timer_clearTimeout__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(timer, cancelCounter){
  return $entry(function(){
    timer.package_private$com_google_gwt_user_client_Timer$fire__IV(cancelCounter);
  }
  );
}

function com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(func, time){
  return $wnd.setTimeout(func, time);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(293, 1, {});
_.package_private$com_google_gwt_user_client_Timer$fire__IV = function com_google_gwt_user_client_Timer_fire__IV(scheduleCancelCounter){
  if (scheduleCancelCounter != this.com_google_gwt_user_client_Timer_cancelCounter) {
    return;
  }
  this.com_google_gwt_user_client_Timer_isRepeating || (this.com_google_gwt_user_client_Timer_timerId = null);
  com_google_gwt_animation_client_AnimationSchedulerImplTimer_$updateAnimations__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_this$01);
}
;
_.com_google_gwt_user_client_Timer_cancelCounter = 0;
_.com_google_gwt_user_client_Timer_isRepeating = false;
_.com_google_gwt_user_client_Timer_timerId = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Timer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'Timer', 293);
function com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this$0){
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(294, 293, {}, com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'AnimationSchedulerImplTimer/1', 294);
function com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V(this$0, callback){
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_this$01 = this$0;
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_callback = callback;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(90, 87, {87:1, 90:1}, com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V);
_.cancel__V = function com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_cancel__V(){
  com_google_gwt_animation_client_AnimationSchedulerImplTimer_$cancelAnimationFrame__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2V(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_this$01, this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer$AnimationHandleImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'AnimationSchedulerImplTimer/AnimationHandleImpl', 90);
function com_google_gwt_aria_client_Attribute_$getAriaValue__Lcom_google_gwt_aria_client_Attribute_2_3Ljava_lang_Object_2Ljava_lang_String_2(value_0){
  var buf, item_0, item$index, item$max;
  buf = new java_lang_StringBuilder_StringBuilder__V;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2((buf.java_lang_AbstractStringBuilder_string += '' + item_0 , buf), ' ');
  }
  return java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(buf.java_lang_AbstractStringBuilder_string);
}

function com_google_gwt_aria_client_Attribute_$set__Lcom_google_gwt_aria_client_Attribute_2Lcom_google_gwt_dom_client_Element_2_3Ljava_lang_Object_2V(this$static, element, values){
  com_google_gwt_dom_client_Element_$setAttribute__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(element, this$static.com_google_gwt_aria_client_Attribute_name, com_google_gwt_aria_client_Attribute_$getAriaValue__Lcom_google_gwt_aria_client_Attribute_2_3Ljava_lang_Object_2Ljava_lang_String_2(values));
}

function com_google_gwt_aria_client_Attribute_Attribute__Ljava_lang_String_2Ljava_lang_String_2V(name_0){
  this.com_google_gwt_aria_client_Attribute_name = name_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(113, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1aria_1client_1Attribute_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Attribute', 113);
function com_google_gwt_aria_client_AriaValueAttribute_AriaValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V(name_0){
  com_google_gwt_aria_client_Attribute_Attribute__Ljava_lang_String_2Ljava_lang_String_2V.call(this, name_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(52, 113, {}, com_google_gwt_aria_client_AriaValueAttribute_AriaValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1aria_1client_1AriaValueAttribute_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'AriaValueAttribute', 52);
function com_google_gwt_aria_client_PrimitiveValueAttribute_PrimitiveValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V(name_0){
  com_google_gwt_aria_client_Attribute_Attribute__Ljava_lang_String_2Ljava_lang_String_2V.call(this, name_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(89, 113, {}, com_google_gwt_aria_client_PrimitiveValueAttribute_PrimitiveValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1aria_1client_1PrimitiveValueAttribute_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'PrimitiveValueAttribute', 89);
function com_google_gwt_aria_client_State_$clinit__V(){
  com_google_gwt_aria_client_State_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new com_google_gwt_aria_client_PrimitiveValueAttribute_PrimitiveValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V('aria-busy');
  new com_google_gwt_aria_client_AriaValueAttribute_AriaValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V('aria-checked');
  new com_google_gwt_aria_client_PrimitiveValueAttribute_PrimitiveValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V('aria-disabled');
  new com_google_gwt_aria_client_AriaValueAttribute_AriaValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V('aria-expanded');
  new com_google_gwt_aria_client_AriaValueAttribute_AriaValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V('aria-grabbed');
  com_google_gwt_aria_client_State_HIDDEN = new com_google_gwt_aria_client_PrimitiveValueAttribute_PrimitiveValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V($intern_7);
  new com_google_gwt_aria_client_AriaValueAttribute_AriaValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V('aria-invalid');
  new com_google_gwt_aria_client_AriaValueAttribute_AriaValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V('aria-pressed');
  new com_google_gwt_aria_client_AriaValueAttribute_AriaValueAttribute__Ljava_lang_String_2Ljava_lang_String_2V('aria-selected');
}

var com_google_gwt_aria_client_State_HIDDEN;
function com_google_gwt_core_client_Duration_Duration__V(){
  this.com_google_gwt_core_client_Duration_start = com_google_gwt_core_client_JsDate_now__D();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(95, 1, {}, com_google_gwt_core_client_Duration_Duration__V);
_.com_google_gwt_core_client_Duration_start = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Duration_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Duration', 95);
function com_google_gwt_core_client_GWT_isScript__Z(){
  return true;
}

function java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(6, 1, $intern_8);
_.getMessage__Ljava_lang_String_2 = function java_lang_Throwable_getMessage__Ljava_lang_String_2(){
  return this.java_lang_Throwable_detailMessage;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Throwable_toString__Ljava_lang_String_2(){
  var className, msg;
  className = java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this.java_lang_Object__1_1_1clazz$);
  msg = this.getMessage__Ljava_lang_String_2();
  return msg != null?className + ': ' + msg:className;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Throwable', 6);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(64, 6, $intern_8);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Exception_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Exception', 64);
function java_lang_RuntimeException_RuntimeException__V(){
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, this.java_lang_Throwable_detailMessage);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V(message){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(11, 64, $intern_8, java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1RuntimeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'RuntimeException', 11);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(117, 11, $intern_8);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1JavaScriptExceptionBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'JavaScriptExceptionBase', 117);
function com_google_gwt_core_client_JavaScriptException_$clinit__V(){
  com_google_gwt_core_client_JavaScriptException_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_core_client_JavaScriptException_NOT_1SET = new java_lang_Object_Object__V;
}

function com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this$static){
  var exception;
  if (this$static.com_google_gwt_core_client_JavaScriptException_message == null) {
    exception = com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this$static.com_google_gwt_core_client_JavaScriptException_e;
    this$static.com_google_gwt_core_client_JavaScriptException_name = exception == null?'null':com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(exception)?'String':java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(exception));
    this$static.com_google_gwt_core_client_JavaScriptException_description = this$static.com_google_gwt_core_client_JavaScriptException_description + ': ' + (com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):exception + '');
    this$static.com_google_gwt_core_client_JavaScriptException_message = '(' + this$static.com_google_gwt_core_client_JavaScriptException_name + ') ' + this$static.com_google_gwt_core_client_JavaScriptException_description;
  }
}

function com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_JavaScriptException_$clinit__V();
  this.java_lang_Throwable_detailMessage = null;
  this.com_google_gwt_core_client_JavaScriptException_description = '';
  this.com_google_gwt_core_client_JavaScriptException_e = e;
  this.com_google_gwt_core_client_JavaScriptException_description = '';
}

function com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.message;
}

function com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.name;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(40, 117, {40:1, 3:1, 6:1}, com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V);
_.getMessage__Ljava_lang_String_2 = function com_google_gwt_core_client_JavaScriptException_getMessage__Ljava_lang_String_2(){
  com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this);
  return this.com_google_gwt_core_client_JavaScriptException_message;
}
;
_.getThrown__Ljava_lang_Object_2 = function com_google_gwt_core_client_JavaScriptException_getThrown__Ljava_lang_Object_2(){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this.com_google_gwt_core_client_JavaScriptException_e;
}
;
var com_google_gwt_core_client_JavaScriptException_NOT_1SET;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'JavaScriptException', 40);
function com_google_gwt_core_client_JsArray_$push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JavaScriptObject_2V(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function com_google_gwt_core_client_JsArrayString_$push__Lcom_google_gwt_core_client_JsArrayString_2Ljava_lang_String_2V(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function com_google_gwt_core_client_JsArrayString_$setLength__Lcom_google_gwt_core_client_JsArrayString_2IV(this$static, newLength){
  this$static.length = newLength;
}

function com_google_gwt_core_client_JsDate_now__D(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(300, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Scheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Scheduler', 300);
function com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var _;
}

function com_google_gwt_core_client_impl_Impl_enter__Z(){
  var now_0;
  if (com_google_gwt_core_client_impl_Impl_entryDepth != 0) {
    now_0 = com_google_gwt_core_client_JsDate_now__D();
    if (now_0 - com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled > 2000) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = now_0;
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = $wnd.setTimeout(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V, 10);
    }
  }
  if (com_google_gwt_core_client_impl_Impl_entryDepth++ == 0) {
    com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    return true;
  }
  return false;
}

function com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(jsFunction){
  return function(){
    if (com_google_gwt_core_client_GWT_isScript__Z()) {
      return com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
    }
     else {
      var _ = com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
      _ != null && (_ = _.val);
      return _;
    }
  }
  ;
}

function com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = com_google_gwt_core_client_impl_Impl_enter__Z();
  try {
    return com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args);
  }
   finally {
    com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry);
  }
}

function com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry){
  initialEntry && com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
  --com_google_gwt_core_client_impl_Impl_entryDepth;
  if (initialEntry) {
    if (com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId != -1) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId);
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
    }
  }
}

function com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(o){
  return o.$H || (o.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}

function com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V(){
  com_google_gwt_core_client_impl_Impl_entryDepth != 0 && (com_google_gwt_core_client_impl_Impl_entryDepth = 0);
  com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
}

var com_google_gwt_core_client_impl_Impl_entryDepth = 0, com_google_gwt_core_client_impl_Impl_sNextHashId = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
function com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V(){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE = new com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldDeferred;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands) {
    oldDeferred = this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands;
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = null;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = []);
    com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldDeferred, this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands);
  }
  !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = com_google_gwt_core_client_impl_SchedulerImpl_$runRepeatingTasks__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands));
}

function com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this$static){
  return !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands || !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  if (!this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning) {
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = true;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher = new com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue = new com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue, 50);
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$runRepeatingTasks__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new com_google_gwt_core_client_Duration_Duration__V;
  while (com_google_gwt_core_client_JsDate_now__D() - duration.com_google_gwt_core_client_Duration_start < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute__Z()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && com_google_gwt_core_client_JsArray_$push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JavaScriptObject_2V(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static, cmd){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands, [cmd, false]);
  com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static);
}

function com_google_gwt_core_client_impl_SchedulerImpl_$scheduleFinally__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static, cmd){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands, [cmd, false]);
}

function com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V(){
}

function com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z(cmd){
  return cmd.execute__Z();
}

function com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(queue, task){
  !queue && (queue = []);
  com_google_gwt_core_client_JsArray_$push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JavaScriptObject_2V(queue, task);
  return queue;
}

function com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute__Z() && (rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(rescheduled, t)):t[0].execute__V();
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 6)) {
        e = $e0;
        com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 40)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 40).getThrown__Ljava_lang_Object_2():e);
      }
       else 
        throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  return rescheduled;
}

function com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(cmd, delayMs){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V();
  function callback(){
    var ret = $entry(com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z)(cmd);
    !com_google_gwt_core_client_GWT_isScript__Z() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(139, 300, {}, com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V);
_.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
_.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = false;
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'SchedulerImpl', 139);
function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(140, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = true;
  com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Flusher_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'SchedulerImpl/Flusher', 140);
function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(141, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning && com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Rescuer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'SchedulerImpl/Rescuer', 141);
function com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V;
  com_google_gwt_core_client_impl_StackTraceCreator_collector = enforceLegacy?new com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V:c;
}

function com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(throwable, reference){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V();
  com_google_gwt_core_client_impl_StackTraceCreator_collector.collect__Ljava_lang_Object_2Ljava_lang_Object_2V(throwable, reference);
}

function com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

var com_google_gwt_core_client_impl_StackTraceCreator_collector;
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(311, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$Collector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'StackTraceCreator/Collector', 311);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(118, 311, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V);
_.collect__Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_collect__Ljava_lang_Object_2Ljava_lang_Object_2V(t, thrownIgnored){
  var seen = {}, com_google_gwt_core_client_impl_StackTraceCreator_getFunctionName__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2_name_0;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = (com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , callee.name || (callee.name = com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'StackTraceCreator/CollectorLegacy', 118);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  Error.stackTraceLimit = 64;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(312, 311, {});
_.collect__Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_collect__Ljava_lang_Object_2Ljava_lang_Object_2V(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModern_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'StackTraceCreator/CollectorModern', 312);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(119, 312, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModernNoSourceMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_9, 'StackTraceCreator/CollectorModernNoSourceMap', 119);
function com_google_gwt_core_shared_impl_InternalPreconditions_checkArrayType__ZLjava_lang_Object_2V(expression, errorMessage){
  if (!expression) {
    throw new java_lang_ArrayStoreException_ArrayStoreException__Ljava_lang_String_2V('' + errorMessage);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(expression, errorMessage){
  if (!expression) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('' + errorMessage);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_String_2_3Ljava_lang_Object_2V(expression, errorMessageArgs){
  if (!expression) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(com_google_gwt_core_shared_impl_InternalPreconditions_format__Ljava_lang_String_2_3Ljava_lang_Object_2Ljava_lang_String_2('%s > %s', errorMessageArgs));
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(expression){
  if (!expression) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalPositionIndexes__IIIV(start_0, end, size_0){
  if (start_0 < 0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_10 + start_0 + ' < 0');
  }
  if (end > size_0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('toIndex: ' + end + ' > size ' + size_0);
  }
  if (start_0 > end) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_10 + start_0 + ' > toIndex: ' + end);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference){
  if (reference == null) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  return reference;
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(reference, errorMessage){
  if (reference == null) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('' + errorMessage);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(expression){
  if (!expression) {
    throw new java_lang_IllegalStateException_IllegalStateException__V;
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_format__Ljava_lang_String_2_3Ljava_lang_Object_2Ljava_lang_String_2(template, args){
  var builder, i, placeholderStart, templateStart;
  template = '' + template;
  builder = new java_lang_StringBuilder_StringBuilder__IV(template.length + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(builder, template.substr(templateStart, placeholderStart - templateStart));
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(builder, java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(template, templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.java_lang_AbstractStringBuilder_string += ' [';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(builder, args[i++]);
    while (i < args.length) {
      builder.java_lang_AbstractStringBuilder_string += ', ';
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(builder, args[i++]);
    }
    builder.java_lang_AbstractStringBuilder_string += ']';
  }
  return builder.java_lang_AbstractStringBuilder_string;
}

function com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, newChild){
  return this$static.appendChild(newChild);
}

function com_google_gwt_dom_client_Node_$insertBefore__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function com_google_gwt_dom_client_Node_$removeFromParent__Lcom_google_gwt_dom_client_Node_2V(this$static){
  var parent_0;
  parent_0 = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(this$static);
  !!parent_0 && parent_0.removeChild(this$static);
}

function com_google_gwt_dom_client_Node_$replaceChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function com_google_gwt_dom_client_Element_$getSubPixelOffsetWidth__Lcom_google_gwt_dom_client_Element_2D(this$static){
  return this$static.offsetWidth || 0;
}

function com_google_gwt_dom_client_Element_$setAttribute__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static, className){
  this$static.className = className || '';
}

function com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static, html){
  this$static.innerHTML = html || '';
}

function com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function com_google_gwt_dom_client_DOMImpl_$getNextSiblingElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function com_google_gwt_dom_client_DOMImplStandard_$isOrHasChild__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(parent_0, child){
  return parent_0.contains(child);
}

function com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, text_0){
  elem.textContent = text_0 || '';
}

function com_google_gwt_dom_client_DOMImplStandardBase_$eventGetCurrentTarget__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_dom_client_EventTarget_2(event_0){
  return event_0.currentTarget || $wnd;
}

function com_google_gwt_dom_client_DOMImplStandardBase_$getTabIndex__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2I(elem){
  return typeof elem.tabIndex != 'undefined'?elem.tabIndex:-1;
}

function com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_11)?this$static.documentElement:this$static.body).clientHeight | 0;
}

function com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_11)?this$static.documentElement:this$static.body).clientWidth | 0;
}

function com_google_gwt_dom_client_Document_$getElementById__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(this$static, elementId){
  return this$static.getElementById(elementId);
}

function com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function java_lang_Enum_$compareTo__Ljava_lang_Enum_2Ljava_lang_Enum_2I(this$static, other){
  return this$static.java_lang_Enum_ordinal - other.java_lang_Enum_ordinal;
}

function java_lang_Enum_Enum__Ljava_lang_String_2IV(name_0, ordinal){
  this.java_lang_Enum_name = name_0;
  this.java_lang_Enum_ordinal = ordinal;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(4, 1, {3:1, 5:1, 4:1});
_.compareTo__Ljava_lang_Object_2I = function java_lang_Enum_compareTo__Ljava_lang_Object_2I(other){
  return java_lang_Enum_$compareTo__Ljava_lang_Enum_2Ljava_lang_Enum_2I(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 4));
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Enum_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.hashCode__I$ = function java_lang_Enum_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Enum_toString__Ljava_lang_String_2(){
  return this.java_lang_Enum_name != null?this.java_lang_Enum_name:'' + this.java_lang_Enum_ordinal;
}
;
_.java_lang_Enum_ordinal = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Enum_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Enum', 4);
function com_google_gwt_dom_client_Style$Display_$clinit__V(){
  com_google_gwt_dom_client_Style$Display_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_dom_client_Style$Display_NONE = new com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_BLOCK = new com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE = new com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK = new com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE_1TABLE = new com_google_gwt_dom_client_Style$Display$5_Style$Display$5__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_LIST_1ITEM = new com_google_gwt_dom_client_Style$Display$6_Style$Display$6__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_RUN_1IN = new com_google_gwt_dom_client_Style$Display$7_Style$Display$7__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE = new com_google_gwt_dom_client_Style$Display$8_Style$Display$8__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1CAPTION = new com_google_gwt_dom_client_Style$Display$9_Style$Display$9__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN_1GROUP = new com_google_gwt_dom_client_Style$Display$10_Style$Display$10__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1HEADER_1GROUP = new com_google_gwt_dom_client_Style$Display$11_Style$Display$11__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1FOOTER_1GROUP = new com_google_gwt_dom_client_Style$Display$12_Style$Display$12__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1ROW_1GROUP = new com_google_gwt_dom_client_Style$Display$13_Style$Display$13__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1CELL = new com_google_gwt_dom_client_Style$Display$14_Style$Display$14__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN = new com_google_gwt_dom_client_Style$Display$15_Style$Display$15__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1ROW = new com_google_gwt_dom_client_Style$Display$16_Style$Display$16__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INITIAL = new com_google_gwt_dom_client_Style$Display$17_Style$Display$17__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$Display_values___3Lcom_google_gwt_dom_client_Style$Display_2(){
  com_google_gwt_dom_client_Style$Display_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display_12_1classLit, 1), $intern_12, 7, 0, [com_google_gwt_dom_client_Style$Display_NONE, com_google_gwt_dom_client_Style$Display_BLOCK, com_google_gwt_dom_client_Style$Display_INLINE, com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK, com_google_gwt_dom_client_Style$Display_INLINE_1TABLE, com_google_gwt_dom_client_Style$Display_LIST_1ITEM, com_google_gwt_dom_client_Style$Display_RUN_1IN, com_google_gwt_dom_client_Style$Display_TABLE, com_google_gwt_dom_client_Style$Display_TABLE_1CAPTION, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1HEADER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1FOOTER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1ROW_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1CELL, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN, com_google_gwt_dom_client_Style$Display_TABLE_1ROW, com_google_gwt_dom_client_Style$Display_INITIAL]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(7, 4, $intern_13);
var com_google_gwt_dom_client_Style$Display_BLOCK, com_google_gwt_dom_client_Style$Display_INITIAL, com_google_gwt_dom_client_Style$Display_INLINE, com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK, com_google_gwt_dom_client_Style$Display_INLINE_1TABLE, com_google_gwt_dom_client_Style$Display_LIST_1ITEM, com_google_gwt_dom_client_Style$Display_NONE, com_google_gwt_dom_client_Style$Display_RUN_1IN, com_google_gwt_dom_client_Style$Display_TABLE, com_google_gwt_dom_client_Style$Display_TABLE_1CAPTION, com_google_gwt_dom_client_Style$Display_TABLE_1CELL, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1FOOTER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1HEADER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1ROW, com_google_gwt_dom_client_Style$Display_TABLE_1ROW_1GROUP;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display', 7, com_google_gwt_dom_client_Style$Display_values___3Lcom_google_gwt_dom_client_Style$Display_2);
function com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'NONE', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(221, 7, $intern_13, com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/1', 221, null);
function com_google_gwt_dom_client_Style$Display$10_Style$Display$10__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_COLUMN_GROUP', 9);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(230, 7, $intern_13, com_google_gwt_dom_client_Style$Display$10_Style$Display$10__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$10_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/10', 230, null);
function com_google_gwt_dom_client_Style$Display$11_Style$Display$11__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_HEADER_GROUP', 10);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(231, 7, $intern_13, com_google_gwt_dom_client_Style$Display$11_Style$Display$11__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$11_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/11', 231, null);
function com_google_gwt_dom_client_Style$Display$12_Style$Display$12__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_FOOTER_GROUP', 11);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(232, 7, $intern_13, com_google_gwt_dom_client_Style$Display$12_Style$Display$12__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$12_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/12', 232, null);
function com_google_gwt_dom_client_Style$Display$13_Style$Display$13__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_ROW_GROUP', 12);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(233, 7, $intern_13, com_google_gwt_dom_client_Style$Display$13_Style$Display$13__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$13_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/13', 233, null);
function com_google_gwt_dom_client_Style$Display$14_Style$Display$14__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_CELL', 13);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(234, 7, $intern_13, com_google_gwt_dom_client_Style$Display$14_Style$Display$14__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$14_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/14', 234, null);
function com_google_gwt_dom_client_Style$Display$15_Style$Display$15__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_COLUMN', 14);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(235, 7, $intern_13, com_google_gwt_dom_client_Style$Display$15_Style$Display$15__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$15_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/15', 235, null);
function com_google_gwt_dom_client_Style$Display$16_Style$Display$16__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_ROW', 15);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(236, 7, $intern_13, com_google_gwt_dom_client_Style$Display$16_Style$Display$16__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$16_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/16', 236, null);
function com_google_gwt_dom_client_Style$Display$17_Style$Display$17__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INITIAL', 16);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(237, 7, $intern_13, com_google_gwt_dom_client_Style$Display$17_Style$Display$17__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$17_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/17', 237, null);
function com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'BLOCK', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(222, 7, $intern_13, com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/2', 222, null);
function com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INLINE', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(223, 7, $intern_13, com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/3', 223, null);
function com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INLINE_BLOCK', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(224, 7, $intern_13, com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/4', 224, null);
function com_google_gwt_dom_client_Style$Display$5_Style$Display$5__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INLINE_TABLE', 4);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(225, 7, $intern_13, com_google_gwt_dom_client_Style$Display$5_Style$Display$5__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$5_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/5', 225, null);
function com_google_gwt_dom_client_Style$Display$6_Style$Display$6__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'LIST_ITEM', 5);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(226, 7, $intern_13, com_google_gwt_dom_client_Style$Display$6_Style$Display$6__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$6_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/6', 226, null);
function com_google_gwt_dom_client_Style$Display$7_Style$Display$7__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'RUN_IN', 6);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(227, 7, $intern_13, com_google_gwt_dom_client_Style$Display$7_Style$Display$7__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$7_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/7', 227, null);
function com_google_gwt_dom_client_Style$Display$8_Style$Display$8__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE', 7);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(228, 7, $intern_13, com_google_gwt_dom_client_Style$Display$8_Style$Display$8__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$8_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/8', 228, null);
function com_google_gwt_dom_client_Style$Display$9_Style$Display$9__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_CAPTION', 8);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(229, 7, $intern_13, com_google_gwt_dom_client_Style$Display$9_Style$Display$9__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$9_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Display/9', 229, null);
function com_google_gwt_dom_client_Style$Overflow_$clinit__V(){
  com_google_gwt_dom_client_Style$Overflow_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_dom_client_Style$Overflow_VISIBLE = new com_google_gwt_dom_client_Style$Overflow$1_Style$Overflow$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Overflow_HIDDEN = new com_google_gwt_dom_client_Style$Overflow$2_Style$Overflow$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Overflow_SCROLL = new com_google_gwt_dom_client_Style$Overflow$3_Style$Overflow$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Overflow_AUTO = new com_google_gwt_dom_client_Style$Overflow$4_Style$Overflow$4__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$Overflow_Style$Overflow__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$Overflow_values___3Lcom_google_gwt_dom_client_Style$Overflow_2(){
  com_google_gwt_dom_client_Style$Overflow_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow_12_1classLit, 1), $intern_12, 27, 0, [com_google_gwt_dom_client_Style$Overflow_VISIBLE, com_google_gwt_dom_client_Style$Overflow_HIDDEN, com_google_gwt_dom_client_Style$Overflow_SCROLL, com_google_gwt_dom_client_Style$Overflow_AUTO]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(27, 4, $intern_15);
var com_google_gwt_dom_client_Style$Overflow_AUTO, com_google_gwt_dom_client_Style$Overflow_HIDDEN, com_google_gwt_dom_client_Style$Overflow_SCROLL, com_google_gwt_dom_client_Style$Overflow_VISIBLE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Overflow', 27, com_google_gwt_dom_client_Style$Overflow_values___3Lcom_google_gwt_dom_client_Style$Overflow_2);
function com_google_gwt_dom_client_Style$Overflow$1_Style$Overflow$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Overflow_Style$Overflow__Ljava_lang_String_2IV.call(this, 'VISIBLE', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(238, 27, $intern_15, com_google_gwt_dom_client_Style$Overflow$1_Style$Overflow$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Overflow/1', 238, null);
function com_google_gwt_dom_client_Style$Overflow$2_Style$Overflow$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Overflow_Style$Overflow__Ljava_lang_String_2IV.call(this, 'HIDDEN', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(239, 27, $intern_15, com_google_gwt_dom_client_Style$Overflow$2_Style$Overflow$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Overflow/2', 239, null);
function com_google_gwt_dom_client_Style$Overflow$3_Style$Overflow$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Overflow_Style$Overflow__Ljava_lang_String_2IV.call(this, 'SCROLL', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(240, 27, $intern_15, com_google_gwt_dom_client_Style$Overflow$3_Style$Overflow$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Overflow/3', 240, null);
function com_google_gwt_dom_client_Style$Overflow$4_Style$Overflow$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Overflow_Style$Overflow__Ljava_lang_String_2IV.call(this, 'AUTO', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(241, 27, $intern_15, com_google_gwt_dom_client_Style$Overflow$4_Style$Overflow$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Overflow/4', 241, null);
function com_google_gwt_dom_client_Style$Position_$clinit__V(){
  com_google_gwt_dom_client_Style$Position_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_dom_client_Style$Position_STATIC = new com_google_gwt_dom_client_Style$Position$1_Style$Position$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Position_RELATIVE = new com_google_gwt_dom_client_Style$Position$2_Style$Position$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Position_ABSOLUTE = new com_google_gwt_dom_client_Style$Position$3_Style$Position$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Position_FIXED = new com_google_gwt_dom_client_Style$Position$4_Style$Position$4__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$Position_Style$Position__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$Position_values___3Lcom_google_gwt_dom_client_Style$Position_2(){
  com_google_gwt_dom_client_Style$Position_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position_12_1classLit, 1), $intern_12, 28, 0, [com_google_gwt_dom_client_Style$Position_STATIC, com_google_gwt_dom_client_Style$Position_RELATIVE, com_google_gwt_dom_client_Style$Position_ABSOLUTE, com_google_gwt_dom_client_Style$Position_FIXED]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(28, 4, $intern_16);
var com_google_gwt_dom_client_Style$Position_ABSOLUTE, com_google_gwt_dom_client_Style$Position_FIXED, com_google_gwt_dom_client_Style$Position_RELATIVE, com_google_gwt_dom_client_Style$Position_STATIC;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Position', 28, com_google_gwt_dom_client_Style$Position_values___3Lcom_google_gwt_dom_client_Style$Position_2);
function com_google_gwt_dom_client_Style$Position$1_Style$Position$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Position_Style$Position__Ljava_lang_String_2IV.call(this, 'STATIC', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(242, 28, $intern_16, com_google_gwt_dom_client_Style$Position$1_Style$Position$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Position/1', 242, null);
function com_google_gwt_dom_client_Style$Position$2_Style$Position$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Position_Style$Position__Ljava_lang_String_2IV.call(this, 'RELATIVE', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(243, 28, $intern_16, com_google_gwt_dom_client_Style$Position$2_Style$Position$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Position/2', 243, null);
function com_google_gwt_dom_client_Style$Position$3_Style$Position$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Position_Style$Position__Ljava_lang_String_2IV.call(this, 'ABSOLUTE', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(244, 28, $intern_16, com_google_gwt_dom_client_Style$Position$3_Style$Position$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Position/3', 244, null);
function com_google_gwt_dom_client_Style$Position$4_Style$Position$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Position_Style$Position__Ljava_lang_String_2IV.call(this, 'FIXED', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(245, 28, $intern_16, com_google_gwt_dom_client_Style$Position$4_Style$Position$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Position/4', 245, null);
function com_google_gwt_dom_client_Style$Unit_$clinit__V(){
  com_google_gwt_dom_client_Style$Unit_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_dom_client_Style$Unit_PX = new com_google_gwt_dom_client_Style$Unit$1_Style$Unit$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_PCT = new com_google_gwt_dom_client_Style$Unit$2_Style$Unit$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_EM = new com_google_gwt_dom_client_Style$Unit$3_Style$Unit$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_EX = new com_google_gwt_dom_client_Style$Unit$4_Style$Unit$4__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_PT = new com_google_gwt_dom_client_Style$Unit$5_Style$Unit$5__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_PC = new com_google_gwt_dom_client_Style$Unit$6_Style$Unit$6__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_IN = new com_google_gwt_dom_client_Style$Unit$7_Style$Unit$7__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_CM = new com_google_gwt_dom_client_Style$Unit$8_Style$Unit$8__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_MM = new com_google_gwt_dom_client_Style$Unit$9_Style$Unit$9__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$Unit_values___3Lcom_google_gwt_dom_client_Style$Unit_2(){
  com_google_gwt_dom_client_Style$Unit_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit_12_1classLit, 1), $intern_12, 13, 0, [com_google_gwt_dom_client_Style$Unit_PX, com_google_gwt_dom_client_Style$Unit_PCT, com_google_gwt_dom_client_Style$Unit_EM, com_google_gwt_dom_client_Style$Unit_EX, com_google_gwt_dom_client_Style$Unit_PT, com_google_gwt_dom_client_Style$Unit_PC, com_google_gwt_dom_client_Style$Unit_IN, com_google_gwt_dom_client_Style$Unit_CM, com_google_gwt_dom_client_Style$Unit_MM]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(13, 4, $intern_17);
var com_google_gwt_dom_client_Style$Unit_CM, com_google_gwt_dom_client_Style$Unit_EM, com_google_gwt_dom_client_Style$Unit_EX, com_google_gwt_dom_client_Style$Unit_IN, com_google_gwt_dom_client_Style$Unit_MM, com_google_gwt_dom_client_Style$Unit_PC, com_google_gwt_dom_client_Style$Unit_PCT, com_google_gwt_dom_client_Style$Unit_PT, com_google_gwt_dom_client_Style$Unit_PX;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Unit', 13, com_google_gwt_dom_client_Style$Unit_values___3Lcom_google_gwt_dom_client_Style$Unit_2);
function com_google_gwt_dom_client_Style$Unit$1_Style$Unit$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PX', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(212, 13, $intern_17, com_google_gwt_dom_client_Style$Unit$1_Style$Unit$1__Ljava_lang_String_2IV);
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$1_getType__Ljava_lang_String_2(){
  return 'px';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Unit/1', 212, null);
function com_google_gwt_dom_client_Style$Unit$2_Style$Unit$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PCT', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(213, 13, $intern_17, com_google_gwt_dom_client_Style$Unit$2_Style$Unit$2__Ljava_lang_String_2IV);
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$2_getType__Ljava_lang_String_2(){
  return '%';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Unit/2', 213, null);
function com_google_gwt_dom_client_Style$Unit$3_Style$Unit$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'EM', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(214, 13, $intern_17, com_google_gwt_dom_client_Style$Unit$3_Style$Unit$3__Ljava_lang_String_2IV);
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$3_getType__Ljava_lang_String_2(){
  return 'em';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Unit/3', 214, null);
function com_google_gwt_dom_client_Style$Unit$4_Style$Unit$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'EX', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(215, 13, $intern_17, com_google_gwt_dom_client_Style$Unit$4_Style$Unit$4__Ljava_lang_String_2IV);
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$4_getType__Ljava_lang_String_2(){
  return 'ex';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Unit/4', 215, null);
function com_google_gwt_dom_client_Style$Unit$5_Style$Unit$5__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PT', 4);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(216, 13, $intern_17, com_google_gwt_dom_client_Style$Unit$5_Style$Unit$5__Ljava_lang_String_2IV);
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$5_getType__Ljava_lang_String_2(){
  return 'pt';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$5_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Unit/5', 216, null);
function com_google_gwt_dom_client_Style$Unit$6_Style$Unit$6__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PC', 5);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(217, 13, $intern_17, com_google_gwt_dom_client_Style$Unit$6_Style$Unit$6__Ljava_lang_String_2IV);
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$6_getType__Ljava_lang_String_2(){
  return 'pc';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$6_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Unit/6', 217, null);
function com_google_gwt_dom_client_Style$Unit$7_Style$Unit$7__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'IN', 6);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(218, 13, $intern_17, com_google_gwt_dom_client_Style$Unit$7_Style$Unit$7__Ljava_lang_String_2IV);
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$7_getType__Ljava_lang_String_2(){
  return 'in';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$7_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Unit/7', 218, null);
function com_google_gwt_dom_client_Style$Unit$8_Style$Unit$8__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'CM', 7);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(219, 13, $intern_17, com_google_gwt_dom_client_Style$Unit$8_Style$Unit$8__Ljava_lang_String_2IV);
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$8_getType__Ljava_lang_String_2(){
  return 'cm';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$8_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Unit/8', 219, null);
function com_google_gwt_dom_client_Style$Unit$9_Style$Unit$9__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'MM', 8);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(220, 13, $intern_17, com_google_gwt_dom_client_Style$Unit$9_Style$Unit$9__Ljava_lang_String_2IV);
_.getType__Ljava_lang_String_2 = function com_google_gwt_dom_client_Style$Unit$9_getType__Ljava_lang_String_2(){
  return 'mm';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$9_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Unit/9', 220, null);
function com_google_gwt_dom_client_Style$Visibility_$clinit__V(){
  com_google_gwt_dom_client_Style$Visibility_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_dom_client_Style$Visibility_VISIBLE = new com_google_gwt_dom_client_Style$Visibility$1_Style$Visibility$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Visibility_HIDDEN = new com_google_gwt_dom_client_Style$Visibility$2_Style$Visibility$2__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$Visibility_Style$Visibility__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$Visibility_values___3Lcom_google_gwt_dom_client_Style$Visibility_2(){
  com_google_gwt_dom_client_Style$Visibility_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Visibility_12_1classLit, 1), $intern_12, 51, 0, [com_google_gwt_dom_client_Style$Visibility_VISIBLE, com_google_gwt_dom_client_Style$Visibility_HIDDEN]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(51, 4, $intern_18);
var com_google_gwt_dom_client_Style$Visibility_HIDDEN, com_google_gwt_dom_client_Style$Visibility_VISIBLE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Visibility_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Visibility', 51, com_google_gwt_dom_client_Style$Visibility_values___3Lcom_google_gwt_dom_client_Style$Visibility_2);
function com_google_gwt_dom_client_Style$Visibility$1_Style$Visibility$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Visibility_Style$Visibility__Ljava_lang_String_2IV.call(this, 'VISIBLE', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(246, 51, $intern_18, com_google_gwt_dom_client_Style$Visibility$1_Style$Visibility$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Visibility$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Visibility/1', 246, null);
function com_google_gwt_dom_client_Style$Visibility$2_Style$Visibility$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Visibility_Style$Visibility__Ljava_lang_String_2IV.call(this, 'HIDDEN', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(247, 51, $intern_18, com_google_gwt_dom_client_Style$Visibility$2_Style$Visibility$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Visibility$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Visibility/2', 247, null);
function com_google_gwt_dom_client_StyleInjector_$clinit__V(){
  com_google_gwt_dom_client_StyleInjector_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_dom_client_StyleInjector_toInject = [];
  com_google_gwt_dom_client_StyleInjector_toInjectAtEnd = [];
  com_google_gwt_dom_client_StyleInjector_toInjectAtStart = [];
  com_google_gwt_dom_client_StyleInjector_flusher = new com_google_gwt_dom_client_StyleInjector$1_StyleInjector$1__V;
}

function com_google_gwt_dom_client_StyleInjector_flush__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_dom_client_StyleElement_2(){
  com_google_gwt_dom_client_StyleInjector_$clinit__V();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (com_google_gwt_dom_client_StyleInjector_toInjectAtStart.length != 0) {
    css = com_google_gwt_dom_client_StyleInjector_toInjectAtStart.join('');
    maybeReturn = com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$injectStyleSheetAtStart__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2((com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$clinit__V() , com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_IMPL), css);
    !com_google_gwt_dom_client_StyleInjector_toInjectAtStart && (toReturn = maybeReturn);
    com_google_gwt_core_client_JsArrayString_$setLength__Lcom_google_gwt_core_client_JsArrayString_2IV(com_google_gwt_dom_client_StyleInjector_toInjectAtStart, 0);
  }
  if (com_google_gwt_dom_client_StyleInjector_toInject.length != 0) {
    css = com_google_gwt_dom_client_StyleInjector_toInject.join('');
    maybeReturn = com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$injectStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2((com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$clinit__V() , com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_IMPL), css);
    !com_google_gwt_dom_client_StyleInjector_toInject && (toReturn = maybeReturn);
    com_google_gwt_core_client_JsArrayString_$setLength__Lcom_google_gwt_core_client_JsArrayString_2IV(com_google_gwt_dom_client_StyleInjector_toInject, 0);
  }
  if (com_google_gwt_dom_client_StyleInjector_toInjectAtEnd.length != 0) {
    css = com_google_gwt_dom_client_StyleInjector_toInjectAtEnd.join('');
    maybeReturn = com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$injectStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2((com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$clinit__V() , com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_IMPL), css);
    !com_google_gwt_dom_client_StyleInjector_toInjectAtEnd && (toReturn = maybeReturn);
    com_google_gwt_core_client_JsArrayString_$setLength__Lcom_google_gwt_core_client_JsArrayString_2IV(com_google_gwt_dom_client_StyleInjector_toInjectAtEnd, 0);
  }
  com_google_gwt_dom_client_StyleInjector_needsInjection = false;
  return toReturn;
}

function com_google_gwt_dom_client_StyleInjector_schedule__V(){
  com_google_gwt_dom_client_StyleInjector_$clinit__V();
  if (!com_google_gwt_dom_client_StyleInjector_needsInjection) {
    com_google_gwt_dom_client_StyleInjector_needsInjection = true;
    com_google_gwt_core_client_impl_SchedulerImpl_$scheduleFinally__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), com_google_gwt_dom_client_StyleInjector_flusher);
  }
}

var com_google_gwt_dom_client_StyleInjector_flusher, com_google_gwt_dom_client_StyleInjector_needsInjection = false, com_google_gwt_dom_client_StyleInjector_toInject, com_google_gwt_dom_client_StyleInjector_toInjectAtEnd, com_google_gwt_dom_client_StyleInjector_toInjectAtStart;
function com_google_gwt_dom_client_StyleInjector$1_StyleInjector$1__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(206, 1, {}, com_google_gwt_dom_client_StyleInjector$1_StyleInjector$1__V);
_.execute__V = function com_google_gwt_dom_client_StyleInjector$1_execute__V(){
  (com_google_gwt_dom_client_StyleInjector_$clinit__V() , com_google_gwt_dom_client_StyleInjector_needsInjection) && com_google_gwt_dom_client_StyleInjector_flush__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_dom_client_StyleElement_2();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1StyleInjector$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'StyleInjector/1', 206);
function com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$clinit__V(){
  com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_IMPL = new com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_StyleInjector$StyleInjectorImpl__V;
}

function com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$createElement__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(contents){
  var style;
  style = $doc.createElement('style');
  com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(style, 'language', 'text/css');
  com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(style, contents);
  return style;
}

function com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$getHead__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2Lcom_google_gwt_dom_client_HeadElement_2(this$static){
  var elt;
  if (!this$static.com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_head) {
    elt = $doc.getElementsByTagName('head')[0];
    this$static.com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_head = elt;
  }
  return this$static.com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_head;
}

function com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$injectStyleSheet__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(this$static, contents){
  var style;
  style = com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$createElement__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(contents);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$getHead__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2Lcom_google_gwt_dom_client_HeadElement_2(this$static), style);
  return style;
}

function com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$injectStyleSheetAtStart__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(this$static, contents){
  var style;
  style = com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$createElement__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2Ljava_lang_String_2Lcom_google_gwt_dom_client_StyleElement_2(contents);
  com_google_gwt_dom_client_Node_$insertBefore__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_$getHead__Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2Lcom_google_gwt_dom_client_HeadElement_2(this$static), style, this$static.com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_head.firstChild);
  return style;
}

function com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_StyleInjector$StyleInjectorImpl__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(205, 1, {}, com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_StyleInjector$StyleInjectorImpl__V);
var com_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_IMPL;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1StyleInjector$StyleInjectorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'StyleInjector/StyleInjectorImpl', 205);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(318, 1, {});
_.toString__Ljava_lang_String_2$ = function com_google_web_bindery_event_shared_Event_toString__Ljava_lang_String_2(){
  return 'An event type';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'Event', 318);
function com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(this$static, source){
  this$static.com_google_web_bindery_event_shared_Event_source = source;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(319, 318, {});
_.com_google_gwt_event_shared_GwtEvent_dead = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_20, 'GwtEvent', 319);
function com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(this$static, nativeEvent){
  this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent = nativeEvent;
}

function com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(this$static, relativeElem){
  this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem = relativeElem;
}

function com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (com_google_gwt_event_dom_client_DomEvent_registered) {
    types = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered, nativeEvent.type), 25);
    if (types) {
      for (type$iterator = types.iterator__Ljava_util_Iterator_2(); type$iterator.hasNext__Z();) {
        type_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(type$iterator.next__Ljava_lang_Object_2(), 82);
        currentNative = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
        currentRelativeElem = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem;
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, nativeEvent);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, relativeElem);
        com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlerSource, type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight);
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentNative);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentRelativeElem);
      }
    }
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(324, 319, {});
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_dom_client_DomEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_DomEvent_registered;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'DomEvent', 324);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(325, 324, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1HumanInputEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'HumanInputEvent', 325);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(326, 325, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'MouseEvent', 326);
function com_google_gwt_event_dom_client_ClickEvent_$clinit__V(){
  com_google_gwt_event_dom_client_ClickEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_event_dom_client_ClickEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(new com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
}

function com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(260, 326, {}, com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_ClickEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 299).onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(this);
}
;
var com_google_gwt_event_dom_client_ClickEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1ClickEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'ClickEvent', 260);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(153, 1, {});
_.hashCode__I$ = function com_google_web_bindery_event_shared_Event$Type_hashCode__I(){
  return this.com_google_web_bindery_event_shared_Event$Type_index;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_web_bindery_event_shared_Event$Type_toString__Ljava_lang_String_2(){
  return 'Event type';
}
;
_.com_google_web_bindery_event_shared_Event$Type_index = 0;
var com_google_web_bindery_event_shared_Event$Type_nextHashCode = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'Event/Type', 153);
function com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V(){
  this.com_google_web_bindery_event_shared_Event$Type_index = ++com_google_web_bindery_event_shared_Event$Type_nextHashCode;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(14, 153, {}, com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_20, 'GwtEvent/Type', 14);
function com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(flyweight){
  var types;
  com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V.call(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = flyweight;
  !com_google_gwt_event_dom_client_DomEvent_registered && (com_google_gwt_event_dom_client_DomEvent_registered = new com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
  types = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered.com_google_gwt_event_dom_client_PrivateMap_map[$intern_22], 25);
  if (!types) {
    types = new java_util_ArrayList_ArrayList__V;
    com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(com_google_gwt_event_dom_client_DomEvent_registered, types);
  }
  types.add__Ljava_lang_Object_2Z(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_name = $intern_22;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(82, 14, {82:1}, com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'DomEvent/Type', 82);
function com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return this$static.com_google_gwt_event_dom_client_PrivateMap_map[key];
}

function com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, value_0){
  this$static.com_google_gwt_event_dom_client_PrivateMap_map[$intern_22] = value_0;
}

function com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V(){
  this.com_google_gwt_event_dom_client_PrivateMap_map = {};
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(264, 1, {}, com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1PrivateMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_21, 'PrivateMap', 264);
function com_google_gwt_event_logical_shared_AttachEvent_AttachEvent__ZV(){
}

function com_google_gwt_event_logical_shared_AttachEvent_fire__Lcom_google_gwt_event_logical_shared_HasAttachHandlers_2ZV(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_AttachEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_AttachEvent_AttachEvent__ZV;
    !!source.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source.com_google_gwt_user_client_ui_Widget_handlerManager, event_0);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(152, 319, {}, com_google_gwt_event_logical_shared_AttachEvent_AttachEvent__ZV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_AttachEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 337);
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_AttachEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_AttachEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_AttachEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1AttachEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'AttachEvent', 152);
function com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV(){
}

function com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_CloseEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source, event_0);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(211, 319, {}, com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 340);
  com_google_gwt_user_client_ui_RootPanel_detachWidgets__V();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_CloseEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_CloseEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1CloseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'CloseEvent', 211);
function com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV(){
}

function com_google_gwt_event_logical_shared_ResizeEvent_fire__Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2IIV(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_ResizeEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source, event_0);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(287, 319, {}, com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_ResizeEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_user_client_ui_LayoutPanel_$onResize__Lcom_google_gwt_user_client_ui_LayoutPanel_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 341).com_google_gwt_user_client_ui_RootLayoutPanel$1_this$01);
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_ResizeEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_ResizeEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_ResizeEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1ResizeEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'ResizeEvent', 287);
function com_google_gwt_event_logical_shared_ValueChangeEvent_$dispatch__Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2V(this$static, handler){
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$handleTokenChange__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Ljava_lang_String_2V(handler, this$static.com_google_gwt_event_logical_shared_ValueChangeEvent_value);
}

function com_google_gwt_event_logical_shared_ValueChangeEvent_ValueChangeEvent__Ljava_lang_Object_2V(value_0){
  this.com_google_gwt_event_logical_shared_ValueChangeEvent_value = value_0;
}

function com_google_gwt_event_logical_shared_ValueChangeEvent_fire__Lcom_google_gwt_event_logical_shared_HasValueChangeHandlers_2Ljava_lang_Object_2V(source, value_0){
  var event_0;
  if (com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_ValueChangeEvent_ValueChangeEvent__Ljava_lang_Object_2V(value_0);
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source.com_google_gwt_user_client_History$HistoryEventSource_handlers, event_0);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(207, 319, {}, com_google_gwt_event_logical_shared_ValueChangeEvent_ValueChangeEvent__Ljava_lang_Object_2V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_ValueChangeEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_logical_shared_ValueChangeEvent_$dispatch__Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 296));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_ValueChangeEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1ValueChangeEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'ValueChangeEvent', 207);
function com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  return new com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, type_0, handler));
}

function com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  var e, oldSource;
  !event_0.com_google_gwt_event_shared_GwtEvent_dead || (event_0.com_google_gwt_event_shared_GwtEvent_dead = false , event_0.com_google_web_bindery_event_shared_Event_source = null);
  oldSource = event_0.com_google_web_bindery_event_shared_Event_source;
  com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(event_0, this$static.com_google_gwt_event_shared_HandlerManager_source);
  try {
    com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, event_0, null);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 50)) {
      e = $e0;
      throw new com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(e.com_google_web_bindery_event_shared_UmbrellaException_causes);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
   finally {
    oldSource == null?(event_0.com_google_gwt_event_shared_GwtEvent_dead = true , event_0.com_google_web_bindery_event_shared_Event_source = null):(event_0.com_google_web_bindery_event_shared_Event_source = oldSource);
  }
}

function com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(source){
  this.com_google_gwt_event_shared_HandlerManager_eventBus = new com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV;
  this.com_google_gwt_event_shared_HandlerManager_source = source;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(58, 1, {8:1}, com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_20, 'HandlerManager', 58);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(320, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1EventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'EventBus', 320);
function com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, command){
  !this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas && (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = new java_util_ArrayList_ArrayList__V);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas, command);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  if (!type_0) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot add a handler with a null type');
  }
  if (handler == null) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot add a null handler');
  }
  this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, new com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, handler)):com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, null, handler);
  return new com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, handler);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  var l;
  l = com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source);
  l.add__Ljava_lang_Object_2Z(handler);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static, event_0, source){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot fire null event');
  }
  try {
    ++this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    source != null && (event_0.com_google_web_bindery_event_shared_Event_source = source);
    handlers = com_google_web_bindery_event_shared_SimpleEventBus_$getDispatchList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, event_0.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(), source);
    causes = null;
    it = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?handlers.listIterator__ILjava_util_ListIterator_2(handlers.size__I()):handlers.listIterator__Ljava_util_ListIterator_2();
    while (this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.hasPrevious__Z():it.hasNext__Z()) {
      handler = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.previous__Ljava_lang_Object_2():it.next__Ljava_lang_Object_2();
      try {
        event_0.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 30));
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 6)) {
          e = $e0;
          !causes && (causes = new java_util_HashSet_HashSet__V);
          java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(causes, e);
        }
         else 
          throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
    if (causes) {
      throw new com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes);
    }
  }
   finally {
    --this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth == 0 && com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static);
  }
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  var l, removed, com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0;
  l = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source);
  removed = l.remove__Ljava_lang_Object_2Z(handler);
  removed && l.isEmpty__Z() && (com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map.get__Ljava_lang_Object_2Ljava_lang_Object_2(type_0), 46) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.remove__Ljava_lang_Object_2Ljava_lang_Object_2(source), 25) , com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.isEmpty__Z() && this$static.com_google_web_bindery_event_shared_SimpleEventBus_map.remove__Ljava_lang_Object_2Ljava_lang_Object_2(type_0) , undefined);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map.get__Ljava_lang_Object_2Ljava_lang_Object_2(type_0), 46);
  if (!sourceMap) {
    sourceMap = new java_util_HashMap_HashMap__V;
    this$static.com_google_web_bindery_event_shared_SimpleEventBus_map.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(type_0, sourceMap);
  }
  handlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(sourceMap.get__Ljava_lang_Object_2Ljava_lang_Object_2(source), 25);
  if (!handlers) {
    handlers = new java_util_ArrayList_ArrayList__V;
    sourceMap.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(source, handlers);
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$getDispatchList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source){
  var directHandlers, globalHandlers, rtn;
  directHandlers = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source);
  if (source == null) {
    return directHandlers;
  }
  globalHandlers = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, null);
  rtn = new java_util_ArrayList_ArrayList__Ljava_util_Collection_2V(directHandlers);
  java_util_ArrayList_$addAll__Ljava_util_ArrayList_2Ljava_util_Collection_2Z(rtn, globalHandlers);
  return rtn;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map.get__Ljava_lang_Object_2Ljava_lang_Object_2(type_0), 46);
  if (!sourceMap) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  handlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(sourceMap.get__Ljava_lang_Object_2Ljava_lang_Object_2(source), 25);
  if (!handlers) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static){
  var c, c$iterator;
  if (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas) {
    try {
      for (c$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas); c$iterator.java_util_AbstractList$IteratorImpl_i < c$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
        c = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(c$iterator.java_util_AbstractList$IteratorImpl_i < c$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(c$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(c$iterator.java_util_AbstractList$IteratorImpl_last = c$iterator.java_util_AbstractList$IteratorImpl_i++), 298));
        c.execute__V();
      }
    }
     finally {
      this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = null;
    }
  }
}

function com_google_web_bindery_event_shared_SimpleEventBus_SimpleEventBus__V(){
  com_google_web_bindery_event_shared_SimpleEventBus_SimpleEventBus__ZV.call(this);
}

function com_google_web_bindery_event_shared_SimpleEventBus_SimpleEventBus__ZV(){
  this.com_google_web_bindery_event_shared_SimpleEventBus_map = new java_util_HashMap_HashMap__V;
  this.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = false;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(79, 320, {}, com_google_web_bindery_event_shared_SimpleEventBus_SimpleEventBus__V);
_.addHandler__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2 = function com_google_web_bindery_event_shared_SimpleEventBus_addHandler__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(type_0, handler){
  return com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this, type_0, handler);
}
;
_.doRemove__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_web_bindery_event_shared_SimpleEventBus_doRemove__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(type_0, source, handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this, new com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this, type_0, source, handler)):com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this, type_0, source, handler);
}
;
_.fireEvent__Lcom_google_web_bindery_event_shared_Event_2V = function com_google_web_bindery_event_shared_SimpleEventBus_fireEvent__Lcom_google_web_bindery_event_shared_Event_2V(event_0){
  com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this, event_0, null);
}
;
_.fireEventFromSource__Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V = function com_google_web_bindery_event_shared_SimpleEventBus_fireEventFromSource__Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(event_0, source){
  com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this, event_0, source);
}
;
_.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth = 0;
_.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'SimpleEventBus', 79);
function com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV(){
  com_google_web_bindery_event_shared_SimpleEventBus_SimpleEventBus__ZV.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(180, 79, {}, com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV);
_.doRemove__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_gwt_event_shared_HandlerManager$Bus_doRemove__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(type_0, source, handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this, new com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this, type_0, source, handler)):com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this, type_0, source, handler);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$Bus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_20, 'HandlerManager/Bus', 180);
function com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(real){
  this.com_google_gwt_event_shared_LegacyHandlerWrapper_real = real;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(208, 1, {295:1}, com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V);
_.removeHandler__V = function com_google_gwt_event_shared_LegacyHandlerWrapper_removeHandler__V(){
  com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1LegacyHandlerWrapper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_20, 'LegacyHandlerWrapper', 208);
function com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes), com_google_web_bindery_event_shared_UmbrellaException_makeCause__Ljava_util_Set_2Ljava_lang_Throwable_2(causes));
  this.com_google_web_bindery_event_shared_UmbrellaException_causes = causes;
}

function com_google_web_bindery_event_shared_UmbrellaException_makeCause__Ljava_util_Set_2Ljava_lang_Throwable_2(causes){
  var iterator;
  iterator = causes.iterator__Ljava_util_Iterator_2();
  if (!iterator.hasNext__Z()) {
    return null;
  }
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(iterator.next__Ljava_lang_Object_2(), 6);
}

function com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes){
  var b, count, first, t, t$iterator;
  count = causes.size__I();
  if (count == 0) {
    return null;
  }
  b = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator__Ljava_util_Iterator_2(); t$iterator.hasNext__Z();) {
    t = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(t$iterator.next__Ljava_lang_Object_2(), 6);
    first?(first = false):(b.java_lang_AbstractStringBuilder_string += '; ' , b);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(b, t.getMessage__Ljava_lang_String_2());
  }
  return b.java_lang_AbstractStringBuilder_string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(50, 11, $intern_24, com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, $intern_25, 50);
function com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(107, 50, $intern_24, com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_20, $intern_25, 107);
function com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(name_0, value_0){
  if (null == value_0) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(name_0 + ' cannot be null');
  }
}

function com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(array), array.java_lang_Object_castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(array, length_0){
  var result;
  result = com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(0, length_0);
  com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(array), array.java_lang_Object_castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions){
  return java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions);
}

function com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0);
  com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.java_lang_Object__1_1_1clazz$ = arrayClass;
  array.java_lang_Object_castableTypeMap$ = castableTypeMap;
  array.java_lang_Object_typeMarker$ = com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function com_google_gwt_lang_Array_nativeArraySplice__Ljava_lang_Object_2ILjava_lang_Object_2IIZV(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0)) {
          throw new java_lang_ArrayStoreException_ArrayStoreException__V;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, elementTypeId)) {
            throw new java_lang_ArrayStoreException_ArrayStoreException__V;
          }
          break;
        }

      case 2:
        if (!(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(value_0))) {
          throw new java_lang_ArrayStoreException_ArrayStoreException__V;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(value_0)) && !com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, elementTypeId)) {
            throw new java_lang_ArrayStoreException_ArrayStoreException__V;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function com_google_gwt_lang_Exceptions_cacheJavaScriptException__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2V(e, jse){
  if (e && typeof e == $intern_0) {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var jse;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 40)) {
    jse = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 40);
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(jse.com_google_gwt_core_client_JavaScriptException_e) !== com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2((com_google_gwt_core_client_JavaScriptException_$clinit__V() , com_google_gwt_core_client_JavaScriptException_NOT_1SET))) {
      return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(jse.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:jse.com_google_gwt_core_client_JavaScriptException_e;
    }
  }
  return e;
}

function com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var jse;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 6)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e);
    com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(jse, e);
    com_google_gwt_lang_Exceptions_cacheJavaScriptException__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2V(e, jse);
  }
  return jse;
}

function com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_26;
  a1 = value_0 >> 22 & $intern_26;
  a2 = value_0 < 0?1048575:0;
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a0, a1, a2);
}

function com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(l, m, h){
  return {l:l, m:m, h:h};
}

function com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    com_google_gwt_lang_LongLib_boxedValues == null && (com_google_gwt_lang_LongLib_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1LongLibBase$LongEmul_12_1classLit, $intern_12, 346, 256, 0, 1));
    result = com_google_gwt_lang_LongLib_boxedValues[rebase];
    !result && (result = com_google_gwt_lang_LongLib_boxedValues[rebase] = com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0));
    return result;
  }
  return com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0);
}

var com_google_gwt_lang_LongLib_boxedValues;
function com_google_gwt_lang_LongLib$Const_$clinit__V(){
  com_google_gwt_lang_LongLib$Const_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_lang_LongLib$Const_MAX_1VALUE = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2($intern_26, $intern_26, 524287);
  com_google_gwt_lang_LongLib$Const_MIN_1VALUE = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, $intern_27);
  com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(1);
  com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(2);
  com_google_gwt_lang_LongLib$Const_ZERO = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(0);
}

var com_google_gwt_lang_LongLib$Const_MAX_1VALUE, com_google_gwt_lang_LongLib$Const_MIN_1VALUE, com_google_gwt_lang_LongLib$Const_ZERO;
function com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(o){
  return o.java_lang_Object_typeMarker$ === com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V;
}

function com_google_gwt_lang_com_100046projectname_100046project_100046Project_1_1EntryMethodHolder_init__V(){
  $wnd.setTimeout($entry(com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V));
  com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V();
  com_gwtplatform_mvp_client_DelayedBindRegistry_bind__Lcom_google_gwt_inject_client_Ginjector_2V((com_gwtplatform_mvp_client_ClientGinjector_$clinit__V() , com_gwtplatform_mvp_client_ClientGinjector_SINGLETON));
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$handleTokenChange__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Ljava_lang_String_2V(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$DefaultBootstrapper$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_DefaultBootstrapper_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(com_gwtplatform_mvp_client_ClientGinjector_SINGLETON.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector)).com_gwtplatform_mvp_client_DefaultBootstrapper_placeManager, (com_google_gwt_user_client_History_$clinit__V() , com_google_gwt_user_client_History_$clinit__V() , com_google_gwt_user_client_History_token));
}

function com_google_gwt_layout_client_Layout_$adjustHorizontalConstraints__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$Layer_2V(this$static, parentWidth, l){
  var leftPx, rightPx, widthPx;
  leftPx = l.com_google_gwt_layout_client_Layout$Layer_left * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_leftUnit, false);
  rightPx = l.com_google_gwt_layout_client_Layout$Layer_right * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_rightUnit, false);
  widthPx = l.com_google_gwt_layout_client_Layout$Layer_width * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_widthUnit, false);
  if (l.com_google_gwt_layout_client_Layout$Layer_setLeft && !l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft) {
    l.com_google_gwt_layout_client_Layout$Layer_setLeft = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setWidth) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetRight = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceRight = (parentWidth - (leftPx + widthPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetRightUnit, false);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceWidth = (parentWidth - (leftPx + rightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetWidthUnit, false);
    }
  }
   else if (l.com_google_gwt_layout_client_Layout$Layer_setWidth && !l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth) {
    l.com_google_gwt_layout_client_Layout$Layer_setWidth = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setLeft) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetRight = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceRight = (parentWidth - (leftPx + widthPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetRightUnit, false);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceLeft = (parentWidth - (rightPx + widthPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit, false);
    }
  }
   else if (l.com_google_gwt_layout_client_Layout$Layer_setRight && !l.com_google_gwt_layout_client_Layout$Layer_setTargetRight) {
    l.com_google_gwt_layout_client_Layout$Layer_setRight = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setWidth) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceLeft = (parentWidth - (rightPx + widthPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit, false);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceWidth = (parentWidth - (leftPx + rightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetWidthUnit, false);
    }
  }
  l.com_google_gwt_layout_client_Layout$Layer_setLeft = l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft;
  l.com_google_gwt_layout_client_Layout$Layer_setRight = l.com_google_gwt_layout_client_Layout$Layer_setTargetRight;
  l.com_google_gwt_layout_client_Layout$Layer_setWidth = l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth;
  l.com_google_gwt_layout_client_Layout$Layer_leftUnit = l.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit;
  l.com_google_gwt_layout_client_Layout$Layer_rightUnit = l.com_google_gwt_layout_client_Layout$Layer_targetRightUnit;
  l.com_google_gwt_layout_client_Layout$Layer_widthUnit = l.com_google_gwt_layout_client_Layout$Layer_targetWidthUnit;
}

function com_google_gwt_layout_client_Layout_$adjustVerticalConstraints__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$Layer_2V(this$static, parentHeight, l){
  var bottomPx, heightPx, topPx;
  topPx = l.com_google_gwt_layout_client_Layout$Layer_top * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_topUnit, true);
  bottomPx = l.com_google_gwt_layout_client_Layout$Layer_bottom * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_bottomUnit, true);
  heightPx = l.com_google_gwt_layout_client_Layout$Layer_height * com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_heightUnit, true);
  if (l.com_google_gwt_layout_client_Layout$Layer_setTop && !l.com_google_gwt_layout_client_Layout$Layer_setTargetTop) {
    l.com_google_gwt_layout_client_Layout$Layer_setTop = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setHeight) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceBottom = (parentHeight - (topPx + heightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit, true);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceHeight = (parentHeight - (topPx + bottomPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetHeightUnit, true);
    }
  }
   else if (l.com_google_gwt_layout_client_Layout$Layer_setHeight && !l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight) {
    l.com_google_gwt_layout_client_Layout$Layer_setHeight = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setTop) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceBottom = (parentHeight - (topPx + heightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit, true);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetTop = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceTop = (parentHeight - (bottomPx + heightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetTopUnit, true);
    }
  }
   else if (l.com_google_gwt_layout_client_Layout$Layer_setBottom && !l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom) {
    l.com_google_gwt_layout_client_Layout$Layer_setBottom = false;
    if (l.com_google_gwt_layout_client_Layout$Layer_setHeight) {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetTop = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceTop = (parentHeight - (bottomPx + heightPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetTopUnit, true);
    }
     else {
      l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight = true;
      l.com_google_gwt_layout_client_Layout$Layer_sourceHeight = (parentHeight - (topPx + bottomPx)) / com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, l.com_google_gwt_layout_client_Layout$Layer_targetHeightUnit, true);
    }
  }
  l.com_google_gwt_layout_client_Layout$Layer_setTop = l.com_google_gwt_layout_client_Layout$Layer_setTargetTop;
  l.com_google_gwt_layout_client_Layout$Layer_setBottom = l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom;
  l.com_google_gwt_layout_client_Layout$Layer_setHeight = l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight;
  l.com_google_gwt_layout_client_Layout$Layer_topUnit = l.com_google_gwt_layout_client_Layout$Layer_targetTopUnit;
  l.com_google_gwt_layout_client_Layout$Layer_bottomUnit = l.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit;
  l.com_google_gwt_layout_client_Layout$Layer_heightUnit = l.com_google_gwt_layout_client_Layout$Layer_targetHeightUnit;
}

function com_google_gwt_layout_client_Layout_$attachChild__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_Object_2Lcom_google_gwt_layout_client_Layout$Layer_2(this$static, child){
  var container, layer;
  container = com_google_gwt_layout_client_LayoutImpl_$attachChild__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_layout_client_Layout_parentElem, child);
  layer = new com_google_gwt_layout_client_Layout$Layer_Layout$Layer__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_Object_2V(container, child);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_layout_client_Layout_layers, layer);
  return layer;
}

function com_google_gwt_layout_client_Layout_$getUnitSize__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, unit, vertical){
  return com_google_gwt_layout_client_LayoutImpl_$getUnitSizeInPixels__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static.com_google_gwt_layout_client_Layout_impl, this$static.com_google_gwt_layout_client_Layout_parentElem, unit, vertical);
}

function com_google_gwt_layout_client_Layout_$layout__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this$static, duration){
  var l, l$iterator, l$iterator0, parentHeight, parentWidth;
  !!this$static.com_google_gwt_layout_client_Layout_animation && com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2V(this$static.com_google_gwt_layout_client_Layout_animation);
  if (duration == 0) {
    for (l$iterator0 = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_gwt_layout_client_Layout_layers); l$iterator0.java_util_AbstractList$IteratorImpl_i < l$iterator0.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
      l = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(l$iterator0.java_util_AbstractList$IteratorImpl_i < l$iterator0.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(l$iterator0.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(l$iterator0.java_util_AbstractList$IteratorImpl_last = l$iterator0.java_util_AbstractList$IteratorImpl_i++), 61));
      l.com_google_gwt_layout_client_Layout$Layer_left = l.com_google_gwt_layout_client_Layout$Layer_sourceLeft = l.com_google_gwt_layout_client_Layout$Layer_targetLeft;
      l.com_google_gwt_layout_client_Layout$Layer_top = l.com_google_gwt_layout_client_Layout$Layer_sourceTop = l.com_google_gwt_layout_client_Layout$Layer_targetTop;
      l.com_google_gwt_layout_client_Layout$Layer_right = l.com_google_gwt_layout_client_Layout$Layer_sourceRight = l.com_google_gwt_layout_client_Layout$Layer_targetRight;
      l.com_google_gwt_layout_client_Layout$Layer_bottom = l.com_google_gwt_layout_client_Layout$Layer_sourceBottom = l.com_google_gwt_layout_client_Layout$Layer_targetBottom;
      l.com_google_gwt_layout_client_Layout$Layer_width = l.com_google_gwt_layout_client_Layout$Layer_sourceWidth = l.com_google_gwt_layout_client_Layout$Layer_targetWidth;
      l.com_google_gwt_layout_client_Layout$Layer_height = l.com_google_gwt_layout_client_Layout$Layer_sourceHeight = l.com_google_gwt_layout_client_Layout$Layer_targetHeight;
      l.com_google_gwt_layout_client_Layout$Layer_setLeft = l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft;
      l.com_google_gwt_layout_client_Layout$Layer_setTop = l.com_google_gwt_layout_client_Layout$Layer_setTargetTop;
      l.com_google_gwt_layout_client_Layout$Layer_setRight = l.com_google_gwt_layout_client_Layout$Layer_setTargetRight;
      l.com_google_gwt_layout_client_Layout$Layer_setBottom = l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom;
      l.com_google_gwt_layout_client_Layout$Layer_setWidth = l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth;
      l.com_google_gwt_layout_client_Layout$Layer_setHeight = l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight;
      l.com_google_gwt_layout_client_Layout$Layer_leftUnit = l.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit;
      l.com_google_gwt_layout_client_Layout$Layer_topUnit = l.com_google_gwt_layout_client_Layout$Layer_targetTopUnit;
      l.com_google_gwt_layout_client_Layout$Layer_rightUnit = l.com_google_gwt_layout_client_Layout$Layer_targetRightUnit;
      l.com_google_gwt_layout_client_Layout$Layer_bottomUnit = l.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit;
      l.com_google_gwt_layout_client_Layout$Layer_widthUnit = l.com_google_gwt_layout_client_Layout$Layer_targetWidthUnit;
      l.com_google_gwt_layout_client_Layout$Layer_heightUnit = l.com_google_gwt_layout_client_Layout$Layer_targetHeightUnit;
      com_google_gwt_layout_client_LayoutImpl_$layout__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_layout_client_Layout$Layer_2V(l);
    }
    return;
  }
  parentWidth = this$static.com_google_gwt_layout_client_Layout_parentElem.clientWidth | 0;
  parentHeight = this$static.com_google_gwt_layout_client_Layout_parentElem.clientHeight | 0;
  for (l$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_gwt_layout_client_Layout_layers); l$iterator.java_util_AbstractList$IteratorImpl_i < l$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    l = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(l$iterator.java_util_AbstractList$IteratorImpl_i < l$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(l$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(l$iterator.java_util_AbstractList$IteratorImpl_last = l$iterator.java_util_AbstractList$IteratorImpl_i++), 61));
    com_google_gwt_layout_client_Layout_$adjustHorizontalConstraints__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$Layer_2V(this$static, parentWidth, l);
    com_google_gwt_layout_client_Layout_$adjustVerticalConstraints__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$Layer_2V(this$static, parentHeight, l);
  }
  this$static.com_google_gwt_layout_client_Layout_animation = new com_google_gwt_layout_client_Layout$1_Layout$1__Lcom_google_gwt_layout_client_Layout_2V(this$static);
  com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2ILcom_google_gwt_dom_client_Element_2V(this$static.com_google_gwt_layout_client_Layout_animation, duration, this$static.com_google_gwt_layout_client_Layout_parentElem);
}

function com_google_gwt_layout_client_Layout_$removeChild__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_layout_client_Layout$Layer_2V(this$static, layer){
  com_google_gwt_layout_client_LayoutImpl_$removeChild__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(layer.com_google_gwt_layout_client_Layout$Layer_container, layer.com_google_gwt_layout_client_Layout$Layer_child);
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_layout_client_Layout_layers, layer);
}

function com_google_gwt_layout_client_Layout_Layout__Lcom_google_gwt_dom_client_Element_2V(parent_0){
  this.com_google_gwt_layout_client_Layout_impl = new com_google_gwt_layout_client_LayoutImpl_LayoutImpl__V;
  this.com_google_gwt_layout_client_Layout_layers = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_layout_client_Layout_parentElem = parent_0;
  com_google_gwt_layout_client_LayoutImpl_$initParent__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2V(this.com_google_gwt_layout_client_Layout_impl, parent_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(283, 1, {}, com_google_gwt_layout_client_Layout_Layout__Lcom_google_gwt_dom_client_Element_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1layout_1client_1Layout_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'Layout', 283);
function com_google_gwt_layout_client_Layout$1_$onUpdate__Lcom_google_gwt_layout_client_Layout$1_2DV(this$static, progress){
  var l, l$iterator;
  for (l$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_gwt_layout_client_Layout$1_this$01.com_google_gwt_layout_client_Layout_layers); l$iterator.java_util_AbstractList$IteratorImpl_i < l$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    l = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(l$iterator.java_util_AbstractList$IteratorImpl_i < l$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(l$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(l$iterator.java_util_AbstractList$IteratorImpl_last = l$iterator.java_util_AbstractList$IteratorImpl_i++), 61));
    l.com_google_gwt_layout_client_Layout$Layer_setTargetLeft && (l.com_google_gwt_layout_client_Layout$Layer_left = l.com_google_gwt_layout_client_Layout$Layer_sourceLeft + (l.com_google_gwt_layout_client_Layout$Layer_targetLeft - l.com_google_gwt_layout_client_Layout$Layer_sourceLeft) * progress);
    l.com_google_gwt_layout_client_Layout$Layer_setTargetRight && (l.com_google_gwt_layout_client_Layout$Layer_right = l.com_google_gwt_layout_client_Layout$Layer_sourceRight + (l.com_google_gwt_layout_client_Layout$Layer_targetRight - l.com_google_gwt_layout_client_Layout$Layer_sourceRight) * progress);
    l.com_google_gwt_layout_client_Layout$Layer_setTargetTop && (l.com_google_gwt_layout_client_Layout$Layer_top = l.com_google_gwt_layout_client_Layout$Layer_sourceTop + (l.com_google_gwt_layout_client_Layout$Layer_targetTop - l.com_google_gwt_layout_client_Layout$Layer_sourceTop) * progress);
    l.com_google_gwt_layout_client_Layout$Layer_setTargetBottom && (l.com_google_gwt_layout_client_Layout$Layer_bottom = l.com_google_gwt_layout_client_Layout$Layer_sourceBottom + (l.com_google_gwt_layout_client_Layout$Layer_targetBottom - l.com_google_gwt_layout_client_Layout$Layer_sourceBottom) * progress);
    l.com_google_gwt_layout_client_Layout$Layer_setTargetWidth && (l.com_google_gwt_layout_client_Layout$Layer_width = l.com_google_gwt_layout_client_Layout$Layer_sourceWidth + (l.com_google_gwt_layout_client_Layout$Layer_targetWidth - l.com_google_gwt_layout_client_Layout$Layer_sourceWidth) * progress);
    l.com_google_gwt_layout_client_Layout$Layer_setTargetHeight && (l.com_google_gwt_layout_client_Layout$Layer_height = l.com_google_gwt_layout_client_Layout$Layer_sourceHeight + (l.com_google_gwt_layout_client_Layout$Layer_targetHeight - l.com_google_gwt_layout_client_Layout$Layer_sourceHeight) * progress);
    com_google_gwt_layout_client_LayoutImpl_$layout__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_layout_client_Layout$Layer_2V(l);
  }
}

function com_google_gwt_layout_client_Layout$1_Layout$1__Lcom_google_gwt_layout_client_Layout_2V(this$0){
  this.com_google_gwt_layout_client_Layout$1_this$01 = this$0;
  com_google_gwt_animation_client_Animation_Animation__Lcom_google_gwt_animation_client_AnimationScheduler_2V.call(this, (!com_google_gwt_animation_client_AnimationScheduler_instance && (com_google_gwt_animation_client_AnimationScheduler_instance = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new com_google_gwt_animation_client_AnimationSchedulerImplStandard_AnimationSchedulerImplStandard__V:new com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V) , com_google_gwt_animation_client_AnimationScheduler_instance));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(284, 112, {}, com_google_gwt_layout_client_Layout$1_Layout$1__Lcom_google_gwt_layout_client_Layout_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1layout_1client_1Layout$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'Layout/1', 284);
function com_google_gwt_layout_client_Layout$Layer_Layout$Layer__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_Object_2V(container, child){
  this.com_google_gwt_layout_client_Layout$Layer_targetLeftUnit = (com_google_gwt_dom_client_Style$Unit_$clinit__V() , com_google_gwt_dom_client_Style$Unit_PX);
  this.com_google_gwt_layout_client_Layout$Layer_targetTopUnit = com_google_gwt_dom_client_Style$Unit_PX;
  this.com_google_gwt_layout_client_Layout$Layer_targetRightUnit = com_google_gwt_dom_client_Style$Unit_PX;
  this.com_google_gwt_layout_client_Layout$Layer_targetBottomUnit = com_google_gwt_dom_client_Style$Unit_PX;
  this.com_google_gwt_layout_client_Layout$Layer_container = container;
  this.com_google_gwt_layout_client_Layout$Layer_child = child;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(61, 1, {61:1}, com_google_gwt_layout_client_Layout$Layer_Layout$Layer__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_Object_2V);
_.com_google_gwt_layout_client_Layout$Layer_bottom = 0;
_.com_google_gwt_layout_client_Layout$Layer_height = 0;
_.com_google_gwt_layout_client_Layout$Layer_left = 0;
_.com_google_gwt_layout_client_Layout$Layer_right = 0;
_.com_google_gwt_layout_client_Layout$Layer_setBottom = false;
_.com_google_gwt_layout_client_Layout$Layer_setHeight = false;
_.com_google_gwt_layout_client_Layout$Layer_setLeft = false;
_.com_google_gwt_layout_client_Layout$Layer_setRight = false;
_.com_google_gwt_layout_client_Layout$Layer_setTargetBottom = true;
_.com_google_gwt_layout_client_Layout$Layer_setTargetHeight = false;
_.com_google_gwt_layout_client_Layout$Layer_setTargetLeft = true;
_.com_google_gwt_layout_client_Layout$Layer_setTargetRight = true;
_.com_google_gwt_layout_client_Layout$Layer_setTargetTop = true;
_.com_google_gwt_layout_client_Layout$Layer_setTargetWidth = false;
_.com_google_gwt_layout_client_Layout$Layer_setTop = false;
_.com_google_gwt_layout_client_Layout$Layer_setWidth = false;
_.com_google_gwt_layout_client_Layout$Layer_sourceBottom = 0;
_.com_google_gwt_layout_client_Layout$Layer_sourceHeight = 0;
_.com_google_gwt_layout_client_Layout$Layer_sourceLeft = 0;
_.com_google_gwt_layout_client_Layout$Layer_sourceRight = 0;
_.com_google_gwt_layout_client_Layout$Layer_sourceTop = 0;
_.com_google_gwt_layout_client_Layout$Layer_sourceWidth = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetBottom = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetHeight = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetLeft = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetRight = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetTop = 0;
_.com_google_gwt_layout_client_Layout$Layer_targetWidth = 0;
_.com_google_gwt_layout_client_Layout$Layer_top = 0;
_.com_google_gwt_layout_client_Layout$Layer_visible = true;
_.com_google_gwt_layout_client_Layout$Layer_width = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1layout_1client_1Layout$Layer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'Layout/Layer', 61);
function com_google_gwt_layout_client_LayoutImpl_$clinit__V(){
  com_google_gwt_layout_client_LayoutImpl_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_layout_client_LayoutImpl_fixedRuler = com_google_gwt_layout_client_LayoutImpl_createRuler__Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_DivElement_2((com_google_gwt_dom_client_Style$Unit_$clinit__V() , com_google_gwt_dom_client_Style$Unit_CM), com_google_gwt_dom_client_Style$Unit_CM);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, com_google_gwt_layout_client_LayoutImpl_fixedRuler);
}

function com_google_gwt_layout_client_LayoutImpl_$attachChild__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(parent_0, child){
  var container;
  container = $doc.createElement($intern_29);
  container.appendChild(child);
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(container.style, $intern_30, (com_google_gwt_dom_client_Style$Position_$clinit__V() , $intern_31));
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(container.style, 'overflow', (com_google_gwt_dom_client_Style$Overflow_$clinit__V() , 'hidden'));
  com_google_gwt_layout_client_LayoutImpl_$fillParent__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2V(child);
  parent_0.insertBefore(container, null);
  return container;
}

function com_google_gwt_layout_client_LayoutImpl_$fillParent__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2V(elem){
  var style;
  style = elem.style;
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_30, (com_google_gwt_dom_client_Style$Position_$clinit__V() , $intern_31));
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_32, (com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_33));
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_34, $intern_33);
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_35, $intern_33);
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_36, $intern_33);
}

function com_google_gwt_layout_client_LayoutImpl_$getUnitSizeInPixels__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Style$Unit_2ZD(this$static, parent_0, unit, vertical){
  if (!unit) {
    return 1;
  }
  switch (unit.java_lang_Enum_ordinal) {
    case 1:
      return (vertical?parent_0.clientHeight | 0:parent_0.clientWidth | 0) / 100;
    case 2:
      return (com_google_gwt_dom_client_Element_$getSubPixelOffsetWidth__Lcom_google_gwt_dom_client_Element_2D(this$static.com_google_gwt_layout_client_LayoutImpl_relativeRuler) | 0) / 10;
    case 3:
      return ((this$static.com_google_gwt_layout_client_LayoutImpl_relativeRuler.offsetHeight || 0) | 0) / 10;
    case 7:
      return (com_google_gwt_dom_client_Element_$getSubPixelOffsetWidth__Lcom_google_gwt_dom_client_Element_2D(com_google_gwt_layout_client_LayoutImpl_fixedRuler) | 0) * 0.1;
    case 8:
      return (com_google_gwt_dom_client_Element_$getSubPixelOffsetWidth__Lcom_google_gwt_dom_client_Element_2D(com_google_gwt_layout_client_LayoutImpl_fixedRuler) | 0) * 0.01;
    case 6:
      return (com_google_gwt_dom_client_Element_$getSubPixelOffsetWidth__Lcom_google_gwt_dom_client_Element_2D(com_google_gwt_layout_client_LayoutImpl_fixedRuler) | 0) * 0.254;
    case 4:
      return (com_google_gwt_dom_client_Element_$getSubPixelOffsetWidth__Lcom_google_gwt_dom_client_Element_2D(com_google_gwt_layout_client_LayoutImpl_fixedRuler) | 0) * 0.00353;
    case 5:
      return (com_google_gwt_dom_client_Element_$getSubPixelOffsetWidth__Lcom_google_gwt_dom_client_Element_2D(com_google_gwt_layout_client_LayoutImpl_fixedRuler) | 0) * 0.0423;
    default:case 0:
      return 1;
  }
}

function com_google_gwt_layout_client_LayoutImpl_$initParent__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2V(this$static, parent_0){
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(parent_0.style, $intern_30, (com_google_gwt_dom_client_Style$Position_$clinit__V() , 'relative'));
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(parent_0, this$static.com_google_gwt_layout_client_LayoutImpl_relativeRuler = com_google_gwt_layout_client_LayoutImpl_createRuler__Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_DivElement_2((com_google_gwt_dom_client_Style$Unit_$clinit__V() , com_google_gwt_dom_client_Style$Unit_EM), com_google_gwt_dom_client_Style$Unit_EX));
}

function com_google_gwt_layout_client_LayoutImpl_$layout__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_layout_client_Layout$Layer_2V(layer){
  var style;
  style = layer.com_google_gwt_layout_client_Layout$Layer_container.style;
  layer.com_google_gwt_layout_client_Layout$Layer_visible?com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, 'display', ''):com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, 'display', (com_google_gwt_dom_client_Style$Display_$clinit__V() , 'none'));
  style[$intern_32] = layer.com_google_gwt_layout_client_Layout$Layer_setLeft?layer.com_google_gwt_layout_client_Layout$Layer_left + 'px':'';
  style[$intern_34] = layer.com_google_gwt_layout_client_Layout$Layer_setTop?layer.com_google_gwt_layout_client_Layout$Layer_top + 'px':'';
  style[$intern_35] = layer.com_google_gwt_layout_client_Layout$Layer_setRight?layer.com_google_gwt_layout_client_Layout$Layer_right + 'px':'';
  style[$intern_36] = layer.com_google_gwt_layout_client_Layout$Layer_setBottom?layer.com_google_gwt_layout_client_Layout$Layer_bottom + 'px':'';
  style['width'] = layer.com_google_gwt_layout_client_Layout$Layer_setWidth?layer.com_google_gwt_layout_client_Layout$Layer_width + null.nullMethod():'';
  style[$intern_37] = layer.com_google_gwt_layout_client_Layout$Layer_setHeight?layer.com_google_gwt_layout_client_Layout$Layer_height + null.nullMethod():'';
  style = layer.com_google_gwt_layout_client_Layout$Layer_child.style;
  switch (2) {
    case 2:
      com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_32, (com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_33));
      com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_35, $intern_33);
  }
  switch (2) {
    case 2:
      com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_34, (com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_33));
      com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_36, $intern_33);
  }
}

function com_google_gwt_layout_client_LayoutImpl_$removeChild__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(container, child){
  var style;
  com_google_gwt_dom_client_Node_$removeFromParent__Lcom_google_gwt_dom_client_Node_2V(container);
  com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(child) == container && com_google_gwt_dom_client_Node_$removeFromParent__Lcom_google_gwt_dom_client_Node_2V(child);
  style = child.style;
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_30, '');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_32, '');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_34, '');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, 'width', '');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_37, '');
}

function com_google_gwt_layout_client_LayoutImpl_LayoutImpl__V(){
  com_google_gwt_layout_client_LayoutImpl_$clinit__V();
}

function com_google_gwt_layout_client_LayoutImpl_createRuler__Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_Style$Unit_2Lcom_google_gwt_dom_client_DivElement_2(widthUnit, heightUnit){
  var ruler, style;
  ruler = $doc.createElement($intern_29);
  com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(ruler, '&nbsp;');
  style = ruler.style;
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_30, (com_google_gwt_dom_client_Style$Position_$clinit__V() , $intern_31));
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, 'zIndex', '-32767');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_34, -20 + heightUnit.getType__Ljava_lang_String_2());
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, 'width', 10 + widthUnit.getType__Ljava_lang_String_2());
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_37, 10 + heightUnit.getType__Ljava_lang_String_2());
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, 'visibility', (com_google_gwt_dom_client_Style$Visibility_$clinit__V() , 'hidden'));
  com_google_gwt_aria_client_Attribute_$set__Lcom_google_gwt_aria_client_Attribute_2Lcom_google_gwt_dom_client_Element_2_3Ljava_lang_Object_2V((com_google_gwt_aria_client_State_$clinit__V() , com_google_gwt_aria_client_State_HIDDEN), ruler, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit, 1), $intern_12, 38, 0, [(java_lang_Boolean_$clinit__V() , java_lang_Boolean_$clinit__V() , java_lang_Boolean_TRUE)]));
  return ruler;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(289, 1, {}, com_google_gwt_layout_client_LayoutImpl_LayoutImpl__V);
var com_google_gwt_layout_client_LayoutImpl_fixedRuler;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1layout_1client_1LayoutImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'LayoutImpl', 289);
function com_google_gwt_place_shared_PlaceHistoryHandler$DefaultHistorian_PlaceHistoryHandler$DefaultHistorian__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(192, 1, {}, com_google_gwt_place_shared_PlaceHistoryHandler$DefaultHistorian_PlaceHistoryHandler$DefaultHistorian__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1place_1shared_1PlaceHistoryHandler$DefaultHistorian_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_38, 'PlaceHistoryHandler/DefaultHistorian', 192);
function com_google_gwt_place_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$gwt$place$shared$PlaceHistoryHandler$Historian$_1annotation$$none$$__Lcom_google_gwt_place_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_gwt_place_shared_PlaceHistoryHandler$Historian_2(){
  var created;
  created = new com_google_gwt_place_shared_PlaceHistoryHandler$DefaultHistorian_PlaceHistoryHandler$DefaultHistorian__V;
  return created;
}

function com_google_gwt_place_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(162, 1, {}, com_google_gwt_place_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1place_1shared_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_38, $intern_39, 162);
function com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(html){
  if (html == null) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('html is null');
  }
  this.com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html = html;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(86, 1, {70:1, 3:1}, com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V);
_.asString__Ljava_lang_String_2 = function com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_asString__Ljava_lang_String_2(){
  return this.com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html;
}
;
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_equals__Ljava_lang_Object_2Z(obj){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 70)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 70).asString__Ljava_lang_String_2());
}
;
_.hashCode__I$ = function com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_hashCode__I(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1safehtml_1shared_1OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_40, 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 86);
function com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V(){
  this.com_google_gwt_safehtml_shared_SafeHtmlString_html = '';
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(277, 1, {70:1, 3:1}, com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V);
_.asString__Ljava_lang_String_2 = function com_google_gwt_safehtml_shared_SafeHtmlString_asString__Ljava_lang_String_2(){
  return this.com_google_gwt_safehtml_shared_SafeHtmlString_html;
}
;
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_safehtml_shared_SafeHtmlString_equals__Ljava_lang_Object_2Z(obj){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 70)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_safehtml_shared_SafeHtmlString_html, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 70).asString__Ljava_lang_String_2());
}
;
_.hashCode__I$ = function com_google_gwt_safehtml_shared_SafeHtmlString_hashCode__I(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_safehtml_shared_SafeHtmlString_html);
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_safehtml_shared_SafeHtmlString_toString__Ljava_lang_String_2(){
  return 'safe: "' + this.com_google_gwt_safehtml_shared_SafeHtmlString_html + '"';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1safehtml_1shared_1SafeHtmlString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_40, 'SafeHtmlString', 277);
function com_google_gwt_safehtml_shared_SafeHtmlUtils_$clinit__V(){
  com_google_gwt_safehtml_shared_SafeHtmlUtils_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new com_google_gwt_safehtml_shared_SafeHtmlString_SafeHtmlString__Ljava_lang_String_2V;
  com_google_gwt_safehtml_shared_SafeHtmlUtils_AMP_1RE = new RegExp('&', 'g');
  com_google_gwt_safehtml_shared_SafeHtmlUtils_GT_1RE = new RegExp('>', 'g');
  com_google_gwt_safehtml_shared_SafeHtmlUtils_LT_1RE = new RegExp('<', 'g');
  com_google_gwt_safehtml_shared_SafeHtmlUtils_SQUOT_1RE = new RegExp("'", 'g');
  com_google_gwt_safehtml_shared_SafeHtmlUtils_QUOT_1RE = new RegExp('"', 'g');
}

function com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2(s){
  com_google_gwt_safehtml_shared_SafeHtmlUtils_$clinit__V();
  s.indexOf('&') != -1 && (s = com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_safehtml_shared_SafeHtmlUtils_AMP_1RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_safehtml_shared_SafeHtmlUtils_LT_1RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_safehtml_shared_SafeHtmlUtils_GT_1RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_safehtml_shared_SafeHtmlUtils_QUOT_1RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = com_google_gwt_regexp_shared_RegExp_$replace__Lcom_google_gwt_regexp_shared_RegExp_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_safehtml_shared_SafeHtmlUtils_SQUOT_1RE, s, '&#39;'));
  return s;
}

var com_google_gwt_safehtml_shared_SafeHtmlUtils_AMP_1RE, com_google_gwt_safehtml_shared_SafeHtmlUtils_GT_1RE, com_google_gwt_safehtml_shared_SafeHtmlUtils_LT_1RE, com_google_gwt_safehtml_shared_SafeHtmlUtils_QUOT_1RE, com_google_gwt_safehtml_shared_SafeHtmlUtils_SQUOT_1RE;
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(327, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1AbstractRenderer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.text.shared', 'AbstractRenderer', 327);
function com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(282, 1, {}, com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V);
var com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1testing_1PassthroughParser_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'PassthroughParser', 282);
function com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(281, 327, {}, com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V);
var com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1testing_1PassthroughRenderer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_41, 'PassthroughRenderer', 281);
function com_google_gwt_uibinder_client_LazyDomElement_$get__Lcom_google_gwt_uibinder_client_LazyDomElement_2Lcom_google_gwt_dom_client_Element_2(this$static){
  if (!this$static.com_google_gwt_uibinder_client_LazyDomElement_element) {
    this$static.com_google_gwt_uibinder_client_LazyDomElement_element = com_google_gwt_dom_client_Document_$getElementById__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, this$static.com_google_gwt_uibinder_client_LazyDomElement_domId);
    if (!this$static.com_google_gwt_uibinder_client_LazyDomElement_element) {
      throw new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V('Cannot find element with id "' + this$static.com_google_gwt_uibinder_client_LazyDomElement_domId + '". Perhaps it is not attached to the document body.');
    }
    this$static.com_google_gwt_uibinder_client_LazyDomElement_element.removeAttribute('id');
  }
  return this$static.com_google_gwt_uibinder_client_LazyDomElement_element;
}

function com_google_gwt_uibinder_client_LazyDomElement_LazyDomElement__Ljava_lang_String_2V(domId){
  this.com_google_gwt_uibinder_client_LazyDomElement_domId = domId;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(60, 1, {}, com_google_gwt_uibinder_client_LazyDomElement_LazyDomElement__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1uibinder_1client_1LazyDomElement_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_42, 'LazyDomElement', 60);
function com_google_gwt_uibinder_client_UiBinderUtil_attachToDom__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2(element){
  var origParent, origSibling;
  com_google_gwt_uibinder_client_UiBinderUtil_ensureHiddenDiv__V();
  origParent = com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(element);
  origSibling = com_google_gwt_dom_client_DOMImpl_$getNextSiblingElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(element);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv, element);
  return new com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_UiBinderUtil$TempAttachment__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(origParent, origSibling, element);
}

function com_google_gwt_uibinder_client_UiBinderUtil_ensureHiddenDiv__V(){
  if (!com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv) {
    com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv = $doc.createElement($intern_29);
    com_google_gwt_user_client_ui_UIObject_setVisible__Lcom_google_gwt_dom_client_Element_2ZV(com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv, false);
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_user_client_ui_RootPanel_getBodyElement__Lcom_google_gwt_user_client_Element_2(), com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv);
  }
}

function com_google_gwt_uibinder_client_UiBinderUtil_orphan__Lcom_google_gwt_dom_client_Node_2V(node){
  com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(node.parentNode, node);
}

var com_google_gwt_uibinder_client_UiBinderUtil_hiddenDiv;
function com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_UiBinderUtil$TempAttachment__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(origParent, origSibling, element){
  this.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origParent = origParent;
  this.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origSibling = origSibling;
  this.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_element = element;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(265, 1, {}, com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_UiBinderUtil$TempAttachment__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1uibinder_1client_1UiBinderUtil$TempAttachment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_42, 'UiBinderUtil/TempAttachment', 265);
function com_google_gwt_user_client_DOM_$clinit__V(){
  com_google_gwt_user_client_DOM_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V();
}

function com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, elem, listener){
  com_google_gwt_user_client_DOM_$clinit__V();
  var prevCurrentEvent;
  prevCurrentEvent = com_google_gwt_user_client_DOM_currentEvent;
  com_google_gwt_user_client_DOM_currentEvent = evt;
  elem == com_google_gwt_user_client_DOM_sCaptureElem && com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(evt.type) == 8192 && (com_google_gwt_user_client_DOM_sCaptureElem = null);
  listener.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(evt);
  com_google_gwt_user_client_DOM_currentEvent = prevCurrentEvent;
}

function com_google_gwt_user_client_DOM_insertChild__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(parent_0, child, index_0){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(parent_0, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child), index_0);
}

function com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(maybePotential){
  com_google_gwt_user_client_DOM_$clinit__V();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

var com_google_gwt_user_client_DOM_currentEvent = null, com_google_gwt_user_client_DOM_sCaptureElem;
function com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_12, 2, 4, [$intern_11]);
  for (i = 0; i < allowedModes.length; i++) {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_11, allowedModes[0]) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(typeName){
  return com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I((com_google_gwt_user_client_DOM_$clinit__V() , typeName));
}

function com_google_gwt_user_client_History_$clinit__V(){
  com_google_gwt_user_client_History_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new com_google_gwt_user_client_History$HistoryImpl_History$HistoryImpl__V;
  com_google_gwt_user_client_History_historyEventSource = new com_google_gwt_user_client_History$HistoryEventSource_History$HistoryEventSource__V;
  com_google_gwt_user_client_History_token = com_google_gwt_user_client_History_getDecodedHash__Ljava_lang_String_2();
}

function com_google_gwt_user_client_History_getDecodedHash__Ljava_lang_String_2(){
  var hashToken;
  hashToken = $wnd.location.hash;
  if (hashToken == null || !hashToken.length) {
    return '';
  }
  return com_google_gwt_user_client_History$HistoryImpl_$decodeHistoryToken__Lcom_google_gwt_user_client_History$HistoryImpl_2Ljava_lang_String_2Ljava_lang_String_2(java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(hashToken, 1, hashToken.length - 1));
}

function com_google_gwt_user_client_History_newItem__Ljava_lang_String_2ZV(historyToken){
  com_google_gwt_user_client_History_$clinit__V();
  var updateToken;
  historyToken = historyToken == null?'':historyToken;
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(historyToken, com_google_gwt_user_client_History_token)) {
    com_google_gwt_user_client_History_token = historyToken;
    updateToken = $wnd.encodeURI(historyToken).replace('#', '%23');
    $wnd.location.hash = updateToken;
  }
}

function com_google_gwt_user_client_History_onHashChanged__V(){
  com_google_gwt_user_client_History_$clinit__V();
  var hashToken;
  hashToken = com_google_gwt_user_client_History_getDecodedHash__Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(hashToken, com_google_gwt_user_client_History_token)) {
    com_google_gwt_user_client_History_token = hashToken;
    com_google_gwt_event_logical_shared_ValueChangeEvent_fire__Lcom_google_gwt_event_logical_shared_HasValueChangeHandlers_2Ljava_lang_Object_2V(com_google_gwt_user_client_History_historyEventSource, hashToken);
  }
}

var com_google_gwt_user_client_History_historyEventSource, com_google_gwt_user_client_History_token;
function com_google_gwt_user_client_History$HistoryEventSource_$addValueChangeHandler__Lcom_google_gwt_user_client_History$HistoryEventSource_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static.com_google_gwt_user_client_History$HistoryEventSource_handlers, (!com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE && (com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE), handler);
}

function com_google_gwt_user_client_History$HistoryEventSource_History$HistoryEventSource__V(){
  this.com_google_gwt_user_client_History$HistoryEventSource_handlers = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(null);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(203, 1, {8:1}, com_google_gwt_user_client_History$HistoryEventSource_History$HistoryEventSource__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1History$HistoryEventSource_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'History/HistoryEventSource', 203);
function com_google_gwt_user_client_History$HistoryImpl_$decodeHistoryToken__Lcom_google_gwt_user_client_History$HistoryImpl_2Ljava_lang_String_2Ljava_lang_String_2(historyToken){
  return $wnd.decodeURI(historyToken.replace('%23', '#'));
}

function com_google_gwt_user_client_History$HistoryImpl_History$HistoryImpl__V(){
  var com_google_gwt_user_client_History$HistoryImpl_$attachListener__Lcom_google_gwt_user_client_History$HistoryImpl_2V_handler_0;
  com_google_gwt_user_client_History$HistoryImpl_$attachListener__Lcom_google_gwt_user_client_History$HistoryImpl_2V_handler_0 = $entry(com_google_gwt_user_client_History_onHashChanged__V);
  $wnd.addEventListener('hashchange', com_google_gwt_user_client_History$HistoryImpl_$attachListener__Lcom_google_gwt_user_client_History$HistoryImpl_2V_handler_0, false);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(204, 1, {}, com_google_gwt_user_client_History$HistoryImpl_History$HistoryImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1History$HistoryImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'History/HistoryImpl', 204);
function com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_event_logical_shared_CloseEvent_TYPE?com_google_gwt_event_logical_shared_CloseEvent_TYPE:(com_google_gwt_event_logical_shared_CloseEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V), handler);
}

function com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(type_0, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers), type_0, handler);
}

function com_google_gwt_user_client_Window_addResizeHandler__Lcom_google_gwt_event_logical_shared_ResizeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  com_google_gwt_user_client_Window_maybeInitializeResizeHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_event_logical_shared_ResizeEvent_TYPE && (com_google_gwt_event_logical_shared_ResizeEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_google_gwt_event_logical_shared_ResizeEvent_TYPE), handler);
}

function com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V(){
  if (!com_google_gwt_user_client_Window_closeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImpl_$initWindowCloseHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V();
    com_google_gwt_user_client_Window_closeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_maybeInitializeResizeHandlers__V(){
  if (!com_google_gwt_user_client_Window_resizeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImpl_$initWindowResizeHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V();
    com_google_gwt_user_client_Window_resizeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2(){
  var event_0;
  if (com_google_gwt_user_client_Window_closeHandlersInitialized) {
    event_0 = new com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V;
    !!com_google_gwt_user_client_Window_handlers && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(com_google_gwt_user_client_Window_handlers, event_0);
    return event_0.com_google_gwt_user_client_Window$ClosingEvent_message;
  }
  return null;
}

function com_google_gwt_user_client_Window_onResize__V(){
  var height, width_0;
  if (com_google_gwt_user_client_Window_resizeHandlersInitialized) {
    width_0 = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
    height = com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I($doc);
    if (com_google_gwt_user_client_Window_lastResizeWidth != width_0 || com_google_gwt_user_client_Window_lastResizeHeight != height) {
      com_google_gwt_user_client_Window_lastResizeWidth = width_0;
      com_google_gwt_user_client_Window_lastResizeHeight = height;
      com_google_gwt_event_logical_shared_ResizeEvent_fire__Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2IIV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers));
    }
  }
}

var com_google_gwt_user_client_Window_closeHandlersInitialized = false, com_google_gwt_user_client_Window_handlers, com_google_gwt_user_client_Window_lastResizeHeight = 0, com_google_gwt_user_client_Window_lastResizeWidth = 0, com_google_gwt_user_client_Window_resizeHandlersInitialized = false;
function com_google_gwt_user_client_Window$ClosingEvent_$clinit__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_Window$ClosingEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_google_gwt_user_client_Window$ClosingEvent_$setMessage__Lcom_google_gwt_user_client_Window$ClosingEvent_2Ljava_lang_String_2V(this$static, message){
  this$static.com_google_gwt_user_client_Window$ClosingEvent_message = message;
}

function com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(179, 319, {}, com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_user_client_Window$ClosingEvent_$setMessage__Lcom_google_gwt_user_client_Window$ClosingEvent_2Ljava_lang_String_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 297).com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_onLeaveQuestion);
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Window$ClosingEvent_TYPE;
}
;
_.com_google_gwt_user_client_Window$ClosingEvent_message = null;
var com_google_gwt_user_client_Window$ClosingEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$ClosingEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'Window/ClosingEvent', 179);
function com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V(){
  com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V.call(this, null);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(78, 58, {8:1}, com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$WindowHandlers_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'Window/WindowHandlers', 78);
function com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case $intern_22:
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_27;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_43;
    case 'gesturechange':
      return $intern_44;
    case 'gestureend':
      return $intern_45;
    default:return -1;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V(){
  if (!com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized) {
    com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V();
    com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = true;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(elem){
  var maybeListener = elem.__listener;
  return !com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(maybeListener) && com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(maybeListener, 19)?maybeListener:null;
}

function com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(elem, listener){
  elem.__listener = listener;
}

var com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = false;
function com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V(){
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers = {_default_:com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V, dragenter:com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V, dragover:com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V};
  com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers = {click:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, dblclick:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousedown:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseup:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousemove:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseover:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseout:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousewheel:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, keydown:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, keyup:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, keypress:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, touchstart:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchend:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchmove:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchcancel:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gesturestart:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gestureend:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gesturechange:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V};
}

function com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V(){
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent = $entry(com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V);
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent = $entry(com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent__Lcom_google_gwt_user_client_Event_2V);
  var foreach = com_google_gwt_user_client_impl_EventMap_foreach__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
  var bitlessEvents = com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents = com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers;
  foreach(captureEvents, function(e, fn){
    captureEvents[e] = $entry(fn);
  }
  );
  foreach(captureEvents, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEvent__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, eventTypeName){
  var com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatchMap_0, com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatcher_0;
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatchMap_0 = com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers;
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatcher_0 = com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatchMap_0[eventTypeName] || com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatchMap_0['_default_'];
  elem.addEventListener(eventTypeName, com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatcher_0, false);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2 && (elem.ondblclick = bits & 2?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32768 && (elem.onload = bits & 32768?com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_27 && (elem.onpaste = bits & $intern_27?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4194304 && (elem.ontouchend = bits & 4194304?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_43 && (elem.ongesturestart = bits & $intern_43?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_44 && (elem.ongesturechange = bits & $intern_44?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_45 && (elem.ongestureend = bits & $intern_45?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  com_google_gwt_user_client_DOM_$clinit__V();
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  com_google_gwt_user_client_DOM_$clinit__V();
  return;
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  evt.preventDefault();
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  var element;
  element = com_google_gwt_user_client_impl_DOMImplStandard_getFirstAncestorWithListener__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2(evt);
  if (!element) {
    return;
  }
  com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, element.nodeType != 1?null:element, com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(element));
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  var element;
  element = com_google_gwt_dom_client_DOMImplStandardBase_$eventGetCurrentTarget__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_dom_client_EventTarget_2(evt);
  com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(element, '__gwtLastUnhandledEvent', evt.type);
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_getFirstAncestorWithListener__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2(evt){
  var curElem;
  curElem = com_google_gwt_dom_client_DOMImplStandardBase_$eventGetCurrentTarget__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_dom_client_EventTarget_2(evt);
  while (!!curElem && !com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers, com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers, com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent, com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent;
function com_google_gwt_user_client_impl_EventMap_foreach__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function com_google_gwt_user_client_impl_WindowImpl_$initWindowCloseHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      com_google_gwt_user_client_Window_closeHandlersInitialized && com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function com_google_gwt_user_client_impl_WindowImpl_$initWindowResizeHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      com_google_gwt_user_client_Window_onResize__V();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static){
  return com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element;
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this$static, elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
}

function com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, eventTypeName){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEvent__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, eventTypeName);
}

function com_google_gwt_user_client_ui_UIObject_setVisible__Lcom_google_gwt_dom_client_Element_2ZV(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute($intern_7):elem.setAttribute($intern_7, 'true');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(16, 1, {18:1, 16:1});
_.toString__Ljava_lang_String_2$ = function com_google_gwt_user_client_ui_UIObject_toString__Ljava_lang_String_2(){
  if (!this.com_google_gwt_user_client_ui_UIObject_element) {
    return '(null handle)';
  }
  return (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).outerHTML;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1UIObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'UIObject', 16);
function com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler, type_0){
  var typeInt;
  typeInt = com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(type_0.com_google_gwt_event_dom_client_DomEvent$Type_name);
  typeInt == -1?com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, type_0.com_google_gwt_event_dom_client_DomEvent$Type_name):this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?(com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImplStandard_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, typeInt | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0))):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= typeInt);
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager, type_0, handler);
}

function com_google_gwt_user_client_ui_Widget_$addHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler, type_0){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager, type_0, handler);
}

function com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  !!this$static.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_user_client_ui_Widget_handlerManager, event_0);
}

function com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  var bitsToAdd;
  if (this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.com_google_gwt_user_client_ui_Widget_attached = true;
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, this$static);
  bitsToAdd = this$static.com_google_gwt_user_client_ui_Widget_eventsToSink;
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  bitsToAdd > 0 && (this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_impl_DOMImplStandard_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, bitsToAdd | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= bitsToAdd));
  this$static.doAttachChildren__V();
  this$static.onLoad__V();
  com_google_gwt_event_logical_shared_AttachEvent_fire__Lcom_google_gwt_event_logical_shared_HasAttachHandlers_2ZV(this$static);
}

function com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this$static, event_0){
  var related;
  switch (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && com_google_gwt_dom_client_DOMImplStandard_$isOrHasChild__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(this$static.com_google_gwt_user_client_ui_UIObject_element, related)) {
        return;
      }

  }
  com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(event_0, this$static, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    com_google_gwt_event_logical_shared_AttachEvent_fire__Lcom_google_gwt_event_logical_shared_HasAttachHandlers_2ZV(this$static);
  }
   finally {
    try {
      this$static.doDetachChildren__V();
    }
     finally {
      com_google_gwt_user_client_DOM_$clinit__V();
      com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, null);
      this$static.com_google_gwt_user_client_ui_Widget_attached = false;
    }
  }
}

function com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_parent) {
    com_google_gwt_user_client_ui_RootPanel_$clinit__V();
    java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, this$static) && com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    this$static.com_google_gwt_user_client_ui_Widget_parent.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("This widget's parent does not implement HasWidgets");
  }
}

function com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, parent_0){
  var oldParent;
  oldParent = this$static.com_google_gwt_user_client_ui_Widget_parent;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.com_google_gwt_user_client_ui_Widget_attached && this$static.onDetach__V();
    }
     finally {
      this$static.com_google_gwt_user_client_ui_Widget_parent = null;
    }
  }
   else {
    if (oldParent) {
      throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Cannot set a new parent without first clearing the old parent');
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = parent_0;
    parent_0.com_google_gwt_user_client_ui_Widget_attached && this$static.onAttach__V();
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(15, 16, $intern_47);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Widget_doAttachChildren__V(){
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Widget_doDetachChildren__V(){
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_Widget_onAttach__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onDetach__V = function com_google_gwt_user_client_ui_Widget_onDetach__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_Widget_onLoad__V(){
}
;
_.com_google_gwt_user_client_ui_Widget_attached = false;
_.com_google_gwt_user_client_ui_Widget_eventsToSink = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'Widget', 15);
function com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V(this$static){
  var it;
  it = this$static.iterator__Ljava_util_Iterator_2();
  while (it.hasNext__Z()) {
    it.next__Ljava_lang_Object_2();
    it.remove__V();
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(323, 15, $intern_48);
_.add__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_Panel_add__Lcom_google_gwt_user_client_ui_Widget_2V(child){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('This panel does not support no-arg add()');
}
;
_.clear__V = function com_google_gwt_user_client_ui_Panel_clear__V(){
  com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V(this);
}
;
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Panel_doAttachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_attachCommand));
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Panel_doDetachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_detachCommand));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Panel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'Panel', 323);
function com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, child, container){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(child);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(container, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$adjustIndex__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, child, beforeIndex){
  var idx;
  com_google_gwt_user_client_ui_ComplexPanel_$checkIndexBoundsForInsertion__Lcom_google_gwt_user_client_ui_ComplexPanel_2IV(this$static, beforeIndex);
  if (child.com_google_gwt_user_client_ui_Widget_parent == this$static) {
    idx = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function com_google_gwt_user_client_ui_ComplexPanel_$checkIndexBoundsForInsertion__Lcom_google_gwt_user_client_ui_ComplexPanel_2IV(this$static, index_0){
  if (index_0 < 0 || index_0 > this$static.com_google_gwt_user_client_ui_ComplexPanel_children.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
}

function com_google_gwt_user_client_ui_ComplexPanel_$insert__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2IZV(this$static, child, container, beforeIndex){
  beforeIndex = com_google_gwt_user_client_ui_ComplexPanel_$adjustIndex__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2II(this$static, child, beforeIndex);
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(child);
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child, beforeIndex);
  com_google_gwt_user_client_DOM_insertChild__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(container, (com_google_gwt_user_client_DOM_$clinit__V() , child.com_google_gwt_user_client_ui_UIObject_element), beforeIndex);
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var elem;
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    elem = (com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element);
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2((null , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(elem)), elem);
    com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  }
  return true;
}

function com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V(){
  this.com_google_gwt_user_client_ui_ComplexPanel_children = new com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(83, 323, $intern_48);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_ComplexPanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this.com_google_gwt_user_client_ui_ComplexPanel_children);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_ComplexPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ComplexPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'ComplexPanel', 83);
function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element));
}

function com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(elem.style, $intern_32, '');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(elem.style, $intern_34, '');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(elem.style, $intern_30, '');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(272, 83, {21:1, 8:1, 19:1, 18:1, 31:1, 114:1, 10:1, 16:1, 15:1});
_.add__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AbsolutePanel_add__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this, w);
}
;
_.insert__Lcom_google_gwt_user_client_ui_Widget_2IV = function com_google_gwt_user_client_ui_AbsolutePanel_insert__Lcom_google_gwt_user_client_ui_Widget_2IV(w, beforeIndex){
  com_google_gwt_user_client_ui_ComplexPanel_$insert__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2IZV(this, w, (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element), beforeIndex);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_AbsolutePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V((com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element));
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AbsolutePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'AbsolutePanel', 272);
function com_google_gwt_user_client_ui_AttachDetachException_$clinit__V(){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_ui_AttachDetachException_attachCommand = new com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V;
  com_google_gwt_user_client_ui_AttachDetachException_detachCommand = new com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V;
}

function com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(causes){
  com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

function com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(hasWidgets, c){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator__Ljava_util_Iterator_2(); w$iterator.hasNext__Z();) {
    w = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(w$iterator.next__Ljava_lang_Object_2(), 15);
    try {
      c.execute__Lcom_google_gwt_user_client_ui_Widget_2V(w);
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 6)) {
        e = $e0;
        !caught && (caught = new java_util_HashSet_HashSet__V);
        java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(caught, e);
      }
       else 
        throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  if (caught) {
    throw new com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(caught);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(261, 107, $intern_24, com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V);
var com_google_gwt_user_client_ui_AttachDetachException_attachCommand, com_google_gwt_user_client_ui_AttachDetachException_detachCommand;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'AttachDetachException', 261);
function com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(262, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onAttach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'AttachDetachException/1', 262);
function com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(263, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$2_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onDetach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'AttachDetachException/2', 263);
function com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(110, 15, $intern_47);
_.onAttach__V = function com_google_gwt_user_client_ui_FocusWidget_onAttach__V(){
  var tabIndex;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
  tabIndex = com_google_gwt_dom_client_DOMImplStandardBase_$getTabIndex__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2I((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element));
  -1 == tabIndex && (this.com_google_gwt_user_client_ui_UIObject_element.tabIndex = 0 , undefined);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FocusWidget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'FocusWidget', 110);
function com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, elem);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(259, 110, $intern_47);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ButtonBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'ButtonBase', 259);
function com_google_gwt_user_client_ui_Button_Button__V(){
  var com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0;
  com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0 = $doc.createElement('BUTTON') , com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0.setAttribute('type', 'button') , com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0));
  com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element), 'gwt-Button');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(111, 259, $intern_47, com_google_gwt_user_client_ui_Button_Button__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Button_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'Button', 111);
function com_google_gwt_user_client_ui_HTMLPanel_$addAndReplaceElement__Lcom_google_gwt_user_client_ui_HTMLPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, widget, toReplace){
  var children, next, toRemove;
  if (toReplace == (com_google_gwt_user_client_DOM_$clinit__V() , widget.com_google_gwt_user_client_ui_UIObject_element)) {
    return;
  }
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  toRemove = null;
  children = new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children);
  while (children.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < children.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size) {
    next = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(children);
    if (com_google_gwt_dom_client_DOMImplStandard_$isOrHasChild__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(toReplace, next.com_google_gwt_user_client_ui_UIObject_element)) {
      if (next.com_google_gwt_user_client_ui_UIObject_element == toReplace) {
        toRemove = next;
        break;
      }
      com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2V(children);
    }
  }
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, widget);
  if (!toRemove) {
    com_google_gwt_dom_client_Node_$replaceChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(toReplace.parentNode, widget.com_google_gwt_user_client_ui_UIObject_element, toReplace);
  }
   else {
    com_google_gwt_dom_client_Node_$insertBefore__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(toReplace.parentNode, widget.com_google_gwt_user_client_ui_UIObject_element, toReplace);
    com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, toRemove);
  }
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, this$static);
}

function com_google_gwt_user_client_ui_HTMLPanel_HTMLPanel__Ljava_lang_String_2V(html){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, $doc.createElement($intern_29));
  com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element), html);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(84, 83, $intern_48, com_google_gwt_user_client_ui_HTMLPanel_HTMLPanel__Ljava_lang_String_2V);
_.add__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_HTMLPanel_add__Lcom_google_gwt_user_client_ui_Widget_2V(widget){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this, widget, (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'HTMLPanel', 84);
function com_google_gwt_user_client_ui_LayoutCommand_$schedule__Lcom_google_gwt_user_client_ui_LayoutCommand_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this$static){
  this$static.com_google_gwt_user_client_ui_LayoutCommand_duration = 0;
  this$static.com_google_gwt_user_client_ui_LayoutCommand_canceled = false;
  if (!this$static.com_google_gwt_user_client_ui_LayoutCommand_scheduled) {
    this$static.com_google_gwt_user_client_ui_LayoutCommand_scheduled = true;
    com_google_gwt_core_client_impl_SchedulerImpl_$scheduleFinally__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), this$static);
  }
}

function com_google_gwt_user_client_ui_LayoutCommand_LayoutCommand__Lcom_google_gwt_layout_client_Layout_2V(layout){
  this.com_google_gwt_user_client_ui_LayoutCommand_layout = layout;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(286, 1, {}, com_google_gwt_user_client_ui_LayoutCommand_LayoutCommand__Lcom_google_gwt_layout_client_Layout_2V);
_.execute__V = function com_google_gwt_user_client_ui_LayoutCommand_execute__V(){
  this.com_google_gwt_user_client_ui_LayoutCommand_scheduled = false;
  if (this.com_google_gwt_user_client_ui_LayoutCommand_canceled) {
    return;
  }
  com_google_gwt_layout_client_Layout_$layout__Lcom_google_gwt_layout_client_Layout_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this.com_google_gwt_user_client_ui_LayoutCommand_layout, this.com_google_gwt_user_client_ui_LayoutCommand_duration);
}
;
_.com_google_gwt_user_client_ui_LayoutCommand_canceled = false;
_.com_google_gwt_user_client_ui_LayoutCommand_duration = 0;
_.com_google_gwt_user_client_ui_LayoutCommand_scheduled = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1LayoutCommand_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'LayoutCommand', 286);
function com_google_gwt_user_client_ui_LayoutPanel_$add__Lcom_google_gwt_user_client_ui_LayoutPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, widget){
  com_google_gwt_user_client_ui_LayoutPanel_$insert__Lcom_google_gwt_user_client_ui_LayoutPanel_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, widget, this$static.com_google_gwt_user_client_ui_ComplexPanel_children.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_LayoutPanel_$insert__Lcom_google_gwt_user_client_ui_LayoutPanel_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, widget, beforeIndex){
  var layer;
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, widget, beforeIndex);
  layer = com_google_gwt_layout_client_Layout_$attachChild__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_Object_2Lcom_google_gwt_layout_client_Layout$Layer_2(this$static.com_google_gwt_user_client_ui_LayoutPanel_layout, (com_google_gwt_user_client_DOM_$clinit__V() , widget.com_google_gwt_user_client_ui_UIObject_element));
  widget.com_google_gwt_user_client_ui_Widget_layoutData = layer;
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, this$static);
  com_google_gwt_user_client_ui_LayoutCommand_$schedule__Lcom_google_gwt_user_client_ui_LayoutCommand_2ILcom_google_gwt_layout_client_Layout$AnimationCallback_2V(this$static.com_google_gwt_user_client_ui_LayoutPanel_layoutCmd);
}

function com_google_gwt_user_client_ui_LayoutPanel_$onResize__Lcom_google_gwt_user_client_ui_LayoutPanel_2V(this$static){
  var child, child$iterator;
  for (child$iterator = new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children); child$iterator.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < child$iterator.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size;) {
    child = com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(child$iterator);
    com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(child, 115) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(child, 115).onResize__V();
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(278, 83, $intern_49);
_.add__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_LayoutPanel_add__Lcom_google_gwt_user_client_ui_Widget_2V(widget){
  com_google_gwt_user_client_ui_LayoutPanel_$add__Lcom_google_gwt_user_client_ui_LayoutPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this, widget);
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_LayoutPanel_onAttach__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onDetach__V = function com_google_gwt_user_client_ui_LayoutPanel_onDetach__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onResize__V = function com_google_gwt_user_client_ui_LayoutPanel_onResize__V(){
  com_google_gwt_user_client_ui_LayoutPanel_$onResize__Lcom_google_gwt_user_client_ui_LayoutPanel_2V(this);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_LayoutPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_layout_client_Layout_$removeChild__Lcom_google_gwt_layout_client_Layout_2Lcom_google_gwt_layout_client_Layout$Layer_2V(this.com_google_gwt_user_client_ui_LayoutPanel_layout, w.com_google_gwt_user_client_ui_Widget_layoutData);
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1LayoutPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'LayoutPanel', 278);
function com_google_gwt_user_client_ui_RootLayoutPanel_RootLayoutPanel__V(){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, $doc.createElement($intern_29));
  this.com_google_gwt_user_client_ui_LayoutPanel_layout = new com_google_gwt_layout_client_Layout_Layout__Lcom_google_gwt_dom_client_Element_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element));
  this.com_google_gwt_user_client_ui_LayoutPanel_layoutCmd = new com_google_gwt_user_client_ui_LayoutCommand_LayoutCommand__Lcom_google_gwt_layout_client_Layout_2V(this.com_google_gwt_user_client_ui_LayoutPanel_layout);
  com_google_gwt_user_client_Window_addResizeHandler__Lcom_google_gwt_event_logical_shared_ResizeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_RootLayoutPanel$1_RootLayoutPanel$1__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2V(this));
}

function com_google_gwt_user_client_ui_RootLayoutPanel_get__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2(){
  if (!com_google_gwt_user_client_ui_RootLayoutPanel_singleton) {
    com_google_gwt_user_client_ui_RootLayoutPanel_singleton = new com_google_gwt_user_client_ui_RootLayoutPanel_RootLayoutPanel__V;
    com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2()), com_google_gwt_user_client_ui_RootLayoutPanel_singleton);
  }
  return com_google_gwt_user_client_ui_RootLayoutPanel_singleton;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(279, 278, $intern_49, com_google_gwt_user_client_ui_RootLayoutPanel_RootLayoutPanel__V);
_.onLoad__V = function com_google_gwt_user_client_ui_RootLayoutPanel_onLoad__V(){
  com_google_gwt_layout_client_LayoutImpl_$fillParent__Lcom_google_gwt_layout_client_LayoutImpl_2Lcom_google_gwt_dom_client_Element_2V(this.com_google_gwt_user_client_ui_LayoutPanel_layout.com_google_gwt_layout_client_Layout_parentElem);
}
;
var com_google_gwt_user_client_ui_RootLayoutPanel_singleton;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootLayoutPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'RootLayoutPanel', 279);
function com_google_gwt_user_client_ui_RootLayoutPanel$1_RootLayoutPanel$1__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2V(this$0){
  this.com_google_gwt_user_client_ui_RootLayoutPanel$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(280, 1, {341:1, 30:1}, com_google_gwt_user_client_ui_RootLayoutPanel$1_RootLayoutPanel$1__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootLayoutPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'RootLayoutPanel/1', 280);
function com_google_gwt_user_client_ui_RootPanel_$clinit__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand = new com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V;
  com_google_gwt_user_client_ui_RootPanel_rootPanels = new java_util_HashMap_HashMap__V;
  com_google_gwt_user_client_ui_RootPanel_widgetsToDetach = new java_util_HashSet_HashSet__V;
}

function com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}

function com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(widget){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    widget.onDetach__V();
  }
   finally {
    java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, widget);
  }
}

function com_google_gwt_user_client_ui_RootPanel_detachWidgets__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand);
  }
   finally {
    com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map.clear__V();
    com_google_gwt_user_client_ui_RootPanel_rootPanels.clear__V();
  }
}

function com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  var rp;
  rp = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels.get__Ljava_lang_Object_2Ljava_lang_Object_2(null), 66);
  if (rp) {
    return rp;
  }
  com_google_gwt_user_client_ui_RootPanel_rootPanels.size__I() == 0 && com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
  rp = new com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V;
  com_google_gwt_user_client_ui_RootPanel_rootPanels.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(null, rp);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, rp);
  return rp;
}

function com_google_gwt_user_client_ui_RootPanel_getBodyElement__Lcom_google_gwt_user_client_Element_2(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  return $doc.body;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(66, 272, $intern_50);
var com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand, com_google_gwt_user_client_ui_RootPanel_rootPanels, com_google_gwt_user_client_ui_RootPanel_widgetsToDetach;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'RootPanel', 66);
function com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(274, 1, {}, com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_RootPanel$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.com_google_gwt_user_client_ui_Widget_attached && w.onDetach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'RootPanel/1', 274);
function com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(275, 1, {340:1, 30:1}, com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'RootPanel/2', 275);
function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V(){
  com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V.call(this, com_google_gwt_user_client_ui_RootPanel_getBodyElement__Lcom_google_gwt_user_client_Element_2());
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(273, 66, $intern_50, com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$DefaultRootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'RootPanel/DefaultRootPanel', 273);
function com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  if (this$static.com_google_gwt_user_client_ui_SimplePanel_widget != w) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element), w.com_google_gwt_user_client_ui_UIObject_element);
    this$static.com_google_gwt_user_client_ui_SimplePanel_widget = null;
  }
  return true;
}

function com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_IsWidget_2V(this$static, w){
  com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, !w?null:w.com_gwtplatform_mvp_client_PresenterWidget_view.asWidget__Lcom_google_gwt_user_client_ui_Widget_2());
}

function com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  if (w == this$static.com_google_gwt_user_client_ui_SimplePanel_widget) {
    return;
  }
  !!w && com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(w);
  !!this$static.com_google_gwt_user_client_ui_SimplePanel_widget && com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, this$static.com_google_gwt_user_client_ui_SimplePanel_widget);
  this$static.com_google_gwt_user_client_ui_SimplePanel_widget = w;
  if (w) {
    com_google_gwt_user_client_DOM_$clinit__V();
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_UIObject_element, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_SimplePanel_widget.com_google_gwt_user_client_ui_UIObject_element));
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, this$static);
  }
}

function com_google_gwt_user_client_ui_SimplePanel_SimplePanel__V(){
  com_google_gwt_user_client_ui_SimplePanel_SimplePanel__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement($intern_29)));
}

function com_google_gwt_user_client_ui_SimplePanel_SimplePanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(109, 323, {21:1, 8:1, 19:1, 336:1, 18:1, 31:1, 10:1, 16:1, 15:1}, com_google_gwt_user_client_ui_SimplePanel_SimplePanel__V);
_.add__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_SimplePanel_add__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  if (this.com_google_gwt_user_client_ui_SimplePanel_widget) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('SimplePanel can only contain one child widget');
  }
  com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this, w);
}
;
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_SimplePanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V(this);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_SimplePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'SimplePanel', 109);
function com_google_gwt_user_client_ui_SimplePanel$1_$next__Lcom_google_gwt_user_client_ui_SimplePanel$1_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (!this$static.com_google_gwt_user_client_ui_SimplePanel$1_hasElement || !this$static.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  this$static.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = false;
  return this$static.com_google_gwt_user_client_ui_SimplePanel$1_returned = this$static.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget;
}

function com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V(this$0){
  this.com_google_gwt_user_client_ui_SimplePanel$1_this$01 = this$0;
  this.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = !!this.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(258, 1, {}, com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V);
_.hasNext__Z = function com_google_gwt_user_client_ui_SimplePanel$1_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_SimplePanel$1_hasElement;
}
;
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_SimplePanel$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_SimplePanel$1_$next__Lcom_google_gwt_user_client_ui_SimplePanel$1_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.remove__V = function com_google_gwt_user_client_ui_SimplePanel$1_remove__V(){
  !!this.com_google_gwt_user_client_ui_SimplePanel$1_returned && com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this.com_google_gwt_user_client_ui_SimplePanel$1_this$01, this.com_google_gwt_user_client_ui_SimplePanel$1_returned);
}
;
_.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = false;
_.com_google_gwt_user_client_ui_SimplePanel$1_returned = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'SimplePanel/1', 258);
function com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V(elem){
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, elem);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(266, 110, $intern_47);
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_ValueBoxBase_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  var type_0;
  type_0 = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type));
  (type_0 & 896) != 0?com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0):com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_ValueBoxBase_onLoad__V(){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'ValueBoxBase', 266);
function com_google_gwt_user_client_ui_TextBoxBase_$clinit__V(){
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(267, 266, $intern_47);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBoxBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'TextBoxBase', 267);
function com_google_gwt_user_client_ui_TextBox_TextBox__V(){
  var com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0;
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V();
  com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V.call(this, (com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0 = $doc.createElement('INPUT') , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0.type = 'text' , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0));
}

function com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(element){
  com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V.call(this, element, (!com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V) , !com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V)));
  com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element), 'gwt-TextBox');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(85, 267, $intern_47, com_google_gwt_user_client_ui_TextBox_TextBox__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'TextBox', 85);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV;
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_values___3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit, 1), $intern_12, 29, 0, [com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(29, 4, $intern_51);
var com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_46, 'ValueBoxBase/TextAlignment', 29, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_values___3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'CENTER', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(268, 29, $intern_51, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_46, 'ValueBoxBase/TextAlignment/1', 268, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'JUSTIFY', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(269, 29, $intern_51, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_46, 'ValueBoxBase/TextAlignment/2', 269, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'LEFT', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(270, 29, $intern_51, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_46, 'ValueBoxBase/TextAlignment/3', 270, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'RIGHT', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(271, 29, $intern_51, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_46, 'ValueBoxBase/TextAlignment/4', 271, null);
function com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, this$static.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w){
  var i;
  for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    if (this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] == w) {
      return i;
    }
  }
  return -1;
}

function com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection_size == this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length) {
    newArray = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_12, 15, this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length; ++i0) {
      com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(newArray, i0, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i0]);
    }
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array = newArray;
  }
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = this$static.com_google_gwt_user_client_ui_WidgetCollection_size - 1; i > beforeIndex; --i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i - 1]);
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, beforeIndex, w);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  --this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = index_0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i + 1]);
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, this$static.com_google_gwt_user_client_ui_WidgetCollection_size, null);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var index_0;
  index_0 = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w);
  if (index_0 == -1) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0);
}

function com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(parent_0){
  this.com_google_gwt_user_client_ui_WidgetCollection_parent = parent_0;
  this.com_google_gwt_user_client_ui_WidgetCollection_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_12, 15, 4, 0, 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(276, 1, {}, com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_WidgetCollection_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this);
}
;
_.com_google_gwt_user_client_ui_WidgetCollection_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'WidgetCollection', 276);
function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget = this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_array[this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index];
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index;
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget) {
    throw new java_lang_IllegalStateException_IllegalStateException__V;
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_parent.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget);
  --this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index;
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget = null;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$0){
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(67, 1, {}, com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V);
_.hasNext__Z = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size;
}
;
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.remove__V = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_remove__V(){
  com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2V(this);
}
;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection$WidgetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'WidgetCollection/WidgetIterator', 67);
function com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V(){
  var runtimeValue;
  runtimeValue = com_google_gwt_useragent_client_UserAgentImplSafari_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplSafari_2Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_52, runtimeValue)) {
    throw new com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue);
  }
}

function java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V(message){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(71, 6, $intern_8);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Error_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Error', 71);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(17, 71, $intern_8);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'AssertionError', 17);
function com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue){
  java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, '' + ($intern_53 + runtimeValue + ').\n' + $intern_54), com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($intern_53 + runtimeValue + ').\n' + $intern_54, 6)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($intern_53 + runtimeValue + ').\n' + $intern_54, 6):null);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(116, 17, $intern_8, com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1useragent_1client_1UserAgentAsserter$UserAgentAssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 116);
function com_google_gwt_useragent_client_UserAgentImplSafari_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplSafari_2Ljava_lang_String_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return $intern_52;
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static){
  this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_this$01.doRemove__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$type2, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$source3, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$handler4);
}

function com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$source3 = null;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$handler4 = val$handler;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(181, 1, {295:1}, com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
_.removeHandler__V = function com_google_web_bindery_event_shared_SimpleEventBus$1_removeHandler__V(){
  com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'SimpleEventBus/1', 181);
function com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3 = null;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4 = val$handler;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(182, 1, {298:1}, com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
_.execute__V = function com_google_web_bindery_event_shared_SimpleEventBus$2_execute__V(){
  com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'SimpleEventBus/2', 182);
function com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$source, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$source3 = val$source;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$handler4 = val$handler;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(102, 1, {298:1}, com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
_.execute__V = function com_google_web_bindery_event_shared_SimpleEventBus$3_execute__V(){
  com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this.com_google_web_bindery_event_shared_SimpleEventBus$3_this$01, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$type2, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$source3, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$handler4);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'SimpleEventBus/3', 102);
function com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$__Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_web_bindery_event_shared_EventBus_2(this$static){
  var result;
  if (!this$static.com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$) {
    result = new com_google_web_bindery_event_shared_SimpleEventBus_SimpleEventBus__V;
    this$static.com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$ = result;
  }
  return this$static.com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$;
}

function com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(160, 1, {}, com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
_.com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$ = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, $intern_39, 160);
function com_gwtplatform_common_client_ClientUrlUtils_$encodeQueryString__Lcom_gwtplatform_common_client_ClientUrlUtils_2Ljava_lang_String_2Ljava_lang_String_2(decodedUrlComponent){
  var com_google_gwt_http_client_URL_encodeQueryStringImpl__Ljava_lang_String_2Ljava_lang_String_2_regexp_0;
  return com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('decodedURLComponent', decodedUrlComponent) , com_google_gwt_http_client_URL_encodeQueryStringImpl__Ljava_lang_String_2Ljava_lang_String_2_regexp_0 = /%20/g , encodeURIComponent(decodedUrlComponent).replace(com_google_gwt_http_client_URL_encodeQueryStringImpl__Ljava_lang_String_2Ljava_lang_String_2_regexp_0, '+');
}

function com_gwtplatform_common_client_ClientUrlUtils_ClientUrlUtils__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(199, 1, {}, com_gwtplatform_common_client_ClientUrlUtils_ClientUrlUtils__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1common_1client_1ClientUrlUtils_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_55, 'ClientUrlUtils', 199);
function com_gwtplatform_common_client_StandardProvider_$get__Lcom_gwtplatform_common_client_StandardProvider_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2V(this$static, callback){
  com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_$onSuccess__Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2Ljava_lang_Object_2V(callback, this$static.com_gwtplatform_common_client_StandardProvider_provider.get__Ljava_lang_Object_2());
}

function com_gwtplatform_common_client_StandardProvider_StandardProvider__Ljavax_inject_Provider_2V(provider){
  this.com_gwtplatform_common_client_StandardProvider_provider = provider;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(81, 1, {}, com_gwtplatform_common_client_StandardProvider_StandardProvider__Ljavax_inject_Provider_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1common_1client_1StandardProvider_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_55, 'StandardProvider', 81);
function com_gwtplatform_common_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$common$client$ClientUrlUtils$_1annotation$$none$$__Lcom_gwtplatform_common_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_common_client_ClientUrlUtils_2(){
  var created;
  created = new com_gwtplatform_common_client_ClientUrlUtils_ClientUrlUtils__V;
  return created;
}

function com_gwtplatform_common_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(159, 1, {}, com_gwtplatform_common_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1common_1client_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_55, $intern_39, 159);
function com_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$common$shared$UrlUtils$_1annotation$$none$$__Lcom_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_common_shared_UrlUtils_2(this$static){
  var result;
  if (!this$static.com_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$common$shared$UrlUtils$_1annotation$$none$$) {
    result = com_gwtplatform_common_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$common$client$ClientUrlUtils$_1annotation$$none$$__Lcom_gwtplatform_common_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_common_client_ClientUrlUtils_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1common_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_common_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector));
    this$static.com_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$common$shared$UrlUtils$_1annotation$$none$$ = result;
  }
  return this$static.com_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$common$shared$UrlUtils$_1annotation$$none$$;
}

function com_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(injector){
  this.com_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector = injector;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(163, 1, {}, com_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
_.com_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$common$shared$UrlUtils$_1annotation$$none$$ = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1common_1shared_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.gwtplatform.common.shared', $intern_39, 163);
function com_gwtplatform_mvp_client_AutobindDisable_AutobindDisable__V(){
  this.com_gwtplatform_mvp_client_AutobindDisable_disable = false;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(183, 1, {}, com_gwtplatform_mvp_client_AutobindDisable_AutobindDisable__V);
_.com_gwtplatform_mvp_client_AutobindDisable_disable = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1AutobindDisable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'AutobindDisable', 183);
function com_gwtplatform_mvp_client_ClientGinjector_$clinit__V(){
  com_gwtplatform_mvp_client_ClientGinjector_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_ClientGinjector_SINGLETON = new com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl__V;
}

var com_gwtplatform_mvp_client_ClientGinjector_SINGLETON;
function com_gwtplatform_mvp_client_DefaultBootstrapper_DefaultBootstrapper__Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2V(placeManager){
  this.com_gwtplatform_mvp_client_DefaultBootstrapper_placeManager = placeManager;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(132, 1, {}, com_gwtplatform_mvp_client_DefaultBootstrapper_DefaultBootstrapper__Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1DefaultBootstrapper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'DefaultBootstrapper', 132);
function com_gwtplatform_mvp_client_DelayedBindRegistry_$clinit__V(){
  com_gwtplatform_mvp_client_DelayedBindRegistry_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_DelayedBindRegistry_delayedBindObjects = new java_util_ArrayList_ArrayList__V;
}

function com_gwtplatform_mvp_client_DelayedBindRegistry_bind__Lcom_google_gwt_inject_client_Ginjector_2V(ginjector){
  com_gwtplatform_mvp_client_DelayedBindRegistry_$clinit__V();
  var delayedBindObject, delayedBindObject$iterator;
  for (delayedBindObject$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(com_gwtplatform_mvp_client_DelayedBindRegistry_delayedBindObjects); delayedBindObject$iterator.java_util_AbstractList$IteratorImpl_i < delayedBindObject$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    delayedBindObject = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(delayedBindObject$iterator.java_util_AbstractList$IteratorImpl_i < delayedBindObject$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(delayedBindObject$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(delayedBindObject$iterator.java_util_AbstractList$IteratorImpl_last = delayedBindObject$iterator.java_util_AbstractList$IteratorImpl_i++), 68));
    delayedBindObject.delayedBind__Lcom_google_gwt_inject_client_Ginjector_2V(ginjector);
  }
}

var com_gwtplatform_mvp_client_DelayedBindRegistry_delayedBindObjects;
function com_gwtplatform_mvp_client_HandlerContainerImpl_$automaticBind__Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2Lcom_gwtplatform_mvp_client_AutobindDisable_2V(this$static, autobindDisable){
  if (!this$static.com_gwtplatform_mvp_client_HandlerContainerImpl_autoBind || autobindDisable.com_gwtplatform_mvp_client_AutobindDisable_disable) {
    return;
  }
  this$static.bind__V();
}

function com_gwtplatform_mvp_client_HandlerContainerImpl_$bind__Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2V(this$static){
  if (!this$static.com_gwtplatform_mvp_client_HandlerContainerImpl_bound.com_gwtplatform_mvp_client_HandlerContainerImpl$BindMonitor_value) {
    this$static.onBind__V();
    this$static.com_gwtplatform_mvp_client_HandlerContainerImpl_bound.com_gwtplatform_mvp_client_HandlerContainerImpl$BindMonitor_value = true;
  }
}

function com_gwtplatform_mvp_client_HandlerContainerImpl_$registerHandler__Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(this$static, handlerRegistration){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_gwtplatform_mvp_client_HandlerContainerImpl_handlerRegistrations, handlerRegistration);
}

function com_gwtplatform_mvp_client_HandlerContainerImpl_HandlerContainerImpl__ZV(){
  this.com_gwtplatform_mvp_client_HandlerContainerImpl_bound = new com_gwtplatform_mvp_client_HandlerContainerImpl$BindMonitor_HandlerContainerImpl$BindMonitor__V;
  this.com_gwtplatform_mvp_client_HandlerContainerImpl_handlerRegistrations = new java_util_ArrayList_ArrayList__V;
  this.com_gwtplatform_mvp_client_HandlerContainerImpl_autoBind = true;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(77, 1, {});
_.bind__V = function com_gwtplatform_mvp_client_HandlerContainerImpl_bind__V(){
  com_gwtplatform_mvp_client_HandlerContainerImpl_$bind__Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2V(this);
}
;
_.onBind__V = function com_gwtplatform_mvp_client_HandlerContainerImpl_onBind__V(){
}
;
_.com_gwtplatform_mvp_client_HandlerContainerImpl_autoBind = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1HandlerContainerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'HandlerContainerImpl', 77);
function com_gwtplatform_mvp_client_HandlerContainerImpl$BindMonitor_HandlerContainerImpl$BindMonitor__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(150, 1, {}, com_gwtplatform_mvp_client_HandlerContainerImpl$BindMonitor_HandlerContainerImpl$BindMonitor__V);
_.com_gwtplatform_mvp_client_HandlerContainerImpl$BindMonitor_value = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1HandlerContainerImpl$BindMonitor_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'HandlerContainerImpl/BindMonitor', 150);
function com_gwtplatform_mvp_client_PresenterWidget_$clinit__V(){
  com_gwtplatform_mvp_client_PresenterWidget_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_PresenterWidget_POPUP_1SLOT = new com_gwtplatform_mvp_client_presenter_slots_PopupSlot_PopupSlot__V;
}

function com_gwtplatform_mvp_client_PresenterWidget_$addHandler__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  return com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_eventBus, type_0, handler);
}

function com_gwtplatform_mvp_client_PresenterWidget_$addRegisteredHandler__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2V(this$static, type_0, handler){
  com_gwtplatform_mvp_client_HandlerContainerImpl_$registerHandler__Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(this$static, com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_eventBus, type_0, handler));
}

function com_gwtplatform_mvp_client_PresenterWidget_$addToPopupSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static, child){
  com_gwtplatform_mvp_client_PresenterWidget_$addToSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_MultiSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static, com_gwtplatform_mvp_client_PresenterWidget_POPUP_1SLOT, child);
}

function com_gwtplatform_mvp_client_PresenterWidget_$addToSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_MultiSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static, slot, child){
  if (child.com_gwtplatform_mvp_client_PresenterWidget_slot == slot && child.com_gwtplatform_mvp_client_PresenterWidget_parent == this$static) {
    return;
  }
  com_gwtplatform_mvp_client_PresenterWidget_$adoptChild__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_IsSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static, slot, child);
  !!child.com_gwtplatform_mvp_client_PresenterWidget_slot && child.com_gwtplatform_mvp_client_PresenterWidget_slot.isPopup__Z() || com_gwtplatform_mvp_client_ViewImpl_$addToSlot__Lcom_gwtplatform_mvp_client_ViewImpl_2Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_IsWidget_2V(this$static.com_gwtplatform_mvp_client_PresenterWidget_view, slot, child);
  this$static.com_gwtplatform_mvp_client_PresenterWidget_visible && com_gwtplatform_mvp_client_PresenterWidget_$internalReveal__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(child);
}

function com_gwtplatform_mvp_client_PresenterWidget_$adoptChild__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_IsSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static, slot, child){
  if (child.com_gwtplatform_mvp_client_PresenterWidget_parent != this$static) {
    if (child.com_gwtplatform_mvp_client_PresenterWidget_parent) {
      if (!child.com_gwtplatform_mvp_client_PresenterWidget_slot.isRemovable__Z()) {
        throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('Cannot move a child of a permanent slot to another slot');
      }
      java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(child.com_gwtplatform_mvp_client_PresenterWidget_parent.com_gwtplatform_mvp_client_PresenterWidget_children, child);
    }
    child.com_gwtplatform_mvp_client_PresenterWidget_parent = this$static;
    java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static.com_gwtplatform_mvp_client_PresenterWidget_children, child);
  }
  child.com_gwtplatform_mvp_client_PresenterWidget_slot = slot;
}

function com_gwtplatform_mvp_client_PresenterWidget_$clearSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_RemovableSlot_2V(this$static, slot){
  com_gwtplatform_mvp_client_PresenterWidget_$internalClearSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_IsSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static, slot, null);
  this$static.com_gwtplatform_mvp_client_PresenterWidget_view.setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_IsWidget_2V(slot.getRawSlot__Ljava_lang_Object_2(), null);
}

function com_gwtplatform_mvp_client_PresenterWidget_$fireEvent__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static.com_gwtplatform_mvp_client_PresenterWidget_eventBus, event_0, this$static);
}

function com_gwtplatform_mvp_client_PresenterWidget_$internalClearSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_IsSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static, slot, dontRemove){
  var child, child$iterator;
  for (child$iterator = java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V((new java_util_HashSet_HashSet__Ljava_util_Collection_2V(this$static.com_gwtplatform_mvp_client_PresenterWidget_children)).java_util_HashSet_map)); child$iterator.java_util_AbstractMap$1$1_val$outerIter2.hasNext__Z();) {
    child = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2Ljava_lang_Object_2(child$iterator), 24);
    child.com_gwtplatform_mvp_client_PresenterWidget_slot == slot && child != dontRemove && com_gwtplatform_mvp_client_PresenterWidget_$orphan__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(child);
  }
}

function com_gwtplatform_mvp_client_PresenterWidget_$internalHide__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static){
  var child, child$iterator;
  if (!this$static.com_gwtplatform_mvp_client_PresenterWidget_visible) {
    return;
  }
  for (child$iterator = java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$static.com_gwtplatform_mvp_client_PresenterWidget_children.java_util_HashSet_map)); child$iterator.java_util_AbstractMap$1$1_val$outerIter2.hasNext__Z();) {
    child = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2Ljava_lang_Object_2(child$iterator), 24);
    com_gwtplatform_mvp_client_PresenterWidget_$internalHide__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(child);
  }
  if (!!this$static.com_gwtplatform_mvp_client_PresenterWidget_slot && this$static.com_gwtplatform_mvp_client_PresenterWidget_slot.isPopup__Z()) {
    com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_view).nullMethod();
    com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_view).nullMethod();
  }
  com_gwtplatform_mvp_client_PresenterWidget_$unregisterVisibleHandlers__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static);
  this$static.com_gwtplatform_mvp_client_PresenterWidget_visible = false;
}

function com_gwtplatform_mvp_client_PresenterWidget_$internalReset__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static){
  var child, child$iterator;
  if (!this$static.com_gwtplatform_mvp_client_PresenterWidget_visible) {
    return;
  }
  for (child$iterator = java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V((new java_util_HashSet_HashSet__Ljava_util_Collection_2V(this$static.com_gwtplatform_mvp_client_PresenterWidget_children)).java_util_HashSet_map)); child$iterator.java_util_AbstractMap$1$1_val$outerIter2.hasNext__Z();) {
    child = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2Ljava_lang_Object_2(child$iterator), 24);
    com_gwtplatform_mvp_client_PresenterWidget_$internalReset__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(child);
  }
  !!this$static.com_gwtplatform_mvp_client_PresenterWidget_slot && this$static.com_gwtplatform_mvp_client_PresenterWidget_slot.isPopup__Z() && com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_view).nullMethod();
}

function com_gwtplatform_mvp_client_PresenterWidget_$internalReveal__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static){
  var child, child$iterator;
  if (this$static.com_gwtplatform_mvp_client_PresenterWidget_visible) {
    return;
  }
  this$static.com_gwtplatform_mvp_client_PresenterWidget_visible = true;
  for (child$iterator = java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V((new java_util_HashSet_HashSet__Ljava_util_Collection_2V(this$static.com_gwtplatform_mvp_client_PresenterWidget_children)).java_util_HashSet_map)); child$iterator.java_util_AbstractMap$1$1_val$outerIter2.hasNext__Z();) {
    child = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2Ljava_lang_Object_2(child$iterator), 24);
    com_gwtplatform_mvp_client_PresenterWidget_$internalReveal__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(child);
  }
  if (!!this$static.com_gwtplatform_mvp_client_PresenterWidget_slot && this$static.com_gwtplatform_mvp_client_PresenterWidget_slot.isPopup__Z()) {
    com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_view);
    null.nullMethod();
    com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_PresenterWidget_view).nullMethod();
  }
  com_gwtplatform_mvp_client_PresenterWidget_$registerVisibleHandlers__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static);
}

function com_gwtplatform_mvp_client_PresenterWidget_$orphan__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static){
  if (!this$static.com_gwtplatform_mvp_client_PresenterWidget_slot) {
    return;
  }
  if (!this$static.com_gwtplatform_mvp_client_PresenterWidget_slot.isRemovable__Z()) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('Cannot remove a child from a permanent slot');
  }
  if (this$static.com_gwtplatform_mvp_client_PresenterWidget_parent) {
    com_gwtplatform_mvp_client_PresenterWidget_$internalHide__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static);
    java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static.com_gwtplatform_mvp_client_PresenterWidget_parent.com_gwtplatform_mvp_client_PresenterWidget_children, this$static);
    this$static.com_gwtplatform_mvp_client_PresenterWidget_parent = null;
  }
  this$static.com_gwtplatform_mvp_client_PresenterWidget_slot = null;
}

function com_gwtplatform_mvp_client_PresenterWidget_$registerVisibleHandlers__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static){
  var handlerInformation$iterator, com_gwtplatform_mvp_client_PresenterWidget_$registerVisibleHandler__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_PresenterWidget$HandlerInformation_2V_handlerRegistration_0;
  for (handlerInformation$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_gwtplatform_mvp_client_PresenterWidget_visibleHandlers); handlerInformation$iterator.java_util_AbstractList$IteratorImpl_i < handlerInformation$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(handlerInformation$iterator.java_util_AbstractList$IteratorImpl_i < handlerInformation$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I());
    com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(handlerInformation$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(handlerInformation$iterator.java_util_AbstractList$IteratorImpl_last = handlerInformation$iterator.java_util_AbstractList$IteratorImpl_i++));
    com_gwtplatform_mvp_client_PresenterWidget_$registerVisibleHandler__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_PresenterWidget$HandlerInformation_2V_handlerRegistration_0 = com_gwtplatform_mvp_client_PresenterWidget_$addHandler__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static, null.nullField, null.nullField);
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_gwtplatform_mvp_client_PresenterWidget_visibleHandlerRegistrations, com_gwtplatform_mvp_client_PresenterWidget_$registerVisibleHandler__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_PresenterWidget$HandlerInformation_2V_handlerRegistration_0);
  }
}

function com_gwtplatform_mvp_client_PresenterWidget_$setInSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_IsSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2ZV(this$static, slot, child){
  if (!child) {
    com_gwtplatform_mvp_client_PresenterWidget_$clearSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_RemovableSlot_2V(this$static, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(slot, 62));
    return;
  }
  com_gwtplatform_mvp_client_PresenterWidget_$adoptChild__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_IsSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static, slot, child);
  com_gwtplatform_mvp_client_PresenterWidget_$internalClearSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_IsSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static, slot, child);
  !!child.com_gwtplatform_mvp_client_PresenterWidget_slot && child.com_gwtplatform_mvp_client_PresenterWidget_slot.isPopup__Z() || this$static.com_gwtplatform_mvp_client_PresenterWidget_view.setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_IsWidget_2V(slot.getRawSlot__Ljava_lang_Object_2(), child);
  if (this$static.com_gwtplatform_mvp_client_PresenterWidget_visible) {
    com_gwtplatform_mvp_client_PresenterWidget_$internalReveal__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(child);
    com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_$clinit__V();
    com_gwtplatform_mvp_client_PresenterWidget_$fireEvent__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_ResetPresentersEvent__V);
  }
}

function com_gwtplatform_mvp_client_PresenterWidget_$setInSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Ljava_lang_Object_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static, slot, content){
  com_gwtplatform_mvp_client_PresenterWidget_$setInSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_IsSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2ZV(this$static, (com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_$clinit__V() , !com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_INSTANCE && (com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_INSTANCE = new com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_LegacySlotConvertor__V) , com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_$get__Lcom_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_2Ljava_lang_Object_2Lcom_gwtplatform_mvp_client_presenter_slots_LegacySlot_2(com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_INSTANCE, slot)), content);
}

function com_gwtplatform_mvp_client_PresenterWidget_$unregisterVisibleHandlers__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static){
  var handlerRegistration, handlerRegistration$iterator;
  for (handlerRegistration$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_gwtplatform_mvp_client_PresenterWidget_visibleHandlerRegistrations); handlerRegistration$iterator.java_util_AbstractList$IteratorImpl_i < handlerRegistration$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    handlerRegistration = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(handlerRegistration$iterator.java_util_AbstractList$IteratorImpl_i < handlerRegistration$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handlerRegistration$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(handlerRegistration$iterator.java_util_AbstractList$IteratorImpl_last = handlerRegistration$iterator.java_util_AbstractList$IteratorImpl_i++), 295));
    handlerRegistration.removeHandler__V();
  }
  this$static.com_gwtplatform_mvp_client_PresenterWidget_visibleHandlerRegistrations.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_12, 1, 0, 3, 1);
}

function com_gwtplatform_mvp_client_PresenterWidget_PresenterWidget__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_View_2V(eventBus, view){
  com_gwtplatform_mvp_client_PresenterWidget_$clinit__V();
  com_gwtplatform_mvp_client_HandlerContainerImpl_HandlerContainerImpl__ZV.call(this);
  this.com_gwtplatform_mvp_client_PresenterWidget_visibleHandlers = new java_util_ArrayList_ArrayList__V;
  this.com_gwtplatform_mvp_client_PresenterWidget_visibleHandlerRegistrations = new java_util_ArrayList_ArrayList__V;
  this.com_gwtplatform_mvp_client_PresenterWidget_children = new java_util_HashSet_HashSet__V;
  this.com_gwtplatform_mvp_client_PresenterWidget_eventBus = eventBus;
  this.com_gwtplatform_mvp_client_PresenterWidget_view = view;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(24, 77, $intern_57);
_.equals__Ljava_lang_Object_2Z$ = function com_gwtplatform_mvp_client_PresenterWidget_equals__Ljava_lang_Object_2Z(obj){
  return this === obj;
}
;
_.hashCode__I$ = function com_gwtplatform_mvp_client_PresenterWidget_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.com_gwtplatform_mvp_client_PresenterWidget_visible = false;
var com_gwtplatform_mvp_client_PresenterWidget_POPUP_1SLOT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1PresenterWidget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'PresenterWidget', 24);
function com_gwtplatform_mvp_client_Presenter_$forceReveal__Lcom_gwtplatform_mvp_client_Presenter_2V(this$static){
  if (this$static.com_gwtplatform_mvp_client_PresenterWidget_visible) {
    return;
  }
  com_gwtplatform_mvp_client_Presenter_$revealInParent__Lcom_gwtplatform_mvp_client_Presenter_2V(this$static);
}

function com_gwtplatform_mvp_client_Presenter_$revealInParent__Lcom_gwtplatform_mvp_client_Presenter_2V(this$static){
  if (this$static.com_gwtplatform_mvp_client_Presenter_revealType) {
    switch (this$static.com_gwtplatform_mvp_client_Presenter_revealType.java_lang_Enum_ordinal) {
      case 0:
        com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_$clinit__V();
        com_gwtplatform_mvp_client_PresenterWidget_$fireEvent__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_RevealRootContentEvent__Lcom_gwtplatform_mvp_client_Presenter_2V(this$static));
        break;
      case 1:
        com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_$clinit__V();
        com_gwtplatform_mvp_client_PresenterWidget_$fireEvent__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_RevealRootLayoutContentEvent__Lcom_gwtplatform_mvp_client_Presenter_2V(this$static));
        break;
      case 2:
        com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_$clinit__V();
        com_gwtplatform_mvp_client_PresenterWidget_$fireEvent__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_RevealRootPopupContentEvent__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static));
    }
  }
   else {
    com_gwtplatform_mvp_client_PresenterWidget_$fireEvent__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_gwtplatform_mvp_client_proxy_RevealContentEvent_RevealContentEvent__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_gwtplatform_mvp_client_Presenter_2V(this$static.com_gwtplatform_mvp_client_Presenter_slot, this$static));
  }
}

function com_gwtplatform_mvp_client_Presenter_Presenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_View_2Lcom_gwtplatform_mvp_client_proxy_Proxy_2Lcom_google_gwt_event_shared_GwtEvent$Type_2V(eventBus, view, proxy, slot){
  com_gwtplatform_mvp_client_Presenter_Presenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_View_2Lcom_gwtplatform_mvp_client_proxy_Proxy_2Lcom_gwtplatform_mvp_client_Presenter$RevealType_2Lcom_google_gwt_event_shared_GwtEvent$Type_2V.call(this, eventBus, view, proxy, null, slot);
}

function com_gwtplatform_mvp_client_Presenter_Presenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_View_2Lcom_gwtplatform_mvp_client_proxy_Proxy_2Lcom_gwtplatform_mvp_client_Presenter$RevealType_2V(eventBus, view, proxy, revealType){
  com_gwtplatform_mvp_client_PresenterWidget_$clinit__V();
  com_gwtplatform_mvp_client_Presenter_Presenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_View_2Lcom_gwtplatform_mvp_client_proxy_Proxy_2Lcom_gwtplatform_mvp_client_Presenter$RevealType_2Lcom_google_gwt_event_shared_GwtEvent$Type_2V.call(this, eventBus, view, proxy, revealType, null);
}

function com_gwtplatform_mvp_client_Presenter_Presenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_View_2Lcom_gwtplatform_mvp_client_proxy_Proxy_2Lcom_gwtplatform_mvp_client_Presenter$RevealType_2Lcom_google_gwt_event_shared_GwtEvent$Type_2V(eventBus, view, proxy, revealType, slot){
  com_gwtplatform_mvp_client_PresenterWidget_PresenterWidget__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_View_2V.call(this, eventBus, view);
  this.com_gwtplatform_mvp_client_Presenter_proxy = proxy;
  this.com_gwtplatform_mvp_client_Presenter_revealType = revealType;
  this.com_gwtplatform_mvp_client_Presenter_slot = slot;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(56, 24, $intern_57);
_.bind__V = function com_gwtplatform_mvp_client_Presenter_bind__V(){
  com_gwtplatform_mvp_client_HandlerContainerImpl_$bind__Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2V(this);
  com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(this.com_gwtplatform_mvp_client_Presenter_proxy, 69) && com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_$bind__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.com_gwtplatform_mvp_client_Presenter_proxy, 69).getHandlerContainer__Lcom_gwtplatform_mvp_client_HandlerContainer_2());
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1Presenter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'Presenter', 56);
function com_gwtplatform_mvp_client_Presenter$RevealType_$clinit__V(){
  com_gwtplatform_mvp_client_Presenter$RevealType_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_Presenter$RevealType_Root = new com_gwtplatform_mvp_client_Presenter$RevealType_Presenter$RevealType__Ljava_lang_String_2IV('Root', 0);
  com_gwtplatform_mvp_client_Presenter$RevealType_RootLayout = new com_gwtplatform_mvp_client_Presenter$RevealType_Presenter$RevealType__Ljava_lang_String_2IV('RootLayout', 1);
  com_gwtplatform_mvp_client_Presenter$RevealType_RootPopup = new com_gwtplatform_mvp_client_Presenter$RevealType_Presenter$RevealType__Ljava_lang_String_2IV('RootPopup', 2);
}

function com_gwtplatform_mvp_client_Presenter$RevealType_Presenter$RevealType__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_gwtplatform_mvp_client_Presenter$RevealType_values___3Lcom_gwtplatform_mvp_client_Presenter$RevealType_2(){
  com_gwtplatform_mvp_client_Presenter$RevealType_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1Presenter$RevealType_12_1classLit, 1), $intern_12, 57, 0, [com_gwtplatform_mvp_client_Presenter$RevealType_Root, com_gwtplatform_mvp_client_Presenter$RevealType_RootLayout, com_gwtplatform_mvp_client_Presenter$RevealType_RootPopup]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(57, 4, {57:1, 3:1, 5:1, 4:1}, com_gwtplatform_mvp_client_Presenter$RevealType_Presenter$RevealType__Ljava_lang_String_2IV);
var com_gwtplatform_mvp_client_Presenter$RevealType_Root, com_gwtplatform_mvp_client_Presenter$RevealType_RootLayout, com_gwtplatform_mvp_client_Presenter$RevealType_RootPopup;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1Presenter$RevealType_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_56, 'Presenter/RevealType', 57, com_gwtplatform_mvp_client_Presenter$RevealType_values___3Lcom_gwtplatform_mvp_client_Presenter$RevealType_2);
function com_gwtplatform_mvp_client_RootPresenter_$clinit__V(){
  com_gwtplatform_mvp_client_RootPresenter_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_PresenterWidget_$clinit__V();
  com_gwtplatform_mvp_client_RootPresenter_rootSlot = new com_gwtplatform_mvp_client_presenter_slots_SingleSlot_SingleSlot__V;
}

function com_gwtplatform_mvp_client_RootPresenter_$onResetPresenters__Lcom_gwtplatform_mvp_client_RootPresenter_2Lcom_gwtplatform_mvp_client_proxy_ResetPresentersEvent_2V(this$static){
  if (!this$static.com_gwtplatform_mvp_client_RootPresenter_isResetting) {
    this$static.com_gwtplatform_mvp_client_RootPresenter_isResetting = true;
    com_gwtplatform_mvp_client_PresenterWidget_$internalReset__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this$static);
    this$static.com_gwtplatform_mvp_client_RootPresenter_isResetting = false;
  }
}

function com_gwtplatform_mvp_client_RootPresenter_RootPresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2V(eventBus, view){
  com_gwtplatform_mvp_client_RootPresenter_$clinit__V();
  com_gwtplatform_mvp_client_PresenterWidget_PresenterWidget__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_View_2V.call(this, eventBus, view);
  this.com_gwtplatform_mvp_client_PresenterWidget_visible = true;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(149, 24, {30:1, 8:1, 10:1, 24:1, 335:1, 331:1, 332:1, 333:1, 334:1}, com_gwtplatform_mvp_client_RootPresenter_RootPresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2V);
_.onBind__V = function com_gwtplatform_mvp_client_RootPresenter_onBind__V(){
  com_gwtplatform_mvp_client_PresenterWidget_$addRegisteredHandler__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2V(this, (com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_$clinit__V() , com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_$clinit__V() , com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_type), this);
  com_gwtplatform_mvp_client_PresenterWidget_$addRegisteredHandler__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2V(this, (com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_$clinit__V() , com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_$clinit__V() , com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_TYPE), this);
  com_gwtplatform_mvp_client_PresenterWidget_$addRegisteredHandler__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2V(this, (com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_$clinit__V() , com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_$clinit__V() , com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_TYPE), this);
  com_gwtplatform_mvp_client_PresenterWidget_$addRegisteredHandler__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2V(this, (com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_$clinit__V() , com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_$clinit__V() , com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_TYPE), this);
  com_gwtplatform_mvp_client_PresenterWidget_$addRegisteredHandler__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2V(this, (!com_gwtplatform_mvp_client_proxy_LockInteractionEvent_TYPE && (com_gwtplatform_mvp_client_proxy_LockInteractionEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_gwtplatform_mvp_client_proxy_LockInteractionEvent_TYPE), this);
}
;
_.com_gwtplatform_mvp_client_RootPresenter_isResetting = false;
var com_gwtplatform_mvp_client_RootPresenter_rootSlot;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1RootPresenter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'RootPresenter', 149);
function com_gwtplatform_mvp_client_ViewImpl_$addToSlot__Lcom_gwtplatform_mvp_client_ViewImpl_2Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_IsWidget_2V(this$static, slot, content){
  var index_0, insertPanel, list, java_util_Collections_sort__Ljava_util_List_2Ljava_util_Comparator_2V_x_0;
  if (this$static.com_gwtplatform_mvp_client_ViewImpl_hasWidgetSlots.containsKey__Ljava_lang_Object_2Z(slot)) {
    if (this$static.com_gwtplatform_mvp_client_ViewImpl_orderedSlots.containsKey__Ljava_lang_Object_2Z(slot)) {
      list = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_ViewImpl_orderedSlots.get__Ljava_lang_Object_2Ljava_lang_Object_2(slot), 25);
      list.add__Ljava_lang_Object_2Z(com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(content));
      java_util_Collections_$clinit__V();
      java_util_Collections_sort__Ljava_util_List_2Ljava_util_Comparator_2V_x_0 = list.toArray___3Ljava_lang_Object_2();
      java_util_Arrays_mergeSort___3Ljava_lang_Object_2IILjava_util_Comparator_2V(java_util_Collections_sort__Ljava_util_List_2Ljava_util_Comparator_2V_x_0, 0, java_util_Collections_sort__Ljava_util_List_2Ljava_util_Comparator_2V_x_0.length);
      java_util_Collections_replaceContents__Ljava_util_List_2_3Ljava_lang_Object_2V(list, java_util_Collections_sort__Ljava_util_List_2Ljava_util_Comparator_2V_x_0);
      index_0 = java_util_Collections_binarySearch__Ljava_util_List_2Ljava_lang_Object_2Ljava_util_Comparator_2I(list, com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(content));
      insertPanel = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_ViewImpl_hasWidgetSlots.get__Ljava_lang_Object_2Ljava_lang_Object_2(slot), 114);
      insertPanel.insert__Lcom_google_gwt_user_client_ui_Widget_2IV(content.com_gwtplatform_mvp_client_PresenterWidget_view.asWidget__Lcom_google_gwt_user_client_ui_Widget_2(), index_0);
    }
     else {
      com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_ViewImpl_hasWidgetSlots.get__Ljava_lang_Object_2Ljava_lang_Object_2(slot), 31).add__Lcom_google_gwt_user_client_ui_Widget_2V(content.com_gwtplatform_mvp_client_PresenterWidget_view.asWidget__Lcom_google_gwt_user_client_ui_Widget_2());
    }
  }
}

function com_gwtplatform_mvp_client_ViewImpl_$initWidget__Lcom_gwtplatform_mvp_client_ViewImpl_2Lcom_google_gwt_user_client_ui_IsWidget_2V(this$static, widget){
  if (this$static.com_gwtplatform_mvp_client_ViewImpl_widget) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('ViewImpl.initWidget() may only be called once.');
  }
  this$static.com_gwtplatform_mvp_client_ViewImpl_widget = widget;
  com_google_gwt_user_client_ui_Widget_$addHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static.asWidget__Lcom_google_gwt_user_client_ui_Widget_2(), new com_gwtplatform_mvp_client_ViewImpl$1_ViewImpl$1__Lcom_gwtplatform_mvp_client_ViewImpl_2V, (!com_google_gwt_event_logical_shared_AttachEvent_TYPE && (com_google_gwt_event_logical_shared_AttachEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_google_gwt_event_logical_shared_AttachEvent_TYPE));
}

function com_gwtplatform_mvp_client_ViewImpl_$internalBindSlot__Lcom_gwtplatform_mvp_client_ViewImpl_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, slot, container){
  if (container) {
    this$static.com_gwtplatform_mvp_client_ViewImpl_oneWidgetSlots.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(slot, container);
  }
   else {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('Containers must implement either HasOneWidget or HasWidgets.');
  }
}

function com_gwtplatform_mvp_client_ViewImpl_ViewImpl__V(){
  this.com_gwtplatform_mvp_client_ViewImpl_oneWidgetSlots = new java_util_HashMap_HashMap__V;
  this.com_gwtplatform_mvp_client_ViewImpl_hasWidgetSlots = new java_util_HashMap_HashMap__V;
  this.com_gwtplatform_mvp_client_ViewImpl_orderedSlots = new java_util_HashMap_HashMap__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(65, 1, $intern_58);
_.asWidget__Lcom_google_gwt_user_client_ui_Widget_2 = function com_gwtplatform_mvp_client_ViewImpl_asWidget__Lcom_google_gwt_user_client_ui_Widget_2(){
  if (!this.com_gwtplatform_mvp_client_ViewImpl_widget) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('widget cannot be null, you should call ViewImpl.initWidget() before.');
  }
  return this.com_gwtplatform_mvp_client_ViewImpl_widget;
}
;
_.setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_IsWidget_2V = function com_gwtplatform_mvp_client_ViewImpl_setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_IsWidget_2V(slot, content){
  if (this.com_gwtplatform_mvp_client_ViewImpl_oneWidgetSlots.containsKey__Ljava_lang_Object_2Z(slot)) {
    com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_IsWidget_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.com_gwtplatform_mvp_client_ViewImpl_oneWidgetSlots.get__Ljava_lang_Object_2Ljava_lang_Object_2(slot), 336), content);
  }
   else if (this.com_gwtplatform_mvp_client_ViewImpl_hasWidgetSlots.containsKey__Ljava_lang_Object_2Z(slot)) {
    com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.com_gwtplatform_mvp_client_ViewImpl_hasWidgetSlots.get__Ljava_lang_Object_2Ljava_lang_Object_2(slot), 31).clear__V();
    !!content && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.com_gwtplatform_mvp_client_ViewImpl_hasWidgetSlots.get__Ljava_lang_Object_2Ljava_lang_Object_2(slot), 31).add__Lcom_google_gwt_user_client_ui_Widget_2V(content.com_gwtplatform_mvp_client_PresenterWidget_view.asWidget__Lcom_google_gwt_user_client_ui_Widget_2());
    if (this.com_gwtplatform_mvp_client_ViewImpl_orderedSlots.containsKey__Ljava_lang_Object_2Z(slot)) {
      com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.com_gwtplatform_mvp_client_ViewImpl_orderedSlots.get__Ljava_lang_Object_2Ljava_lang_Object_2(slot), 25).clear__V();
      !!content && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.com_gwtplatform_mvp_client_ViewImpl_orderedSlots.get__Ljava_lang_Object_2Ljava_lang_Object_2(slot), 25).add__Ljava_lang_Object_2Z(com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(content));
    }
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1ViewImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'ViewImpl', 65);
function com_gwtplatform_mvp_client_RootPresenter$RootView_$ensureGlass__Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2V(this$static){
  var style;
  if (!this$static.com_gwtplatform_mvp_client_RootPresenter$RootView_glass) {
    this$static.com_gwtplatform_mvp_client_RootPresenter$RootView_glass = $doc.createElement($intern_29);
    style = this$static.com_gwtplatform_mvp_client_RootPresenter$RootView_glass.style;
    com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_30, (com_google_gwt_dom_client_Style$Position_$clinit__V() , $intern_31));
    com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_32, (com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_33));
    com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_34, $intern_33);
    com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_35, $intern_33);
    com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, $intern_36, $intern_33);
    com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, 'zIndex', '2147483647');
    com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(style, 'backgroundColor', '#FFFFFF');
    style.opacity = 0;
  }
}

function com_gwtplatform_mvp_client_RootPresenter$RootView_$lockScreen__Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2V(this$static){
  com_gwtplatform_mvp_client_RootPresenter$RootView_$ensureGlass__Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2V(this$static);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, this$static.com_gwtplatform_mvp_client_RootPresenter$RootView_glass);
}

function com_gwtplatform_mvp_client_RootPresenter$RootView_$setUsingRootLayoutPanel__Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2ZV(this$static, usingRootLayoutPanel){
  this$static.com_gwtplatform_mvp_client_RootPresenter$RootView_usingRootLayoutPanel = usingRootLayoutPanel;
}

function com_gwtplatform_mvp_client_RootPresenter$RootView_$unlockScreen__Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2V(this$static){
  !!this$static.com_gwtplatform_mvp_client_RootPresenter$RootView_glass && com_google_gwt_dom_client_Node_$removeFromParent__Lcom_google_gwt_dom_client_Node_2V(this$static.com_gwtplatform_mvp_client_RootPresenter$RootView_glass);
}

function com_gwtplatform_mvp_client_RootPresenter$RootView_RootPresenter$RootView__V(){
  com_gwtplatform_mvp_client_ViewImpl_ViewImpl__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(48, 65, {10:1, 48:1}, com_gwtplatform_mvp_client_RootPresenter$RootView_RootPresenter$RootView__V);
_.asWidget__Lcom_google_gwt_user_client_ui_Widget_2 = function com_gwtplatform_mvp_client_RootPresenter$RootView_asWidget__Lcom_google_gwt_user_client_ui_Widget_2(){
  return null;
}
;
_.setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_IsWidget_2V = function com_gwtplatform_mvp_client_RootPresenter$RootView_setInSlot__Ljava_lang_Object_2Lcom_google_gwt_user_client_ui_IsWidget_2V(slot, content){
  if (this.com_gwtplatform_mvp_client_RootPresenter$RootView_usingRootLayoutPanel) {
    com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2()));
    com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V(com_google_gwt_user_client_ui_RootLayoutPanel_get__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2());
    com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(), com_google_gwt_user_client_ui_RootLayoutPanel_get__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2());
    !!content && com_google_gwt_user_client_ui_LayoutPanel_$add__Lcom_google_gwt_user_client_ui_LayoutPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootLayoutPanel_get__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2(), !content?null:content.com_gwtplatform_mvp_client_PresenterWidget_view.asWidget__Lcom_google_gwt_user_client_ui_Widget_2());
  }
   else {
    com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V(com_google_gwt_user_client_ui_RootLayoutPanel_get__Lcom_google_gwt_user_client_ui_RootLayoutPanel_2());
    com_google_gwt_user_client_ui_Panel_$clear__Lcom_google_gwt_user_client_ui_Panel_2V((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2()));
    !!content && com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(), !content?null:content.com_gwtplatform_mvp_client_PresenterWidget_view.asWidget__Lcom_google_gwt_user_client_ui_Widget_2());
  }
}
;
_.com_gwtplatform_mvp_client_RootPresenter$RootView_usingRootLayoutPanel = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1RootPresenter$RootView_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'RootPresenter/RootView', 48);
function com_gwtplatform_mvp_client_ViewImpl$1_ViewImpl$1__Lcom_gwtplatform_mvp_client_ViewImpl_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(151, 1, {337:1, 30:1}, com_gwtplatform_mvp_client_ViewImpl$1_ViewImpl$1__Lcom_gwtplatform_mvp_client_ViewImpl_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1ViewImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'ViewImpl/1', 151);
function com_gwtplatform_mvp_client_ViewWithUiHandlers_$clinit__V(){
  com_gwtplatform_mvp_client_ViewWithUiHandlers_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1ViewWithUiHandlers_12_1classLit);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(187, 65, $intern_58);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1ViewWithUiHandlers_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'ViewWithUiHandlers', 187);
function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl__V(){
  this.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector = new com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector__Lcom_gwtplatform_mvp_client_DesktopGinjector_2V;
  com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$initializeEagerSingletons__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(142, 1, {}, com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1com_11gwtplatform_11mvp_11client_11DesktopGinjectorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'com_gwtplatform_mvp_client_DesktopGinjectorImpl', 142);
function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1gwt_1place_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_gwt_place_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static){
  !this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$google$gwt$place$shared && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$google$gwt$place$shared = new com_google_gwt_place_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$google$gwt$place$shared;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1web_1bindery_1event_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static){
  !this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$google$web$bindery$event$shared && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$google$web$bindery$event$shared = new com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$google$web$bindery$event$shared;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1common_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_common_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static){
  !this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$common$client && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$common$client = new com_gwtplatform_common_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$common$client;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1common_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static){
  !this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$common$shared && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$common$shared = new com_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static));
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$common$shared;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static){
  !this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$client && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$client = new com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static));
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$client;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client_1proxy__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static){
  !this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$client$proxy && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$client$proxy = new com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static));
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$client$proxy;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1shared_1proxy__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static){
  !this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$shared$proxy && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$shared$proxy = new com_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static));
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$shared$proxy;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1projectname_1project_1client_1application__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static){
  !this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application = new com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static));
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1projectname_1project_1client_1application_1home__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static){
  !this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$home && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$home = new com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static));
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$home;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1projectname_1project_1client_1application_1launcher__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static){
  !this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$launcher && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$launcher = new com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static));
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$launcher;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$initializeEagerSingletons__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static){
  com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$RootPresenter$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_RootPresenter_2((!this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$client && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$client = new com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static)) , this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$client));
  com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$ApplicationPresenter$MyProxy$_1annotation$$none$$__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_ApplicationPresenter$MyProxy_2((!this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application = new com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static)) , this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application));
  com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$home$HomePresenter$MyProxy$_1annotation$$none$$__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_home_HomePresenter$MyProxy_2((!this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$home && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$home = new com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static)) , this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$home));
  com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$MyProxy$_1annotation$$none$$__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_launcher_LauncherPresenter$MyProxy_2((!this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$launcher && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$launcher = new com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(this$static)) , this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$launcher));
  com_projectname_project_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$resources$ResourceLoader$_1annotation$$none$$__Lcom_projectname_project_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_resources_ResourceLoader_2((!this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$resources && (this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$resources = new com_projectname_project_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V) , this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$resources));
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector__Lcom_gwtplatform_mvp_client_DesktopGinjector_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(143, 1, {}, com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector__Lcom_gwtplatform_mvp_client_DesktopGinjector_2V);
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$google$gwt$place$shared = null;
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$google$web$bindery$event$shared = null;
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$common$client = null;
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$common$shared = null;
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$client = null;
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$client$proxy = null;
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$gwtplatform$mvp$shared$proxy = null;
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application = null;
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$home = null;
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$application$launcher = null;
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_fieldFragment_1com$projectname$project$client$resources = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, 'com_gwtplatform_mvp_client_DesktopGinjector_DesktopGinjectorGinjector', 143);
function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$AutobindDisable$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_AutobindDisable_2(this$static){
  var result;
  if (!this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$AutobindDisable$_1annotation$$none$$) {
    result = new com_gwtplatform_mvp_client_AutobindDisable_AutobindDisable__V;
    this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$AutobindDisable$_1annotation$$none$$ = result;
  }
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$AutobindDisable$_1annotation$$none$$;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$DefaultBootstrapper$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_DefaultBootstrapper_2(this$static){
  var result;
  result = new com_gwtplatform_mvp_client_DefaultBootstrapper_DefaultBootstrapper__Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2V(com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client_1proxy__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)));
  return result;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$RootPresenter$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_RootPresenter_2(this$static){
  var result;
  if (!this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$RootPresenter$_1annotation$$none$$) {
    result = new com_gwtplatform_mvp_client_RootPresenter_RootPresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2V(com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$__Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_web_bindery_event_shared_EventBus_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1web_1bindery_1event_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)), new com_gwtplatform_mvp_client_RootPresenter$RootView_RootPresenter$RootView__V);
    com_gwtplatform_mvp_client_HandlerContainerImpl_$automaticBind__Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2Lcom_gwtplatform_mvp_client_AutobindDisable_2V(result, com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$AutobindDisable$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_AutobindDisable_2(this$static));
    this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$RootPresenter$_1annotation$$none$$ = result;
  }
  return this$static.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$RootPresenter$_1annotation$$none$$;
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$java$lang$String$_1annotation$$com$gwtplatform$mvp$client$annotations$DefaultPlace$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Ljava_lang_String_2(){
  return '/';
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$java$lang$String$_1annotation$$com$gwtplatform$mvp$client$annotations$ErrorPlace$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Ljava_lang_String_2(){
  return '/';
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$java$lang$String$_1annotation$$com$gwtplatform$mvp$client$annotations$UnauthorizedPlace$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Ljava_lang_String_2(){
  return '/';
}

function com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(injector){
  this.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector = injector;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(96, 1, {}, com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$AutobindDisable$_1annotation$$none$$ = null;
_.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$RootPresenter$_1annotation$$none$$ = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_56, $intern_39, 96);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(322, 1, $intern_59);
_.getRawSlot__Ljava_lang_Object_2 = function com_gwtplatform_mvp_client_presenter_slots_MultiSlot_getRawSlot__Ljava_lang_Object_2(){
  return this;
}
;
_.isPopup__Z = function com_gwtplatform_mvp_client_presenter_slots_MultiSlot_isPopup__Z(){
  return false;
}
;
_.isRemovable__Z = function com_gwtplatform_mvp_client_presenter_slots_MultiSlot_isRemovable__Z(){
  return true;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1presenter_1slots_1MultiSlot_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_60, 'MultiSlot', 322);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(329, 322, $intern_59);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1presenter_1slots_1Slot_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_60, 'Slot', 329);
function com_gwtplatform_mvp_client_presenter_slots_LegacySlot_LegacySlot__Ljava_lang_Object_2V(rawSlot){
  this.com_gwtplatform_mvp_client_presenter_slots_LegacySlot_rawSlot = rawSlot;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(88, 329, {88:1, 62:1}, com_gwtplatform_mvp_client_presenter_slots_LegacySlot_LegacySlot__Ljava_lang_Object_2V);
_.getRawSlot__Ljava_lang_Object_2 = function com_gwtplatform_mvp_client_presenter_slots_LegacySlot_getRawSlot__Ljava_lang_Object_2(){
  return this.com_gwtplatform_mvp_client_presenter_slots_LegacySlot_rawSlot;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1presenter_1slots_1LegacySlot_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_60, 'LegacySlot', 88);
function com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_$clinit__V(){
  com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1presenter_1slots_1LegacySlotConvertor_12_1classLit);
}

function com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_$get__Lcom_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_2Ljava_lang_Object_2Lcom_gwtplatform_mvp_client_presenter_slots_LegacySlot_2(this$static, slot){
  this$static.com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_legacySlotMap.containsKey__Ljava_lang_Object_2Z(slot) || this$static.com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_legacySlotMap.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(slot, new com_gwtplatform_mvp_client_presenter_slots_LegacySlot_LegacySlot__Ljava_lang_Object_2V(slot));
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_legacySlotMap.get__Ljava_lang_Object_2Ljava_lang_Object_2(slot), 88);
}

function com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_LegacySlotConvertor__V(){
  com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_$clinit__V();
  this.com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_legacySlotMap = new java_util_HashMap_HashMap__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(288, 1, {}, com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_LegacySlotConvertor__V);
var com_gwtplatform_mvp_client_presenter_slots_LegacySlotConvertor_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1presenter_1slots_1LegacySlotConvertor_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_60, 'LegacySlotConvertor', 288);
function com_gwtplatform_mvp_client_presenter_slots_NestedSlot_NestedSlot__V(){
  com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(195, 14, $intern_59, com_gwtplatform_mvp_client_presenter_slots_NestedSlot_NestedSlot__V);
_.getRawSlot__Ljava_lang_Object_2 = function com_gwtplatform_mvp_client_presenter_slots_NestedSlot_getRawSlot__Ljava_lang_Object_2(){
  return this;
}
;
_.isPopup__Z = function com_gwtplatform_mvp_client_presenter_slots_NestedSlot_isPopup__Z(){
  return false;
}
;
_.isRemovable__Z = function com_gwtplatform_mvp_client_presenter_slots_NestedSlot_isRemovable__Z(){
  return true;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1presenter_1slots_1NestedSlot_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_60, 'NestedSlot', 195);
function com_gwtplatform_mvp_client_presenter_slots_PopupSlot_PopupSlot__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(196, 322, $intern_59, com_gwtplatform_mvp_client_presenter_slots_PopupSlot_PopupSlot__V);
_.isPopup__Z = function com_gwtplatform_mvp_client_presenter_slots_PopupSlot_isPopup__Z(){
  return true;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1presenter_1slots_1PopupSlot_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_60, 'PopupSlot', 196);
function com_gwtplatform_mvp_client_presenter_slots_SingleSlot_SingleSlot__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(197, 1, $intern_59, com_gwtplatform_mvp_client_presenter_slots_SingleSlot_SingleSlot__V);
_.getRawSlot__Ljava_lang_Object_2 = function com_gwtplatform_mvp_client_presenter_slots_SingleSlot_getRawSlot__Ljava_lang_Object_2(){
  return this;
}
;
_.isPopup__Z = function com_gwtplatform_mvp_client_presenter_slots_SingleSlot_isPopup__Z(){
  return false;
}
;
_.isRemovable__Z = function com_gwtplatform_mvp_client_presenter_slots_SingleSlot_isRemovable__Z(){
  return true;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1presenter_1slots_1SingleSlot_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_60, 'SingleSlot', 197);
function com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_$clinit__V(){
  com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_AsyncCallStartEvent__V(){
  com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(249, 319, {}, com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_AsyncCallStartEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(handler);
  null.nullMethod();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_TYPE;
}
;
var com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1AsyncCallStartEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AsyncCallStartEvent', 249);
function com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_$clinit__V(){
  com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_AsyncCallSucceedEvent__V(){
  com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(248, 319, {}, com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_AsyncCallSucceedEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(handler);
  null.nullMethod();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_TYPE;
}
;
var com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1AsyncCallSucceedEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AsyncCallSucceedEvent', 248);
function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$doRevealPlace__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this$static, request, updateBrowserUrl){
  var requestEvent;
  requestEvent = new com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_PlaceRequestInternalEvent__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(request, updateBrowserUrl);
  com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_eventBus, requestEvent, this$static);
  if (requestEvent.com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_handled) {
    if (!requestEvent.com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_authorized) {
      com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$unlock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static);
      com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$illegalAccess__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Ljava_lang_String_2V(this$static, com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$toHistoryToken__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_util_List_2Ljava_lang_String_2(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_tokenFormatter, this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy));
    }
  }
   else {
    com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$unlock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static);
    com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$error__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Ljava_lang_String_2V(this$static, com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$toHistoryToken__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_util_List_2Ljava_lang_String_2(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_tokenFormatter, this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy));
  }
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$error__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Ljava_lang_String_2V(this$static){
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$startError__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static);
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$revealPlace__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this$static, this$static.com_gwtplatform_mvp_client_proxy_DefaultPlaceManager_errorPlaceRequest, false);
  this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_internalError = false;
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$fireEvent__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_eventBus, event_0, this$static);
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$getCurrentPlaceRequest__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(this$static){
  return this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy.java_util_ArrayList_array.length > 0?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy, this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy.java_util_ArrayList_array.length - 1), 37):com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$build__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(new com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_PlaceRequest$Builder__V);
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$getLock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Z(this$static){
  if (this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_locked) {
    return false;
  }
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$lock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static);
  return true;
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$handleTokenChange__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Ljava_lang_String_2V(this$static, historyToken){
  if (this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_locked) {
    this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_defferedNavigation = new com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$1_PlaceManagerImpl$1__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static, historyToken);
    return;
  }
  if (!com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$getLock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Z(this$static)) {
    return;
  }
  try {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(historyToken), '')) {
      com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$unlock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static);
      com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$revealPlace__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this$static, this$static.com_gwtplatform_mvp_client_proxy_DefaultPlaceManager_defaultPlaceRequest, false);
    }
     else {
      this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy = com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$toPlaceRequestHierarchy__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Ljava_util_List_2(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_tokenFormatter, historyToken);
      com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$doRevealPlace__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this$static, this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy.java_util_ArrayList_array.length > 0?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy, this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy.java_util_ArrayList_array.length - 1), 37):com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$build__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(new com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_PlaceRequest$Builder__V), true);
    }
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 26)) {
      com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$unlock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static);
      com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$error__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Ljava_lang_String_2V(this$static);
      com_gwtplatform_mvp_client_proxy_NavigationEvent_$clinit__V();
      com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$fireEvent__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_gwtplatform_mvp_client_proxy_NavigationEvent_NavigationEvent__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2V);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$illegalAccess__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Ljava_lang_String_2V(this$static){
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$startError__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static);
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$revealPlace__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this$static, this$static.com_gwtplatform_mvp_client_proxy_DefaultPlaceManager_unauthorizedPlaceRequest, false);
  this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_internalError = false;
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$lock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static){
  if (!this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_locked) {
    this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_locked = true;
    com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$fireEvent__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_gwtplatform_mvp_client_proxy_LockInteractionEvent_LockInteractionEvent__ZV(true));
  }
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$revealPlace__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this$static, request, updateBrowserUrl){
  if (this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_locked) {
    this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_defferedNavigation = new com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_PlaceManagerImpl$2__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static, request, updateBrowserUrl);
    return;
  }
  if (!com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$getLock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Z(this$static)) {
    return;
  }
  this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_12, 1, 0, 3, 1);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy, request);
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$doRevealPlace__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this$static, request, updateBrowserUrl);
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$startError__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static){
  if (this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_internalError) {
    throw new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V('Encountered repeated errors resulting in an infinite loop. Make sure all users have access to the pages revealed by revealErrorPlace and revealUnauthorizedPlace. (Note that the default implementations call revealDefaultPlace)');
  }
  this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_internalError = true;
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$unlock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static){
  var navigation;
  if (this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_locked) {
    this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_locked = false;
    com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$fireEvent__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_gwtplatform_mvp_client_proxy_LockInteractionEvent_LockInteractionEvent__ZV(false));
    if (this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_defferedNavigation) {
      navigation = this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_defferedNavigation;
      this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_defferedNavigation = null;
      navigation.execute__V();
    }
  }
}

function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$updateHistory__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this$static, request, updateBrowserUrl){
  var browserHistoryToken, historyToken;
  try {
    java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy, this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy.java_util_ArrayList_array.length - 1, request);
    if (updateBrowserUrl) {
      historyToken = com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$toHistoryToken__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_util_List_2Ljava_lang_String_2(this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_tokenFormatter, this$static.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy);
      browserHistoryToken = (com_google_gwt_user_client_History_$clinit__V() , com_google_gwt_user_client_History_$clinit__V() , com_google_gwt_user_client_History_token);
      (browserHistoryToken == null || !java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(browserHistoryToken, historyToken)) && com_google_gwt_user_client_History_newItem__Ljava_lang_String_2ZV(historyToken);
    }
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 26))
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(175, 1, $intern_62);
_.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_internalError = false;
_.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_locked = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1PlaceManagerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'PlaceManagerImpl', 175);
function com_gwtplatform_mvp_client_proxy_DefaultPlaceManager_DefaultPlaceManager__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_shared_proxy_TokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_place_shared_PlaceHistoryHandler$Historian_2V(eventBus, tokenFormatter, defaultPlaceNameToken, errorPlaceNameToken, unauthorizedPlaceNameToken){
  this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_placeHierarchy = new java_util_ArrayList_ArrayList__V;
  this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_eventBus = eventBus;
  this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_tokenFormatter = tokenFormatter;
  com_google_gwt_user_client_History_$clinit__V();
  com_google_gwt_user_client_History$HistoryEventSource_$addValueChangeHandler__Lcom_google_gwt_user_client_History$HistoryEventSource_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_user_client_History_historyEventSource, this);
  this.com_gwtplatform_mvp_client_proxy_DefaultPlaceManager_defaultPlaceRequest = com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$build__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$nameToken__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Ljava_lang_String_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2(new com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_PlaceRequest$Builder__V, defaultPlaceNameToken));
  this.com_gwtplatform_mvp_client_proxy_DefaultPlaceManager_errorPlaceRequest = com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$build__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$nameToken__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Ljava_lang_String_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2(new com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_PlaceRequest$Builder__V, errorPlaceNameToken));
  this.com_gwtplatform_mvp_client_proxy_DefaultPlaceManager_unauthorizedPlaceRequest = com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$build__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$nameToken__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Ljava_lang_String_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2(new com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_PlaceRequest$Builder__V, unauthorizedPlaceNameToken));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(176, 175, $intern_62, com_gwtplatform_mvp_client_proxy_DefaultPlaceManager_DefaultPlaceManager__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_shared_proxy_TokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_place_shared_PlaceHistoryHandler$Historian_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1DefaultPlaceManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'DefaultPlaceManager', 176);
var com_gwtplatform_mvp_client_proxy_GetPlaceTitleEvent_TYPE;
function com_gwtplatform_mvp_client_proxy_LockInteractionEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_LockInteractionEvent_2Lcom_gwtplatform_mvp_client_proxy_LockInteractionHandler_2V(this$static, handler){
  this$static.com_gwtplatform_mvp_client_proxy_LockInteractionEvent_lock?com_gwtplatform_mvp_client_RootPresenter$RootView_$lockScreen__Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler.com_gwtplatform_mvp_client_PresenterWidget_view, 48)):com_gwtplatform_mvp_client_RootPresenter$RootView_$unlockScreen__Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler.com_gwtplatform_mvp_client_PresenterWidget_view, 48));
}

function com_gwtplatform_mvp_client_proxy_LockInteractionEvent_LockInteractionEvent__ZV(lock){
  this.com_gwtplatform_mvp_client_proxy_LockInteractionEvent_lock = lock;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(105, 319, {}, com_gwtplatform_mvp_client_proxy_LockInteractionEvent_LockInteractionEvent__ZV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_LockInteractionEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_gwtplatform_mvp_client_proxy_LockInteractionEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_LockInteractionEvent_2Lcom_gwtplatform_mvp_client_proxy_LockInteractionHandler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 335));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_LockInteractionEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return !com_gwtplatform_mvp_client_proxy_LockInteractionEvent_TYPE && (com_gwtplatform_mvp_client_proxy_LockInteractionEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_gwtplatform_mvp_client_proxy_LockInteractionEvent_TYPE;
}
;
_.com_gwtplatform_mvp_client_proxy_LockInteractionEvent_lock = false;
var com_gwtplatform_mvp_client_proxy_LockInteractionEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1LockInteractionEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'LockInteractionEvent', 105);
function com_gwtplatform_mvp_client_proxy_NavigationEvent_$clinit__V(){
  com_gwtplatform_mvp_client_proxy_NavigationEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_proxy_NavigationEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_gwtplatform_mvp_client_proxy_NavigationEvent_NavigationEvent__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2V(){
  com_gwtplatform_mvp_client_proxy_NavigationEvent_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(106, 319, {}, com_gwtplatform_mvp_client_proxy_NavigationEvent_NavigationEvent__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_NavigationEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(handler);
  null.nullMethod();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_NavigationEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_gwtplatform_mvp_client_proxy_NavigationEvent_TYPE;
}
;
var com_gwtplatform_mvp_client_proxy_NavigationEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1NavigationEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'NavigationEvent', 106);
function com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_$checkLoading__Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2V(this$static){
  if (this$static.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_state == (com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_$clinit__V() , com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_INITIALIZED)) {
    ++com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_counter;
    com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_counter == 1 && (com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_$clinit__V() , this$static.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_eventBus.fireEvent__Lcom_google_web_bindery_event_shared_Event_2V(new com_gwtplatform_mvp_client_proxy_AsyncCallStartEvent_AsyncCallStartEvent__V));
    this$static.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_state = com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_LOADING;
  }
}

function com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_$onSuccess__Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2Ljava_lang_Object_2V(this$static, result){
  if (this$static.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_state == (com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_$clinit__V() , com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_LOADING)) {
    --com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_counter;
    com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_counter == 0 && (com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_$clinit__V() , this$static.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_eventBus.fireEvent__Lcom_google_web_bindery_event_shared_Event_2V(new com_gwtplatform_mvp_client_proxy_AsyncCallSucceedEvent_AsyncCallSucceedEvent__V));
  }
  this$static.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_state = com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_SUCCEEDED;
  this$static.success__Ljava_lang_Object_2V(result);
}

function com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_NotifyingAsyncCallback__Lcom_google_web_bindery_event_shared_EventBus_2V(eventBus){
  this.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_eventBus = eventBus;
  this.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_state = (com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_$clinit__V() , com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_UNKNOWN);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(101, 1, {});
var com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_counter = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1NotifyingAsyncCallback_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'NotifyingAsyncCallback', 101);
function com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_$clinit__V(){
  com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_UNKNOWN = new com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_NotifyingAsyncCallback$State__Ljava_lang_String_2IV('UNKNOWN', 0);
  com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_INITIALIZED = new com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_NotifyingAsyncCallback$State__Ljava_lang_String_2IV('INITIALIZED', 1);
  com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_LOADING = new com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_NotifyingAsyncCallback$State__Ljava_lang_String_2IV('LOADING', 2);
  com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_SUCCEEDED = new com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_NotifyingAsyncCallback$State__Ljava_lang_String_2IV('SUCCEEDED', 3);
  com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_FAILED = new com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_NotifyingAsyncCallback$State__Ljava_lang_String_2IV('FAILED', 4);
}

function com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_NotifyingAsyncCallback$State__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_values___3Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_2(){
  com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1NotifyingAsyncCallback$State_12_1classLit, 1), $intern_12, 42, 0, [com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_UNKNOWN, com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_INITIALIZED, com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_LOADING, com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_SUCCEEDED, com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_FAILED]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(42, 4, {42:1, 3:1, 5:1, 4:1}, com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_NotifyingAsyncCallback$State__Ljava_lang_String_2IV);
var com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_FAILED, com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_INITIALIZED, com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_LOADING, com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_SUCCEEDED, com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_UNKNOWN;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1NotifyingAsyncCallback$State_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_61, 'NotifyingAsyncCallback/State', 42, com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_values___3Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_2);
function com_gwtplatform_mvp_client_proxy_PlaceImpl_$equals__Lcom_gwtplatform_mvp_client_proxy_PlaceImpl_2Ljava_lang_Object_2Z(this$static, o){
  var nameToken, nameToken$array, nameToken$index, nameToken$max, place;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 59)) {
    place = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 59);
    return java_util_Arrays_equals___3Ljava_lang_Object_2_3Ljava_lang_Object_2Z(this$static.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens, place.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens);
  }
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 63)) {
    place = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 63);
    for (nameToken$array = this$static.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens , nameToken$index = 0 , nameToken$max = nameToken$array.length; nameToken$index < nameToken$max; ++nameToken$index) {
      nameToken = nameToken$array[nameToken$index];
      if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(nameToken, place.getNameToken__Ljava_lang_String_2())) {
        return true;
      }
    }
    return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens[0], place.getNameToken__Ljava_lang_String_2());
  }
  return false;
}

function com_gwtplatform_mvp_client_proxy_PlaceImpl_$matchesRequest__Lcom_gwtplatform_mvp_client_proxy_PlaceImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Z(this$static, request){
  var nameToken, nameToken$array, nameToken$index, nameToken$max;
  for (nameToken$array = this$static.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens , nameToken$index = 0 , nameToken$max = nameToken$array.length; nameToken$index < nameToken$max; ++nameToken$index) {
    nameToken = nameToken$array[nameToken$index];
    if (com_gwtplatform_mvp_shared_proxy_PlaceRequest_$matchesNameToken__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Ljava_lang_String_2Z(request, nameToken)) {
      return true;
    }
  }
  return false;
}

function com_gwtplatform_mvp_client_proxy_PlaceImpl_PlaceImpl___3Ljava_lang_String_2V(nameTokens){
  this.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens = nameTokens;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(59, 1, {63:1, 59:1}, com_gwtplatform_mvp_client_proxy_PlaceImpl_PlaceImpl___3Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_gwtplatform_mvp_client_proxy_PlaceImpl_equals__Ljava_lang_Object_2Z(o){
  return com_gwtplatform_mvp_client_proxy_PlaceImpl_$equals__Lcom_gwtplatform_mvp_client_proxy_PlaceImpl_2Ljava_lang_Object_2Z(this, o);
}
;
_.getNameToken__Ljava_lang_String_2 = function com_gwtplatform_mvp_client_proxy_PlaceImpl_getNameToken__Ljava_lang_String_2(){
  return this.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens[0];
}
;
_.hashCode__I$ = function com_gwtplatform_mvp_client_proxy_PlaceImpl_hashCode__I(){
  return 17 * java_util_Arrays_hashCode___3Ljava_lang_Object_2I(this.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens);
}
;
_.toString__Ljava_lang_String_2$ = function com_gwtplatform_mvp_client_proxy_PlaceImpl_toString__Ljava_lang_String_2(){
  return this.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens[0];
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1PlaceImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'PlaceImpl', 59);
function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$1_PlaceManagerImpl$1__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$0, val$historyToken){
  this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$1_this$01 = this$0;
  this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$1_val$historyToken2 = val$historyToken;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(177, 1, {}, com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$1_PlaceManagerImpl$1__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V);
_.execute__V = function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$1_execute__V(){
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$handleTokenChange__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Ljava_lang_String_2V(this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$1_this$01, this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$1_val$historyToken2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1PlaceManagerImpl$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'PlaceManagerImpl/1', 177);
function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_PlaceManagerImpl$2__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$0, val$request, val$updateBrowserUrl){
  this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_this$01 = this$0;
  this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_val$request2 = val$request;
  this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_val$updateBrowserUrl3 = val$updateBrowserUrl;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(178, 1, {}, com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_PlaceManagerImpl$2__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V);
_.execute__V = function com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_execute__V(){
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$revealPlace__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_this$01, this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_val$request2, this.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_val$updateBrowserUrl3);
}
;
_.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl$2_val$updateBrowserUrl3 = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1PlaceManagerImpl$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'PlaceManagerImpl/2', 178);
function com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_2Lcom_gwtplatform_mvp_client_proxy_PlaceRequestInternalHandler_2V(this$static, handler){
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_$onPlaceRequest__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_2Lcom_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_2V(handler, this$static);
}

function com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_PlaceRequestInternalEvent__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(request, updateBrowserHistory){
  this.com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_request = request;
  this.com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_updateBrowserHistory = updateBrowserHistory;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(198, 319, {}, com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_PlaceRequestInternalEvent__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_2Lcom_gwtplatform_mvp_client_proxy_PlaceRequestInternalHandler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 339));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return !com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_TYPE && (com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_TYPE;
}
;
_.com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_authorized = true;
_.com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_handled = false;
_.com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_updateBrowserHistory = false;
var com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1PlaceRequestInternalEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'PlaceRequestInternalEvent', 198);
function com_gwtplatform_mvp_client_proxy_ProxyImpl_$bind__Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2Lcom_google_web_bindery_event_shared_EventBus_2V(this$static, eventBus){
  this$static.com_gwtplatform_mvp_client_proxy_ProxyImpl_eventBus = eventBus;
}

function com_gwtplatform_mvp_client_proxy_ProxyImpl_$getPresenter__Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2V(this$static, callback){
  callback.com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_state = (com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_$clinit__V() , com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback$State_INITIALIZED);
  com_gwtplatform_common_client_StandardProvider_$get__Lcom_gwtplatform_common_client_StandardProvider_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2V(this$static.com_gwtplatform_mvp_client_proxy_ProxyImpl_presenter, callback);
  com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_$checkLoading__Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2V(callback);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(321, 1, {8:1});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1ProxyImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ProxyImpl', 321);
function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$addDeferredCommand__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_gwt_user_client_Command_2V(command){
  com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), command);
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$addRegisteredHandler__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2V(this$static, type_0, handler){
  var registration;
  registration = this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_eventBus.addHandler__Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(type_0, handler);
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_$registerHandler__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_handlerContainer, registration);
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$bind__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2Lcom_google_web_bindery_event_shared_EventBus_2V(this$static, placeManager, eventBus){
  this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager = placeManager;
  this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_eventBus = eventBus;
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$addRegisteredHandler__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2V(this$static, (!com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_TYPE && (com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_TYPE), new com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_ProxyPlaceAbstract$1__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2V(this$static));
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$addRegisteredHandler__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Ljava_lang_Object_2V(this$static, (!com_gwtplatform_mvp_client_proxy_GetPlaceTitleEvent_TYPE && (com_gwtplatform_mvp_client_proxy_GetPlaceTitleEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_gwtplatform_mvp_client_proxy_GetPlaceTitleEvent_TYPE), new com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$2_ProxyPlaceAbstract$2__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2V);
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$fireEvent__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_eventBus.fireEventFromSource__Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(event_0, this$static);
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$handleRequest__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this$static, request, updateBrowserUrl){
  com_gwtplatform_mvp_client_proxy_ProxyImpl_$getPresenter__Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2V(this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_proxy, new com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_ProxyPlaceAbstract$3__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_web_bindery_event_shared_EventBus_2V(this$static, this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_eventBus, request, updateBrowserUrl));
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$manualReveal__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_client_Presenter_2V(this$static, presenter){
  !!this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager.com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_defferedNavigation || (presenter.com_gwtplatform_mvp_client_PresenterWidget_visible?(com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_$clinit__V() , com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$fireEvent__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, new com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_ResetPresentersEvent__V)):com_gwtplatform_mvp_client_Presenter_$forceReveal__Lcom_gwtplatform_mvp_client_Presenter_2V(presenter));
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$unlock__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2V(this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager);
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$matchesRequest__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Z(this$static, request){
  return com_gwtplatform_mvp_client_proxy_PlaceImpl_$matchesRequest__Lcom_gwtplatform_mvp_client_proxy_PlaceImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Z(this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_place, request);
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$setPlace__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_client_proxy_Place_2V(this$static, place){
  this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_place = place;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(165, 1, $intern_63);
_.equals__Ljava_lang_Object_2Z$ = function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_equals__Ljava_lang_Object_2Z(o){
  return com_gwtplatform_mvp_client_proxy_PlaceImpl_$equals__Lcom_gwtplatform_mvp_client_proxy_PlaceImpl_2Ljava_lang_Object_2Z(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_place, o);
}
;
_.getHandlerContainer__Lcom_gwtplatform_mvp_client_HandlerContainer_2 = function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_getHandlerContainer__Lcom_gwtplatform_mvp_client_HandlerContainer_2(){
  return this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_handlerContainer;
}
;
_.getNameToken__Ljava_lang_String_2 = function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_getNameToken__Ljava_lang_String_2(){
  return this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_place.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens[0];
}
;
_.hashCode__I$ = function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_hashCode__I(){
  return 17 * java_util_Arrays_hashCode___3Ljava_lang_Object_2I(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_place.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens);
}
;
_.toString__Ljava_lang_String_2$ = function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_toString__Ljava_lang_String_2(){
  return this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_place.com_gwtplatform_mvp_client_proxy_PlaceImpl_nameTokens[0];
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1ProxyPlaceAbstract_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ProxyPlaceAbstract', 165);
function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_$onPlaceRequest__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_2Lcom_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_2V(this$static, event_0){
  var request;
  if (event_0.com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_handled) {
    return;
  }
  request = event_0.com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_request;
  if (com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$matchesRequest__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Z(this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_this$01, request)) {
    event_0.com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_handled = true;
    com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$handleRequest__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_this$01, request, event_0.com_gwtplatform_mvp_client_proxy_PlaceRequestInternalEvent_updateBrowserHistory);
  }
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_ProxyPlaceAbstract$1__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2V(this$0){
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(169, 1, {30:1, 339:1}, com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$1_ProxyPlaceAbstract$1__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1ProxyPlaceAbstract$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ProxyPlaceAbstract/1', 169);
function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$2_ProxyPlaceAbstract$2__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(170, 1, {30:1}, com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$2_ProxyPlaceAbstract$2__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1ProxyPlaceAbstract$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ProxyPlaceAbstract/2', 170);
function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_ProxyPlaceAbstract$3__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_web_bindery_event_shared_EventBus_2V(this$0, $anonymous0, val$request, val$updateBrowserUrl){
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_this$01 = this$0;
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_val$request3 = val$request;
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_val$updateBrowserUrl4 = val$updateBrowserUrl;
  com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_NotifyingAsyncCallback__Lcom_google_web_bindery_event_shared_EventBus_2V.call(this, $anonymous0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(171, 101, {}, com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_ProxyPlaceAbstract$3__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_web_bindery_event_shared_EventBus_2V);
_.success__Ljava_lang_Object_2V = function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_success__Ljava_lang_Object_2V(presenter){
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$addDeferredCommand__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_google_gwt_user_client_Command_2V(new com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_ProxyPlaceAbstract$3$1__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_2V(this, presenter, this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_val$request3, this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_val$updateBrowserUrl4));
}
;
_.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_val$updateBrowserUrl4 = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1ProxyPlaceAbstract$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ProxyPlaceAbstract/3', 171);
function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_ProxyPlaceAbstract$3$1__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_2V(this$1, val$presenter, val$request, val$updateBrowserUrl){
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$11 = this$1;
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$presenter2 = val$presenter;
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$request3 = val$request;
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$updateBrowserUrl4 = val$updateBrowserUrl;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(172, 1, {}, com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_ProxyPlaceAbstract$3$1__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_2V);
_.execute__V = function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_execute__V(){
  var originalRequest;
  originalRequest = com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$getCurrentPlaceRequest__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$11.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_this$01.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager);
  originalRequest == com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$getCurrentPlaceRequest__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$11.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_this$01.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager) && com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$updateHistory__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2ZV(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$11.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_this$01.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager, this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$request3, this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$updateBrowserUrl4);
  com_gwtplatform_mvp_client_proxy_NavigationEvent_$clinit__V();
  com_gwtplatform_mvp_client_proxy_PlaceManagerImpl_$fireEvent__Lcom_gwtplatform_mvp_client_proxy_PlaceManagerImpl_2Lcom_google_gwt_event_shared_GwtEvent_2V(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$11.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_this$01.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager, new com_gwtplatform_mvp_client_proxy_NavigationEvent_NavigationEvent__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2V);
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$manualReveal__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_client_Presenter_2V(this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_this$11.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3_this$01, this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$presenter2);
}
;
_.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$3$1_val$updateBrowserUrl4 = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1ProxyPlaceAbstract$3$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ProxyPlaceAbstract/3/1', 172);
function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_$bind__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_2V(this$static){
  if (this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_wasBound) {
    com_gwtplatform_mvp_client_HandlerContainerImpl_$bind__Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2V(this$static);
    com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$bind__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2Lcom_google_web_bindery_event_shared_EventBus_2V(this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_this$01, this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_this$01.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_placeManager, this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_this$01.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_eventBus);
  }
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_$registerHandler__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(this$static, handlerRegistration){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_gwtplatform_mvp_client_HandlerContainerImpl_handlerRegistrations, handlerRegistration);
  this$static.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_wasBound = true;
}

function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_ProxyPlaceAbstract$ProxyHandlerContainer__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2V(this$0){
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_this$01 = this$0;
  com_gwtplatform_mvp_client_HandlerContainerImpl_HandlerContainerImpl__ZV.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(168, 77, {}, com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_ProxyPlaceAbstract$ProxyHandlerContainer__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2V);
_.bind__V = function com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_bind__V(){
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_$bind__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_2V(this);
}
;
_.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_wasBound = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1ProxyPlaceAbstract$ProxyHandlerContainer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ProxyPlaceAbstract/ProxyHandlerContainer', 168);
function com_gwtplatform_mvp_client_proxy_ProxyPlaceImpl_ProxyPlaceImpl__V(){
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_handlerContainer = new com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract$ProxyHandlerContainer_ProxyPlaceAbstract$ProxyHandlerContainer__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2V(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(100, 165, $intern_63);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1ProxyPlaceImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ProxyPlaceImpl', 100);
function com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_$clinit__V(){
  com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_type = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_ResetPresentersEvent__V(){
  com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(104, 319, {}, com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_ResetPresentersEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_gwtplatform_mvp_client_RootPresenter_$onResetPresenters__Lcom_gwtplatform_mvp_client_RootPresenter_2Lcom_gwtplatform_mvp_client_proxy_ResetPresentersEvent_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 331));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_type;
}
;
var com_gwtplatform_mvp_client_proxy_ResetPresentersEvent_type;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1ResetPresentersEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ResetPresentersEvent', 104);
function com_gwtplatform_mvp_client_proxy_RevealContentEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_RevealContentEvent_2Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler_2V(this$static, handler){
  com_gwtplatform_mvp_client_proxy_ProxyImpl_$getPresenter__Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2Lcom_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_2V(handler.com_gwtplatform_mvp_client_proxy_RevealContentHandler_proxy, new com_gwtplatform_mvp_client_proxy_RevealContentHandler$1_RevealContentHandler$1__Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler_2Lcom_google_web_bindery_event_shared_EventBus_2V(handler.com_gwtplatform_mvp_client_proxy_RevealContentHandler_eventBus, this$static));
}

function com_gwtplatform_mvp_client_proxy_RevealContentEvent_RevealContentEvent__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_gwtplatform_mvp_client_Presenter_2V(type_0, content){
  this.com_gwtplatform_mvp_client_proxy_RevealContentEvent_type = type_0;
  this.com_gwtplatform_mvp_client_proxy_RevealContentEvent_content = content;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(257, 319, {}, com_gwtplatform_mvp_client_proxy_RevealContentEvent_RevealContentEvent__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_gwtplatform_mvp_client_Presenter_2V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_RevealContentEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_gwtplatform_mvp_client_proxy_RevealContentEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_RevealContentEvent_2Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 80));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_RevealContentEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return this.com_gwtplatform_mvp_client_proxy_RevealContentEvent_type;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1RevealContentEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'RevealContentEvent', 257);
function com_gwtplatform_mvp_client_proxy_RevealContentHandler_RevealContentHandler__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2V(eventBus, proxy){
  this.com_gwtplatform_mvp_client_proxy_RevealContentHandler_eventBus = eventBus;
  this.com_gwtplatform_mvp_client_proxy_RevealContentHandler_proxy = proxy;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(80, 1, {30:1, 80:1}, com_gwtplatform_mvp_client_proxy_RevealContentHandler_RevealContentHandler__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1RevealContentHandler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'RevealContentHandler', 80);
function com_gwtplatform_mvp_client_proxy_RevealContentHandler$1_RevealContentHandler$1__Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler_2Lcom_google_web_bindery_event_shared_EventBus_2V($anonymous0, val$revealContentEvent){
  this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1_val$revealContentEvent3 = val$revealContentEvent;
  com_gwtplatform_mvp_client_proxy_NotifyingAsyncCallback_NotifyingAsyncCallback__Lcom_google_web_bindery_event_shared_EventBus_2V.call(this, $anonymous0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(193, 101, {}, com_gwtplatform_mvp_client_proxy_RevealContentHandler$1_RevealContentHandler$1__Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler_2Lcom_google_web_bindery_event_shared_EventBus_2V);
_.success__Ljava_lang_Object_2V = function com_gwtplatform_mvp_client_proxy_RevealContentHandler$1_success__Ljava_lang_Object_2V(presenter){
  com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), new com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_RevealContentHandler$1$1__Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler$1_2V(presenter, this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1_val$revealContentEvent3));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1RevealContentHandler$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'RevealContentHandler/1', 193);
function com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_RevealContentHandler$1$1__Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler$1_2V(val$presenter, val$revealContentEvent){
  this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_val$presenter2 = val$presenter;
  this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_val$revealContentEvent3 = val$revealContentEvent;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(194, 1, {}, com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_RevealContentHandler$1$1__Lcom_gwtplatform_mvp_client_proxy_RevealContentHandler$1_2V);
_.execute__V = function com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_execute__V(){
  com_gwtplatform_mvp_client_Presenter_$forceReveal__Lcom_gwtplatform_mvp_client_Presenter_2V(this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_val$presenter2);
  this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_val$revealContentEvent3.com_gwtplatform_mvp_client_proxy_RevealContentEvent_type?com_gwtplatform_mvp_client_PresenterWidget_$setInSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_IsSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2ZV(this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_val$presenter2, this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_val$revealContentEvent3.com_gwtplatform_mvp_client_proxy_RevealContentEvent_type, this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_val$revealContentEvent3.com_gwtplatform_mvp_client_proxy_RevealContentEvent_content):com_gwtplatform_mvp_client_PresenterWidget_$setInSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Ljava_lang_Object_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_val$presenter2, this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_val$revealContentEvent3.com_gwtplatform_mvp_client_proxy_RevealContentEvent_type, this.com_gwtplatform_mvp_client_proxy_RevealContentHandler$1$1_val$revealContentEvent3.com_gwtplatform_mvp_client_proxy_RevealContentEvent_content);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1RevealContentHandler$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'RevealContentHandler/1/1', 194);
function com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_$clinit__V(){
  com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_RevealRootContentEvent_2Lcom_gwtplatform_mvp_client_proxy_RevealRootContentHandler_2V(this$static, handler){
  com_gwtplatform_mvp_client_RootPresenter$RootView_$setUsingRootLayoutPanel__Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2ZV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler.com_gwtplatform_mvp_client_PresenterWidget_view, 48), false);
  com_gwtplatform_mvp_client_PresenterWidget_$setInSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_IsSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2ZV(handler, (com_gwtplatform_mvp_client_RootPresenter_$clinit__V() , com_gwtplatform_mvp_client_RootPresenter_rootSlot), this$static.com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_content);
}

function com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_RevealRootContentEvent__Lcom_gwtplatform_mvp_client_Presenter_2V(content){
  com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_$clinit__V();
  this.com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_content = content;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(200, 319, {}, com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_RevealRootContentEvent__Lcom_gwtplatform_mvp_client_Presenter_2V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_RevealRootContentEvent_2Lcom_gwtplatform_mvp_client_proxy_RevealRootContentHandler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 332));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_TYPE;
}
;
var com_gwtplatform_mvp_client_proxy_RevealRootContentEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1RevealRootContentEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'RevealRootContentEvent', 200);
function com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_$clinit__V(){
  com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_2Lcom_gwtplatform_mvp_client_proxy_RevealRootLayoutContentHandler_2V(this$static, handler){
  com_gwtplatform_mvp_client_RootPresenter$RootView_$setUsingRootLayoutPanel__Lcom_gwtplatform_mvp_client_RootPresenter$RootView_2ZV(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler.com_gwtplatform_mvp_client_PresenterWidget_view, 48), true);
  com_gwtplatform_mvp_client_PresenterWidget_$setInSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_presenter_slots_IsSlot_2Lcom_gwtplatform_mvp_client_PresenterWidget_2ZV(handler, (com_gwtplatform_mvp_client_RootPresenter_$clinit__V() , com_gwtplatform_mvp_client_RootPresenter_rootSlot), this$static.com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_content);
}

function com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_RevealRootLayoutContentEvent__Lcom_gwtplatform_mvp_client_Presenter_2V(content){
  com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_$clinit__V();
  this.com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_content = content;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(201, 319, {}, com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_RevealRootLayoutContentEvent__Lcom_gwtplatform_mvp_client_Presenter_2V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_2Lcom_gwtplatform_mvp_client_proxy_RevealRootLayoutContentHandler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 333));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_TYPE;
}
;
var com_gwtplatform_mvp_client_proxy_RevealRootLayoutContentEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1RevealRootLayoutContentEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'RevealRootLayoutContentEvent', 201);
function com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_$clinit__V(){
  com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_2Lcom_gwtplatform_mvp_client_proxy_RevealRootPopupContentHandler_2V(this$static, handler){
  com_gwtplatform_mvp_client_PresenterWidget_$addToPopupSlot__Lcom_gwtplatform_mvp_client_PresenterWidget_2Lcom_gwtplatform_mvp_client_PresenterWidget_2V(handler, this$static.com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_content);
}

function com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_RevealRootPopupContentEvent__Lcom_gwtplatform_mvp_client_PresenterWidget_2V(content){
  com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_$clinit__V();
  this.com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_content = content;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(202, 319, {}, com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_RevealRootPopupContentEvent__Lcom_gwtplatform_mvp_client_PresenterWidget_2V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_$dispatch__Lcom_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_2Lcom_gwtplatform_mvp_client_proxy_RevealRootPopupContentHandler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 334));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_TYPE;
}
;
var com_gwtplatform_mvp_client_proxy_RevealRootPopupContentEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1RevealRootPopupContentEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'RevealRootPopupContentEvent', 202);
function com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2(this$static){
  var result;
  if (!this$static.com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_1annotation$$none$$) {
    result = new com_gwtplatform_mvp_client_proxy_DefaultPlaceManager_DefaultPlaceManager__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_shared_proxy_TokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_place_shared_PlaceHistoryHandler$Historian_2V(com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$__Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_web_bindery_event_shared_EventBus_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1web_1bindery_1event_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)), com_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_1annotation$$none$$__Lcom_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_shared_proxy_TokenFormatter_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1shared_1proxy__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)), com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$java$lang$String$_1annotation$$com$gwtplatform$mvp$client$annotations$DefaultPlace$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Ljava_lang_String_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)), com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$java$lang$String$_1annotation$$com$gwtplatform$mvp$client$annotations$ErrorPlace$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Ljava_lang_String_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)), com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$java$lang$String$_1annotation$$com$gwtplatform$mvp$client$annotations$UnauthorizedPlace$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Ljava_lang_String_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)), com_google_gwt_place_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$gwt$place$shared$PlaceHistoryHandler$Historian$_1annotation$$none$$__Lcom_google_gwt_place_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_gwt_place_shared_PlaceHistoryHandler$Historian_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1gwt_1place_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_gwt_place_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)));
    this$static.com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_1annotation$$none$$ = result;
  }
  return this$static.com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_1annotation$$none$$;
}

function com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(injector){
  this.com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector = injector;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(158, 1, {}, com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
_.com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_1annotation$$none$$ = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1client_1proxy_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, $intern_39, 158);
function com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$customEscape__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2(this$static, string){
  var builder, ch_0, hierarchyChar, i, len, paramChar, valueChar;
  builder = new java_lang_StringBuilder_StringBuilder__V;
  len = string.length;
  hierarchyChar = this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_hierarchySeparator.charCodeAt(0);
  paramChar = this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_paramSeparator.charCodeAt(0);
  valueChar = this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_valueSeparator.charCodeAt(0);
  for (i = 0; i < len; i++) {
    ch_0 = string.charCodeAt(i);
    ch_0 == 92?(builder.java_lang_AbstractStringBuilder_string += '\\3' , builder):ch_0 == hierarchyChar?(builder.java_lang_AbstractStringBuilder_string += '\\0' , builder):ch_0 == paramChar?(builder.java_lang_AbstractStringBuilder_string += '\\1' , builder):ch_0 == valueChar?(builder.java_lang_AbstractStringBuilder_string += '\\2' , builder):(builder.java_lang_AbstractStringBuilder_string += com_google_gwt_lang_Cast_charToString__CLjava_lang_String_2(ch_0) , builder);
  }
  return com_gwtplatform_common_client_ClientUrlUtils_$encodeQueryString__Lcom_gwtplatform_common_client_ClientUrlUtils_2Ljava_lang_String_2Ljava_lang_String_2(builder.java_lang_AbstractStringBuilder_string);
}

function com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$customUnescape__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2(this$static, string){
  var builder, ch_0, ch2, i, len;
  builder = new java_lang_StringBuilder_StringBuilder__V;
  len = string.length;
  i = 0;
  while (i < len - 1) {
    ch_0 = string.charCodeAt(i);
    if (ch_0 == 92) {
      ++i;
      ch2 = string.charCodeAt(i);
      ch2 == 48?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(builder, this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_hierarchySeparator):ch2 == 49?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(builder, this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_paramSeparator):ch2 == 50?java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(builder, this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_valueSeparator):ch2 == 51 && (builder.java_lang_AbstractStringBuilder_string += '\\' , builder);
    }
     else {
      builder.java_lang_AbstractStringBuilder_string += com_google_gwt_lang_Cast_charToString__CLjava_lang_String_2(ch_0);
    }
    ++i;
  }
  if (i == len - 1) {
    ch_0 = string.charCodeAt(i);
    if (ch_0 == 92) {
      throw new com_gwtplatform_mvp_shared_proxy_TokenFormatException_TokenFormatException__Ljava_lang_String_2V("Last character of string being unescaped cannot be '\\'.");
    }
    builder.java_lang_AbstractStringBuilder_string += com_google_gwt_lang_Cast_charToString__CLjava_lang_String_2(ch_0);
  }
  return builder.java_lang_AbstractStringBuilder_string;
}

function com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$placeTokenToUnescapedString__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Ljava_lang_String_2(this$static, placeRequest){
  var name_0, name$iterator, out, params, com_gwtplatform_mvp_shared_proxy_PlaceRequest_$getParameter__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_value_0;
  out = new java_lang_StringBuilder_StringBuilder__V;
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(out, com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$customEscape__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2(this$static, placeRequest.com_gwtplatform_mvp_shared_proxy_PlaceRequest_nameToken));
  params = placeRequest.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params?new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(placeRequest.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params):(java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1SET);
  if (params) {
    for (name$iterator = params.iterator__Ljava_util_Iterator_2(); name$iterator.hasNext__Z();) {
      name_0 = com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(name$iterator.next__Ljava_lang_Object_2());
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(out, this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_paramSeparator), com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$customEscape__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2(this$static, name_0)), this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_valueSeparator), com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$customEscape__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2(this$static, (com_gwtplatform_mvp_shared_proxy_PlaceRequest_$getParameter__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_value_0 = null , !!placeRequest.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params && (com_gwtplatform_mvp_shared_proxy_PlaceRequest_$getParameter__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_value_0 = com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_LinkedHashMap_$get__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(placeRequest.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params, name_0))) , com_gwtplatform_mvp_shared_proxy_PlaceRequest_$getParameter__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_value_0 == null && (com_gwtplatform_mvp_shared_proxy_PlaceRequest_$getParameter__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_value_0 = null) , com_gwtplatform_mvp_shared_proxy_PlaceRequest_$getParameter__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2_value_0)));
    }
  }
  return out.java_lang_AbstractStringBuilder_string;
}

function com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$toHistoryToken__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_util_List_2Ljava_lang_String_2(this$static, placeRequestHierarchy){
  var i, out;
  out = new java_lang_StringBuilder_StringBuilder__V;
  for (i = 0; i < placeRequestHierarchy.java_util_ArrayList_array.length; ++i) {
    i != 0 && java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(out, this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_hierarchySeparator);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(out, com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$placeTokenToUnescapedString__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Ljava_lang_String_2(this$static, (com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(i, placeRequestHierarchy.java_util_ArrayList_array.length) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(placeRequestHierarchy.java_util_ArrayList_array[i], 37))));
  }
  return out.java_lang_AbstractStringBuilder_string;
}

function com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$toPlaceRequestHierarchy__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Ljava_util_List_2(this$static, historyToken){
  var result, split_0, unescapedHistoryToken, unescapedPlaceToken, unescapedPlaceToken$index, unescapedPlaceToken$max, unescapedPlaceTokens, com_google_gwt_http_client_URL_decodeQueryStringImpl__Ljava_lang_String_2Ljava_lang_String_2_regexp_0;
  unescapedHistoryToken = (com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('encodedURLComponent', historyToken) , com_google_gwt_http_client_URL_decodeQueryStringImpl__Ljava_lang_String_2Ljava_lang_String_2_regexp_0 = /\+/g , decodeURIComponent(historyToken.replace(com_google_gwt_http_client_URL_decodeQueryStringImpl__Ljava_lang_String_2Ljava_lang_String_2_regexp_0, '%20')));
  split_0 = java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(unescapedHistoryToken, this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_hierarchySeparator);
  result = new java_util_ArrayList_ArrayList__V;
  if (split_0 == -1) {
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(result, com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$unescapedStringToPlaceRequest__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(this$static, unescapedHistoryToken));
  }
   else {
    unescapedPlaceTokens = java_lang_String_$split__Ljava_lang_String_2Ljava_lang_String_2I_3Ljava_lang_String_2(unescapedHistoryToken, this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_hierarchySeparator, 0);
    if (unescapedPlaceTokens.length == 0) {
      throw new com_gwtplatform_mvp_shared_proxy_TokenFormatException_TokenFormatException__Ljava_lang_String_2V('Bad parameter: nothing in the history token.');
    }
    for (unescapedPlaceToken$index = 0 , unescapedPlaceToken$max = unescapedPlaceTokens.length; unescapedPlaceToken$index < unescapedPlaceToken$max; ++unescapedPlaceToken$index) {
      unescapedPlaceToken = unescapedPlaceTokens[unescapedPlaceToken$index];
      if (!unescapedPlaceToken.length) {
        throw new com_gwtplatform_mvp_shared_proxy_TokenFormatException_TokenFormatException__Ljava_lang_String_2V("Bad parameter: Successive place tokens require a single '" + this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_hierarchySeparator + $intern_64);
      }
      java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(result, com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$unescapedStringToPlaceRequest__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(this$static, unescapedPlaceToken));
    }
  }
  return result;
}

function com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$unescapedStringToPlaceRequest__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(this$static, unescapedPlaceToken){
  var key, param, paramToken, paramToken$index, paramToken$max, paramTokens, paramsChunk, reqBuilder, split_0, value_0;
  split_0 = java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(unescapedPlaceToken, this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_paramSeparator);
  if (split_0 == 0) {
    throw new com_gwtplatform_mvp_shared_proxy_TokenFormatException_TokenFormatException__Ljava_lang_String_2V('Place history token is missing.');
  }
   else if (split_0 == -1) {
    return com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$build__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$nameToken__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Ljava_lang_String_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2(new com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_PlaceRequest$Builder__V, com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$customUnescape__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2(this$static, unescapedPlaceToken)));
  }
   else if (split_0 >= 0) {
    reqBuilder = com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$nameToken__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Ljava_lang_String_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2(new com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_PlaceRequest$Builder__V, com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$customUnescape__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2(this$static, unescapedPlaceToken.substr(0, split_0)));
    paramsChunk = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(unescapedPlaceToken, split_0 + 1, unescapedPlaceToken.length - (split_0 + 1));
    paramTokens = java_lang_String_$split__Ljava_lang_String_2Ljava_lang_String_2I_3Ljava_lang_String_2(paramsChunk, this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_paramSeparator, 0);
    for (paramToken$index = 0 , paramToken$max = paramTokens.length; paramToken$index < paramToken$max; ++paramToken$index) {
      paramToken = paramTokens[paramToken$index];
      if (!paramToken.length) {
        throw new com_gwtplatform_mvp_shared_proxy_TokenFormatException_TokenFormatException__Ljava_lang_String_2V("Bad parameter: Successive parameters require a single '" + this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_paramSeparator + $intern_64);
      }
      param = java_lang_String_$split__Ljava_lang_String_2Ljava_lang_String_2I_3Ljava_lang_String_2(paramToken, this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_valueSeparator, 0);
      if (param.length == 1) {
        if (java_lang_String_$charAt__Ljava_lang_String_2IC(paramToken, paramToken.length - 1) != this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_valueSeparator.charCodeAt(0)) {
          throw new com_gwtplatform_mvp_shared_proxy_TokenFormatException_TokenFormatException__Ljava_lang_String_2V($intern_65);
        }
      }
       else if (param.length == 2) {
        if (java_lang_String_$charAt__Ljava_lang_String_2IC(paramToken, paramToken.length - 1) == this$static.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_valueSeparator.charCodeAt(0)) {
          throw new com_gwtplatform_mvp_shared_proxy_TokenFormatException_TokenFormatException__Ljava_lang_String_2V($intern_65);
        }
      }
       else {
        throw new com_gwtplatform_mvp_shared_proxy_TokenFormatException_TokenFormatException__Ljava_lang_String_2V($intern_65);
      }
      key = com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$customUnescape__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2(this$static, param[0]);
      value_0 = param.length == 2?com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_$customUnescape__Lcom_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_2Ljava_lang_String_2Ljava_lang_String_2(this$static, param[1]):'';
      reqBuilder = (!reqBuilder.com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_params && (reqBuilder.com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_params = new java_util_LinkedHashMap_LinkedHashMap__V) , value_0 != null && java_util_LinkedHashMap_$put__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(reqBuilder.com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_params, key, value_0) , reqBuilder);
    }
    return new com_gwtplatform_mvp_shared_proxy_PlaceRequest_PlaceRequest__Ljava_lang_String_2Ljava_util_Map_2V(reqBuilder.com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_nameToken, reqBuilder.com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_params);
  }
  return null;
}

function com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_ParameterTokenFormatter__Lcom_gwtplatform_common_shared_UrlUtils_2V(){
  this.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_hierarchySeparator = '/';
  this.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_paramSeparator = ';';
  this.com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_valueSeparator = '=';
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(103, 1, {}, com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_ParameterTokenFormatter__Lcom_gwtplatform_common_shared_UrlUtils_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1shared_1proxy_1ParameterTokenFormatter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'ParameterTokenFormatter', 103);
function com_gwtplatform_mvp_shared_proxy_PlaceRequest_$matchesNameToken__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2Ljava_lang_String_2Z(this$static, nameToken){
  if (this$static.com_gwtplatform_mvp_shared_proxy_PlaceRequest_nameToken == null || nameToken == null) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.com_gwtplatform_mvp_shared_proxy_PlaceRequest_nameToken, nameToken);
}

function com_gwtplatform_mvp_shared_proxy_PlaceRequest_PlaceRequest__Ljava_lang_String_2Ljava_util_Map_2V(nameToken, params){
  this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_nameToken = nameToken;
  this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params = params;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(37, 1, {37:1}, com_gwtplatform_mvp_shared_proxy_PlaceRequest_PlaceRequest__Ljava_lang_String_2Ljava_util_Map_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_gwtplatform_mvp_shared_proxy_PlaceRequest_equals__Ljava_lang_Object_2Z(obj){
  var req;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 37)) {
    req = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 37);
    if (this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_nameToken == null || req.com_gwtplatform_mvp_shared_proxy_PlaceRequest_nameToken == null) {
      return false;
    }
    if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_nameToken, req.com_gwtplatform_mvp_shared_proxy_PlaceRequest_nameToken)) {
      return false;
    }
    return !this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params?!req.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params:java_util_AbstractMap_$equals__Ljava_util_AbstractMap_2Ljava_lang_Object_2Z(this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params, req.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params);
  }
  return false;
}
;
_.hashCode__I$ = function com_gwtplatform_mvp_shared_proxy_PlaceRequest_hashCode__I(){
  if (this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_nameToken == null) {
    throw new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V('Cannot compute hashcode of PlaceRequest with a null nameToken');
  }
  return 11 * (java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_nameToken) + (!this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params?0:java_util_Collections_hashCode__Ljava_lang_Iterable_2I(new java_util_LinkedHashMap$EntrySet_LinkedHashMap$EntrySet__Ljava_util_LinkedHashMap_2V(this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params))));
}
;
_.toString__Ljava_lang_String_2$ = function com_gwtplatform_mvp_shared_proxy_PlaceRequest_toString__Ljava_lang_String_2(){
  return 'PlaceRequest(nameToken=' + this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_nameToken + ', params=' + this.com_gwtplatform_mvp_shared_proxy_PlaceRequest_params + ')';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1shared_1proxy_1PlaceRequest_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'PlaceRequest', 37);
function com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$build__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest_2(this$static){
  return new com_gwtplatform_mvp_shared_proxy_PlaceRequest_PlaceRequest__Ljava_lang_String_2Ljava_util_Map_2V(this$static.com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_nameToken, this$static.com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_params);
}

function com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_$nameToken__Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2Ljava_lang_String_2Lcom_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_2(this$static, nameToken){
  this$static.com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_nameToken = nameToken;
  return this$static;
}

function com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_PlaceRequest$Builder__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(43, 1, {}, com_gwtplatform_mvp_shared_proxy_PlaceRequest$Builder_PlaceRequest$Builder__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1shared_1proxy_1PlaceRequest$Builder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'PlaceRequest/Builder', 43);
function com_gwtplatform_mvp_shared_proxy_TokenFormatException_TokenFormatException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(26, 11, {26:1, 3:1, 6:1}, com_gwtplatform_mvp_shared_proxy_TokenFormatException_TokenFormatException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1shared_1proxy_1TokenFormatException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, 'TokenFormatException', 26);
function com_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_1annotation$$none$$__Lcom_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_shared_proxy_TokenFormatter_2(this$static){
  var result;
  if (!this$static.com_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_1annotation$$none$$) {
    result = new com_gwtplatform_mvp_shared_proxy_ParameterTokenFormatter_ParameterTokenFormatter__Lcom_gwtplatform_common_shared_UrlUtils_2V(com_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$common$shared$UrlUtils$_1annotation$$none$$__Lcom_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_common_shared_UrlUtils_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1common_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_common_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)));
    this$static.com_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_1annotation$$none$$ = result;
  }
  return this$static.com_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_1annotation$$none$$;
}

function com_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(injector){
  this.com_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector = injector;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(161, 1, {}, com_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
_.com_gwtplatform_mvp_shared_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$gwtplatform$mvp$shared$proxy$TokenFormatter$_1annotation$$none$$ = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1gwtplatform_1mvp_1shared_1proxy_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_66, $intern_39, 161);
function com_projectname_project_client_application_ApplicationPresenter_$clinit__V(){
  com_projectname_project_client_application_ApplicationPresenter_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_gwtplatform_mvp_client_PresenterWidget_$clinit__V();
  com_projectname_project_client_application_ApplicationPresenter_SLOT_1MAIN = new com_gwtplatform_mvp_client_presenter_slots_NestedSlot_NestedSlot__V;
}

function com_projectname_project_client_application_ApplicationPresenter_ApplicationPresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_projectname_project_client_application_ApplicationPresenter$MyView_2Lcom_projectname_project_client_application_ApplicationPresenter$MyProxy_2V(eventBus, view, proxy){
  com_projectname_project_client_application_ApplicationPresenter_$clinit__V();
  com_gwtplatform_mvp_client_Presenter_Presenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_View_2Lcom_gwtplatform_mvp_client_proxy_Proxy_2Lcom_gwtplatform_mvp_client_Presenter$RevealType_2V.call(this, eventBus, view, proxy, (com_gwtplatform_mvp_client_Presenter$RevealType_$clinit__V() , com_gwtplatform_mvp_client_Presenter$RevealType_Root));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(154, 56, $intern_57, com_projectname_project_client_application_ApplicationPresenter_ApplicationPresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_projectname_project_client_application_ApplicationPresenter$MyView_2Lcom_projectname_project_client_application_ApplicationPresenter$MyProxy_2V);
var com_projectname_project_client_application_ApplicationPresenter_SLOT_1MAIN;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1ApplicationPresenter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_67, 'ApplicationPresenter', 154);
function com_projectname_project_client_application_ApplicationPresenterMyProxyImpl_ApplicationPresenterMyProxyImpl__V(){
  com_gwtplatform_mvp_client_DelayedBindRegistry_$clinit__V();
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(com_gwtplatform_mvp_client_DelayedBindRegistry_delayedBindObjects, this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(164, 321, $intern_68, com_projectname_project_client_application_ApplicationPresenterMyProxyImpl_ApplicationPresenterMyProxyImpl__V);
_.delayedBind__Lcom_google_gwt_inject_client_Ginjector_2V = function com_projectname_project_client_application_ApplicationPresenterMyProxyImpl_delayedBind__Lcom_google_gwt_inject_client_Ginjector_2V(baseGinjector){
  var revealContentHandler;
  this.com_projectname_project_client_application_ApplicationPresenterMyProxyImpl_ginjector = baseGinjector;
  com_gwtplatform_mvp_client_proxy_ProxyImpl_$bind__Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2Lcom_google_web_bindery_event_shared_EventBus_2V(this, (com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client_1proxy__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this.com_projectname_project_client_application_ApplicationPresenterMyProxyImpl_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector)) , com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$__Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_web_bindery_event_shared_EventBus_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1web_1bindery_1event_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this.com_projectname_project_client_application_ApplicationPresenterMyProxyImpl_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector))));
  this.com_gwtplatform_mvp_client_proxy_ProxyImpl_presenter = new com_gwtplatform_common_client_StandardProvider_StandardProvider__Ljavax_inject_Provider_2V(com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$inject$Provider$com$projectname$project$client$application$ApplicationPresenter$$_1annotation$$none$$__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_inject_Provider_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1projectname_1project_1client_1application__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this.com_projectname_project_client_application_ApplicationPresenterMyProxyImpl_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector)));
  revealContentHandler = new com_gwtplatform_mvp_client_proxy_RevealContentHandler_RevealContentHandler__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2V(this.com_gwtplatform_mvp_client_proxy_ProxyImpl_eventBus, this);
  com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this.com_gwtplatform_mvp_client_proxy_ProxyImpl_eventBus, (com_projectname_project_client_application_ApplicationPresenter_$clinit__V() , com_projectname_project_client_application_ApplicationPresenter_SLOT_1MAIN), revealContentHandler);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1ApplicationPresenterMyProxyImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_67, 'ApplicationPresenterMyProxyImpl', 164);
function com_projectname_project_client_application_ApplicationView_ApplicationView__Lcom_projectname_project_client_application_ApplicationView$Binder_2V(){
  com_gwtplatform_mvp_client_ViewImpl_ViewImpl__V.call(this);
  com_gwtplatform_mvp_client_ViewImpl_$initWidget__Lcom_gwtplatform_mvp_client_ViewImpl_2Lcom_google_gwt_user_client_ui_IsWidget_2V(this, com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_$build_1f_1HTMLPanel1__Lcom_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HTMLPanel_2(new com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_ApplicationView_1BinderImpl$Widgets__Lcom_projectname_project_client_application_ApplicationView_1BinderImpl_2Lcom_projectname_project_client_application_ApplicationView_2V(this)));
  com_gwtplatform_mvp_client_ViewImpl_$internalBindSlot__Lcom_gwtplatform_mvp_client_ViewImpl_2Ljava_lang_Object_2Ljava_lang_Object_2V(this, (com_projectname_project_client_application_ApplicationPresenter_$clinit__V() , com_projectname_project_client_application_ApplicationPresenter_SLOT_1MAIN), this.com_projectname_project_client_application_ApplicationView_main);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(184, 65, $intern_58, com_projectname_project_client_application_ApplicationView_ApplicationView__Lcom_projectname_project_client_application_ApplicationView$Binder_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1ApplicationView_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_67, 'ApplicationView', 184);
function com_projectname_project_client_application_ApplicationView_1BinderImpl_ApplicationView_1BinderImpl__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(250, 1, {}, com_projectname_project_client_application_ApplicationView_1BinderImpl_ApplicationView_1BinderImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1ApplicationView_11BinderImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_67, 'ApplicationView_BinderImpl', 250);
function com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_$build_1f_1HTMLPanel1__Lcom_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HTMLPanel_2(this$static){
  var __attachRecord__, f_HTMLPanel1, com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_$build_1main__Lcom_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_SimplePanel_2_main_0;
  f_HTMLPanel1 = new com_google_gwt_user_client_ui_HTMLPanel_HTMLPanel__Ljava_lang_String_2V(com_projectname_project_client_application_ApplicationView_1BinderImpl_1TemplateImpl_$html1__Lcom_projectname_project_client_application_ApplicationView_1BinderImpl_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(this$static.com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_domId0).com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html);
  __attachRecord__ = com_google_gwt_uibinder_client_UiBinderUtil_attachToDom__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2((com_google_gwt_user_client_DOM_$clinit__V() , f_HTMLPanel1.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_uibinder_client_LazyDomElement_$get__Lcom_google_gwt_uibinder_client_LazyDomElement_2Lcom_google_gwt_dom_client_Element_2(this$static.com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_domId0Element);
  __attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origParent?com_google_gwt_dom_client_Node_$insertBefore__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(__attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origParent, __attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_element, __attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origSibling):com_google_gwt_uibinder_client_UiBinderUtil_orphan__Lcom_google_gwt_dom_client_Node_2V(__attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_element);
  com_google_gwt_user_client_ui_HTMLPanel_$addAndReplaceElement__Lcom_google_gwt_user_client_ui_HTMLPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(f_HTMLPanel1, (com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_$build_1main__Lcom_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_SimplePanel_2_main_0 = new com_google_gwt_user_client_ui_SimplePanel_SimplePanel__V , this$static.com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_owner.com_projectname_project_client_application_ApplicationView_main = com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_$build_1main__Lcom_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_SimplePanel_2_main_0 , com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_$build_1main__Lcom_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_SimplePanel_2_main_0), com_google_gwt_uibinder_client_LazyDomElement_$get__Lcom_google_gwt_uibinder_client_LazyDomElement_2Lcom_google_gwt_dom_client_Element_2(this$static.com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_domId0Element));
  return f_HTMLPanel1;
}

function com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_ApplicationView_1BinderImpl$Widgets__Lcom_projectname_project_client_application_ApplicationView_1BinderImpl_2Lcom_projectname_project_client_application_ApplicationView_2V(owner){
  this.com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_owner = owner;
  this.com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_domId0 = com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2($doc);
  this.com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_domId0Element = new com_google_gwt_uibinder_client_LazyDomElement_LazyDomElement__Ljava_lang_String_2V(this.com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_domId0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(251, 1, {}, com_projectname_project_client_application_ApplicationView_1BinderImpl$Widgets_ApplicationView_1BinderImpl$Widgets__Lcom_projectname_project_client_application_ApplicationView_1BinderImpl_2Lcom_projectname_project_client_application_ApplicationView_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1ApplicationView_11BinderImpl$Widgets_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_67, 'ApplicationView_BinderImpl/Widgets', 251);
function com_projectname_project_client_application_ApplicationView_1BinderImpl_1TemplateImpl_$html1__Lcom_projectname_project_client_application_ApplicationView_1BinderImpl_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(arg0){
  var sb;
  sb = new java_lang_StringBuilder_StringBuilder__V;
  sb.java_lang_AbstractStringBuilder_string += $intern_69;
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2(arg0));
  sb.java_lang_AbstractStringBuilder_string += $intern_70;
  return new com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(sb.java_lang_AbstractStringBuilder_string);
}

function com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$inject$Provider$com$projectname$project$client$application$ApplicationPresenter$$_1annotation$$none$$__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_inject_Provider_2(this$static){
  var result;
  result = new com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2V(this$static);
  return result;
}

function com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$ApplicationPresenter$MyProxy$_1annotation$$none$$__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_ApplicationPresenter$MyProxy_2(this$static){
  var created;
  if (!this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationPresenter$MyProxy$_1annotation$$none$$) {
    created = new com_projectname_project_client_application_ApplicationPresenterMyProxyImpl_ApplicationPresenterMyProxyImpl__V;
    this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationPresenter$MyProxy$_1annotation$$none$$ = created;
  }
  return this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationPresenter$MyProxy$_1annotation$$none$$;
}

function com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$ApplicationPresenter$_1annotation$$none$$__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_ApplicationPresenter_2(this$static){
  var result;
  if (!this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationPresenter$_1annotation$$none$$) {
    result = new com_projectname_project_client_application_ApplicationPresenter_ApplicationPresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_projectname_project_client_application_ApplicationPresenter$MyView_2Lcom_projectname_project_client_application_ApplicationPresenter$MyProxy_2V(com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$__Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_web_bindery_event_shared_EventBus_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1web_1bindery_1event_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)), com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$ApplicationView$_1annotation$$none$$__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_ApplicationView_2(this$static), com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$ApplicationPresenter$MyProxy$_1annotation$$none$$__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_ApplicationPresenter$MyProxy_2(this$static));
    com_gwtplatform_mvp_client_HandlerContainerImpl_$automaticBind__Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2Lcom_gwtplatform_mvp_client_AutobindDisable_2V((com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector) , result), com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$AutobindDisable$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_AutobindDisable_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)));
    this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationPresenter$_1annotation$$none$$ = result;
  }
  return this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationPresenter$_1annotation$$none$$;
}

function com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$ApplicationView$_1annotation$$none$$__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_ApplicationView_2(this$static){
  var result;
  if (!this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationView$_1annotation$$none$$) {
    result = new com_projectname_project_client_application_ApplicationView_ApplicationView__Lcom_projectname_project_client_application_ApplicationView$Binder_2V(new com_projectname_project_client_application_ApplicationView_1BinderImpl_ApplicationView_1BinderImpl__V);
    this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationView$_1annotation$$none$$ = result;
  }
  return this$static.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationView$_1annotation$$none$$;
}

function com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(injector){
  this.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector = injector;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(97, 1, {}, com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
_.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationPresenter$MyProxy$_1annotation$$none$$ = null;
_.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationPresenter$_1annotation$$none$$ = null;
_.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$ApplicationView$_1annotation$$none$$ = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_67, $intern_39, 97);
function com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2V(this$0){
  this.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(144, 1, {}, com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2V);
_.get__Ljava_lang_Object_2 = function com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_get__Ljava_lang_Object_2(){
  return com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$ApplicationPresenter$_1annotation$$none$$__Lcom_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_ApplicationPresenter_2(this.com_projectname_project_client_application_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_67, $intern_71, 144);
function com_projectname_project_client_application_home_HomePresenter_HomePresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_projectname_project_client_application_home_HomePresenter$MyView_2Lcom_projectname_project_client_application_home_HomePresenter$MyProxy_2V(eventBus, view, proxy){
  com_gwtplatform_mvp_client_PresenterWidget_$clinit__V();
  com_gwtplatform_mvp_client_Presenter_Presenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_View_2Lcom_gwtplatform_mvp_client_proxy_Proxy_2Lcom_google_gwt_event_shared_GwtEvent$Type_2V.call(this, eventBus, view, proxy, (com_projectname_project_client_application_ApplicationPresenter_$clinit__V() , com_projectname_project_client_application_ApplicationPresenter_SLOT_1MAIN));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(155, 56, $intern_57, com_projectname_project_client_application_home_HomePresenter_HomePresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_projectname_project_client_application_home_HomePresenter$MyView_2Lcom_projectname_project_client_application_home_HomePresenter$MyProxy_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1home_1HomePresenter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'HomePresenter', 155);
function com_projectname_project_client_application_home_HomePresenterMyProxyImpl_HomePresenterMyProxyImpl__V(){
  com_gwtplatform_mvp_client_proxy_ProxyPlaceImpl_ProxyPlaceImpl__V.call(this);
  com_gwtplatform_mvp_client_DelayedBindRegistry_$clinit__V();
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(com_gwtplatform_mvp_client_DelayedBindRegistry_delayedBindObjects, this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(166, 100, $intern_73, com_projectname_project_client_application_home_HomePresenterMyProxyImpl_HomePresenterMyProxyImpl__V);
_.delayedBind__Lcom_google_gwt_inject_client_Ginjector_2V = function com_projectname_project_client_application_home_HomePresenterMyProxyImpl_delayedBind__Lcom_google_gwt_inject_client_Ginjector_2V(baseGinjector){
  var nameToken, wrappedProxy;
  this.com_projectname_project_client_application_home_HomePresenterMyProxyImpl_ginjector = baseGinjector;
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$bind__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2Lcom_google_web_bindery_event_shared_EventBus_2V(this, com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client_1proxy__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this.com_projectname_project_client_application_home_HomePresenterMyProxyImpl_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector)), com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$__Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_web_bindery_event_shared_EventBus_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1web_1bindery_1event_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this.com_projectname_project_client_application_home_HomePresenterMyProxyImpl_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector)));
  wrappedProxy = new com_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_HomePresenterMyProxyImpl$WrappedProxy__V;
  com_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_$delayedBind__Lcom_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_2Lcom_google_gwt_inject_client_Ginjector_2V(wrappedProxy, this.com_projectname_project_client_application_home_HomePresenterMyProxyImpl_ginjector);
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_proxy = wrappedProxy;
  nameToken = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_12, 2, 4, ['/']);
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$setPlace__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_client_proxy_Place_2V(this, new com_gwtplatform_mvp_client_proxy_PlaceImpl_PlaceImpl___3Ljava_lang_String_2V(nameToken));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1home_1HomePresenterMyProxyImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'HomePresenterMyProxyImpl', 166);
function com_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_$delayedBind__Lcom_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_2Lcom_google_gwt_inject_client_Ginjector_2V(this$static, baseGinjector){
  this$static.com_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_ginjector = baseGinjector;
  com_gwtplatform_mvp_client_proxy_ProxyImpl_$bind__Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2Lcom_google_web_bindery_event_shared_EventBus_2V(this$static, (com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client_1proxy__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector)) , com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$__Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_web_bindery_event_shared_EventBus_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1web_1bindery_1event_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector))));
  this$static.com_gwtplatform_mvp_client_proxy_ProxyImpl_presenter = new com_gwtplatform_common_client_StandardProvider_StandardProvider__Ljavax_inject_Provider_2V(com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$inject$Provider$com$projectname$project$client$application$home$HomePresenter$$_1annotation$$none$$__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_inject_Provider_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1projectname_1project_1client_1application_1home__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector)));
}

function com_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_HomePresenterMyProxyImpl$WrappedProxy__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(167, 321, $intern_68, com_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_HomePresenterMyProxyImpl$WrappedProxy__V);
_.delayedBind__Lcom_google_gwt_inject_client_Ginjector_2V = function com_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_delayedBind__Lcom_google_gwt_inject_client_Ginjector_2V(baseGinjector){
  com_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_$delayedBind__Lcom_projectname_project_client_application_home_HomePresenterMyProxyImpl$WrappedProxy_2Lcom_google_gwt_inject_client_Ginjector_2V(this, baseGinjector);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1home_1HomePresenterMyProxyImpl$WrappedProxy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'HomePresenterMyProxyImpl/WrappedProxy', 167);
function com_projectname_project_client_application_home_HomeView_HomeView__Lcom_projectname_project_client_application_home_HomeView$Binder_2V(){
  com_gwtplatform_mvp_client_ViewImpl_ViewImpl__V.call(this);
  com_gwtplatform_mvp_client_ViewImpl_$initWidget__Lcom_gwtplatform_mvp_client_ViewImpl_2Lcom_google_gwt_user_client_ui_IsWidget_2V(this, com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_$build_1f_1HTMLPanel1__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HTMLPanel_2(new com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_HomeView_1BinderImpl$Widgets__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl_2Lcom_projectname_project_client_application_home_HomeView_2V(this)));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this.com_projectname_project_client_application_home_HomeView_startClickButton, new com_projectname_project_client_application_home_HomeView$1_HomeView$1__Lcom_projectname_project_client_application_home_HomeView_2V, (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(185, 65, $intern_58, com_projectname_project_client_application_home_HomeView_HomeView__Lcom_projectname_project_client_application_home_HomeView$Binder_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1home_1HomeView_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'HomeView', 185);
function com_projectname_project_client_application_home_HomeView$1_HomeView$1__Lcom_projectname_project_client_application_home_HomeView_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(186, 1, $intern_74, com_projectname_project_client_application_home_HomeView$1_HomeView$1__Lcom_projectname_project_client_application_home_HomeView_2V);
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_projectname_project_client_application_home_HomeView$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){
  $wnd.alert('Privet');
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1home_1HomeView$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'HomeView/1', 186);
function com_projectname_project_client_application_home_HomeView_1BinderImpl_HomeView_1BinderImpl__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(252, 1, {}, com_projectname_project_client_application_home_HomeView_1BinderImpl_HomeView_1BinderImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1home_1HomeView_11BinderImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'HomeView_BinderImpl', 252);
function com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_$build_1f_1HTMLPanel1__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HTMLPanel_2(this$static){
  var __attachRecord__, f_HTMLPanel1, com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_$build_1startClickButton__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_startClickButton_0;
  f_HTMLPanel1 = new com_google_gwt_user_client_ui_HTMLPanel_HTMLPanel__Ljava_lang_String_2V(com_projectname_project_client_application_home_HomeView_1BinderImpl_1TemplateImpl_$html1__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(this$static.com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_domId0).com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html);
  __attachRecord__ = com_google_gwt_uibinder_client_UiBinderUtil_attachToDom__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2((com_google_gwt_user_client_DOM_$clinit__V() , f_HTMLPanel1.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_uibinder_client_LazyDomElement_$get__Lcom_google_gwt_uibinder_client_LazyDomElement_2Lcom_google_gwt_dom_client_Element_2(this$static.com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_domId0Element);
  __attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origParent?com_google_gwt_dom_client_Node_$insertBefore__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(__attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origParent, __attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_element, __attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origSibling):com_google_gwt_uibinder_client_UiBinderUtil_orphan__Lcom_google_gwt_dom_client_Node_2V(__attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_element);
  com_google_gwt_user_client_ui_HTMLPanel_$addAndReplaceElement__Lcom_google_gwt_user_client_ui_HTMLPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(f_HTMLPanel1, (com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_$build_1startClickButton__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_startClickButton_0 = new com_google_gwt_user_client_ui_Button_Button__V , com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_$build_1startClickButton__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_startClickButton_0.com_google_gwt_user_client_ui_UIObject_element, 'button') , this$static.com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_owner.com_projectname_project_client_application_home_HomeView_startClickButton = com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_$build_1startClickButton__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_startClickButton_0 , com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_$build_1startClickButton__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_startClickButton_0), com_google_gwt_uibinder_client_LazyDomElement_$get__Lcom_google_gwt_uibinder_client_LazyDomElement_2Lcom_google_gwt_dom_client_Element_2(this$static.com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_domId0Element));
  return f_HTMLPanel1;
}

function com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_HomeView_1BinderImpl$Widgets__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl_2Lcom_projectname_project_client_application_home_HomeView_2V(owner){
  this.com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_owner = owner;
  this.com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_domId0 = com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2($doc);
  this.com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_domId0Element = new com_google_gwt_uibinder_client_LazyDomElement_LazyDomElement__Ljava_lang_String_2V(this.com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_domId0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(253, 1, {}, com_projectname_project_client_application_home_HomeView_1BinderImpl$Widgets_HomeView_1BinderImpl$Widgets__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl_2Lcom_projectname_project_client_application_home_HomeView_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1home_1HomeView_11BinderImpl$Widgets_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'HomeView_BinderImpl/Widgets', 253);
function com_projectname_project_client_application_home_HomeView_1BinderImpl_1TemplateImpl_$html1__Lcom_projectname_project_client_application_home_HomeView_1BinderImpl_1TemplateImpl_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(arg0){
  var sb;
  sb = new java_lang_StringBuilder_StringBuilder__V;
  sb.java_lang_AbstractStringBuilder_string += $intern_69;
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2(arg0));
  sb.java_lang_AbstractStringBuilder_string += "'><\/span><br> <p>Welcome to asshole!<\/p>";
  return new com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(sb.java_lang_AbstractStringBuilder_string);
}

function com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$inject$Provider$com$projectname$project$client$application$home$HomePresenter$$_1annotation$$none$$__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_inject_Provider_2(this$static){
  var result;
  result = new com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2V(this$static);
  return result;
}

function com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$home$HomePresenter$MyProxy$_1annotation$$none$$__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_home_HomePresenter$MyProxy_2(this$static){
  var created;
  if (!this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomePresenter$MyProxy$_1annotation$$none$$) {
    created = new com_projectname_project_client_application_home_HomePresenterMyProxyImpl_HomePresenterMyProxyImpl__V;
    this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomePresenter$MyProxy$_1annotation$$none$$ = created;
  }
  return this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomePresenter$MyProxy$_1annotation$$none$$;
}

function com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$home$HomePresenter$_1annotation$$none$$__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_home_HomePresenter_2(this$static){
  var result;
  if (!this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomePresenter$_1annotation$$none$$) {
    result = new com_projectname_project_client_application_home_HomePresenter_HomePresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_projectname_project_client_application_home_HomePresenter$MyView_2Lcom_projectname_project_client_application_home_HomePresenter$MyProxy_2V(com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$__Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_web_bindery_event_shared_EventBus_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1web_1bindery_1event_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)), com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$home$HomeView$_1annotation$$none$$__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_home_HomeView_2(this$static), com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$home$HomePresenter$MyProxy$_1annotation$$none$$__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_home_HomePresenter$MyProxy_2(this$static));
    com_gwtplatform_mvp_client_HandlerContainerImpl_$automaticBind__Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2Lcom_gwtplatform_mvp_client_AutobindDisable_2V((com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector) , result), com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$AutobindDisable$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_AutobindDisable_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)));
    this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomePresenter$_1annotation$$none$$ = result;
  }
  return this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomePresenter$_1annotation$$none$$;
}

function com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$home$HomeView$_1annotation$$none$$__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_home_HomeView_2(this$static){
  var result;
  if (!this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomeView$_1annotation$$none$$) {
    result = new com_projectname_project_client_application_home_HomeView_HomeView__Lcom_projectname_project_client_application_home_HomeView$Binder_2V(new com_projectname_project_client_application_home_HomeView_1BinderImpl_HomeView_1BinderImpl__V);
    this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomeView$_1annotation$$none$$ = result;
  }
  return this$static.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomeView$_1annotation$$none$$;
}

function com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(injector){
  this.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector = injector;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(98, 1, {}, com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
_.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomePresenter$MyProxy$_1annotation$$none$$ = null;
_.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomePresenter$_1annotation$$none$$ = null;
_.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$home$HomeView$_1annotation$$none$$ = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1home_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, $intern_39, 98);
function com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2V(this$0){
  this.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(145, 1, {}, com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2V);
_.get__Ljava_lang_Object_2 = function com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_get__Ljava_lang_Object_2(){
  return com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$home$HomePresenter$_1annotation$$none$$__Lcom_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_home_HomePresenter_2(this.com_projectname_project_client_application_home_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1home_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, $intern_71, 145);
function com_projectname_project_client_application_launcher_LauncherPresenter_$onLaunch__Lcom_projectname_project_client_application_launcher_LauncherPresenter_2Ljava_lang_String_2Ljava_lang_String_2V(launchCoordinates, launchPower){
  java_lang_String_$matches__Ljava_lang_String_2Ljava_lang_String_2Z(launchCoordinates, '[0-9]{3};[0-9]{3};[0-9]{3}') && java_lang_String_$matches__Ljava_lang_String_2Ljava_lang_String_2Z(launchPower, '[0-9]');
}

function com_projectname_project_client_application_launcher_LauncherPresenter_LauncherPresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_projectname_project_client_application_launcher_LauncherPresenter$MyView_2Lcom_projectname_project_client_application_launcher_LauncherPresenter$MyProxy_2V(eventBus, view, proxy){
  com_gwtplatform_mvp_client_PresenterWidget_$clinit__V();
  com_gwtplatform_mvp_client_Presenter_Presenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_gwtplatform_mvp_client_View_2Lcom_gwtplatform_mvp_client_proxy_Proxy_2Lcom_google_gwt_event_shared_GwtEvent$Type_2V.call(this, eventBus, view, proxy, (com_projectname_project_client_application_ApplicationPresenter_$clinit__V() , com_projectname_project_client_application_ApplicationPresenter_SLOT_1MAIN));
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.com_gwtplatform_mvp_client_PresenterWidget_view, 338);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(156, 56, $intern_57, com_projectname_project_client_application_launcher_LauncherPresenter_LauncherPresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_projectname_project_client_application_launcher_LauncherPresenter$MyView_2Lcom_projectname_project_client_application_launcher_LauncherPresenter$MyProxy_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1launcher_1LauncherPresenter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'LauncherPresenter', 156);
function com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl_LauncherPresenterMyProxyImpl__V(){
  com_gwtplatform_mvp_client_proxy_ProxyPlaceImpl_ProxyPlaceImpl__V.call(this);
  com_gwtplatform_mvp_client_DelayedBindRegistry_$clinit__V();
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(com_gwtplatform_mvp_client_DelayedBindRegistry_delayedBindObjects, this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(173, 100, $intern_73, com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl_LauncherPresenterMyProxyImpl__V);
_.delayedBind__Lcom_google_gwt_inject_client_Ginjector_2V = function com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl_delayedBind__Lcom_google_gwt_inject_client_Ginjector_2V(baseGinjector){
  var nameToken, wrappedProxy;
  this.com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl_ginjector = baseGinjector;
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$bind__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2Lcom_google_web_bindery_event_shared_EventBus_2V(this, com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client_1proxy__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this.com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector)), com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$__Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_web_bindery_event_shared_EventBus_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1web_1bindery_1event_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this.com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector)));
  wrappedProxy = new com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_LauncherPresenterMyProxyImpl$WrappedProxy__V;
  com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_$delayedBind__Lcom_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_2Lcom_google_gwt_inject_client_Ginjector_2V(wrappedProxy, this.com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl_ginjector);
  this.com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_proxy = wrappedProxy;
  nameToken = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_12, 2, 4, ['/']);
  com_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_$setPlace__Lcom_gwtplatform_mvp_client_proxy_ProxyPlaceAbstract_2Lcom_gwtplatform_mvp_client_proxy_Place_2V(this, new com_gwtplatform_mvp_client_proxy_PlaceImpl_PlaceImpl___3Ljava_lang_String_2V(nameToken));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1launcher_1LauncherPresenterMyProxyImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'LauncherPresenterMyProxyImpl', 173);
function com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_$delayedBind__Lcom_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_2Lcom_google_gwt_inject_client_Ginjector_2V(this$static, baseGinjector){
  this$static.com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_ginjector = baseGinjector;
  com_gwtplatform_mvp_client_proxy_ProxyImpl_$bind__Lcom_gwtplatform_mvp_client_proxy_ProxyImpl_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2Lcom_google_web_bindery_event_shared_EventBus_2V(this$static, (com_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$proxy$PlaceManager$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_proxy_PlaceManager_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client_1proxy__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_proxy_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector)) , com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$__Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_web_bindery_event_shared_EventBus_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1web_1bindery_1event_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector))));
  this$static.com_gwtplatform_mvp_client_proxy_ProxyImpl_presenter = new com_gwtplatform_common_client_StandardProvider_StandardProvider__Ljavax_inject_Provider_2V(com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$inject$Provider$com$projectname$project$client$application$launcher$LauncherPresenter$$_1annotation$$none$$__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_inject_Provider_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1projectname_1project_1client_1application_1launcher__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_ginjector.com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjectorImpl_fieldcom_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector)));
}

function com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_LauncherPresenterMyProxyImpl$WrappedProxy__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(174, 321, $intern_68, com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_LauncherPresenterMyProxyImpl$WrappedProxy__V);
_.delayedBind__Lcom_google_gwt_inject_client_Ginjector_2V = function com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_delayedBind__Lcom_google_gwt_inject_client_Ginjector_2V(baseGinjector){
  com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_$delayedBind__Lcom_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl$WrappedProxy_2Lcom_google_gwt_inject_client_Ginjector_2V(this, baseGinjector);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1launcher_1LauncherPresenterMyProxyImpl$WrappedProxy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'LauncherPresenterMyProxyImpl/WrappedProxy', 174);
function com_projectname_project_client_application_launcher_LauncherView_$onLaunch__Lcom_projectname_project_client_application_launcher_LauncherView_2Lcom_google_gwt_event_dom_client_ClickEvent_2V(this$static){
  com_projectname_project_client_application_launcher_LauncherPresenter_$onLaunch__Lcom_projectname_project_client_application_launcher_LauncherPresenter_2Ljava_lang_String_2Ljava_lang_String_2V(com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_projectname_project_client_application_launcher_LauncherView_launchCoordinates), 'value'), com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_projectname_project_client_application_launcher_LauncherView_launchPower), 'value'));
}

function com_projectname_project_client_application_launcher_LauncherView_LauncherView__Lcom_projectname_project_client_application_launcher_LauncherView$Binder_2V(){
  com_gwtplatform_mvp_client_ViewWithUiHandlers_$clinit__V();
  com_gwtplatform_mvp_client_ViewImpl_ViewImpl__V.call(this);
  com_gwtplatform_mvp_client_ViewImpl_$initWidget__Lcom_gwtplatform_mvp_client_ViewImpl_2Lcom_google_gwt_user_client_ui_IsWidget_2V(this, com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1f_1HTMLPanel1__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HTMLPanel_2(new com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_LauncherView_1BinderImpl$Widgets__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl_2Lcom_projectname_project_client_application_launcher_LauncherView_2V(this)));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(188, 187, {10:1, 338:1}, com_projectname_project_client_application_launcher_LauncherView_LauncherView__Lcom_projectname_project_client_application_launcher_LauncherView$Binder_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1launcher_1LauncherView_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'LauncherView', 188);
function com_projectname_project_client_application_launcher_LauncherView_1BinderImpl_LauncherView_1BinderImpl__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(254, 1, {}, com_projectname_project_client_application_launcher_LauncherView_1BinderImpl_LauncherView_1BinderImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1launcher_1LauncherView_11BinderImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'LauncherView_BinderImpl', 254);
function com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1f_1HTMLPanel1__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HTMLPanel_2(this$static){
  var __attachRecord__, f_HTMLPanel1, com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchCoordinates__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_launchCoordinates_0, com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchPower__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_launchPower_0, com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchButton__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_launchButton_0;
  f_HTMLPanel1 = new com_google_gwt_user_client_ui_HTMLPanel_HTMLPanel__Ljava_lang_String_2V(com_projectname_project_client_application_launcher_LauncherView_1BinderImpl_1TemplateImpl_$html1__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl_1TemplateImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId0, this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId1, this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId2).com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_html);
  __attachRecord__ = com_google_gwt_uibinder_client_UiBinderUtil_attachToDom__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2((com_google_gwt_user_client_DOM_$clinit__V() , f_HTMLPanel1.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_uibinder_client_LazyDomElement_$get__Lcom_google_gwt_uibinder_client_LazyDomElement_2Lcom_google_gwt_dom_client_Element_2(this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId0Element);
  com_google_gwt_uibinder_client_LazyDomElement_$get__Lcom_google_gwt_uibinder_client_LazyDomElement_2Lcom_google_gwt_dom_client_Element_2(this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId1Element);
  com_google_gwt_uibinder_client_LazyDomElement_$get__Lcom_google_gwt_uibinder_client_LazyDomElement_2Lcom_google_gwt_dom_client_Element_2(this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId2Element);
  __attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origParent?com_google_gwt_dom_client_Node_$insertBefore__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(__attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origParent, __attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_element, __attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_origSibling):com_google_gwt_uibinder_client_UiBinderUtil_orphan__Lcom_google_gwt_dom_client_Node_2V(__attachRecord__.com_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_element);
  com_google_gwt_user_client_ui_HTMLPanel_$addAndReplaceElement__Lcom_google_gwt_user_client_ui_HTMLPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(f_HTMLPanel1, (com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchCoordinates__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_launchCoordinates_0 = new com_google_gwt_user_client_ui_TextBox_TextBox__V , this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_owner.com_projectname_project_client_application_launcher_LauncherView_launchCoordinates = com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchCoordinates__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_launchCoordinates_0 , com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchCoordinates__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_launchCoordinates_0), com_google_gwt_uibinder_client_LazyDomElement_$get__Lcom_google_gwt_uibinder_client_LazyDomElement_2Lcom_google_gwt_dom_client_Element_2(this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId0Element));
  com_google_gwt_user_client_ui_HTMLPanel_$addAndReplaceElement__Lcom_google_gwt_user_client_ui_HTMLPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(f_HTMLPanel1, (com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchPower__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_launchPower_0 = new com_google_gwt_user_client_ui_TextBox_TextBox__V , this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_owner.com_projectname_project_client_application_launcher_LauncherView_launchPower = com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchPower__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_launchPower_0 , com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchPower__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_TextBox_2_launchPower_0), com_google_gwt_uibinder_client_LazyDomElement_$get__Lcom_google_gwt_uibinder_client_LazyDomElement_2Lcom_google_gwt_dom_client_Element_2(this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId1Element));
  com_google_gwt_user_client_ui_HTMLPanel_$addAndReplaceElement__Lcom_google_gwt_user_client_ui_HTMLPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(f_HTMLPanel1, (com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchButton__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_launchButton_0 = new com_google_gwt_user_client_ui_Button_Button__V , com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchButton__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_launchButton_0, this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE)) , com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_$build_1launchButton__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_launchButton_0), com_google_gwt_uibinder_client_LazyDomElement_$get__Lcom_google_gwt_uibinder_client_LazyDomElement_2Lcom_google_gwt_dom_client_Element_2(this$static.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId2Element));
  return f_HTMLPanel1;
}

function com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_LauncherView_1BinderImpl$Widgets__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl_2Lcom_projectname_project_client_application_launcher_LauncherView_2V(owner){
  this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets$1_LauncherView_1BinderImpl$Widgets$1__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2V(this);
  this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_owner = owner;
  this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId0 = com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2($doc);
  this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId1 = com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2($doc);
  this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId2 = com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2($doc);
  this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId0Element = new com_google_gwt_uibinder_client_LazyDomElement_LazyDomElement__Ljava_lang_String_2V(this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId0);
  this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId1Element = new com_google_gwt_uibinder_client_LazyDomElement_LazyDomElement__Ljava_lang_String_2V(this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId1);
  this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId2Element = new com_google_gwt_uibinder_client_LazyDomElement_LazyDomElement__Ljava_lang_String_2V(this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_domId2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(255, 1, {}, com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_LauncherView_1BinderImpl$Widgets__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl_2Lcom_projectname_project_client_application_launcher_LauncherView_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1launcher_1LauncherView_11BinderImpl$Widgets_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'LauncherView_BinderImpl/Widgets', 255);
function com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets$1_LauncherView_1BinderImpl$Widgets$1__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2V(this$1){
  this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets$1_this$11 = this$1;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(256, 1, $intern_74, com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets$1_LauncherView_1BinderImpl$Widgets$1__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_2V);
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){
  com_projectname_project_client_application_launcher_LauncherView_$onLaunch__Lcom_projectname_project_client_application_launcher_LauncherView_2Lcom_google_gwt_event_dom_client_ClickEvent_2V(this.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets$1_this$11.com_projectname_project_client_application_launcher_LauncherView_1BinderImpl$Widgets_owner);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1launcher_1LauncherView_11BinderImpl$Widgets$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, 'LauncherView_BinderImpl/Widgets/1', 256);
function com_projectname_project_client_application_launcher_LauncherView_1BinderImpl_1TemplateImpl_$html1__Lcom_projectname_project_client_application_launcher_LauncherView_1BinderImpl_1TemplateImpl_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_safehtml_shared_SafeHtml_2(arg0, arg1, arg2){
  var sb;
  sb = new java_lang_StringBuilder_StringBuilder__V;
  sb.java_lang_AbstractStringBuilder_string += $intern_69;
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2(arg0));
  sb.java_lang_AbstractStringBuilder_string += $intern_76;
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2(arg1));
  sb.java_lang_AbstractStringBuilder_string += $intern_76;
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_safehtml_shared_SafeHtmlUtils_htmlEscape__Ljava_lang_String_2Ljava_lang_String_2(arg2));
  sb.java_lang_AbstractStringBuilder_string += $intern_70;
  return new com_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml__Ljava_lang_String_2V(sb.java_lang_AbstractStringBuilder_string);
}

function com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$inject$Provider$com$projectname$project$client$application$launcher$LauncherPresenter$$_1annotation$$none$$__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_inject_Provider_2(this$static){
  var result;
  result = new com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2V(this$static);
  return result;
}

function com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$MyProxy$_1annotation$$none$$__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_launcher_LauncherPresenter$MyProxy_2(this$static){
  var created;
  if (!this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$MyProxy$_1annotation$$none$$) {
    created = new com_projectname_project_client_application_launcher_LauncherPresenterMyProxyImpl_LauncherPresenterMyProxyImpl__V;
    this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$MyProxy$_1annotation$$none$$ = created;
  }
  return this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$MyProxy$_1annotation$$none$$;
}

function com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$_1annotation$$none$$__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_launcher_LauncherPresenter_2(this$static){
  var result;
  if (!this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$_1annotation$$none$$) {
    result = new com_projectname_project_client_application_launcher_LauncherPresenter_LauncherPresenter__Lcom_google_web_bindery_event_shared_EventBus_2Lcom_projectname_project_client_application_launcher_LauncherPresenter$MyView_2Lcom_projectname_project_client_application_launcher_LauncherPresenter$MyProxy_2V(com_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$google$web$bindery$event$shared$EventBus$_1annotation$$none$$__Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_google_web_bindery_event_shared_EventBus_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1google_1web_1bindery_1event_1shared__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_google_web_bindery_event_shared_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)), com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$launcher$LauncherView$_1annotation$$none$$__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_launcher_LauncherView_2(this$static), com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$MyProxy$_1annotation$$none$$__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_launcher_LauncherPresenter$MyProxy_2(this$static));
    com_gwtplatform_mvp_client_HandlerContainerImpl_$automaticBind__Lcom_gwtplatform_mvp_client_HandlerContainerImpl_2Lcom_gwtplatform_mvp_client_AutobindDisable_2V((com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector) , result), com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$gwtplatform$mvp$client$AutobindDisable$_1annotation$$none$$__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_gwtplatform_mvp_client_AutobindDisable_2(com_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_$getFragment_1com_1gwtplatform_1mvp_1client__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2(this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector)));
    this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$_1annotation$$none$$ = result;
  }
  return this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$_1annotation$$none$$;
}

function com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$launcher$LauncherView$_1annotation$$none$$__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_launcher_LauncherView_2(this$static){
  var result;
  if (!this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherView$_1annotation$$none$$) {
    result = new com_projectname_project_client_application_launcher_LauncherView_LauncherView__Lcom_projectname_project_client_application_launcher_LauncherView$Binder_2V(new com_projectname_project_client_application_launcher_LauncherView_1BinderImpl_LauncherView_1BinderImpl__V);
    this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherView$_1annotation$$none$$ = result;
  }
  return this$static.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherView$_1annotation$$none$$;
}

function com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(injector){
  this.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_injector = injector;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(99, 1, {}, com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
_.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$MyProxy$_1annotation$$none$$ = null;
_.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$_1annotation$$none$$ = null;
_.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$application$launcher$LauncherView$_1annotation$$none$$ = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1launcher_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, $intern_39, 99);
function com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2V(this$0){
  this.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(146, 1, {}, com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2V);
_.get__Ljava_lang_Object_2 = function com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_get__Ljava_lang_Object_2(){
  return com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$application$launcher$LauncherPresenter$_1annotation$$none$$__Lcom_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_application_launcher_LauncherPresenter_2(this.com_projectname_project_client_application_launcher_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1application_1launcher_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_75, $intern_71, 146);
function com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_AppResources_1default_1InlineClientBundleGenerator__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(189, 1, {}, com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_AppResources_1default_1InlineClientBundleGenerator__V);
var com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_normalize, com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_style;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1resources_1AppResources_11default_11InlineClientBundleGenerator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'AppResources_default_InlineClientBundleGenerator', 189);
function com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$1_$ensureInjected__Lcom_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$1_2Z(this$static){
  if (!this$static.com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$1_injected) {
    this$static.com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$1_injected = true;
    com_google_gwt_dom_client_StyleInjector_$clinit__V();
    com_google_gwt_core_client_JsArrayString_$push__Lcom_google_gwt_core_client_JsArrayString_2Ljava_lang_String_2V(com_google_gwt_dom_client_StyleInjector_toInject, 'html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}[hidden],template{display:none}a{background:transparent}a:active,a:hover,button:active,button:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;top:-0.5em}sub{bottom:-0.25em}img{border:0}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible;text-transform:none}select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner{border:0;padding:0}input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button{height:auto}input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button{-webkit-appearance:none}input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}');
    com_google_gwt_dom_client_StyleInjector_schedule__V();
    return true;
  }
  return false;
}

function com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$1_AppResources_1default_1InlineClientBundleGenerator$1__Lcom_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(190, 1, {}, com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$1_AppResources_1default_1InlineClientBundleGenerator$1__Lcom_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_2V);
_.com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$1_injected = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1resources_1AppResources_11default_11InlineClientBundleGenerator$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'AppResources_default_InlineClientBundleGenerator/1', 190);
function com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$2_$ensureInjected__Lcom_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$2_2Z(this$static){
  if (!this$static.com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$2_injected) {
    this$static.com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$2_injected = true;
    com_google_gwt_dom_client_StyleInjector_$clinit__V();
    com_google_gwt_core_client_JsArrayString_$push__Lcom_google_gwt_core_client_JsArrayString_2Ljava_lang_String_2V(com_google_gwt_dom_client_StyleInjector_toInject, '');
    com_google_gwt_dom_client_StyleInjector_schedule__V();
    return true;
  }
  return false;
}

function com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$2_AppResources_1default_1InlineClientBundleGenerator$2__Lcom_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(191, 1, {}, com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$2_AppResources_1default_1InlineClientBundleGenerator$2__Lcom_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_2V);
_.com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$2_injected = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1resources_1AppResources_11default_11InlineClientBundleGenerator$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'AppResources_default_InlineClientBundleGenerator/2', 191);
function com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$normalizeInitializer_$clinit__V(){
  com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$normalizeInitializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_normalize = new com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$1_AppResources_1default_1InlineClientBundleGenerator$1__Lcom_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_2V;
}

function com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$styleInitializer_$clinit__V(){
  com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$styleInitializer_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_style = new com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$2_AppResources_1default_1InlineClientBundleGenerator$2__Lcom_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_2V;
}

function com_projectname_project_client_resources_ResourceLoader_ResourceLoader__Lcom_projectname_project_client_resources_AppResources_2V(){
  com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$1_$ensureInjected__Lcom_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$1_2Z((com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$normalizeInitializer_$clinit__V() , com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_normalize));
  com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$2_$ensureInjected__Lcom_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$2_2Z((com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator$styleInitializer_$clinit__V() , com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_style));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(157, 1, {}, com_projectname_project_client_resources_ResourceLoader_ResourceLoader__Lcom_projectname_project_client_resources_AppResources_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1resources_1ResourceLoader_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, 'ResourceLoader', 157);
function com_projectname_project_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_$get_1Key$type$com$projectname$project$client$resources$ResourceLoader$_1annotation$$none$$__Lcom_projectname_project_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_2Lcom_projectname_project_client_resources_ResourceLoader_2(this$static){
  var result;
  if (!this$static.com_projectname_project_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$resources$ResourceLoader$_1annotation$$none$$) {
    result = new com_projectname_project_client_resources_ResourceLoader_ResourceLoader__Lcom_projectname_project_client_resources_AppResources_2V(new com_projectname_project_client_resources_AppResources_1default_1InlineClientBundleGenerator_AppResources_1default_1InlineClientBundleGenerator__V);
    this$static.com_projectname_project_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$resources$ResourceLoader$_1annotation$$none$$ = result;
  }
  return this$static.com_projectname_project_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$resources$ResourceLoader$_1annotation$$none$$;
}

function com_projectname_project_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(147, 1, {}, com_projectname_project_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment__Lcom_gwtplatform_mvp_client_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_2V);
_.com_projectname_project_client_resources_com_1gwtplatform_1mvp_1client_1DesktopGinjector_1DesktopGinjectorGinjector_1fragment_singleton_1Key$type$com$projectname$project$client$resources$ResourceLoader$_1annotation$$none$$ = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1projectname_1project_1client_1resources_1com_11gwtplatform_11mvp_11client_11DesktopGinjector_11DesktopGinjectorGinjector_11fragment_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_77, $intern_39, 147);
function java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V(string){
  this.java_lang_AbstractStringBuilder_string = string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(72, 1, {});
_.toString__Ljava_lang_String_2$ = function java_lang_AbstractStringBuilder_toString__Ljava_lang_String_2(){
  return this.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AbstractStringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'AbstractStringBuilder', 72);
function java_lang_ArrayStoreException_ArrayStoreException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_ArrayStoreException_ArrayStoreException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(54, 11, $intern_8, java_lang_ArrayStoreException_ArrayStoreException__V, java_lang_ArrayStoreException_ArrayStoreException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayStoreException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'ArrayStoreException', 54);
function java_lang_Boolean_$clinit__V(){
  java_lang_Boolean_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new java_lang_Boolean_Boolean__ZV(false);
  java_lang_Boolean_TRUE = new java_lang_Boolean_Boolean__ZV(true);
}

function java_lang_Boolean_$compareTo__Ljava_lang_Boolean_2Ljava_lang_Boolean_2I(this$static, b){
  return java_lang_Boolean_compare__ZZI(this$static.java_lang_Boolean_value, b.java_lang_Boolean_value);
}

function java_lang_Boolean_Boolean__ZV(value_0){
  this.java_lang_Boolean_value = value_0;
}

function java_lang_Boolean_compare__ZZI(x_0, y_0){
  return x_0 == y_0?0:x_0?1:-1;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(38, 1, {3:1, 38:1, 5:1}, java_lang_Boolean_Boolean__ZV);
_.compareTo__Ljava_lang_Object_2I = function java_lang_Boolean_compareTo__Ljava_lang_Object_2I(b){
  return java_lang_Boolean_$compareTo__Ljava_lang_Boolean_2Ljava_lang_Boolean_2I(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(b, 38));
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Boolean_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 38) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 38).java_lang_Boolean_value == this.java_lang_Boolean_value;
}
;
_.hashCode__I$ = function java_lang_Boolean_hashCode__I(){
  return this.java_lang_Boolean_value?1231:1237;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Boolean_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Boolean_value;
}
;
_.java_lang_Boolean_value = false;
var java_lang_Boolean_TRUE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Boolean', 38);
function java_lang_ClassCastException_ClassCastException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(47, 11, $intern_8, java_lang_ClassCastException_ClassCastException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ClassCastException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'ClassCastException', 47);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(91, 1, {3:1, 91:1});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Number_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Number', 91);
function java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(41, 11, $intern_8, java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalArgumentException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'IllegalArgumentException', 41);
function java_lang_IllegalStateException_IllegalStateException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V(s){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(33, 11, $intern_8, java_lang_IllegalStateException_IllegalStateException__V, java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalStateException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'IllegalStateException', 33);
function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(36, 11, $intern_8, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'IndexOutOfBoundsException', 36);
function java_lang_Integer_$compareTo__Ljava_lang_Integer_2Ljava_lang_Integer_2I(this$static, b){
  return java_lang_Integer_compare__III(this$static.java_lang_Integer_value, b.java_lang_Integer_value);
}

function java_lang_Integer_Integer__IV(value_0){
  this.java_lang_Integer_value = value_0;
}

function java_lang_Integer_compare__III(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function java_lang_Integer_valueOf__ILjava_lang_Integer_2(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = (java_lang_Integer$BoxedValues_$clinit__V() , java_lang_Integer$BoxedValues_boxedValues)[rebase];
    !result && (result = java_lang_Integer$BoxedValues_boxedValues[rebase] = new java_lang_Integer_Integer__IV(i));
    return result;
  }
  return new java_lang_Integer_Integer__IV(i);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(39, 91, {3:1, 5:1, 39:1, 91:1}, java_lang_Integer_Integer__IV);
_.compareTo__Ljava_lang_Object_2I = function java_lang_Integer_compareTo__Ljava_lang_Object_2I(b){
  return java_lang_Integer_$compareTo__Ljava_lang_Integer_2Ljava_lang_Integer_2I(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(b, 39));
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Integer_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 39) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 39).java_lang_Integer_value == this.java_lang_Integer_value;
}
;
_.hashCode__I$ = function java_lang_Integer_hashCode__I(){
  return this.java_lang_Integer_value;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Integer_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Integer_value;
}
;
_.java_lang_Integer_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'Integer', 39);
function java_lang_Integer$BoxedValues_$clinit__V(){
  java_lang_Integer$BoxedValues_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Integer$BoxedValues_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit, $intern_12, 39, 256, 0, 1);
}

var java_lang_Integer$BoxedValues_boxedValues;
function java_lang_Math_max__III(y_0){
  return 5 > y_0?5:y_0;
}

function java_lang_Math_min__III(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function java_lang_NullPointerException_NullPointerException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(35, 11, $intern_8, java_lang_NullPointerException_NullPointerException__V, java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NullPointerException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'NullPointerException', 35);
function java_lang_String_$charAt__Ljava_lang_String_2IC(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other){
  return this$static === other;
}

function java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(this$static, str){
  return this$static.indexOf(str);
}

function java_lang_String_$matches__Ljava_lang_String_2Ljava_lang_String_2Z(this$static, regex){
  return (new RegExp('^(' + regex + ')$')).test(this$static);
}

function java_lang_String_$split__Ljava_lang_String_2Ljava_lang_String_2I_3Ljava_lang_String_2(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = java_lang_String__1_1createArray__I_3Ljava_lang_String_2(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function java_lang_String__1_1createArray__I_3Ljava_lang_String_2(numElements){
  return com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, $intern_12, 2, numElements, 4, 1);
}

function java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function java_lang_String_compareTo__Ljava_lang_String_2Ljava_lang_String_2I(thisStr, otherStr){
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function java_lang_String_compareTo_1Ljava_1lang_1Object_1_1I_1_1devirtual$__Ljava_lang_Comparable_2Ljava_lang_Object_2I(this$static, other){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?java_lang_String_compareTo__Ljava_lang_String_2Ljava_lang_String_2I(this$static, com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(other)):this$static.compareTo__Ljava_lang_Object_2I(other);
}

var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'String', 2);
function java_lang_String$HashCache_$clinit__V(){
  java_lang_String$HashCache_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_String$HashCache_back = {};
  java_lang_String$HashCache_front = {};
}

function java_lang_String$HashCache_compute__Ljava_lang_String_2I(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + java_lang_String_$charAt__Ljava_lang_String_2IC(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(str){
  java_lang_String$HashCache_$clinit__V();
  var key = ':' + str;
  var result = java_lang_String$HashCache_front[key];
  if (result != null) {
    return result;
  }
  result = java_lang_String$HashCache_back[key];
  result == null && (result = java_lang_String$HashCache_compute__Ljava_lang_String_2I(str));
  java_lang_String$HashCache_increment__V();
  return java_lang_String$HashCache_front[key] = result;
}

function java_lang_String$HashCache_increment__V(){
  if (java_lang_String$HashCache_count == 256) {
    java_lang_String$HashCache_back = java_lang_String$HashCache_front;
    java_lang_String$HashCache_front = {};
    java_lang_String$HashCache_count = 0;
  }
  ++java_lang_String$HashCache_count;
}

var java_lang_String$HashCache_back, java_lang_String$HashCache_count = 0, java_lang_String$HashCache_front;
function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += x_0;
  return this$static;
}

function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += x_0;
  return this$static;
}

function java_lang_StringBuilder_StringBuilder__V(){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, '');
}

function java_lang_StringBuilder_StringBuilder__IV(){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, '');
}

function java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(s){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(22, 72, {330:1}, java_lang_StringBuilder_StringBuilder__V, java_lang_StringBuilder_StringBuilder__IV, java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'StringBuilder', 22);
function java_lang_System_arraycopy__Ljava_lang_Object_2ILjava_lang_Object_2IIV(src_0, srcOfs, dest, destOfs, len){
  var destComp, destEnd, destType, destlen, srcComp, srcType, srclen;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(src_0, 'src');
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(dest, 'dest');
  srcType = java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(src_0);
  destType = java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(dest);
  com_google_gwt_core_shared_impl_InternalPreconditions_checkArrayType__ZLjava_lang_Object_2V((srcType.java_lang_Class_modifiers & 4) != 0, 'srcType is not an array');
  com_google_gwt_core_shared_impl_InternalPreconditions_checkArrayType__ZLjava_lang_Object_2V((destType.java_lang_Class_modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.java_lang_Class_componentType;
  destComp = destType.java_lang_Class_componentType;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkArrayType__ZLjava_lang_Object_2V((srcComp.java_lang_Class_modifiers & 1) != 0?srcComp == destComp:(destComp.java_lang_Class_modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  if (((srcComp.java_lang_Class_modifiers & 1) == 0 || (srcComp.java_lang_Class_modifiers & 4) != 0) && srcType != destType) {
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(src_0) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(dest) && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(dest, destEnd, src_0[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(dest, destOfs++, src_0[srcOfs++]);
      }
    }
  }
   else 
    len > 0 && com_google_gwt_lang_Array_nativeArraySplice__Ljava_lang_Object_2ILjava_lang_Object_2IIZV(src_0, srcOfs, dest, destOfs, len, true);
}

function java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(55, 11, $intern_8, java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1UnsupportedOperationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1, 'UnsupportedOperationException', 55);
function java_util_AbstractCollection_$addAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this$static, c){
  var changed, e, e$iterator;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  changed = false;
  for (e$iterator = java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(c.java_util_HashSet_map)); e$iterator.java_util_AbstractMap$1$1_val$outerIter2.hasNext__Z();) {
    e = java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2Ljava_lang_Object_2(e$iterator);
    changed = changed | java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, e);
  }
  return changed;
}

function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    e = iter.next__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(o) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(e) || o != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, e)) {
      remove && iter.remove__V();
      return true;
    }
  }
  return false;
}

function java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this$static, c){
  var e, e$iterator;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  for (e$iterator = c.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    if (!this$static.contains__Ljava_lang_Object_2Z(e)) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(this$static){
  var comma, e, e$iterator, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('[');
  comma = false;
  for (e$iterator = this$static.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    comma?(sb.java_lang_AbstractStringBuilder_string += ', ' , sb):(comma = true);
    sb.java_lang_AbstractStringBuilder_string += e === this$static?'(this Collection)':'' + e;
  }
  sb.java_lang_AbstractStringBuilder_string += ']';
  return sb.java_lang_AbstractStringBuilder_string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(314, 1, {});
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractCollection_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, false);
}
;
_.isEmpty__Z = function java_util_AbstractCollection_isEmpty__Z(){
  return this.size__I() == 0;
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractCollection_remove__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, true);
}
;
_.toArray___3Ljava_lang_Object_2 = function java_util_AbstractCollection_toArray___3Ljava_lang_Object_2(){
  return this.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_12, 1, this.size__I(), 3, 1));
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_AbstractCollection_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(a){
  var i, it, size_0;
  size_0 = this.size__I();
  a.length < size_0 && (a = com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(a, size_0));
  it = this.iterator__Ljava_util_Iterator_2();
  for (i = 0; i < size_0; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(a, i, it.next__Ljava_lang_Object_2());
  }
  a.length > size_0 && com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(a, size_0, null);
  return a;
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractCollection_toString__Ljava_lang_String_2(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractCollection', 314);
function java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey__Ljava_lang_Object_2();
  value_0 = entry.getValue__Ljava_lang_Object_2();
  ourValue = this$static.get__Ljava_lang_Object_2Ljava_lang_Object_2(key);
  if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(ourValue) || value_0 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey__Ljava_lang_Object_2Z(key)) {
    return false;
  }
  return true;
}

function java_util_AbstractMap_$equals__Ljava_util_AbstractMap_2Ljava_lang_Object_2Z(this$static, obj){
  var entry, entry$iterator, otherMap;
  if (obj === this$static) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 46)) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 46);
  if (this$static.size__I() != otherMap.size__I()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); entry$iterator.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.next__Ljava_lang_Object_2(), 12);
    if (!java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static, entry)) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(iter.next__Ljava_lang_Object_2(), 12);
    k = entry.getKey__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(key) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(k) || key != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, k)) {
      if (remove) {
        entry = new java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(entry.getKey__Ljava_lang_Object_2(), entry.getValue__Ljava_lang_Object_2());
        iter.remove__V();
      }
      return entry;
    }
  }
  return null;
}

function java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(entry){
  return !entry?null:entry.getValue__Ljava_lang_Object_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(313, 1, {46:1});
_.containsKey__Ljava_lang_Object_2Z = function java_util_AbstractMap_containsKey__Ljava_lang_Object_2Z(key){
  return !!java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key, false);
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMap_equals__Ljava_lang_Object_2Z(obj){
  return java_util_AbstractMap_$equals__Ljava_util_AbstractMap_2Ljava_lang_Object_2Z(this, obj);
}
;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key, false));
}
;
_.hashCode__I$ = function java_util_AbstractMap_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(this.entrySet__Ljava_util_Set_2());
}
;
_.isEmpty__Z = function java_util_AbstractMap_isEmpty__Z(){
  return this.size__I() == 0;
}
;
_.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Put not supported on this map');
}
;
_.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key, true));
}
;
_.size__I = function java_util_AbstractMap_size__I(){
  return this.entrySet__Ljava_util_Set_2().size__I();
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMap_toString__Ljava_lang_String_2(){
  var comma, entry, entry$iterator, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('{');
  comma = false;
  for (entry$iterator = this.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); entry$iterator.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.next__Ljava_lang_Object_2(), 12);
    comma?(sb.java_lang_AbstractStringBuilder_string += ', ' , sb):(comma = true);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getKey__Ljava_lang_Object_2()));
    sb.java_lang_AbstractStringBuilder_string += '=';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getValue__Ljava_lang_Object_2()));
  }
  sb.java_lang_AbstractStringBuilder_string += '}';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMap', 313);
function java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static){
  ++this$static.java_util_AbstractHashMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

function java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static){
  --this$static.java_util_AbstractHashMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

function java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this$static){
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V();
  this$static.java_util_AbstractHashMap_hashCodeMap = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2();
  this$static.java_util_AbstractHashMap_hashCodeMap.java_util_InternalJsHashCodeMap_host = this$static;
  this$static.java_util_AbstractHashMap_stringMap = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate.createJsStringMap__Ljava_util_InternalJsStringMap_2();
  this$static.java_util_AbstractHashMap_stringMap.java_util_InternalJsStringMap_host = this$static;
  this$static.java_util_AbstractHashMap_size = 0;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(73, 313, {46:1});
_.clear__V = function java_util_AbstractHashMap_clear__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}
;
_.containsKey__Ljava_lang_Object_2Z = function java_util_AbstractHashMap_containsKey__Ljava_lang_Object_2Z(key){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?key == null?!!java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, null):!(this.java_util_AbstractHashMap_stringMap.get__Ljava_lang_String_2Ljava_lang_Object_2(key) === undefined):!!java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, key);
}
;
_.entrySet__Ljava_util_Set_2 = function java_util_AbstractHashMap_entrySet__Ljava_util_Set_2(){
  return new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this);
}
;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?key == null?java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, null)):this.java_util_AbstractHashMap_stringMap.get__Ljava_lang_String_2Ljava_lang_Object_2(key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this.java_util_AbstractHashMap_hashCodeMap, key));
}
;
_.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?key == null?java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap_hashCodeMap, null, value_0):this.java_util_AbstractHashMap_stringMap.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0):java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap_hashCodeMap, key, value_0);
}
;
_.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?key == null?java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap_hashCodeMap, null):this.java_util_AbstractHashMap_stringMap.remove__Ljava_lang_String_2Ljava_lang_Object_2(key):java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap_hashCodeMap, key);
}
;
_.size__I = function java_util_AbstractHashMap_size__I(){
  return this.java_util_AbstractHashMap_size;
}
;
_.java_util_AbstractHashMap_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractHashMap', 73);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(315, 314, $intern_79);
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractSet_equals__Ljava_lang_Object_2Z(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 53)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 53);
  if (other.size__I() != this.size__I()) {
    return false;
  }
  return java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, other);
}
;
_.hashCode__I$ = function java_util_AbstractSet_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractSet', 315);
function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 12)) {
    return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static.java_util_AbstractHashMap$EntrySet_this$01, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 12));
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(120, 315, $intern_79, java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_remove__Ljava_lang_Object_2Z(entry){
  var key;
  if (java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, entry)) {
    key = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry, 12).getKey__Ljava_lang_Object_2();
    this.java_util_AbstractHashMap$EntrySet_this$01.remove__Ljava_lang_Object_2Ljava_lang_Object_2(key);
    return true;
  }
  return false;
}
;
_.size__I = function java_util_AbstractHashMap$EntrySet_size__I(){
  return this.java_util_AbstractHashMap$EntrySet_this$01.size__I();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractHashMap/EntrySet', 120);
function java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static){
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z()) {
    return true;
  }
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current != this$static.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries) {
    return false;
  }
  this$static.java_util_AbstractHashMap$EntrySetIterator_current = this$static.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_hashCodeMap.entries__Ljava_util_Iterator_2();
  return this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z();
}

function java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySetIterator_this$01 = this$0;
  this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries = this.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_stringMap.entries__Ljava_util_Iterator_2();
  this.java_util_AbstractHashMap$EntrySetIterator_current = this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries;
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(this, this$0._gwt_modCount);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(121, 1, {}, java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V);
_.hasNext__Z = function java_util_AbstractHashMap$EntrySetIterator_hasNext__Z(){
  return java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this);
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractHashMap$EntrySetIterator_next__Ljava_lang_Object_2(){
  return java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this.java_util_AbstractHashMap$EntrySetIterator_this$01, this) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this)) , this.java_util_AbstractHashMap$EntrySetIterator_last = this.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 12);
}
;
_.remove__V = function java_util_AbstractHashMap$EntrySetIterator_remove__V(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(!!this.java_util_AbstractHashMap$EntrySetIterator_last);
  java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this.java_util_AbstractHashMap$EntrySetIterator_this$01, this);
  this.java_util_AbstractHashMap$EntrySetIterator_last.remove__V();
  this.java_util_AbstractHashMap$EntrySetIterator_last = null;
  java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(this.java_util_AbstractHashMap$EntrySetIterator_this$01, this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractHashMap/EntrySetIterator', 121);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(316, 314, {25:1});
_.add__ILjava_lang_Object_2V = function java_util_AbstractList_add__ILjava_lang_Object_2V(index_0, element){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this list');
}
;
_.add__Ljava_lang_Object_2Z = function java_util_AbstractList_add__Ljava_lang_Object_2Z(obj){
  this.add__ILjava_lang_Object_2V(this.size__I(), obj);
  return true;
}
;
_.clear__V = function java_util_AbstractList_clear__V(){
  this.removeRange__IIV(0, this.size__I());
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractList_equals__Ljava_lang_Object_2Z(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 25)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 25);
  if (this.size__I() != other.size__I()) {
    return false;
  }
  iterOther = other.iterator__Ljava_util_Iterator_2();
  for (elem$iterator = this.iterator__Ljava_util_Iterator_2(); elem$iterator.hasNext__Z();) {
    elem = elem$iterator.next__Ljava_lang_Object_2();
    elemOther = iterOther.next__Ljava_lang_Object_2();
    if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elem) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elemOther) || elem != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I$ = function java_util_AbstractList_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_util_List_2I(this);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractList_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this);
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_AbstractList_listIterator__Ljava_util_ListIterator_2(){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, 0);
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_AbstractList_listIterator__ILjava_util_ListIterator_2(from){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, from);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_AbstractList_remove__ILjava_lang_Object_2(index_0){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Remove not supported on this list');
}
;
_.removeRange__IIV = function java_util_AbstractList_removeRange__IIV(fromIndex, endIndex){
  var i, iter;
  iter = new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    iter.next__Ljava_lang_Object_2();
    iter.remove__V();
  }
}
;
_.set__ILjava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractList_set__ILjava_lang_Object_2Ljava_lang_Object_2(index_0, o){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Set not supported on this list');
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractList', 316);
function java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$0){
  this.java_util_AbstractList$IteratorImpl_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(32, 1, {}, java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V);
_.hasNext__Z = function java_util_AbstractList$IteratorImpl_hasNext__Z(){
  return this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractList$IteratorImpl_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I()) , this.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last = this.java_util_AbstractList$IteratorImpl_i++);
}
;
_.remove__V = function java_util_AbstractList$IteratorImpl_remove__V(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(this.java_util_AbstractList$IteratorImpl_last != -1);
  this.java_util_AbstractList$IteratorImpl_this$01.remove__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last);
  this.java_util_AbstractList$IteratorImpl_i = this.java_util_AbstractList$IteratorImpl_last;
  this.java_util_AbstractList$IteratorImpl_last = -1;
}
;
_.java_util_AbstractList$IteratorImpl_i = 0;
_.java_util_AbstractList$IteratorImpl_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$IteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractList/IteratorImpl', 32);
function java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this$0, start_0){
  this.java_util_AbstractList$ListIteratorImpl_this$01 = this$0;
  java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V.call(this, this$0);
  com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(start_0, this$0.size__I());
  this.java_util_AbstractList$IteratorImpl_i = start_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(75, 32, {}, java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV);
_.hasPrevious__Z = function java_util_AbstractList$ListIteratorImpl_hasPrevious__Z(){
  return this.java_util_AbstractList$IteratorImpl_i > 0;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_AbstractList$ListIteratorImpl_previous__Ljava_lang_Object_2(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i > 0);
  return this.java_util_AbstractList$ListIteratorImpl_this$01.get__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last = --this.java_util_AbstractList$IteratorImpl_i);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$ListIteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractList/ListIteratorImpl', 75);
function java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(this$static){
  var outerIter;
  outerIter = this$static.java_util_AbstractMap$1_this$01.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2();
  return new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(outerIter);
}

function java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$0){
  this.java_util_AbstractMap$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(34, 315, $intern_79, java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_contains__Ljava_lang_Object_2Z(key){
  return this.java_util_AbstractMap$1_this$01.containsKey__Ljava_lang_Object_2Z(key);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractMap$1_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(this);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_remove__Ljava_lang_Object_2Z(key){
  if (this.java_util_AbstractMap$1_this$01.containsKey__Ljava_lang_Object_2Z(key)) {
    this.java_util_AbstractMap$1_this$01.remove__Ljava_lang_Object_2Ljava_lang_Object_2(key);
    return true;
  }
  return false;
}
;
_.size__I = function java_util_AbstractMap$1_size__I(){
  return this.java_util_AbstractMap$1_this$01.size__I();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMap/1', 34);
function java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2Ljava_lang_Object_2(this$static){
  var entry;
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_AbstractMap$1$1_val$outerIter2.next__Ljava_lang_Object_2(), 12);
  return entry.getKey__Ljava_lang_Object_2();
}

function java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(val$outerIter){
  this.java_util_AbstractMap$1$1_val$outerIter2 = val$outerIter;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(123, 1, {}, java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V);
_.hasNext__Z = function java_util_AbstractMap$1$1_hasNext__Z(){
  return this.java_util_AbstractMap$1$1_val$outerIter2.hasNext__Z();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractMap$1$1_next__Ljava_lang_Object_2(){
  return java_util_AbstractMap$1$1_$next__Ljava_util_AbstractMap$1$1_2Ljava_lang_Object_2(this);
}
;
_.remove__V = function java_util_AbstractMap$1$1_remove__V(){
  this.java_util_AbstractMap$1$1_val$outerIter2.remove__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMap/1/1', 123);
function java_util_AbstractMap$AbstractEntry_$setValue__Ljava_util_AbstractMap$AbstractEntry_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, value_0){
  var oldValue;
  oldValue = this$static.java_util_AbstractMap$AbstractEntry_value;
  this$static.java_util_AbstractMap$AbstractEntry_value = value_0;
  return oldValue;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(122, 1, $intern_80);
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMap$AbstractEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 12)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 12);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_key, entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_value, entry.getValue__Ljava_lang_Object_2());
}
;
_.getKey__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getKey__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_key;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_value;
}
;
_.hashCode__I$ = function java_util_AbstractMap$AbstractEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_key) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_value);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0){
  return java_util_AbstractMap$AbstractEntry_$setValue__Ljava_util_AbstractMap$AbstractEntry_2Ljava_lang_Object_2Ljava_lang_Object_2(this, value_0);
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMap$AbstractEntry_toString__Ljava_lang_String_2(){
  return this.java_util_AbstractMap$AbstractEntry_key + '=' + this.java_util_AbstractMap$AbstractEntry_value;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$AbstractEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMap/AbstractEntry', 122);
function java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0){
  this.java_util_AbstractMap$AbstractEntry_key = key;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(74, 122, $intern_80, java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$SimpleEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMap/SimpleEntry', 74);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(317, 1, $intern_80);
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 12)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 12);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getKey__Ljava_lang_Object_2(), entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getValue__Ljava_lang_Object_2(), entry.getValue__Ljava_lang_Object_2());
}
;
_.hashCode__I$ = function java_util_AbstractMapEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.getKey__Ljava_lang_Object_2()) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.getValue__Ljava_lang_Object_2());
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMapEntry_toString__Ljava_lang_String_2(){
  return this.getKey__Ljava_lang_Object_2() + '=' + this.getValue__Ljava_lang_Object_2();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMapEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'AbstractMapEntry', 317);
function java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this$static){
  this$static.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_12, 1, 0, 3, 1);
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_ArrayList_array, this$static.java_util_ArrayList_array.length, o);
  return true;
}

function java_util_ArrayList_$addAll__Ljava_util_ArrayList_2Ljava_util_Collection_2Z(this$static, c){
  var cArray, len;
  cArray = c.toArray___3Ljava_lang_Object_2();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  java_util_ArrayList_$insertAt__Ljava_util_ArrayList_2I_3Ljava_lang_Object_2V(this$static, this$static.java_util_ArrayList_array.length, cArray);
  return true;
}

function java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length);
  return this$static.java_util_ArrayList_array[index_0];
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, index_0){
  for (; index_0 < this$static.java_util_ArrayList_array.length; ++index_0) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, this$static.java_util_ArrayList_array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function java_util_ArrayList_$insertAt__Ljava_util_ArrayList_2I_3Ljava_lang_Object_2V(this$static, index_0, values){
  com_google_gwt_lang_Array_nativeArraySplice__Ljava_lang_Object_2ILjava_lang_Object_2IIZV(values, 0, this$static.java_util_ArrayList_array, index_0, values.length, false);
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  var previous;
  previous = (com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length) , this$static.java_util_ArrayList_array[index_0]);
  java_util_ArrayList_splice___3Ljava_lang_Object_2IIV(this$static.java_util_ArrayList_array, index_0, 1);
  return previous;
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  var i;
  i = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove__ILjava_lang_Object_2(i);
  return true;
}

function java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static, index_0, o){
  var previous;
  previous = (com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length) , this$static.java_util_ArrayList_array[index_0]);
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_ArrayList_array, index_0, o);
  return previous;
}

function java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static, out){
  var i, size_0;
  size_0 = this$static.java_util_ArrayList_array.length;
  out.length < size_0 && (out = com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(out, size_0));
  for (i = 0; i < size_0; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, i, this$static.java_util_ArrayList_array[i]);
  }
  out.length > size_0 && com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, size_0, null);
  return out;
}

function java_util_ArrayList_ArrayList__V(){
  java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this);
}

function java_util_ArrayList_ArrayList__Ljava_util_Collection_2V(c){
  java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this);
  java_util_ArrayList_$insertAt__Ljava_util_ArrayList_2I_3Ljava_lang_Object_2V(this, 0, c.toArray___3Ljava_lang_Object_2());
}

function java_util_ArrayList_splice___3Ljava_lang_Object_2IIV(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function java_util_ArrayList_splice___3Ljava_lang_Object_2IILjava_lang_Object_2V(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(20, 316, $intern_81, java_util_ArrayList_ArrayList__V, java_util_ArrayList_ArrayList__Ljava_util_Collection_2V);
_.add__ILjava_lang_Object_2V = function java_util_ArrayList_add__ILjava_lang_Object_2V(index_0, o){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(index_0, this.java_util_ArrayList_array.length);
  java_util_ArrayList_splice___3Ljava_lang_Object_2IILjava_lang_Object_2V(this.java_util_ArrayList_array, index_0, 0, o);
}
;
_.add__Ljava_lang_Object_2Z = function java_util_ArrayList_add__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.clear__V = function java_util_ArrayList_clear__V(){
  this.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_12, 1, 0, 3, 1);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_ArrayList_get__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.isEmpty__Z = function java_util_ArrayList_isEmpty__Z(){
  return this.java_util_ArrayList_array.length == 0;
}
;
_.remove__ILjava_lang_Object_2 = function java_util_ArrayList_remove__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_ArrayList_remove__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.removeRange__IIV = function java_util_ArrayList_removeRange__IIV(fromIndex, endIndex){
  var count;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalPositionIndexes__IIIV(fromIndex, endIndex, this.java_util_ArrayList_array.length);
  count = endIndex - fromIndex;
  java_util_ArrayList_splice___3Ljava_lang_Object_2IIV(this.java_util_ArrayList_array, fromIndex, count);
}
;
_.set__ILjava_lang_Object_2Ljava_lang_Object_2 = function java_util_ArrayList_set__ILjava_lang_Object_2Ljava_lang_Object_2(index_0, o){
  return java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this, index_0, o);
}
;
_.size__I = function java_util_ArrayList_size__I(){
  return this.java_util_ArrayList_array.length;
}
;
_.toArray___3Ljava_lang_Object_2 = function java_util_ArrayList_toArray___3Ljava_lang_Object_2(){
  return com_google_gwt_lang_Array_cloneSubrange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2(this.java_util_ArrayList_array, this.java_util_ArrayList_array.length);
}
;
_.toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2 = function java_util_ArrayList_toArray___3Ljava_lang_Object_2_3Ljava_lang_Object_2(out){
  return java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this, out);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'ArrayList', 20);
function java_util_Arrays_equals___3Ljava_lang_Object_2_3Ljava_lang_Object_2Z(array1, array2){
  var i, val1, val2;
  if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(array1) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(array2)) {
    return true;
  }
  if (array1 == null || array2 == null) {
    return false;
  }
  if (array1.length != array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; ++i) {
    val1 = array1[i];
    val2 = array2[i];
    if (!(val1 == val2 || val1 != null && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(val1, val2))) {
      return false;
    }
  }
  return true;
}

function java_util_Arrays_hashCode___3Ljava_lang_Object_2I(a){
  var e, e$index, e$max, hashCode;
  if (a == null) {
    return 0;
  }
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function java_util_Arrays_insertionSort___3Ljava_lang_Object_2IILjava_util_Comparator_2V(array, low, high){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && java_util_Comparators$1_$compare__Ljava_util_Comparators$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, j, array[j - 1]);
      com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, j - 1, t);
    }
  }
}

function java_util_Arrays_merge___3Ljava_lang_Object_2III_3Ljava_lang_Object_2IILjava_util_Comparator_2V(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && java_util_Comparators$1_$compare__Ljava_util_Comparators$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(src_0[srcLow], src_0[topIdx]) <= 0?com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(dest, destLow++, src_0[srcLow++]):com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(dest, destLow++, src_0[topIdx++]);
  }
}

function java_util_Arrays_mergeSort___3Ljava_lang_Object_2IILjava_util_Comparator_2V(x_0, fromIndex, toIndex){
  var temp, java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_newLength_0, java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_java_util_Arrays_getLengthFromRange__III_length_0_0, java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_copy_0;
  temp = (java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_newLength_0 = (java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_java_util_Arrays_getLengthFromRange__III_length_0_0 = toIndex - fromIndex , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_String_2_3Ljava_lang_Object_2V(java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_java_util_Arrays_getLengthFromRange__III_length_0_0 >= 0, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, 1), $intern_12, 1, 3, [java_lang_Integer_valueOf__ILjava_lang_Integer_2(fromIndex), java_lang_Integer_valueOf__ILjava_lang_Integer_2(toIndex)])) , java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_java_util_Arrays_getLengthFromRange__III_length_0_0) , java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_copy_0 = com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2(x_0, java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_newLength_0) , java_lang_System_arraycopy__Ljava_lang_Object_2ILjava_lang_Object_2IIV(x_0, fromIndex, java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_copy_0, 0, java_lang_Math_min__III(x_0.length - fromIndex, java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_newLength_0)) , java_util_Arrays_copyOfRange___3Ljava_lang_Object_2II_3Ljava_lang_Object_2_copy_0);
  java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2V(temp, x_0, fromIndex, toIndex, -fromIndex);
}

function java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2V(temp, array, low, high, ofs){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    java_util_Arrays_insertionSort___3Ljava_lang_Object_2IILjava_util_Comparator_2V(array, low, high);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2V(array, temp, tempLow, tempMid, -ofs);
  java_util_Arrays_mergeSort___3Ljava_lang_Object_2_3Ljava_lang_Object_2IIILjava_util_Comparator_2V(array, temp, tempMid, tempHigh, -ofs);
  if (java_util_Comparators$1_$compare__Ljava_util_Comparators$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, low++, temp[tempLow++]);
    }
    return;
  }
  java_util_Arrays_merge___3Ljava_lang_Object_2III_3Ljava_lang_Object_2IILjava_util_Comparator_2V(temp, tempLow, tempMid, tempHigh, array, low, high);
}

function java_util_Collections_$clinit__V(){
  java_util_Collections_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_Collections_EMPTY_1LIST = new java_util_Collections$EmptyList_Collections$EmptyList__V;
  java_util_Collections_EMPTY_1SET = new java_util_Collections$EmptySet_Collections$EmptySet__V;
}

function java_util_Collections_binarySearch__Ljava_util_List_2Ljava_lang_Object_2Ljava_util_Comparator_2I(sortedList, key){
  java_util_Collections_$clinit__V();
  var compareResult, high, low, mid, midVal;
  low = 0;
  high = sortedList.size__I() - 1;
  while (low <= high) {
    mid = low + (high - low >> 1);
    midVal = sortedList.get__ILjava_lang_Object_2(mid);
    compareResult = java_util_Comparators$1_$compare__Ljava_util_Comparators$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(midVal, key);
    if (compareResult < 0) {
      low = mid + 1;
    }
     else if (compareResult > 0) {
      high = mid - 1;
    }
     else {
      return mid;
    }
  }
  return -low - 1;
}

function java_util_Collections_hashCode__Ljava_lang_Iterable_2I(collection){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function java_util_Collections_hashCode__Ljava_util_List_2I(list){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = 31 * hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function java_util_Collections_replaceContents__Ljava_util_List_2_3Ljava_lang_Object_2V(target, x_0){
  var i, size_0;
  size_0 = target.size__I();
  for (i = 0; i < size_0; i++) {
    target.set__ILjava_lang_Object_2Ljava_lang_Object_2(i, x_0[i]);
  }
}

var java_util_Collections_EMPTY_1LIST, java_util_Collections_EMPTY_1SET;
function java_util_Collections$EmptyList_Collections$EmptyList__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(125, 316, $intern_81, java_util_Collections$EmptyList_Collections$EmptyList__V);
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$EmptyList_contains__Ljava_lang_Object_2Z(object){
  return false;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Collections$EmptyList_get__ILjava_lang_Object_2(location_0){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(location_0, 0);
  return null;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$EmptyList_iterator__Ljava_util_Iterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_Collections$EmptyList_listIterator__Ljava_util_ListIterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.size__I = function java_util_Collections$EmptyList_size__I(){
  return 0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'Collections/EmptyList', 125);
function java_util_Collections$EmptyListIterator_$clinit__V(){
  java_util_Collections$EmptyListIterator_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_Collections$EmptyListIterator_INSTANCE = new java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V;
}

function java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(126, 1, {}, java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V);
_.hasNext__Z = function java_util_Collections$EmptyListIterator_hasNext__Z(){
  return false;
}
;
_.hasPrevious__Z = function java_util_Collections$EmptyListIterator_hasPrevious__Z(){
  return false;
}
;
_.next__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_next__Ljava_lang_Object_2(){
  throw new java_util_NoSuchElementException_NoSuchElementException__V;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_previous__Ljava_lang_Object_2(){
  throw new java_util_NoSuchElementException_NoSuchElementException__V;
}
;
_.remove__V = function java_util_Collections$EmptyListIterator_remove__V(){
  throw new java_lang_IllegalStateException_IllegalStateException__V;
}
;
var java_util_Collections$EmptyListIterator_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyListIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'Collections/EmptyListIterator', 126);
function java_util_Collections$EmptySet_Collections$EmptySet__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(127, 315, {3:1, 53:1}, java_util_Collections$EmptySet_Collections$EmptySet__V);
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$EmptySet_contains__Ljava_lang_Object_2Z(object){
  return false;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$EmptySet_iterator__Ljava_util_Iterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.size__I = function java_util_Collections$EmptySet_size__I(){
  return 0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'Collections/EmptySet', 127);
function java_util_Comparators$1_$compare__Ljava_util_Comparators$1_2Ljava_lang_Object_2Ljava_lang_Object_2I(o1, o2){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(o1);
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(o2);
  return java_lang_String_compareTo_1Ljava_1lang_1Object_1_1I_1_1devirtual$__Ljava_lang_Comparable_2Ljava_lang_Object_2I(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o1, 5), o2);
}

function java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new java_util_ConcurrentModificationException_ConcurrentModificationException__V;
  }
}

function java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(iterator, host._gwt_modCount);
}

function java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(o, modCount){
  o._gwt_modCount = modCount;
}

function java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(map_0, modCount + 1);
}

function java_util_ConcurrentModificationException_ConcurrentModificationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(148, 11, $intern_8, java_util_ConcurrentModificationException_ConcurrentModificationException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ConcurrentModificationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'ConcurrentModificationException', 148);
function java_util_HashMap_HashMap__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}

function java_util_HashMap_HashMap__IV(ignored){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(ignored >= 0, 'Negative initial capacity');
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(true, 'Non-positive load factor');
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(23, 73, {3:1, 46:1}, java_util_HashMap_HashMap__V, java_util_HashMap_HashMap__IV);
_.package_private$java_util_AbstractHashMap$equals__Ljava_lang_Object_2Ljava_lang_Object_2Z = function java_util_HashMap_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value1) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value2) || value1 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}
;
_.package_private$java_util_AbstractHashMap$getHashCode__Ljava_lang_Object_2I = function java_util_HashMap_getHashCode__Ljava_lang_Object_2I(key){
  var hashCode;
  hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key);
  return ~~hashCode;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'HashMap', 23);
function java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  var old;
  old = this$static.java_util_HashSet_map.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(o, this$static);
  return old == null;
}

function java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return this$static.java_util_HashSet_map.containsKey__Ljava_lang_Object_2Z(o);
}

function java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return this$static.java_util_HashSet_map.remove__Ljava_lang_Object_2Ljava_lang_Object_2(o) != null;
}

function java_util_HashSet_HashSet__V(){
  this.java_util_HashSet_map = new java_util_HashMap_HashMap__V;
}

function java_util_HashSet_HashSet__Ljava_util_Collection_2V(c){
  this.java_util_HashSet_map = new java_util_HashMap_HashMap__IV(c.java_util_HashSet_map.size__I());
  java_util_AbstractCollection_$addAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, c);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(44, 315, {3:1, 53:1}, java_util_HashSet_HashSet__V, java_util_HashSet_HashSet__Ljava_util_Collection_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_HashSet_contains__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.isEmpty__Z = function java_util_HashSet_isEmpty__Z(){
  return this.java_util_HashSet_map.size__I() == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_HashSet_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this.java_util_HashSet_map));
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_HashSet_remove__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.size__I = function java_util_HashSet_size__I(){
  return this.java_util_HashSet_map.size__I();
}
;
_.toString__Ljava_lang_String_2$ = function java_util_HashSet_toString__Ljava_lang_String_2(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this.java_util_HashSet_map));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'HashSet', 44);
function java_util_InternalJsHashCodeMap_$ensureChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  var map_0 = this$static.java_util_InternalJsHashCodeMap_backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function java_util_InternalJsHashCodeMap_$getChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  return this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode];
}

function java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  return this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode] || [];
}

function java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, key == null?'0':'' + this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$getHashCode__Ljava_lang_Object_2I(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry;
    }
  }
  return null;
}

function java_util_InternalJsHashCodeMap_$keys__Ljava_util_InternalJsHashCodeMap_2_3Ljava_lang_String_2(this$static){
  return Object.getOwnPropertyNames(this$static.java_util_InternalJsHashCodeMap_backingMap);
}

function java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = java_util_InternalJsHashCodeMap_$ensureChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, key == null?'0':'' + this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$getHashCode__Ljava_lang_Object_2I(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry.setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0);
    }
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(chain, chain.length, new java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0));
  java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsHashCodeMap_host);
  return null;
}

function java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$getHashCode__Ljava_lang_Object_2I(key);
  chain = java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this$static.java_util_InternalJsHashCodeMap_host.package_private$java_util_AbstractHashMap$equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      chain.length == 1?(delete this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsHashCodeMap_host);
      return entry.getValue__Ljava_lang_Object_2();
    }
  }
  return null;
}

function java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V(){
  this.java_util_InternalJsHashCodeMap_backingMap = this.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(94, 1, {}, java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V);
_.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsHashCodeMap_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return Object.create(null);
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsHashCodeMap_entries__Ljava_util_Iterator_2(){
  return new java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsHashCodeMap', 94);
function java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this$static){
  if (this$static.java_util_InternalJsHashCodeMap$1_itemIndex < this$static.java_util_InternalJsHashCodeMap$1_chain.length) {
    return true;
  }
  if (this$static.java_util_InternalJsHashCodeMap$1_chainIndex < this$static.java_util_InternalJsHashCodeMap$1_keys.length - 1) {
    this$static.java_util_InternalJsHashCodeMap$1_chain = java_util_InternalJsHashCodeMap_$getChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static.java_util_InternalJsHashCodeMap$1_this$01, this$static.java_util_InternalJsHashCodeMap$1_keys[++this$static.java_util_InternalJsHashCodeMap$1_chainIndex]);
    this$static.java_util_InternalJsHashCodeMap$1_itemIndex = 0;
    return true;
  }
  return false;
}

function java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V(this$0){
  this.java_util_InternalJsHashCodeMap$1_this$01 = this$0;
  this.java_util_InternalJsHashCodeMap$1_keys = java_util_InternalJsHashCodeMap_$keys__Ljava_util_InternalJsHashCodeMap_2_3Ljava_lang_String_2(this.java_util_InternalJsHashCodeMap$1_this$01);
  this.java_util_InternalJsHashCodeMap$1_chain = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit, $intern_12, 12, 0, 0, 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(138, 1, {}, java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V);
_.hasNext__Z = function java_util_InternalJsHashCodeMap$1_hasNext__Z(){
  return java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this);
}
;
_.next__Ljava_lang_Object_2 = function java_util_InternalJsHashCodeMap$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this)) , this.java_util_InternalJsHashCodeMap$1_lastChain = this.java_util_InternalJsHashCodeMap$1_chain , this.java_util_InternalJsHashCodeMap$1_lastEntry = this.java_util_InternalJsHashCodeMap$1_chain[this.java_util_InternalJsHashCodeMap$1_itemIndex++] , this.java_util_InternalJsHashCodeMap$1_lastEntry;
}
;
_.remove__V = function java_util_InternalJsHashCodeMap$1_remove__V(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(!!this.java_util_InternalJsHashCodeMap$1_lastEntry);
  java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$1_this$01, this.java_util_InternalJsHashCodeMap$1_lastEntry.getKey__Ljava_lang_Object_2());
  com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$1_chain) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$1_lastChain) && this.java_util_InternalJsHashCodeMap$1_chain.length != 1 && --this.java_util_InternalJsHashCodeMap$1_itemIndex;
  this.java_util_InternalJsHashCodeMap$1_lastEntry = null;
}
;
_.java_util_InternalJsHashCodeMap$1_chainIndex = -1;
_.java_util_InternalJsHashCodeMap$1_itemIndex = 0;
_.java_util_InternalJsHashCodeMap$1_lastChain = null;
_.java_util_InternalJsHashCodeMap$1_lastEntry = null;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsHashCodeMap/1', 138);
function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V(){
  java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(136, 94, {}, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V);
_.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return {};
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_entries__Ljava_util_Iterator_2(){
  var list = this.private$java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$newEntryList__Ljava_util_ArrayList_2();
  var map_0 = this.java_util_InternalJsHashCodeMap_backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add__Ljava_lang_Object_2Z(array[i]);
      }
    }
  }
  return list.iterator__Ljava_util_Iterator_2();
}
;
_.private$java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$newEntryList__Ljava_util_ArrayList_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_newEntryList__Ljava_util_ArrayList_2(){
  return new java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 136);
function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V(this$1){
  this.java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_this$11 = this$1;
  java_util_ArrayList_ArrayList__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(137, 20, $intern_81, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V);
_.remove__ILjava_lang_Object_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_remove__ILjava_lang_Object_2(index_0){
  var java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
  return java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0), 12) , java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_this$11, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0.getKey__Ljava_lang_Object_2()) , java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 137);
function java_util_InternalJsMapFactory_InternalJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(133, 1, {}, java_util_InternalJsMapFactory_InternalJsMapFactory__V);
_.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2 = function java_util_InternalJsMapFactory_createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2(){
  return new java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V;
}
;
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap_InternalJsStringMap__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsMapFactory', 133);
function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V(){
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_createFactory__Ljava_util_InternalJsMapFactory_2();
}

function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_canHandleProto__Z(){
  var protoField = $intern_82;
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_createFactory__Ljava_util_InternalJsMapFactory_2(){
  var java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0;
  if (Object.create && Object.getOwnPropertyNames && java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_canHandleProto__Z()) {
    return (java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0 = Object.create(null) , java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0[$intern_82] = 42 , Object.getOwnPropertyNames(java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0).length == 0)?new java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V:new java_util_InternalJsMapFactory_InternalJsMapFactory__V;
  }
  return new java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V;
}

var java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate;
function java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(135, 133, {}, java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V);
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory$KeysWorkaroundJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 135);
function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(134, 133, {}, java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V);
_.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2 = function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2(){
  return new java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V;
}
;
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory$LegacyInternalJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsMapFactory/LegacyInternalJsMapFactory', 134);
function java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this$static){
  return Object.getOwnPropertyNames(this$static.java_util_InternalJsStringMap_backingMap);
}

function java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.java_util_InternalJsStringMap_backingMap[key];
  oldValue === undefined && java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsStringMap_host);
  java_util_InternalJsStringMap_$set__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  var value_0;
  value_0 = this$static.java_util_InternalJsStringMap_backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.java_util_InternalJsStringMap_backingMap[key];
    java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsStringMap_host);
  }
  return value_0;
}

function java_util_InternalJsStringMap_$set__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0){
  this$static.java_util_InternalJsStringMap_backingMap[key] = value_0;
}

function java_util_InternalJsStringMap_InternalJsStringMap__V(){
  this.java_util_InternalJsStringMap_backingMap = this.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(76, 1, {}, java_util_InternalJsStringMap_InternalJsStringMap__V);
_.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsStringMap_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return Object.create(null);
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsStringMap_entries__Ljava_util_Iterator_2(){
  var keys_0;
  keys_0 = this.keys___3Ljava_lang_String_2();
  return new java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V(this, keys_0);
}
;
_.get__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_get__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return this.java_util_InternalJsStringMap_backingMap[key];
}
;
_.keys___3Ljava_lang_String_2 = function java_util_InternalJsStringMap_keys___3Ljava_lang_String_2(){
  return java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this);
}
;
_.newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2 = function java_util_InternalJsStringMap_newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2(key){
  return new java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this, key);
}
;
_.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key, value_0);
}
;
_.remove__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_remove__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, key);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap', 76);
function java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V(this$0, val$keys){
  this.java_util_InternalJsStringMap$1_this$01 = this$0;
  this.java_util_InternalJsStringMap$1_val$keys2 = val$keys;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(131, 1, {}, java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V);
_.hasNext__Z = function java_util_InternalJsStringMap$1_hasNext__Z(){
  return this.java_util_InternalJsStringMap$1_i < this.java_util_InternalJsStringMap$1_val$keys2.length;
}
;
_.next__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_InternalJsStringMap$1_i < this.java_util_InternalJsStringMap$1_val$keys2.length) , new java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this.java_util_InternalJsStringMap$1_this$01, this.java_util_InternalJsStringMap$1_val$keys2[this.java_util_InternalJsStringMap$1_last = this.java_util_InternalJsStringMap$1_i++]);
}
;
_.remove__V = function java_util_InternalJsStringMap$1_remove__V(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(this.java_util_InternalJsStringMap$1_last != -1);
  this.java_util_InternalJsStringMap$1_this$01.remove__Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$1_val$keys2[this.java_util_InternalJsStringMap$1_last]);
  this.java_util_InternalJsStringMap$1_last = -1;
}
;
_.java_util_InternalJsStringMap$1_i = 0;
_.java_util_InternalJsStringMap$1_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap/1', 131);
function java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this$0, val$key){
  this.java_util_InternalJsStringMap$2_this$01 = this$0;
  this.java_util_InternalJsStringMap$2_val$key2 = val$key;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(93, 317, $intern_80, java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V);
_.getKey__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_getKey__Ljava_lang_Object_2(){
  return this.java_util_InternalJsStringMap$2_val$key2;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_getValue__Ljava_lang_Object_2(){
  return this.java_util_InternalJsStringMap$2_this$01.get__Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$2_val$key2);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return this.java_util_InternalJsStringMap$2_this$01.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$2_val$key2, object);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap/2', 93);
function java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V(){
  java_util_InternalJsStringMap_InternalJsStringMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(128, 76, {}, java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V);
_.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return {};
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_entries__Ljava_util_Iterator_2(){
  var list = this.private$java_util_InternalJsStringMap$InternalJsStringMapLegacy$newEntryList__Ljava_util_ArrayList_2();
  for (var key in this.java_util_InternalJsStringMap_backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2(key.substring(1));
      list.add__Ljava_lang_Object_2Z(entry);
    }
  }
  return list.iterator__Ljava_util_Iterator_2();
}
;
_.get__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_get__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return this.java_util_InternalJsStringMap_backingMap[':' + key];
}
;
_.private$java_util_InternalJsStringMap$InternalJsStringMapLegacy$newEntryList__Ljava_util_ArrayList_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_newEntryList__Ljava_util_ArrayList_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V(this);
}
;
_.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this, ':' + key, value_0);
}
;
_.remove__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_remove__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, ':' + key);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap/InternalJsStringMapLegacy', 128);
function java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V(this$1){
  this.java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_this$11 = this$1;
  java_util_ArrayList_ArrayList__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(130, 20, $intern_81, java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V);
_.remove__ILjava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_remove__ILjava_lang_Object_2(index_0){
  var java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
  return java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0), 12) , java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_this$11, ':' + com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0.getKey__Ljava_lang_Object_2())) , java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapLegacy$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap/InternalJsStringMapLegacy/1', 130);
function java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V(){
  java_util_InternalJsStringMap_InternalJsStringMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(129, 76, {}, java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V);
_.keys___3Ljava_lang_String_2 = function java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_keys___3Ljava_lang_String_2(){
  var keys_0;
  keys_0 = java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this);
  !(this.java_util_InternalJsStringMap_backingMap[$intern_82] === undefined) && (keys_0[keys_0.length] = $intern_82);
  return keys_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 129);
function java_util_LinkedHashMap_$get__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  var entry;
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_LinkedHashMap_map.get__Ljava_lang_Object_2Ljava_lang_Object_2(key), 45);
  if (entry) {
    java_util_LinkedHashMap_$recordAccess__Ljava_util_LinkedHashMap_2Ljava_util_LinkedHashMap$ChainEntry_2V(this$static, entry);
    return entry.java_util_AbstractMap$AbstractEntry_value;
  }
  return null;
}

function java_util_LinkedHashMap_$put__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var newEntry, old, oldValue;
  old = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_LinkedHashMap_map.get__Ljava_lang_Object_2Ljava_lang_Object_2(key), 45);
  if (!old) {
    newEntry = new java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, key, value_0);
    this$static.java_util_LinkedHashMap_map.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, newEntry);
    java_util_LinkedHashMap$ChainEntry_$addToEnd__Ljava_util_LinkedHashMap$ChainEntry_2V(newEntry);
    return null;
  }
   else {
    oldValue = java_util_AbstractMap$AbstractEntry_$setValue__Ljava_util_AbstractMap$AbstractEntry_2Ljava_lang_Object_2Ljava_lang_Object_2(old, value_0);
    java_util_LinkedHashMap_$recordAccess__Ljava_util_LinkedHashMap_2Ljava_util_LinkedHashMap$ChainEntry_2V(this$static, old);
    return oldValue;
  }
}

function java_util_LinkedHashMap_$recordAccess__Ljava_util_LinkedHashMap_2Ljava_util_LinkedHashMap$ChainEntry_2V(this$static, entry){
  if (this$static.java_util_LinkedHashMap_accessOrder) {
    java_util_LinkedHashMap$ChainEntry_$remove__Ljava_util_LinkedHashMap$ChainEntry_2V(entry);
    java_util_LinkedHashMap$ChainEntry_$addToEnd__Ljava_util_LinkedHashMap$ChainEntry_2V(entry);
  }
}

function java_util_LinkedHashMap_$remove__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  var entry;
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_LinkedHashMap_map.remove__Ljava_lang_Object_2Ljava_lang_Object_2(key), 45);
  if (entry) {
    java_util_LinkedHashMap$ChainEntry_$remove__Ljava_util_LinkedHashMap$ChainEntry_2V(entry);
    return entry.java_util_AbstractMap$AbstractEntry_value;
  }
  return null;
}

function java_util_LinkedHashMap_LinkedHashMap__V(){
  java_util_HashMap_HashMap__V.call(this);
  this.java_util_LinkedHashMap_head = new java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2V(this);
  this.java_util_LinkedHashMap_map = new java_util_HashMap_HashMap__V;
  this.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_prev = this.java_util_LinkedHashMap_head;
  this.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_next = this.java_util_LinkedHashMap_head;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(209, 23, {3:1, 46:1}, java_util_LinkedHashMap_LinkedHashMap__V);
_.clear__V = function java_util_LinkedHashMap_clear__V(){
  this.java_util_LinkedHashMap_map.clear__V();
  this.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_prev = this.java_util_LinkedHashMap_head;
  this.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_next = this.java_util_LinkedHashMap_head;
}
;
_.containsKey__Ljava_lang_Object_2Z = function java_util_LinkedHashMap_containsKey__Ljava_lang_Object_2Z(key){
  return this.java_util_LinkedHashMap_map.containsKey__Ljava_lang_Object_2Z(key);
}
;
_.entrySet__Ljava_util_Set_2 = function java_util_LinkedHashMap_entrySet__Ljava_util_Set_2(){
  return new java_util_LinkedHashMap$EntrySet_LinkedHashMap$EntrySet__Ljava_util_LinkedHashMap_2V(this);
}
;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_LinkedHashMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_LinkedHashMap_$get__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key);
}
;
_.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_LinkedHashMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_LinkedHashMap_$put__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key, value_0);
}
;
_.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_LinkedHashMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_LinkedHashMap_$remove__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key);
}
;
_.size__I = function java_util_LinkedHashMap_size__I(){
  return this.java_util_LinkedHashMap_map.size__I();
}
;
_.java_util_LinkedHashMap_accessOrder = false;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'LinkedHashMap', 209);
function java_util_LinkedHashMap$ChainEntry_$addToEnd__Ljava_util_LinkedHashMap$ChainEntry_2V(this$static){
  var tail;
  tail = this$static.java_util_LinkedHashMap$ChainEntry_this$01.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_prev;
  this$static.java_util_LinkedHashMap$ChainEntry_prev = tail;
  this$static.java_util_LinkedHashMap$ChainEntry_next = this$static.java_util_LinkedHashMap$ChainEntry_this$01.java_util_LinkedHashMap_head;
  tail.java_util_LinkedHashMap$ChainEntry_next = this$static.java_util_LinkedHashMap$ChainEntry_this$01.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_prev = this$static;
}

function java_util_LinkedHashMap$ChainEntry_$remove__Ljava_util_LinkedHashMap$ChainEntry_2V(this$static){
  this$static.java_util_LinkedHashMap$ChainEntry_next.java_util_LinkedHashMap$ChainEntry_prev = this$static.java_util_LinkedHashMap$ChainEntry_prev;
  this$static.java_util_LinkedHashMap$ChainEntry_prev.java_util_LinkedHashMap$ChainEntry_next = this$static.java_util_LinkedHashMap$ChainEntry_next;
  this$static.java_util_LinkedHashMap$ChainEntry_next = this$static.java_util_LinkedHashMap$ChainEntry_prev = null;
}

function java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2V(this$0){
  java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2V.call(this, this$0, null, null);
}

function java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$0, key, value_0){
  this.java_util_LinkedHashMap$ChainEntry_this$01 = this$0;
  java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V.call(this, key, value_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(45, 74, {45:1, 12:1}, java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2V, java_util_LinkedHashMap$ChainEntry_LinkedHashMap$ChainEntry__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedHashMap$ChainEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'LinkedHashMap/ChainEntry', 45);
function java_util_LinkedHashMap$EntrySet_$contains__Ljava_util_LinkedHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 12)) {
    return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static.java_util_LinkedHashMap$EntrySet_this$01, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 12));
  }
  return false;
}

function java_util_LinkedHashMap$EntrySet_LinkedHashMap$EntrySet__Ljava_util_LinkedHashMap_2V(this$0){
  this.java_util_LinkedHashMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(108, 315, $intern_79, java_util_LinkedHashMap$EntrySet_LinkedHashMap$EntrySet__Ljava_util_LinkedHashMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_LinkedHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_LinkedHashMap$EntrySet_$contains__Ljava_util_LinkedHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_LinkedHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_LinkedHashMap$EntrySet$EntryIterator_LinkedHashMap$EntrySet$EntryIterator__Ljava_util_LinkedHashMap$EntrySet_2V(this);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_LinkedHashMap$EntrySet_remove__Ljava_lang_Object_2Z(entry){
  var key;
  if (java_util_LinkedHashMap$EntrySet_$contains__Ljava_util_LinkedHashMap$EntrySet_2Ljava_lang_Object_2Z(this, entry)) {
    key = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry, 12).getKey__Ljava_lang_Object_2();
    java_util_LinkedHashMap_$remove__Ljava_util_LinkedHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_LinkedHashMap$EntrySet_this$01, key);
    return true;
  }
  return false;
}
;
_.size__I = function java_util_LinkedHashMap$EntrySet_size__I(){
  return this.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_map.size__I();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'LinkedHashMap/EntrySet', 108);
function java_util_LinkedHashMap$EntrySet$EntryIterator_LinkedHashMap$EntrySet$EntryIterator__Ljava_util_LinkedHashMap$EntrySet_2V(this$1){
  this.java_util_LinkedHashMap$EntrySet$EntryIterator_this$11 = this$1;
  this.java_util_LinkedHashMap$EntrySet$EntryIterator_next = this$1.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_head.java_util_LinkedHashMap$ChainEntry_next;
  java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$1.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_map, this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(210, 1, {}, java_util_LinkedHashMap$EntrySet$EntryIterator_LinkedHashMap$EntrySet$EntryIterator__Ljava_util_LinkedHashMap$EntrySet_2V);
_.hasNext__Z = function java_util_LinkedHashMap$EntrySet$EntryIterator_hasNext__Z(){
  return this.java_util_LinkedHashMap$EntrySet$EntryIterator_next != this.java_util_LinkedHashMap$EntrySet$EntryIterator_this$11.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_head;
}
;
_.next__Ljava_lang_Object_2 = function java_util_LinkedHashMap$EntrySet$EntryIterator_next__Ljava_lang_Object_2(){
  return java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this.java_util_LinkedHashMap$EntrySet$EntryIterator_this$11.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_map, this) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_LinkedHashMap$EntrySet$EntryIterator_next != this.java_util_LinkedHashMap$EntrySet$EntryIterator_this$11.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_head) , this.java_util_LinkedHashMap$EntrySet$EntryIterator_last = this.java_util_LinkedHashMap$EntrySet$EntryIterator_next , this.java_util_LinkedHashMap$EntrySet$EntryIterator_next = this.java_util_LinkedHashMap$EntrySet$EntryIterator_next.java_util_LinkedHashMap$ChainEntry_next , this.java_util_LinkedHashMap$EntrySet$EntryIterator_last;
}
;
_.remove__V = function java_util_LinkedHashMap$EntrySet$EntryIterator_remove__V(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(!!this.java_util_LinkedHashMap$EntrySet$EntryIterator_last);
  java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this.java_util_LinkedHashMap$EntrySet$EntryIterator_this$11.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_map, this);
  java_util_LinkedHashMap$ChainEntry_$remove__Ljava_util_LinkedHashMap$ChainEntry_2V(this.java_util_LinkedHashMap$EntrySet$EntryIterator_last);
  this.java_util_LinkedHashMap$EntrySet$EntryIterator_this$11.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_map.remove__Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_LinkedHashMap$EntrySet$EntryIterator_last.java_util_AbstractMap$AbstractEntry_key);
  java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(this.java_util_LinkedHashMap$EntrySet$EntryIterator_this$11.java_util_LinkedHashMap$EntrySet_this$01.java_util_LinkedHashMap_map, this);
  this.java_util_LinkedHashMap$EntrySet$EntryIterator_last = null;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedHashMap$EntrySet$EntryIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'LinkedHashMap/EntrySet/EntryIterator', 210);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit = java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_78, 'Map/Entry');
function java_util_NoSuchElementException_NoSuchElementException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(49, 11, $intern_8, java_util_NoSuchElementException_NoSuchElementException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1NoSuchElementException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_78, 'NoSuchElementException', 49);
function java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(a) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(b) || a != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b);
}

function java_util_Objects_hashCode__Ljava_lang_Object_2I(o){
  return o != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(o):0;
}

var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1CollapsedPropertyHolder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_83, 'CollapsedPropertyHolder', 302), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1JavaClassHierarchySetupUtil_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_83, 'JavaClassHierarchySetupUtil', 304), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1LongLibBase$LongEmul_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_83, 'LongLibBase/LongEmul', null), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1ModuleUtils_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_83, 'ModuleUtils', 307), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit = java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_78, 'Map/Entry');
var $entry = com_google_gwt_lang_ModuleUtils_registerEntry__Lcom_google_gwt_core_client_JavaScriptObject_2();
var gwtOnLoad = gwtOnLoad = com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
com_google_gwt_lang_ModuleUtils_addInitFunctions__V(com_google_gwt_lang_com_100046projectname_100046project_100046Project_1_1EntryMethodHolder_init__V);
com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V('permProps', [[['locale', 'default'], ['user.agent', $intern_52]]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=Project-0.js

